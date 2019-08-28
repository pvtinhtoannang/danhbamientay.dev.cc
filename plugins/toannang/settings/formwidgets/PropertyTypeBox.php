<?php
namespace Toannang\Settings\FormWidgets;
use Backend\Classes\FormWidgetBase;
use Config;
use Toannang\Raovat\Models\Category;
class PropertyTypeBox extends FormWidgetBase
{

  public function widgetDetails()
  {
    return[
      'name' => 'propertytypebox',
      'description'=>'danh mục bất động sản'
    ];
  }

  public function render()
  {
    $this->prepareVars(); 
    return $this->makePartial('widget', [
      'propertytype' => $this->vars['propertytype'],
      'all_propertytype' => $this->vars['all_propertytype']
    ]);
  }

  public function prepareVars()
  {
    $Category = Category::all()->lists('name','id');
    $this->vars['all_propertytype'] = $Category;
    $this->vars['propertytype'] = $this->model->property_type;
  }

  public function loadAssets()
  {
    
  }
}
