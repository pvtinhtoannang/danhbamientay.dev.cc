<?php namespace Toannang\Componentbuilder\Components;

use Cms\Classes\ComponentBase; 
use toannang\Settings\Models\Settings;

class PvtinhDBMienTayDangTin extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Đăng tin',
            'description' => 'PvtinhDBMienTayDangTin'
        ];
    }

    public function defineProperties()
    {
        return [];
    }
    public function onRun()
    {
        $this->addCss(
        [
            'components/pvtinhdbmientaydangtin/assets/style.css' 
        ]
        );
        $this->addJs([
            'components/pvtinhdbmientaydangtin/assets/script.js' 
        ]); 
    }
}
