<?php

namespace App\Http\Requests\Backend;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:50',
            'category_id' => 'required|int',
            'img_path' => 'required|file|mimetypes:image/gif,image/png,image/jpeg,image/bmp,image/webp,image/svg+xml,image/vnd.microsoft.icon',
            'finish_surface_id' => 'required|int',
            'coverage' => 'string|max:50',
            'drying_time' => 'string|max:50',
            'num_layer' => 'int|max:100',
            'properties' => 'array',
            'user_manual' => 'string|max:2000',
            'introduction' => 'string|max:2000',
            'protection_info' => 'string|max:2000',
            'description' => 'string|max:200',
            'construction_guide' => 'string|max:2000',
            'colors' => 'string',
        ];
    }

    public function messages () {
        return [];
    }
}
