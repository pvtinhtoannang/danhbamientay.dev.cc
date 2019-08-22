<?php namespace Toannang\Raovat\Models;

use Model;

/**
 * Model
 */
class Category extends Model
{
    use \October\Rain\Database\Traits\Validation;

    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = true;


    /**
     * @var string The database table used by the model.
     */
    public $table = 'toannang_raovat_categories';

    /**
     * @var array Validation rules
     */

    protected $fillable = ['name', 'slug', 'desciption', 'meta_title', 'meta_description'];
    public $rules = [];

    public function getCategory($parent_id){
      return Category::where('id', '=', $parent_id)->list('id', 'name', 'parent_id', 'nest_left', 'nest_right', 'nest_depth', 'sort_order');
    }

}
