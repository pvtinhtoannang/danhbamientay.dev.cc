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
use Rainlab\User\Models\User;

class PvtinhDBMienTayInfoPost extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'Tin đăng',
            'description' => 'Chi tiết tin'
        ];
    }

    public function defineProperties()
    {
        return [];
    }

    public function onRun()
    {

        $this->addCss('components/pvtinhdbmientayinfopost/assets/style.css');
        $this->addJs('components/pvtinhdbmientayinfopost/assets/script.js');
        $slug = $this->param('slug');
        $id = $this->param('id');
        $this->page['url'] = url()->full();
        $this->page['infopost'] = Posts::select('toannang_raovat_posts.*', 'toannang_raovat_tinhthanhpho.name as province', 'toannang_raovat_quanhuyen.name as district', 'toannang_raovat_xaphuongthitran.name as ward',
            'users.name as user_name', 'users.email as user_email', 'toannang_profile_.phone_number', 'toannang_profile_.address'
        )
            ->where('slug', '=', $slug)
            ->where('toannang_raovat_posts.id', '=', $id)
            ->leftJoin('toannang_raovat_tinhthanhpho', 'toannang_raovat_tinhthanhpho.id', '=', 'toannang_raovat_posts.province')
            ->leftJoin('toannang_raovat_quanhuyen', 'toannang_raovat_quanhuyen.id', '=', 'toannang_raovat_posts.district')
            ->leftJoin('toannang_raovat_xaphuongthitran', 'toannang_raovat_xaphuongthitran.id', '=', 'toannang_raovat_posts.ward')
            ->leftJoin('users', 'users.id', '=', 'user_id')
            ->leftJoin('toannang_profile_','toannang_profile_.user_id', '=', 'users.id')
            ->first();

        $this->page['user'] = User::where('id', '=', $this->page['infopost']->user_id)->first();
        $this->page['meta_description'] = $this->page['infopost']->meta_description;
        $this->page['meta_title'] = $this->page['infopost']->meta_title;
        $this->page['title'] = $this->page['infopost']->title;
        $this->page['quangcaochitietbaiviet'] = Settings::get('quangcaochitietbaiviet');
    }
}
