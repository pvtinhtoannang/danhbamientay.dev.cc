<?php namespace Toannang\Componentbuilder\Components;

use Cms\Classes\ComponentBase;
use RainLab\Pages\Components\StaticMenu;
use toannang\Settings\Models\Settings;
use Toannang\Raovat\Models\Posts;
use Toannang\Raovat\Models\PropertyType;
use Toannang\Raovat\Models\Province;
use Toannang\Raovat\Models\District;
use Toannang\Raovat\Models\Locations;
use Toannang\Raovat\Models\Category; 
use Illuminate\Pagination\Paginator;
use RainLab\Blog\Models\Post;
class PvtinhDBMienTayArchiveNews extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Archive News',
            'description' => 'Chuyên mục tin tức'
        ];
    }

    public function defineProperties()
    { 
        return [];
    }

 

    public function onRun()
    {
        $this->addCss('components/pvtinhdbmientayarchivenews/assets/style.css');  
        $this->addJs('components/pvtinhdbmientayarchivenews/assets/script.js');

        $news = Post::select('rainlab_blog_posts.*')->where('published', '=', '1')->paginate(3);
        $this->page['newslist'] = $news;

    }
}
