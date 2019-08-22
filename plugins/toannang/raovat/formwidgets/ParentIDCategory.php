<?php
namespace Toannang\Raovat\FormWidgets;
use Backend\Classes\FormWidgetBase;
use Config;
use Toannang\Raovat\Models\Category;

class ParentIDCategory extends FormWidgetBase
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
    // dump($this->vars['all_category']);
    return $this->makePartial('widget', ['all_category' => $this->vars['all_category'], 'parent_id' => $this->model->parent_id]);
  }

public function prepareVars()
{
    $category = Category::all()->lists('name','id');
    $this->vars['parent_id'] = $this->model->parent_id;
    $this->vars['all_category'] = $category;
}

  public function loadAssets()
  {
    $this->addCss('css/select2.min.css');
    $this->addJs('js/select2.min.js');
  }

}
