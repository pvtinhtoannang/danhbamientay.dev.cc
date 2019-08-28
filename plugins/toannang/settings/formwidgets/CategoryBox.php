<?php
namespace Toannang\Settings\FormWidgets;
use Backend\Classes\FormWidgetBase;
use Config;
use Toannang\Raovat\Models\Category;
class CategoryBox extends FormWidgetBase
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
      'category' => $this->vars['category'],
      'all_category' => $this->vars['all_category']
    ]);
  }

  public function prepareVars()
  {
    $Category = Category::all()->lists('name','id');
    $this->vars['all_category'] = $Category;
    $this->vars['category'] = $this->model->categories;
  }

  public function loadAssets()
  {
      
  }
}
