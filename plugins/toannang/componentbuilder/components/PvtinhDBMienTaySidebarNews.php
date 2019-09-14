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
class PvtinhDBMienTaySidebarNews extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Sidebar News',
            'description' => 'Sidebar chi tiết tin tức'
        ];
    }

    public function defineProperties()
    { 
        return [];
    }

 

    public function onRun()
    {
        $this->addCss('components/pvtinhdbmientaysidebarnews/assets/style.css');
        $this->addJs('components/pvtinhdbmientaysidebarnews/assets/script.js');
        $news = Post::select('rainlab_blog_posts.*')->where('published', '=', '1')->orderby('id', 'desc')->paginate(5);
        $this->page['newslist'] = $news;

    }
}
