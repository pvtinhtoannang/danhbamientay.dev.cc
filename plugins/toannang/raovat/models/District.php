<?php namespace Toannang\Raovat\Models;

use Model;

/**
 * Model
 */
class District extends Model
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
    public $table = 'toannang_raovat_quanhuyen';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
    protected $fillable = ['name','type','district_id'];
    public $belongsTo = [
        'district' => 'Toannang\Raovat\Models\Province'
    ];
    public $hasMany = [
        'Ward' =>
        [
          'Toannang\Raovat\Models\Ward',
          'table' => 'toannang_raovat_xaphuongthitran'
        ]
    ];
}
