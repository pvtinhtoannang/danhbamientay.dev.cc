<?php namespace Toannang\Raovat\Models;

use Model;

/**
 * Model
 */
class Ward extends Model
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
    public $table = 'toannang_raovat_xaphuongthitran';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $belongsTo = [
        'district' => 'Toannang\Raovat\Models\District'
    ];
}
