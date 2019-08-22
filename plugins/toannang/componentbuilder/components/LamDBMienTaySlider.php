<?php namespace Toannang\Componentbuilder\Components;

use Cms\Classes\ComponentBase;
use RainLab\Pages\Components\StaticMenu;
use toannang\Settings\Models\Settings;

class LamDBMienTaySlider extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Slider & Menu',
            'description' => 'Slider và Menu Danh bạ Miền Tây'
        ];
    }

    public function defineProperties()
    {
        return [];
    }
    public function onRun()
    {
        $this->addCss('components/lamdbmientayslider/assets/style.css');
        $this->addJs('components/lamdbmientayslider/assets/script.js');
        $this->addComponent(StaticMenu::class,'categoryMenu',['code' => 'danh-muc']);
        $this->page['home_sliders'] = Settings::get('home_sliders');
    }
}
