<?php namespace Toannang\Componentbuilder\Components;

use Cms\Classes\ComponentBase; 
use toannang\Settings\Models\Settings;

class PvtinhDBMienTayBreadCrumb extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'BreadCrumb',
            'description' => 'PvtinhDBMienTayBreadCrumb'
        ];
    }

    public function defineProperties()
    {
        return [];
    }
    public function onRun()
    {
        $this->addCss('components/pvtinhdbmientaybreadcrumb/assets/style.css');
        $this->addJs('components/pvtinhdbmientaybreadcrumb/assets/script.js'); 
    }
}
