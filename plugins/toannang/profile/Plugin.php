<?php namespace Toannang\Profile;

use System\Classes\PluginBase;
use Rainlab\User\Models\User as UserModel;
use Rainlab\User\Controllers\Users as UserController;
use Toannang\Profile\Models\Profile as ProfileModel;
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
		UserModel::extend(function ($model)
		{
			$model->hasOne['profile'] = ['Toannang\Profile\Models\Profile']; 
		});


		UserController::extendFormFields(function ($form, $model, $context)
		{
		    if(!$model instanceof UserModel){
		        return;
            }
		    if(!$model->exists){
		        return;
            }
            ProfileModel::getFromUser($model);

			$form->addTabFields([
				'profile[website]'=>[
					'label'=>'Website',
					'tab'=>'Hồ sơ',
					'type'=>'text',
					'span'=>'auto'
				],
				'profile[phone_number]'=>[
					'label'=>'Số điện thoại',
					'tab'=>'Hồ sơ',
					'type'=>'text',
					'span'=>'auto'
				],
				'profile[address]'=>[
					'label'=>'Địa chỉ',
					'tab'=>'Hồ sơ',
					'type'=>'text',
					'span'=>'auto'
				],
				'profile[bio]'=>[
					'label'=>'Lịch sử doanh nghiệp',
					'tab'=>'Hồ sơ',
					'type'=>'textarea',
					'span'=>'auto'
				],
				'profile[id_social]'=>[
					'label'=>'ID mạng xã hội',
					'tab'=>'Hồ sơ',
					'type'=>'text',
					'span'=>'auto'
				],
				'profile[link_avatar]'=>[
					'label'=>'Liên kết ảnh đại diện',
					'tab'=>'Hồ sơ',
					'type'=>'text',
					'span'=>'auto'
				],
				'profile[type_social]'=>[
					'label'=>'Loại mạng xã hội',
					'tab'=>'Hồ sơ',
					'type'=>'text',
					'span'=>'auto'
				]
			]);
		});
	}
 
}
