<?php

use Illuminate\Database\Seeder;
use App\Models\Post;
use Carbon\Carbon;
class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function saveImages($url,$path){
        $image = file_get_contents($url);
        file_put_contents($path, $image);
    }
    public function getNameImage($url,$string){
        $url_arr = explode ('/', $url);
        $count = count($url_arr);
        $img_name = $url_arr[$count-1];
        $name_div = explode('.', $img_name);
        $count_dot = count($name_div);

        $img_type_string = $name_div[$count_dot -1];
        $img_name = $name_div[0];
        $img_type_string_arr = explode ('?', $img_type_string);
        $img_type = $img_type_string_arr[0];
        return $img_name.'-'.$string.'.'.$img_type;
    }
    public function run()
    {
        //php artisan db:seed --class=PostSeeder
        $linkAlls = [
            'https://www.dulux.vn/vi/meo-va-loi-khuyen-trang-tri-nha',
            'https://www.dulux.vn/vi/meo-va-loi-khuyen-trang-tri-nha?page=1',
            'https://www.dulux.vn/vi/meo-va-loi-khuyen-trang-tri-nha?page=2',
            'https://www.dulux.vn/vi/meo-va-loi-khuyen-trang-tri-nha?page=3',
            'https://www.dulux.vn/vi/meo-va-loi-khuyen-trang-tri-nha?page=4',
            'https://www.dulux.vn/vi/meo-va-loi-khuyen-trang-tri-nha?page=5',
            'https://www.dulux.vn/vi/meo-va-loi-khuyen-trang-tri-nha?page=6',
            'https://www.dulux.vn/vi/meo-va-loi-khuyen-trang-tri-nha?page=7'
        ];
        $arraySave = [];
        foreach($linkAlls as $link){
            $html = file_get_html($link);
            foreach($html->find('h2.s-hdlne') as $key =>$element) {
                $contentLinks    = $element->find('a',0);            
                $title = $contentLinks->innertext;
                $href = 'https://www.dulux.vn'.''.$contentLinks->href ;
                $image_small = $element->prev_sibling()->find('img',0)->src;
                $article = file_get_html($href);
                $image_big = $article->find('.article-banner .field-hero-image img',0)->src;
                $description = $article->find('.field-article-body_inner .field-teaser .field-item',0)->plaintext;
                $content = $article->find('.field-article-body_inner .field.field-name-body',0)->innertext;
                
                // Lấy ra tên của image
                $name_image_small = $this->getNameImage($image_small,'small');
                $name_image_big = $this->getNameImage($image_big,'big');
                // Thực hiện lưu image
                $path_image_small = 'public/img/frontend/posts/'.$name_image_small;
                $path_image_big = 'public/img/frontend/posts/'.$name_image_big;
                $save_image_small = $this->saveImages($image_small,$path_image_small);
                $save_image_big = $this->saveImages($image_big,$path_image_big);
                
                $arr = [];
                $arr['title'] = $title;
                $arr['image_small'] = $name_image_small;
                $arr['image_big'] = $name_image_big;
                $arr['description'] = $description;
                $arr['content'] = $content;
                array_push($arraySave,$arr);
            }
        }        
        foreach($arraySave as $item){
            Post::create($item);
        }
        dd('luu thanh cong');
    }
}
