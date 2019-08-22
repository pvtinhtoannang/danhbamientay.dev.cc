<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 6/6/2019
 * Time: 10:45
 */

namespace toannang\Settings\Models;
use Model;
use Config;
use OFFLINE\Mall\Models\Category;

class Settings extends Model
{
    public $implement = ['System.Behaviors.SettingsModel'];
    public $translatable = [];
    public $settingsCode = 'toannang_settings_settings';

    public $settingsFields = 'fields.yaml';

    public $rules = [
    ];

    static public function getLogo(){
        return url(Config::get('cms.storage.media.path').self::get('logo_image'));
    }
    static public function getFavicon(){
        return url(Config::get('cms.storage.media.path').self::get('favicon_image'));
    }



}