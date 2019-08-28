<?php namespace Toannang\Componentbuilder\Components;

use Cms\Classes\ComponentBase;
use RainLab\Pages\Components\StaticMenu;
use toannang\Settings\Models\Settings;
use Toannang\Raovat\Models\Posts;
use Toannang\Raovat\Models\PropertyType;
use Toannang\Raovat\Models\Province;
use Toannang\Raovat\Models\District;

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
      
        $this->page['listpost'] = Posts::select('toannang_raovat_posts.*', 'toannang_raovat_tinhthanhpho.name as province', 'toannang_raovat_quanhuyen.name as district', 'toannang_raovat_xaphuongthitran.name as ward')
            ->where('category_id' , '=' , Settings::get('propertytype'))
            ->join('toannang_raovat_post_category', 'toannang_raovat_post_category.posts_id', '=', 'toannang_raovat_posts.id')
            ->leftJoin('toannang_raovat_tinhthanhpho','toannang_raovat_tinhthanhpho.id', '=', 'toannang_raovat_posts.province')
            ->leftJoin('toannang_raovat_quanhuyen','toannang_raovat_quanhuyen.id', '=', 'toannang_raovat_posts.district')
            ->leftJoin('toannang_raovat_xaphuongthitran','toannang_raovat_xaphuongthitran.id', '=', 'toannang_raovat_posts.ward')
            ->paginate(12);

        $this->page['propertytype'] = PropertyType::select('id','name')->get();
        $this->page['provinces'] = Province::select('id','name')->get();
    }
}
