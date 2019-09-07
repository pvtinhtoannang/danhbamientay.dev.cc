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
class PvtinhDBMienTayArchive extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Archive',
            'description' => 'Chuyên mục'
        ];
    }

    public function defineProperties()
    { 
        return [];
    }

 

    public function onRun()
    {
        $this->addCss('components/pvtinhdbmientayarchive/assets/style.css');  
        $this->addJs('components/pvtinhdbmientayarchive/assets/script.js');
        $slug = $this->param('slug');
        $myid = Category::select('id', 'name')->where('slug','=', $slug)->first(); 
        if(!empty($myid)){
            $this->page['category_name'] = $myid->name;
            $this->page['category_slug'] = $slug;    
        }
        else{
            $this->page['category_name'] = 'Chuyên mục';
        }
        $this->page['archive_info'] = $myid;
        
        $results = Posts::select('toannang_raovat_posts.*', 'toannang_raovat_tinhthanhpho.name as province', 'toannang_raovat_quanhuyen.name as district', 'toannang_raovat_xaphuongthitran.name as ward')
                ->where('toannang_raovat_categories.slug' , '=' , $slug)
                ->join('toannang_raovat_post_category', 'toannang_raovat_post_category.posts_id', '=', 'toannang_raovat_posts.id')
                ->join('toannang_raovat_categories', 'toannang_raovat_categories.id', '=', 'toannang_raovat_post_category.category_id')
                ->leftJoin('toannang_raovat_tinhthanhpho','toannang_raovat_tinhthanhpho.id', '=', 'toannang_raovat_posts.province')
                ->leftJoin('toannang_raovat_quanhuyen','toannang_raovat_quanhuyen.id', '=', 'toannang_raovat_posts.district')
                ->leftJoin('toannang_raovat_xaphuongthitran','toannang_raovat_xaphuongthitran.id', '=', 'toannang_raovat_posts.ward')
                ->paginate(16);

        $this->page['listpost'] = $results;

        // dd($results->perPage());
        $page = array();
        $page['count'] = $results->count();
        $page['current'] = $results->currentPage();
        $page['hasmore'] = $results->hasMorePages();
        $page['last'] = $results->lastPage();
        $page['nextpage'] = $results->nextPageUrl();
        $page['previous'] = $results->previousPageUrl();
        $page['total'] = $results->total();
        $this->page['pagination'] = $page;
        
        if($slug == 'bat-dong-san'){
            $this->page['subcategory'] = PropertyType::select('name', 'slug')->get();
            $this->page['isbds'] = 'true';
        }
        else{
            $this->page['subcategory'] = Locations::select('name', 'slug')
            ->where('category_id' , '=', $myid->id)
            ->get();   
            $this->page['isbds'] = 'false';
        }

        $news = Post::select('rainlab_blog_posts.*')->paginate(4);
        $this->page['newslist'] = $news;

    }
}
