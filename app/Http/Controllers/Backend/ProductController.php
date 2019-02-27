<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Requests\Backend\ProductRequest;
use App\Http\Controllers\Controller;
use DataTables;
use DB;
use App\Models\Product;
use App\Models\Category;
use App\Models\Property;
use App\Models\Color;
use App\Models\FinishSurface;
use App\Models\Surface;
use App\Models\ColorGroup;
use App\Models\ProjectType;
use Illuminate\Support\Facades\Storage;
use Auth;
class ProductController extends Controller
{
    public function __construct ()
    {
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
        $properties = Property::get()->toArray();
        $categories = Category::where('type', 0)->get();
        $finishSurfaces = FinishSurface::get();
        $colorGroups = ColorGroup::get();
        $surfaces = Surface::get();
        $projectTypes = ProjectType::get();
        $colors = Color::get();
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
    public function store(Request $request)
    {
        try {
            $inputs = $request->all();
            if ($inputs['colors'] != '') {
                $inputs['colors'] = explode(',', $inputs['colors']);
                for ($i = 0; $i < count($inputs['colors']); $i++) {
                    $inputs['colors'][$i] = intval($inputs['colors'][$i]);
                }
            } else {
                $inputs['colors'] = [];
            }

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
            $product = Product::create($productData);
            if ($product) {
                if (count($inputs['properties']) > 0) {
                    $product->properties()->sync($inputs['properties']);
                }
                if (count($inputs['colors']) > 0) {
                    $product->colors()->sync($inputs['colors']);
                }
            }
            DB::commit();
            return redirect()->route('admin.products.index');
        } catch (\Exception $e) {
            DB::rollBack();
            dd($e);
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
            $product = Product::where('id', $id)->with('properties', 'colors')
                ->first();
            if ($product) {
                $productProperties = [];
                $productColors = [];
                foreach($product->properties as $prop) {
                    $productProperties[] = $prop->id;
                }
                foreach($product->colors as $clr) {
                    $productColors[] = $clr->id;
                }
                $properties = Property::get()->toArray();
                $categories = Category::where('type', 0)->get();
                $finishSurfaces = FinishSurface::get();
                $colorGroups = ColorGroup::get();
                $surfaces = Surface::get();
                $projectTypes = ProjectType::get();
                $colors = Color::get();
                return view('backend.product.edit', [
                    'properties' => $properties,
                    'categories' => $categories,
                    'finishSurfaces' => $finishSurfaces,
                    'colorGroups' => $colorGroups,
                    'colors' => $colors,
                    'surfaces' => $surfaces,
                    'projectTypes' => $projectTypes,
                    'product' => $product,
                    'productProperties' => $productProperties,
                    'productColors' => $productColors
                ]);
            } else {
                abort(404);
            }

        } catch (\Exception $e) {

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
        try {
            $product = Product::where('id', $id)->first();
            if (!$product) {
                abort(404);
            }
            $inputs = $request->all();
            if ($inputs['colors'] != '') {
                $inputs['colors'] = explode(',', $inputs['colors']);
                for ($i = 0; $i < count($inputs['colors']); $i++) {
                    $inputs['colors'][$i] = intval($inputs['colors'][$i]);
                }
            } else {
                $inputs['colors'] = [];
            }
            DB::beginTransaction();
            $productData = [
                'name' => $inputs['name'],
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
                    Storage::delete($product->img_path);
                } else {
                    $productData['img_path'] = $product->img_path;
                }
            } else {
                $productData['img_path'] = $product->img_path;
            }
            $product->colors()->sync($inputs['colors']);
            $product->properties()->sync($inputs['properties']);
            $updatedData = Product::where('id', $id)->update($productData);
            DB::commit();

            return redirect()->route('admin.products.index');
        } catch (\Exception $e) {
            DB::rollBack();
            dd($e);
            return redirect()->back();
        }
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
