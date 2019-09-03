<?php namespace Toannang\Profile;

use System\Classes\PluginBase;
use Rainlab\User\Controllers\Users as UserController;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
    }

    public function registerSettings()
    {
    }

    public function boot()
    {
    	UserController::extendFormFields(function ($form, $model, $context)
    	{
    		 
    		$form->addTabFields([
    			'address'=>[
    				'label'		=> 	'Địa chỉ',
    				'type'		=>	'text', 
    				'tab'		=>	'Thông tin doanh nghiệp'
    			],
    			'website'=>[
    				'label'		=> 	'Website',
    				'type'		=>	'text',
    				'span'		=>	'left',
    				'tab'		=>	'Thông tin doanh nghiệp'
    			],
    			'phone_number'=>[
    				'label'		=> 	'Số điện thoại',
    				'type'		=>	'text',
    				'span'		=>	'right',
    				'tab'		=>	'Thông tin doanh nghiệp'
    			],
    			'bio'=>[
    				'label'		=> 	'Mô tả doanh nghiệp',
    				'type'		=>	'textarea',
    				'span'		=>	'full',
    				'size'		=>	'large',
    				'tab'		=>	'Thông tin doanh nghiệp'c
    			],
    		]);
    	});
    }
}
