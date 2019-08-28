<?php namespace Toannang\ComponentBuilder;

use System\Classes\PluginBase;
use Toannang\Componentbuilder\Components\LamDBMienTayFooter;
use Toannang\Componentbuilder\Components\LamDBMienTayHeader;
use Toannang\Componentbuilder\Components\LamDBMienTaySlider;
use Toannang\Componentbuilder\Components\PvtinhDBMienTayRealEstate;
use Toannang\Componentbuilder\Components\PvtinhDBMienTayBreadCrumb;
use Toannang\Componentbuilder\Components\PvtinhDBMienTayDangTin;
use Toannang\Componentbuilder\Components\PvtinhDBMienTayPlace;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
        return[
            LamDBMienTayHeader::class => 'LamDBMienTayHeader',
            LamDBMienTayFooter::class => 'LamDBMienTayFooter',
            LamDBMienTaySlider::class => 'LamDBMienTaySlider',
            PvtinhDBMienTayRealEstate::class => 'PvtinhDBMienTayRealEstate',
            PvtinhDBMienTayBreadCrumb::class => 'PvtinhDBMienTayBreadCrumb',
            PvtinhDBMienTayDangTin::class => 'PvtinhDBMienTayDangTin',
            PvtinhDBMienTayPlace::class => 'PvtinhDBMienTayPlace',
            
          ];
    }

    public function registerSettings()
    {
    }
    public function registerMarkupTags()
    {
        return [
            'filters' => [
                'component' => [$this, 'getComponentImageURL']
            ]
        ];
    }

    public function getComponentImageURL($text)
    {
        $realpath    = str_replace('\\', '/', __DIR__);
        $whatIwanted = str_replace($_SERVER['DOCUMENT_ROOT'], '', $realpath);
        return url($whatIwanted.'/components/'.$text);
    }
}
