<?php namespace Toannang\Componentbuilder\Components;

use Cms\Classes\ComponentBase;
use toannang\RaoVat\Models\Locations;
use toannang\Settings\Models\Settings;

class LamDBMienTayHeader extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Header',
            'description' => 'Danh bạ Miền Tây Header'
        ];
    }

    public function defineProperties()
    {
        return [];
    }
    public function onRun()
    {
        $this->addCss('components/lamdbmientayheader/assets/style.css');
        $this->addCss('components/lamdbmientayheader/assets/global.css');
        $this->page['locations'] = Locations::all();
        $this->page['hotline'] = Settings::get('hotline'); 
        $this->page['site_name'] = Settings::get('site_name');
        $this->page['logo'] = Settings::getLogo();
        $this->page['home_title'] = Settings::get('site_name');
        $this->page['home_meta_title'] = Settings::get('meta_title');
        $this->page['home_meta_description'] = Settings::get('meta_description');
        $this->page['home_meta_keyword'] = Settings::get('meta_keyword');
        $this->page['home_page_link'] = 'https://danhbamientay.com';
        if(isset($_GET['keyword'])){
            $this->page['keyword'] =  $_GET['keyword'];
        }
        else{
            $this->page['keyword'] =  '';
        }
    }
}
