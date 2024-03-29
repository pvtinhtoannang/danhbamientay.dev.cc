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
class PvtinhDBMienTayArchiveAddress extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Archive Địa điểm',
            'description' => 'Archive Địa điểm'
        ];
    }

    public function defineProperties()
    {
        return [];
    }
    public function onRun()
    {
        $this->addCss('components/pvtinhdbmientayarchiveaddress/assets/style.css');  
        $this->addJs('components/pvtinhdbmientayarchiveaddress/assets/script.js');
        $category = $this->param('category');
        $address = $this->param('address');
        $myid = Category::select('id', 'name','meta_title', 'meta_description')->where('slug','=', $category)->first();
        $this->page['meta_description'] = $myid->meta_description;
        $this->page['meta_title'] = $myid->meta_title;
        $this->page['title'] = $myid->name;
        $this->page['page_link'] = '/dia-diem/'.$category.'/'.$address;
        if($category == 'bat-dong-san'){
            $this->page['isbds'] = 'true';
            $locations_name = Province::select('id', 'name')->where('id','=', $address)->first();

            if(!empty($locations_name)){
                $this->page['locations_name'] = 'Bất động sản tại '.$locations_name->name;
            }
            else{
                $this->page['locations_name'] = 'Loại hình';
            }
            $results = Posts::select('toannang_raovat_posts.*', 'toannang_raovat_tinhthanhpho.name as province', 'toannang_raovat_quanhuyen.name as district', 'toannang_raovat_xaphuongthitran.name as ward')
            ->where('province' , '=' , $address)
            ->where('category_id', '=', $myid->id)
            ->join('toannang_raovat_post_category', 'toannang_raovat_post_category.posts_id', '=', 'toannang_raovat_posts.id')
            ->leftJoin('toannang_raovat_tinhthanhpho','toannang_raovat_tinhthanhpho.id', '=', 'toannang_raovat_posts.province')
            ->leftJoin('toannang_raovat_quanhuyen','toannang_raovat_quanhuyen.id', '=', 'toannang_raovat_posts.district')
            ->leftJoin('toannang_raovat_xaphuongthitran','toannang_raovat_xaphuongthitran.id', '=', 'toannang_raovat_posts.ward')
            ->paginate(16);      
            $this->page['listpost'] = $results;      
        }
        else{

            $this->page['isbds'] = 'false';
            $category_id = Category::select('id', 'name')->where('slug','=', $category)->first();
            $address_id = Province::select('id', 'name')->where('id','=', $address)->first();
            
            if(!empty($address_id) && !empty($category_id)){
                $this->page['locations_name'] = $category_id->name.' tại '.$address_id->name;    
            }
            else{
                $this->page['locations_name'] = 'Địa điểm';
            }
            $this->page['subcategory'] = Locations::select('name', 'slug')
            ->where('category_id' , '=', $myid->id)
            ->get();   
            $results = Posts::select('toannang_raovat_posts.*' )
                ->where('province' , '=' , $address)
                ->where('category_id', '=', $myid->id)

                ->join('toannang_raovat_post_category', 'toannang_raovat_post_category.posts_id', '=', 'toannang_raovat_posts.id')
                ->leftJoin('toannang_raovat_tinhthanhpho','toannang_raovat_tinhthanhpho.id', '=', 'toannang_raovat_posts.province')
                ->paginate(16);
            $this->page['listpost'] = $results;
        }
        $page = array();

        $page['address'] = $address;
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
