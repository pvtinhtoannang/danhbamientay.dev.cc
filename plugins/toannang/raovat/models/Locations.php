<?php namespace Toannang\Raovat\Models;

use Model;

/**
 * Model
 */
class Locations extends Model
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
    public $table = 'toannang_raovat_locations';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    protected $fillable = ['name', 'slug', 'desciption', 'sort_order', 'category_id'];
}
