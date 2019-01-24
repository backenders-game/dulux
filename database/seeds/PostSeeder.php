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
            foreach($html->find('h2.s-hdlne') as $element) {
                $contentLinks    = $element->find('a',0);            
                $title = $contentLinks->innertext;
                $href = 'https://www.dulux.vn'.''.$contentLinks->href ;
                $image_small = $element->prev_sibling()->find('img',0)->src;

                $article = file_get_html($href);
                $image_big = $article->find('.article-banner .field-hero-image img',0)->src;
                $description = $article->find('.field-article-body_inner .field-teaser .field-item',0)->plaintext;
                $content = $article->find('.field-article-body_inner .field.field-name-body',0)->innertext;
                $arr = [];
                $arr['title'] = $title;
                $arr['image_small'] = $image_small;
                $arr['image_big'] = $image_big;
                $arr['description'] = $description;
                $arr['content'] = $content;
                array_push($arraySave,$arr);
            }
        }        
        foreach($arraySave as $item){
            Post::create($item);
        }
        dd('ok');
    }
}
