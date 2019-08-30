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
        $myid = Category::select('id', 'name')->where('slug','=', $category)->first();
        

        if($category == 'bat-dong-san'){
            $this->page['isbds'] = 'true';
            $locations_name = Province::select('id', 'name')->where('id','=', $address)->first();

            if(!empty($locations_name)){
                $this->page['locations_name'] = 'Bất động sản tại '.$locations_name->name;
            }
            else{
                $this->page['locations_name'] = 'Loại hình';
            }
            $this->page['listpost'] = Posts::select('toannang_raovat_posts.*', 'toannang_raovat_tinhthanhpho.name as province', 'toannang_raovat_quanhuyen.name as district', 'toannang_raovat_xaphuongthitran.name as ward')
            ->where('province' , '=' , $address)
            ->where('category_id', '=', $myid->id)
            ->join('toannang_raovat_post_category', 'toannang_raovat_post_category.posts_id', '=', 'toannang_raovat_posts.id')
            ->leftJoin('toannang_raovat_tinhthanhpho','toannang_raovat_tinhthanhpho.id', '=', 'toannang_raovat_posts.province')
            ->leftJoin('toannang_raovat_quanhuyen','toannang_raovat_quanhuyen.id', '=', 'toannang_raovat_posts.district')
            ->leftJoin('toannang_raovat_xaphuongthitran','toannang_raovat_xaphuongthitran.id', '=', 'toannang_raovat_posts.ward')
            ->paginate(16);

            
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
             $this->page['listpost'] = Posts::select('toannang_raovat_posts.*' )
                ->where('province' , '=' , $address)
                ->where('category_id', '=', $myid->id)

                ->join('toannang_raovat_post_category', 'toannang_raovat_post_category.posts_id', '=', 'toannang_raovat_posts.id')
                ->leftJoin('toannang_raovat_tinhthanhpho','toannang_raovat_tinhthanhpho.id', '=', 'toannang_raovat_posts.province')
                ->paginate(16);
        }

    }
}
