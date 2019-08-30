<?php
namespace Toannang\Raovat\FormWidgets;
use Backend\Classes\FormWidgetBase;
use Config;
use Toannang\Raovat\Models\PropertyType;
class PropertyTypeBoxPost extends FormWidgetBase
{

  public function widgetDetails()
  {
    return[
      'name' => 'propertytypeboxpost',
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
    $PropertyType = PropertyType::select('id', 'name', 'slug')->get();
    $this->vars['all_propertytype'] = $PropertyType;
    if($this->model->property_type != '-1'){
      $this->vars['propertytype'] = '-1';  
    }
    else{
      $this->vars['propertytype'] = $this->model->property_type;   
    }
    
  }

  public function loadAssets()
  {
    
  }
}
