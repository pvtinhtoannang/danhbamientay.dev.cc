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
        $this->page['locations'] = Locations::all();
        $this->page['hotline'] = Settings::get('hotline'); 
        $this->page['site_name'] = Settings::get('site_name');
        $this->page['logo'] = Settings::getLogo();
    }
}
