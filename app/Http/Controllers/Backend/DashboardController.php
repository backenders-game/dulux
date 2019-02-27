<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Artisan;
/**
 * Class DashboardController.
 */
class DashboardController extends Controller
{
    /**
     * @return \Illuminate\View\View
     */
    public function index()
    {
        // Artisan::call("cache:clear");
        // Artisan::call("config:clear");
        // Artisan::call('route:clear');
        // Artisan::call("storage:link");
        return view('backend.dashboard');
    }
}
