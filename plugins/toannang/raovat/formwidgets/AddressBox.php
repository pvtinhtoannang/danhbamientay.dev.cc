<?php
namespace Toannang\Raovat\FormWidgets;
use Backend\Classes\FormWidgetBase;
use Config;
use Toannang\Raovat\Models\District;
use Toannang\Raovat\Models\Province;
use Toannang\Raovat\Models\Ward;
class AddressBox extends FormWidgetBase
{

  public function widgetDetails()
  {
    return[
      'name' => 'AddressBox',
      'description'=>'Danh sách vị trí'
    ];
  }

  public function render()
  {
    $this->prepareVars(); 
    return $this->makePartial('widget', [
      'province' => $this->vars['province'],
      'district' => $this->vars['district'],
      'ward' => $this->vars['ward'],
      'all_province' => $this->vars['all_province'],
      'all_district' => $this->vars['all_district'],
      'all_ward' => $this->vars['all_ward'],
    ]);
  }

public function prepareVars()
{
  $district = District::all()->lists('name','id');
  $province = Province::all()->lists('name','id');
  $ward = Ward::all()->lists('name','id');
  $this->vars['province'] = $this->model->province;
  $this->vars['district'] = $this->model->district;
  $this->vars['ward'] = $this->model->ward;
  $this->vars['all_province'] = $province;
  $this->vars['all_district'] = $district;
  $this->vars['all_ward'] = $ward;
}

  public function loadAssets()
  {
    $this->addCss('css/select2.min.css');
    $this->addJs('js/select2.min.js');
  }

}
