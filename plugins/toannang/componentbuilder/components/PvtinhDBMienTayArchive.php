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
        
    }
}
