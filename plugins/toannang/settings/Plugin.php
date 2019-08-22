<?php namespace Toannang\Settings;

use System\Classes\PluginBase;
use toannang\Settings\Models\Settings;
use Event;
use toannang\Settings\Models\User;
use Yaml;
use File;
use RainLab\User\Models\User as UserModel;
use RainLab\User\Controllers\Users as UsersController;
class Plugin extends PluginBase
{
    public function registerComponents()
    {
    }

    public function registerSettings()
    {
        return [
            'settings' => [
                'label'       => 'Cài đặt website',
                'description' => 'Mục cài đặt tổng quan của website',
                'category'    => 'Cài đặt chung',
                'icon'        => 'icon-globe',
                'class'       => 'toannang\settings\Models\Settings',
                'order'       => 0,
                'keywords'    => 'settings, general, cài đặt chung',
                'permissions' => ['toannang.settings.access_settings']
            ]
        ];
    }
    public function boot()
    {
        Event::listen('backend.form.extendFields', function ($widget) {

            if (
                !$widget->getController() instanceof \RainLab\Pages\Controllers\Index ||
                !$widget->model instanceof \RainLab\Pages\Classes\MenuItem
            ) {
                return;
            }

            $widget->addTabFields([
                'viewBag[icon]' => [
                    'tab' => 'Icon',
                    'label' => 'icon',
                    'comment' => 'Tải lên icon cho menu',
                    'type' => 'mediafinder',
                    'mode' => 'image'
                ]
            ]);
        });
    }

}
