<?php
namespace Toannang\Raovat\FormWidgets;
use Backend\Classes\FormWidgetBase;
use Config;
use Toanang\Raovat\Models\Locations;

class SortLocations extends FormWidgetBase
{

  public function widgetDetails()
  {
    return[
      'name' => 'SortLocations',
      'description'=>'Sắp xếp thứ tự Vị trí'
    ];
  }

  public function render()
  {
    $this->prepareVars();
    return $this->makePartial('widget', ['sort_order' => $this->vars['sort_order']]);
  }

public function prepareVars()
{
    $this->vars['sort_order'] = $this->model->sort_order;
    $sort_order = $this->model->max('sort_order');
    $this->vars['max_value'] = $sort_order;
    //NẾU GIÁ TRỊ SẮP XẾP CHƯA CÓ - THÌ TẠO ĐƠN VỊ MỚI
    if($this->vars['sort_order'] == NULL){
      $this->vars['sort_order'] = $sort_order+1;
    }
    //LẤY GIÁ TRỊ HIỆN TẠI
    else{
      $this->vars['sort_order'] = $this->model->sort_order;
    }
}

  public function loadAssets()
  {
    $this->addCss('css/style.css');
    $this->addJs('js/script.js');
  }



}
