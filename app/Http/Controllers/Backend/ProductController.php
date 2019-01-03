<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Requests\Backend\ProductRequest;
use App\Http\Controllers\Controller;
use DataTables;
use DB;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;
use App\Repositories\Backend\ProductRepository;
use App\Repositories\Backend\CategoryRepository;
use App\Repositories\Backend\PropertyRepository;
use App\Repositories\Backend\ColorGroupRepository;
use App\Repositories\Backend\ColorRepository;
use App\Repositories\Backend\FinishSurfaceRepository;
use App\Repositories\Backend\SurfaceRepository;
use App\Repositories\Backend\ProjectTypeRepository;

class ProductController extends Controller
{
    public function __construct(
        ProductRepository $productRepository,
        CategoryRepository $categoryRepository,
        PropertyRepository $propertyRepository,
        ColorGroupRepository $colorGroupRepository,
        ColorRepository $colorRepository,
        FinishSurfaceRepository $finishSurfaceRepository,
        SurfaceRepository $surfaceRepository,
        ProjectTypeRepository $projectTypeRepository
    )
    {
        $this->productRepository = $productRepository;
        $this->categoryRepository = $categoryRepository;
        $this->propertyRepository = $propertyRepository;
        $this->colorGroupRepository = $colorGroupRepository;
        $this->colorRepository = $colorRepository;
        $this->finishSurfaceRepository = $finishSurfaceRepository;
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
        $categories = $this->categoryRepository->where('type', 0)->get();
        $finishSurfaces = $this->finishSurfaceRepository->all();
        $colorGroups = $this->colorGroupRepository->all();
        $surfaces = $this->surfaceRepository->all();
        $projectTypes = $this->projectTypeRepository->all();
        $colors = $this->colorRepository->all();
        return view('backend.product.create', [
            'properties' => $properties,
            'categories' => $categories,
            'finishSurfaces' => $finishSurfaces,
            'colorGroups' => $colorGroups,
            'colors' => $colors,
            'surfaces' => $surfaces,
            'projectTypes' => $projectTypes
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductRequest $request)
    {
        try {
            $inputs = $request->all();
            DB::beginTransaction();
            $productData = [
                'name' => $inputs['name'],
                'img_path' => null,
                'category_id' => $inputs['category_id'],
                'description' => $inputs['description'],
                'finish_surface_id' => $inputs['finish_surface_id'],
                'drying_time' => $inputs['drying_time'],
                'coverage' => $inputs['coverage'],
                'num_layer' => $inputs['num_layer'],
                'user_manual' => $inputs['user_manual'],
                'introduction' => $inputs['introduction'],
                'construction_guide' => $inputs['construction_guide'],
                'protection_info' => $inputs['protection_info']
            ];
            if ($request->hasFile('img_path')) {
                $imgPath = $request->file('img_path')->store('uploads/img/products');
                if ($imgPath) {
                    $productData['img_path'] = $imgPath;
                }
            }
            $product = $this->productRepository->create($productData);
            if ($product) {
                $product->properties()->sync($inputs['properties']);
                // $products->colors()->sync($inputs['colors']);
            }
            DB::commit();
            return redirect()->route('admin.products.index');
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back();
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
        try {
            $product = $this->productRepository->where('id', $id)->with('properties', 'colors')
                ->first();
            if ($product) {
                $productProperties = [];
                // foreach($product->properties as $prop) {
                //     $categoriesproductProperties[] = $prop->id;
                // }
                $properties = $this->propertyRepository->all()->toArray();
                $categories = $this->categoryRepository->where('type', 0)->get();
                $finishSurfaces = $this->finishSurfaceRepository->all();
                $colorGroups = $this->colorGroupRepository->all();
                $surfaces = $this->surfaceRepository->all();
                $projectTypes = $this->projectTypeRepository->all();
                $colors = $this->colorRepository->all();
                return view('backend.product.edit', [
                    'properties' => $properties,
                    'categories' => $categories,
                    'finishSurfaces' => $finishSurfaces,
                    'colorGroups' => $colorGroups,
                    'colors' => $colors,
                    'surfaces' => $surfaces,
                    'projectTypes' => $projectTypes,
                    'product' => $product,
                    'productProperties' => $productProperties
                ]);
            } else {
                dd('NOT found');
                // abort(404);
            }

        } catch (\Exception $e) {
            dd($e);
        }
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
