<?php namespace Toannang\Componentbuilder\Components;

use Cms\Classes\ComponentBase;
use toannang\Settings\Models\Settings; 

class PvtinhDBMienTayPartner extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Đối tác',
            'description' => 'Partner'
        ];
    }

    public function defineProperties()
    {
        return [];
    }
    public function onRun()
    {
        $this->addCss('components/pvtinhdbmientaypartner/assets/style.css');
        $this->addJs('components/pvtinhdbmientaypartner/assets/script.js');  
        $this->page['partner'] = Settings::get('brands');
    }
}
