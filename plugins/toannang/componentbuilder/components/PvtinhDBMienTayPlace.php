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
class PvtinhDBMienTayPlace extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Place',
            'description' => 'Địa điểm du lịch'
        ];
    }

    public function defineProperties()
    {
        return [];
    }
    public function onRun()
    {
        $this->addCss('components/pvtinhdbmientayplace/assets/style.css');  
        $category_home = Settings::get('categoryhome'); 
        $arr = array();
        $paginate = 0;
        foreach ($category_home as $key => $value) {
            $paginate = $category_home[$key]['numpostcategoryhome'];

            if(!empty($paginate) && $paginate == 0) {
                $paginate = 12;
            }
            else{
                $paginate = $paginate;
            }
            $arr[$key]['item_place']['title_section'] = Category::select('name', 'slug')->where('id','=', $value['categorybox'])->first();
            $arr[$key]['item_place']['locations_list'] = Locations::select('name', 'slug')->where('category_id','=', $value['categorybox'])->get();
            $arr[$key]['item_place']['category_home']['image_1'] = $category_home[$key]['image_1'];
            $arr[$key]['item_place']['category_home']['link_1'] = $category_home[$key]['link_1'];
            $arr[$key]['item_place']['category_home']['image_2'] = $category_home[$key]['image_2'];
            $arr[$key]['item_place']['category_home']['link_2'] = $category_home[$key]['link_2'];
            $arr[$key]['item_place']['list_place'] = Posts::select('toannang_raovat_posts.*')
                ->where('category_id' , '=' , $value['categorybox'])
                ->orderby('toannang_raovat_posts.id', 'DESC')
                ->join('toannang_raovat_post_category', 'toannang_raovat_post_category.posts_id', '=', 'toannang_raovat_posts.id') 
                ->paginate($paginate); 


            $this->page['content'] = $arr;
            
        } 
        $this->page['propertytype'] = PropertyType::select('id','name')->get();
        $this->page['provinces'] = Province::select('id','name')->get();
    }
}
