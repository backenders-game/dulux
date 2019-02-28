<?php

namespace App\Http\Controllers\Backend;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Category;
use DataTables;
use DB;
use App\Http\Controllers\Controller;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('backend.post.index');
    }

    public function getForDataTable() {
        return DataTables::of(Post::query())
            ->addIndexColumn()->make(true);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::where('type', 1)->get();
        return view('backend.post.create', ['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $inputs = $request->all();
        try {
            DB::beginTransaction();
            $postData = [
                'title' => $inputs['title'],
                'image_small' => $inputs['img_title'],
                'image_big' => $inputs['img_title'],
                'category_id' => $inputs['category_id'],
                'description' => $inputs['description'],
                'content' => $inputs['content']
            ];
            $post = Post::create($postData);

            DB::commit();

            return redirect()->route('admin.posts.index');
        } catch (\Exception $e) {
            DB::rollBack();
            abort(500);
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
        $post = Post::where('id', $id)->first();
        if (!$post) {
            abort(404);
        }
        $categories = Categories::get();
        return view('backend.post.edit', ['categories' => $categories, 'post' => $post]);
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
            $post = Post::where('id', $id)->first();
            if (!$post) {
                abort(404);
            }
            // Phan loai bai viet
            $categories = Category::where('type', 1)->get();
            return view('backend.post.edit', ['categories' => $categories, 'post' => $post]);
        } catch (\Exception $e) {
            dump($e);
            abort(500);
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
