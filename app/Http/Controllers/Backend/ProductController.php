<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DataTables;
use App\Models\Product;
use App\Repositories\Backend\ProductRepository;
use App\Repositories\Backend\CategoryRepository;
use App\Repositories\Backend\PropertyRepository;
use App\Repositories\Backend\ColorGroupRepository;
use App\Repositories\Backend\ColorRepository;
use App\Repositories\Backend\FinishSurfaceRepository;
class ProductController extends Controller
{
    public function __construct(
        ProductRepository $productRepository,
        CategoryRepository $categoryRepository,
        PropertyRepository $propertyRepository,
        ColorGroupRepository $colorGroupRepository,
        ColorRepository $colorRepository,
        FinishSurfaceRepository $finishSurfaceRepository
    )
    {
        $this->productRepository = $productRepository;
        $this->categoryRepository = $categoryRepository;
        $this->propertyRepository = $propertyRepository;
        $this->colorGroupRepository = $colorGroupRepository;
        $this->colorRepository = $colorRepository;
        $this->finishSurfaceRepository = $finishSurfaceRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('backend.product.index');
    }

    public function getForDataTable () {
        return DataTables::of(Product::query())
            ->addIndexColumn()->make(true);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $properties = $this->propertyRepository->all()->toArray();
        $categories = $this->categoryRepository->all();
        $finishSurfaces = $this->finishSurfaceRepository->all();
        $colorGroups = $this->colorGroupRepository->all();
        $colors = $this->colorRepository->all();
        return view('backend.product.create', [
            'properties' => $properties,
            'categories' => $categories,
            'finishSurfaces' => $finishSurfaces,
            'colorGroups' => $colorGroups,
            'colors' => $colors
        ]);
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
