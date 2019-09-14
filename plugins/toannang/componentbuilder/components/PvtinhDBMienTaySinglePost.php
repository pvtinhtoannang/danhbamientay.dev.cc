<?php namespace Toannang\Componentbuilder\Components;

use Cms\Classes\ComponentBase; 
use toannang\Settings\Models\Settings;

use RainLab\Blog\Models\Post;
class PvtinhDBMienTaySinglePost extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Chi tiết tin tức',
            'description' => 'PvtinhDBMienTaySinglePost'
        ];
    }

    public function defineProperties()
    {
        return [];
    }
    public function onRun()
    {
        $this->addCss('components/pvtinhdbmientaysinglepost/assets/style.css');
        $this->addJs('components/pvtinhdbmientaysinglepost/assets/script.js'); 
        $slug = $this->param('slug');
        
        $news = Post::select('rainlab_blog_posts.*')->where('slug', '=', $slug )->first();
        $this->page['meta_description'] = $news->meta_description;
        $this->page['meta_title'] = $news->meta_title;
        $this->page['title'] = $news->title;
        $this->page['post'] = $news;
    }
}
