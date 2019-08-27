<?php namespace Toannang\Raovat;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
    }

    public function registerFormWidgets()
    {
      return[
        'Toannang\Raovat\Formwidgets\SortLocations'=>[
          'label' => 'Sắp xếp',
          'code' => 'sortlocations'
        ],
        'Toannang\Raovat\Formwidgets\ParentIDCategory'=>[
          'label' => 'Danh mục cha',
          'description'=>'Danh mục cha',
          'code' => 'parentidcategory'
        ],

        'Toannang\Raovat\Formwidgets\AddressBox'=>[
          'label' => 'Địa chỉ',
          'description'=>'Địa chỉ, xử lý ajax',
          'code' => 'addressbox'
        ],

        'Toannang\Raovat\Formwidgets\DistrictBox'=>[
          'label' => 'Quận huyện',
          'description'=>'Địa chỉ',
          'code' => 'districtbox'
        ],

        'Toannang\Raovat\Formwidgets\WardBox'=>[
          'label' => 'Quận huyện',
          'description'=>'Địa chỉ',
          'code' => 'wardbox' 
        ],

        'Toannang\Raovat\Formwidgets\PropertyTypeBox'=>[
          'label' => 'Danh mục bất động sản',
          'description'=>'danh mục bất động sản',
          'code' => 'propertytypebox'
        ],  
        'Toannang\Raovat\Formwidgets\CategoryBox'=>[
          'label' => 'Chuyên mục',
          'description'=>'Chuyên mục',
          'code' => 'categorybox'
        ],
        
      ];
    }

    public function registerSettings()
    {

    }
}
