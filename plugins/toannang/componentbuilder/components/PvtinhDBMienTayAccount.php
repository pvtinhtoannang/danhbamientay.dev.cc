<?php namespace Toannang\Componentbuilder\Components;

use Cms\Classes\ComponentBase; 
use toannang\Settings\Models\Settings;
use DB;
use Toannang\RaoVat\Models\Locations;
use Toannang\RaoVat\Models\Posts;
use System\Models\File;
use Lang;
use Auth;
use Mail;
use Event;
use Flash;
use Input;
use Request;
use Redirect;
use Validator;
use ValidationException;
use ApplicationException;
use Session;
use Exception; 

use Rainlab\User\Models\User;
class PvtinhDBMienTayAccount extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Account',
            'description' => 'Cập nhật tài khoản'
        ];
    }

    public function defineProperties()
    {
        return [];
    }
    public function onRun()
    {
        $this->addCss(['components/pvtinhdbmientayaccount/assets/style.css']);
        $this->addJs(['components/pvtinhdbmientayaccount/assets/script.js']); 
 
    } 


    public function onSave()
    {
        try {
            $data = post(); 
             
            $rules = [
                'name'         => 'required|between:8,255',
                'email'   => 'required|email|between:8,255',
                'phone_number'         => 'required|digits:10',
                'address'          => 'required|between:8,255'
            ];

            $messages = [
                'name.required'         => 'Vui lòng nhập tên của bạn hoặc tên doanh nghiệp của bạn!',                
                'name.between'          => 'Tên của bạn hoặc tên doanh nghiệp của bạn phải có độ dài từ 8 đến 225 kí tự!',
                'email.required'        => 'Vui lòng nhập email!',
                'email.email'           => 'Email chưa đúng định dạng!',
                'email.between'         => 'Email phải có độ dài từ 8 đến 225 kí tự!',
                'phone_number.required'        =>  'Vui lòng nhập số điện thoại',
                'phone_number.digits'           =>  'Vui lòng nhập số điện thoại đúng định dạng',
                'address.required'         => 'Vui lòng nhập địa chỉ của bạn!',                
                'address.between'          => 'Địa chỉ của bạn phải có độ dài từ 8 đến 225 kí tự!',
                

            ];
            $validation = Validator::make($data, $rules,$messages);

            if ($validation->fails()) {
                throw new ValidationException($validation);
            }
            else{
                $user = Auth::getUser();
                
                Db::table('users')
                ->where('id', $user->id)
                ->update([
                    'name' => Input::get('name'),
                    'email' => Input::get('email'),
                    'phone_number' => Input::get('phone_number'),
                    'address' => Input::get('address'),
                    'bio' => Input::get('bio')
                ]);

            }
        }   
        catch (Exception $ex) {
            if (Request::ajax()) throw $ex;
            else Flash::error($ex->getMessage());
        }
    }
}
