<?php namespace Toannang\Raovat\Models;

use Model;

/**
 * Model
 */
class Posts extends Model
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
    public $table = 'toannang_raovat_posts';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];


    public $attachOne = ['images'=>'System\Models\File'];
    public $attachMany = ['images_gallery'=>'System\Models\File'];


    public $belongsToMany = [
      'categories' => [
        'Toannang\Raovat\Models\Category',
        'table'=>'toannang_raovat_post_category',
        'order'=>'name'
      ],
      'locations' => [
        'Toannang\Raovat\Models\Locations',
        'table'=>'toannang_raovat_post_location',
        'order'=>'name'
      ]
      
    ];
    public $belongsTo  = [
        'user' => 'Rainlab\User\Models\User'
    ]; 
}
