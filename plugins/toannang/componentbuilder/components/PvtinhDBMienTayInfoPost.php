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
class PvtinhDBMienTayInfoPost extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Tin đăng',
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
        $slug   = $this->param('slug');
        $id     = $this->param('id');
        
        $this->page['infopost'] = Posts::select('toannang_raovat_posts.*')
        ->where('slug', '=', $slug)
        ->where('toannang_raovat_posts.id', '=', $id)
        ->first();

        
    }
}
