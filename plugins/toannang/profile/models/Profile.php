<?php namespace Toannang\Profile\Models;

use Model;

/**
 * Model
 */
class Profile extends Model
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
    public $table = 'toannang_profile_';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $belongsTo =['user'=>['RainLab\User\Models\User']];

    public static function getFromUser($user){
        if($user->profile){
            return $user->profile;
        }
        $profile = new static;
        $profile->user = $user;
        $profile->save();
        $user->profile = $profile;
        return $profile;
    }
}
