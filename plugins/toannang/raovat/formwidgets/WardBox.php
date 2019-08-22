<?php
namespace Toannang\Raovat\FormWidgets;
use Backend\Classes\FormWidgetBase;
use Config;
use Toannang\Raovat\Models\Ward;
class WardBox extends FormWidgetBase
{

  public function widgetDetails()
  {
    return[
      'name' => 'WardBox',
      'description'=>'Danh sách vị trí'
    ];
  }

  public function render()
  {
    $this->prepareVars();

    return $this->makePartial('widget', [
      'ward' => $this->vars['ward'],
      'all_ward' => $this->vars['all_ward']
    ]);
  }

  public function prepareVars()
  {
    $ward = Ward::all()->lists('name','id');
    $this->vars['all_ward'] = $ward;
    $this->vars['ward'] = $this->model->ward;
  }

  public function loadAssets()
  {
 
  }
}
