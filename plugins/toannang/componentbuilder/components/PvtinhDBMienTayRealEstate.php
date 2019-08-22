<?php namespace Toannang\Componentbuilder\Components;

use Cms\Classes\ComponentBase;
use RainLab\Pages\Components\StaticMenu;
use toannang\Settings\Models\Settings;

class PvtinhDBMienTayRealEstate extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Real Estate',
            'description' => 'Real Estate'
        ];
    }

    public function defineProperties()
    {
        return [];
    }
    public function onRun()
    {
        $this->addCss('components/pvtinhdbmientayrealestate/assets/style.css');
        $this->addJs('components/pvtinhdbmientayrealestate/assets/script.js');
        $this->addComponent(StaticMenu::class,'categoryMenu',['code' => 'danh-muc']);
        $this->page['home_sliders'] = Settings::get('home_sliders');
    }
}
