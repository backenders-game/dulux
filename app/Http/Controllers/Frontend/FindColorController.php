<?php
namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Frontend\ColorRepository;
use App\Repositories\Frontend\ColorGroupRepository;
use App\Repositories\Frontend\SurfaceRepository;
use App\Repositories\Frontend\ProjectTypeRepository;
use App\Repositories\Frontend\FinishSurfaceRepository;
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
        return view('frontend.find_color.timmausac', [
            'surfaces' => $surfaces,
            'projectTypes' => $projectTypes,
            'finishSurfaces' => $finishSurfaces
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
