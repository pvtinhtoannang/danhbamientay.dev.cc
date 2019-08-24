<?php
namespace Toannang\Raovat\FormWidgets;
use Backend\Classes\FormWidgetBase;
use Config;
use Toannang\Raovat\Models\Category; 
class CategoryBox extends FormWidgetBase
{

  public function widgetDetails()
  {
    return[
      'name' => 'CategoryBox',
      'description'=>'Danh sách chuyên mục'
    ];
  }

  public function render()
  {
    $this->prepareVars();  
    return $this->makePartial('widget', [
      'category' => $this->vars['category'],   
      'all_category' => $this->vars['all_category'],
    ]);
  }

public function prepareVars()
{
  $category = Category::all()->lists('name','id');  
  $this->vars['category'] = $this->model->category_id;   
  $this->vars['all_category'] = $category; 
}

  public function loadAssets()
  {
    $this->addCss('css/select2.min.css');
    $this->addJs('js/select2.min.js');
  }

}
