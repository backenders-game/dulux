<?php
namespace App\Http\Controllers\Frontend;
use Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Frontend\ColorRepository;
use App\Repositories\Frontend\ColorGroupRepository;
use App\Repositories\Frontend\SurfaceRepository;
use App\Repositories\Frontend\ProjectTypeRepository;
use App\Repositories\Frontend\FinishSurfaceRepository;
use App\Models\Color;
use App\Models\ColorGroup;
use Session;
use DB;
/*
+ Tìm màu sắc
*/
class FindColorController extends Controller
{

    public function __construct (
        ColorRepository $colorRepository,
        ColorGroupRepository $colorGroupRepository,
        ProjectTypeRepository $projectTypeRepository,
        SurfaceRepository $surfaceRepository,
        FinishSurfaceRepository $finishSurfaceRepository
    )
    {
        $this->colorRepository = $colorRepository;
        $this->colorGroupRepository = $colorGroupRepository;
        $this->surfaceRepository = $surfaceRepository;
        $this->projectTypeRepository = $projectTypeRepository;
        $this->finishSurfaceRepository = $finishSurfaceRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $surfaces = $this->surfaceRepository->all();
            $projectTypes = $this->projectTypeRepository->all();
            $finishSurfaces = $this->finishSurfaceRepository->all();
            $colorGroups = $this->colorGroupRepository->all();
            $isMixedByComp = 1;
            $projectTypeId = 0;
            $groupId = 1;
            $finishSurfaceId = 0;
            $surfaceIds = [];
            if (session()->has('color_group_id')) {
                $groupId = session('color_group_id', 1);
            }
            if (session()->has('color_finish_id')) {
                $finishSurfaceId = session('color_finish_id', 0);
            }
            if (session()->has('color_surface_ids')) {
                $surfaceIds = session('color_surface_ids', []);
            }
            if (session()->has('color_project_id')) {
                $projectTypeId = session('color_project_id', 0);
            }
            $isMixedByComp = 1;
            $isPopular = 1;

            $selectedClrGrp = ColorGroup::where('id', $groupId)->first();

            $colors = Color::leftJoin('color_projecttypes', 'color_projecttypes.color_id', '=', 'colors.id')
                ->leftJoin('color_surfaces', 'color_surfaces.color_id', '=', 'colors.id')
                ->leftJoin('product_colors', 'product_colors.color_id', '=', 'colors.id')
                ->leftJoin('products', 'products.id', '=', 'product_colors.product_id')
                ->when($groupId != 0 && $groupId != null, function ($q) use ($groupId) {
                    $q->where('colors.color_group_id', $groupId);
                })
                ->when($projectTypeId != 0 && $projectTypeId != null,
                    function ($q) use ($projectTypeId) {
                    $q->where('color_projecttypes.project_type_id', $projectTypeId);
                })
                ->when($finishSurfaceId != 0 && $finishSurfaceId != null, function ($q) use($finishSurfaceId) {
                    $q->where('products.finish_surface_id', $finishSurfaceId);
                })
                ->when($surfaceIds && count($surfaceIds) > 0, function ($q) use ($surfaceIds) {
                    $q->whereIn('color_surfaces.surface_id', $surfaceIds);
                })
                ->when($isMixedByComp, function ($q) {
                    $q->where('colors.mixed_by_computer', 1);
                }, function ($q) {
                    $q->where('colors.mixed_by_computer', 0);
                })
                ->when($isPopular && $isMixedByComp, function ($q) {
                    $q->where('colors.is_popular', 1);
                }, function ($q) {
                    $q->where('colors.is_popular', 0);
                })->select(DB::raw('colors.*'))->distinct()->get();

            $counter = Color::leftJoin('color_projecttypes', 'color_projecttypes.color_id', '=', 'colors.id')
                ->leftJoin('color_surfaces', 'color_surfaces.color_id', '=', 'colors.id')
                ->leftJoin('product_colors', 'product_colors.color_id', '=', 'colors.id')
                ->leftJoin('products', 'products.id', '=', 'product_colors.product_id')
                ->when($groupId != 0 && $groupId != null, function ($q) use ($groupId) {
                    $q->where('colors.color_group_id', $groupId);
                })
                ->when($projectTypeId != 0 && $projectTypeId != null,
                    function ($q) use ($projectTypeId) {
                    $q->where('color_projecttypes.project_type_id', $projectTypeId);
                })
                ->when($surfaceIds && count($surfaceIds) > 0, function ($q) use ($surfaceIds) {
                    $q->whereIn('color_surfaces.surface_id', $surfaceIds);
                })
                ->when($finishSurfaceId != 0 && $finishSurfaceId != null, function ($q) use($finishSurfaceId) {
                    $q->where('products.finish_surface_id', $finishSurfaceId);
                })
                ->when($isMixedByComp, function ($q) {
                    $q->where('colors.mixed_by_computer', 1);
                }, function ($q) {
                    $q->where('colors.mixed_by_computer', 0);
                })->select(DB::raw('colors.*'))->distinct()->count(DB::raw('colors.id'));

            return view('frontend.find_color.timmausac', [
                'surfaces' => $surfaces,
                'projectTypes' => $projectTypes,
                'finishSurfaces' => $finishSurfaces,
                'colorGroups' => $colorGroups->toArray(),
                'colors' => $colors,
                'numCounter' => $counter,
                'selectedClrGrp' => $selectedClrGrp,
                'projectTypeId' => $projectTypeId,
            ]);
        } catch (\Exception $e) {
            dd($e);
        }
    }

    public function findColor (Request $request) {
        try {
            if ($request->ajax()) {
                $inputs = $request->all();
                if ($inputs['filters']) {
                    $this->saveFilters($inputs['filters']);
                }
                $groupId = isset($inputs['filters']['group_id']) ? $inputs['filters']['group_id'] : 0;
                $finishSurfaceId = isset($inputs['filters']['finish_id']) ? $inputs['filters']['finish_id'] : 0;
                $surfaceIds = isset($inputs['filters']['surfaces_id']) ? $inputs['filters']['surfaces_id'] : 0;
                $projectTypeId = isset($inputs['filters']['project_id']) ? $inputs['filters']['project_id'] : 0;
                $getAll = isset($inputs['filters']['get_all']) ? $inputs['filters']['get_all'] : 0;
                $isMixedByComp = isset($inputs['filters']['is_mixed_by_comp']) ? $inputs['filters']['is_mixed_by_comp'] : 1;
                $isPopular = isset($inputs['filters']['is_popular']) ? $inputs['filters']['is_popular'] : null;

                $colors = Color::leftJoin('color_projecttypes', 'color_projecttypes.color_id', '=', 'colors.id')
                    ->leftJoin('color_surfaces', 'color_surfaces.color_id', '=', 'colors.id')
                    ->leftJoin('product_colors', 'product_colors.color_id', '=', 'colors.id')
                    ->leftJoin('products', 'products.id', '=', 'product_colors.product_id')
                    ->when($groupId != 0 && $groupId != null, function ($q) use ($groupId) {
                        $q->where('colors.color_group_id', $groupId);
                    })
                    ->when($projectTypeId != 0 && $projectTypeId != null,
                        function ($q) use ($projectTypeId) {
                        $q->where('color_projecttypes.project_type_id', $projectTypeId);
                    })
                    ->when($surfaceIds && count($surfaceIds) > 0, function ($q) use ($surfaceIds) {
                        $q->whereIn('color_surfaces.surface_id', $surfaceIds);
                    })
                    ->when($finishSurfaceId != 0 && $finishSurfaceId != null, function ($q) use($finishSurfaceId) {
                        $q->where('products.finish_surface_id', $finishSurfaceId);
                    })
                    ->when($isMixedByComp, function ($q) {
                        $q->where('colors.mixed_by_computer', 1);
                    }, function ($q) {
                        $q->where('colors.mixed_by_computer', 0);
                    })
                    ->when($isPopular && $isMixedByComp, function ($q) use($getAll) {
                        if ($getAll) {
                            $q->whereIn('colors.is_popular', [0, 1]);
                        } else {
                            $q->where('colors.is_popular', 1);
                        }
                    }, function ($q) use ($getAll) {
                        if ($getAll) {
                            $q->whereIn('colors.is_popular', [0, 1]);
                        } else {
                            $q->where('colors.is_popular', 0);
                        }
                    })->select(DB::raw('colors.*'))->distinct()->get();

                $counter = Color::leftJoin('color_projecttypes', 'color_projecttypes.color_id', '=', 'colors.id')
                    ->leftJoin('color_surfaces', 'color_surfaces.color_id', '=', 'colors.id')
                    ->leftJoin('product_colors', 'product_colors.color_id', '=', 'colors.id')
                    ->leftJoin('products', 'products.id', '=', 'product_colors.product_id')
                    ->when($groupId != 0 && $groupId != null, function ($q) use ($groupId) {
                        $q->where('colors.color_group_id', $groupId);
                    })
                    ->when($projectTypeId != 0 && $projectTypeId != null,
                        function ($q) use ($projectTypeId) {
                        $q->where('color_projecttypes.project_type_id', $projectTypeId);
                    })
                    ->when($surfaceIds && count($surfaceIds) > 0, function ($q) use ($surfaceIds) {
                        $q->whereIn('color_surfaces.surface_id', $surfaceIds);
                    })
                    ->when($finishSurfaceId != 0 && $finishSurfaceId != null, function ($q) use($finishSurfaceId) {
                        $q->where('products.finish_surface_id', $finishSurfaceId);
                    })
                    ->when($isMixedByComp, function ($q) {
                        $q->where('colors.mixed_by_computer', 1);
                    }, function ($q) {
                        $q->where('colors.mixed_by_computer', 0);
                    })->select(DB::raw('colors.*'))->distinct()->count(DB::raw('colors.id'));

                return Response::json([
                    'colors' => $colors,
                    'num_all_colors' => $counter,
                    'group_id' => $groupId,
                    'project_id' => $projectTypeId,
                    'surfaces_id' => $surfaceIds,
                    'finish_id' => $finishSurfaceId,
                    'mixed_by_Comp' => $isMixedByComp,
                    'is_popular' => $isPopular
                ]);
            }
        } catch (\Exception $e) {
            dd($e);
        }
    }

    private function saveFilters ($filters) {
        if (isset($filters['group_id']) && $filters['group_id'] != null)  {
            session(['color_group_id' => intval($filters['group_id'])]);
        }
        if (isset($filters['project_id']) && $filters['project_id'] != null) {
            session(['color_project_id' => intval($filters['project_id'])]);
        }
        if (isset($filters['finish_id']) && $filters['finish_id'] != null) {
            session(['color_finish_id' => intval($filters['finish_id'])]);
        }
        if (isset($filters['surfaces_id']) && $filters['surfaces_id'] != null && $filters['surfaces_id'] != []) {
            session(['color_surface_ids' => $filters['surfaces_id']]);
        }
    }

    public function clearFilters (Request $request) {
        $request->session()->forget([
            'color_project_id',
            'color_finish_id',
            'color_surface_ids'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
