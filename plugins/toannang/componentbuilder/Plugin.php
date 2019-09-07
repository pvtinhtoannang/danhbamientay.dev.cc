<?php namespace Toannang\ComponentBuilder;

use System\Classes\PluginBase;
use Toannang\Componentbuilder\Components\LamDBMienTayFooter;
use Toannang\Componentbuilder\Components\LamDBMienTayHeader;
use Toannang\Componentbuilder\Components\LamDBMienTaySlider;
use Toannang\Componentbuilder\Components\PvtinhDBMienTayRealEstate;
use Toannang\Componentbuilder\Components\PvtinhDBMienTayBreadCrumb;
use Toannang\Componentbuilder\Components\PvtinhDBMienTayDangTin;
use Toannang\Componentbuilder\Components\PvtinhDBMienTayPlace;
use Toannang\Componentbuilder\Components\PvtinhDBMienTayPartner;
use Toannang\Componentbuilder\Components\PvtinhDBMienTayArchive;
use Toannang\Componentbuilder\Components\PvtinhDBMienTayArchiveLoaiHinh;
use Toannang\Componentbuilder\Components\PvtinhDBMienTayArchiveAddress;
use Toannang\Componentbuilder\Components\PvtinhDBMienTayInfoPost;
use Toannang\Componentbuilder\Components\PvtinhDBMienTaySearch;
use Toannang\Componentbuilder\Components\PvtinhDBMienTaySidebarAccount;
use Toannang\Componentbuilder\Components\PvtinhDBMienTayAccount;
use Toannang\Componentbuilder\Components\PvtinhDBMienTayChangePassword;
use Toannang\Componentbuilder\Components\PvtinhDBMienTayMyPost;
use Toannang\Componentbuilder\Components\PvtinhDBMienTayChinhSuaTinDang;
use Toannang\Componentbuilder\Components\PvtinhDBMienTaySinglePost;
use Toannang\Componentbuilder\Components\PvtinhDBMienTayArchiveNews;

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
            PvtinhDBMienTayPartner::class => 'PvtinhDBMienTayPartner',
            PvtinhDBMienTayArchive::class => 'PvtinhDBMienTayArchive',
            PvtinhDBMienTayArchiveLoaiHinh::class => 'PvtinhDBMienTayArchiveLoaiHinh',
            PvtinhDBMienTayArchiveAddress::class => 'PvtinhDBMienTayArchiveAddress',
            PvtinhDBMienTayInfoPost::class => 'PvtinhDBMienTayInfoPost',
            PvtinhDBMienTaySearch::class => 'PvtinhDBMienTaySearch',
            PvtinhDBMienTaySidebarAccount::class => 'PvtinhDBMienTaySidebarAccount',
            PvtinhDBMienTayAccount::class => 'PvtinhDBMienTayAccount',
            PvtinhDBMienTayChangePassword::class => 'PvtinhDBMienTayChangePassword',
            PvtinhDBMienTayMyPost::class => 'PvtinhDBMienTayMyPost',
            PvtinhDBMienTayChinhSuaTinDang::class => 'PvtinhDBMienTayChinhSuaTinDang',
            PvtinhDBMienTaySinglePost::class => 'PvtinhDBMienTaySinglePost',
            PvtinhDBMienTayArchiveNews::class => 'PvtinhDBMienTayArchiveNews',
            
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
