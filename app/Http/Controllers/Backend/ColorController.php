<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Backend\ColorRepository;
use App\Repositories\Backend\ColorGroupRepository;
use App\Repositories\Backend\SurfaceRepository;
use App\Repositories\Backend\ProjectTypeRepository;
use Response;

class ColorController extends Controller
{
    public function __construct(
        ColorRepository $colorRepository,
        ColorGroupRepository $colorGroupRepository,
        SUrfaceRepository $surfaceRepository,
        ProjectTypeRepository $projectTypeRepository
    ) {
        $this->colorRepository = $colorRepository;
        $this->colorGroupRepository = $colorGroupRepository;
        $this->surfaceRepository = $surfaceRepository;
        $this->projectTypeRepository = $projectTypeRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        if ($request->ajax()) {
            $inputs = $request->except(['_token', '_method']);
            if ($inputs['color_group_id'] == 0 || !$inputs['color_group_id']) {
                $firstColorGroup = $this->colorGroupRepository->first();
                if ($firstColorGroup) {
                    $inputs['color_group_id'] = $firstColorGroup->id;
                }
            }
            $color = $this->colorRepository->create([
                'name' => $inputs['name'],
                'color' => $inputs['color'],
                'is_deep_color' => $inputs['is_deep_color'],
                'mixed_by_computer' => $inputs['mixed_by_computer'],
                'color_group_id' => $inputs['color_group_id']
            ]);
            if ($color) {
                if ($inputs['surfaces'] && count($inputs['surfaces']) > 0) {
                    $color->surfaces()->sync($inputs['surfaces']);
                }

                if ($inputs['projectTypes'] && count($inputs['projectTypes'])) {
                    $color->projecttypes()->sync($inputs['projectTypes']);
                }
                return Response::json($color);
            } else {
                return Response::json([]);
            }
        }
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
