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
use DB;
/*
+)Tìm màu sắc
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
        $surfaces = $this->surfaceRepository->all();
        $projectTypes = $this->projectTypeRepository->all();
        $finishSurfaces = $this->finishSurfaceRepository->all();
        $isMixedByComp = 1;

        return view('frontend.find_color.timmausac', [
            'surfaces' => $surfaces,
            'projectTypes' => $projectTypes,
            'finishSurfaces' => $finishSurfaces
        ]);
    }

    public function findColor (Request $request) {
        try {

            if ($request->ajax()) {
                $inputs = $request->all();
                $colors = [];
                $groupId = isset($inputs['filters']['group_id']) ? $inputs['filters']['group_id'] : 0;
                $finishSurfaceId = isset($inputs['filters']['finish_id']) ? $inputs['filters']['finish_id'] : 0;
                $surfaceIds = isset($inputs['filters']['surfaces_id']) ? $inputs['filters']['surfaces_id'] : 0;
                $projectTypeId = isset($inputs['filters']['project_id']) ? $inputs['filters']['project_id'] : 0;
                $isMixedByComp = isset($inputs['filters']['is_mixed_by_comp']) ? inputs['filters']['is_mixed_by_comp'] : 1;
                $isPopular = isset($inputs['filters']['is_popular']) ? $inputs['filters']['is_popular'] : 1;
                $query = Color::query();
                $colors = $query->leftJoin('color_projecttypes', 'color_projecttypes.color_id', '=', 'colors.id')
                    ->leftJoin('color_surfaces', 'color_surfaces.color_id', '=', 'colors.id')
                    ->leftJoin('product_colors', 'product_colors.color_id', '=', 'colors.id')
                    ->leftJoin('products', 'products.id', '=', 'product_colors.product_id')
                    ->when($groupId != 0 && $groupId != null, function ($q) use ($groupId) {
                        $q->where('colors.color_group_id', $groupId);
                    })
                    ->when($isMixedByComp, function ($q) {
                        $q->where('colors.mixed_by_computer', 1);
                    }, function ($q) {
                        $q->where('colors.mixed_by_computer', 0);
                    })->groupBy(DB::raw('colors.id, colors.name'))->select(DB::raw('colors.*'))
                    ->get();


                return Response::json(['message' => 'OK', 'data' => [
                    'colors' => $colors,
                    'group_id' => $groupId,
                    'mixed_by_Comp' => $isMixedByComp,
                    'is_popular' => $isPopular
                ]]);
            }
        } catch (\Exception $e) {
            dd($e);
        }
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
