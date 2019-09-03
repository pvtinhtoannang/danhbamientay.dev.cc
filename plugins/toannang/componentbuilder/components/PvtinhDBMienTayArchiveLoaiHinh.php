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
class PvtinhDBMienTayArchiveLoaiHinh extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Archive Loại hình',
            'description' => 'Loại hình'
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
        $category = $this->param('category');
        $location = $this->param('location');
        $myid = Category::select('id', 'name')->where('slug','=', $category)->first();
        

        if($category == 'bat-dong-san'){
            $this->page['isbds'] = 'true';
            $this->page['subcategory'] = PropertyType::select('name', 'slug')->get();
            $protytype = PropertyType::select('id', 'name')->where('slug','=', $location)->first();
            if(!empty($protytype)){
                $this->page['locations_name'] = $protytype->name;    
            }
            else{
                $this->page['locations_name'] = 'Loại hình';
            }
            $results = Posts::select('toannang_raovat_posts.*', 'toannang_raovat_tinhthanhpho.name as province', 'toannang_raovat_quanhuyen.name as district', 'toannang_raovat_xaphuongthitran.name as ward')
            ->where('property_type' , '=' , $location)
           
            ->leftJoin('toannang_raovat_tinhthanhpho','toannang_raovat_tinhthanhpho.id', '=', 'toannang_raovat_posts.province')
            ->leftJoin('toannang_raovat_quanhuyen','toannang_raovat_quanhuyen.id', '=', 'toannang_raovat_posts.district')
            ->leftJoin('toannang_raovat_xaphuongthitran','toannang_raovat_xaphuongthitran.id', '=', 'toannang_raovat_posts.ward')
            ->paginate(16);
            $this->page['listpost'] = $results;
            
        }
        else{

            $this->page['isbds'] = 'false';
            $location_id = Locations::select('id', 'name')->where('slug','=', $location)->first();
            if(!empty($location_id)){
                $this->page['locations_name'] = $location_id->name;    
            }
            else{
                $this->page['locations_name'] = 'Loại hình';
            }
            $this->page['subcategory'] = Locations::select('name', 'slug')
            ->where('category_id' , '=', $myid->id)
            ->get();   
            $results = Posts::select('toannang_raovat_posts.*' )
                ->where('toannang_raovat_post_location.locations_id' , '=' , $location_id->id)
                ->join('toannang_raovat_post_category', 'toannang_raovat_post_category.posts_id', '=', 'toannang_raovat_posts.id')
                ->join('toannang_raovat_categories', 'toannang_raovat_categories.id', '=', 'toannang_raovat_post_category.category_id')
                ->join('toannang_raovat_post_location', 'toannang_raovat_posts.id', '=', 'toannang_raovat_post_location.posts_id')
                ->paginate(16);
            $this->page['listpost'] = $results;
        }
        $page = array();

        $page['location'] = $location;
        $page['category']= $category;
        $page['count'] = $results->count();
        $page['current'] = $results->currentPage();
        $page['hasmore'] = $results->hasMorePages();
        $page['last'] = $results->lastPage();
        $page['nextpage'] = $results->nextPageUrl();
        $page['previous'] = $results->previousPageUrl();
        $page['total'] = $results->total();
        $this->page['pagination'] = $page;
    }
}
