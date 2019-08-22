<?php namespace Toannang\Raovat\Models;

use Model;

/**
 * Model
 */
class PropertyType extends Model
{
    use \October\Rain\Database\Traits\Validation;

    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;


    /**
     * @var string The database table used by the model.
     */
    public $table = 'toannang_raovat_property_type';

    /**
     * @var array Validation rules
     */
    protected $fillable = ['name', 'slug' , 'sort_order'];
    public $rules = [
    ];
}
