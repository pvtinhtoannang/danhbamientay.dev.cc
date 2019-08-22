<?php namespace Toannang\Raovat\Models;

use Model;

/**
 * Model
 */
class Province extends Model
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
    public $table = 'toannang_raovat_tinhthanhpho';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
    protected $fillable = ['name','type'];
    public $hasMany = [
        'district' =>
        [
          'Toannang\Raovat\Models\District',
          'table' => 'toannang_raovat_quanhuyen'
        ]
    ];
}
