<?php
namespace Toannang\Raovat\FormWidgets;
use Backend\Classes\FormWidgetBase;
use Config;
use Toannang\Raovat\Models\District;
class DistrictBox extends FormWidgetBase
{

  public function widgetDetails()
  {
    return[
      'name' => 'District',
      'description'=>'Danh sách vị trí'
    ];
  }

  public function render()
  {
    $this->prepareVars();

    return $this->makePartial('widget', [
      'district' => $this->vars['district'],
      'all_district' => $this->vars['all_district']
    ]);
  }

  public function prepareVars()
  {
    $district = District::all()->lists('name','id');
    $this->vars['all_district'] = $district;
    $this->vars['district'] = $this->model->district;
  }

  public function loadAssets()
  {
    $this->addCss('css/select2.min.css');
    $this->addJs('js/select2.min.js');
  }
}
