<?php namespace Toannang\Componentbuilder\Components;

use Cms\Classes\ComponentBase;
use RainLab\Pages\Components\StaticMenu;
use toannang\Settings\Models\Settings;

class LamDBMienTayFooter extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Footer',
            'description' => 'Danh Bạ miền Tây Footer...'
        ];
    }

    public function defineProperties()
    {
        return [];
    }
    public function onRun()
    {
        $this->addCss('components/lamdbmientayfooter/assets/style.css');
        $this->addJs('components/lamdbmientayfooter/assets/script.js');
        $this->page['company_name'] = Settings::get('site_name');
        $this->page['address'] = Settings::get('address');
        $this->page['hotline'] = Settings::get('hotline');
        $this->page['email'] = Settings::get('email');
        $this->page['socials'] = Settings::get('socials');
        $this->page['copyright'] = Settings::get('copyright');
        $this->addComponent(StaticMenu::class,'footerMenu',['code' => 'footer']);
    }
}
