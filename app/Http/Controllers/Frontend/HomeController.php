<?php

namespace App\Http\Controllers\Frontend;
use App\Models\Post;
use App\Http\Controllers\Controller;

/**
 * Class HomeController.
 */
class HomeController extends Controller
{
    /**
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $category = Category::where('name', 'Bài viết trang chủ')->first();
        $posts = Post::where('category_id', $category->id)->limit(6)->get();
        return view('frontend.trangchu', ['posts' => $posts]);
    }
    public function show($id)
    {
        return view('frontend.post.detail');
    }
}
