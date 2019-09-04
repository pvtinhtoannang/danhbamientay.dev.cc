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
use Hash;

use Rainlab\User\Models\User;
class PvtinhDBMienTayChangePassword extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Đổi mật khẩu',
            'description' => 'Cập nhật tài khoản'
        ];
    }

    public function defineProperties()
    {
        return [];
    }
    public function onRun()
    {
        $this->addCss(['components/pvtinhdbmientaychangepassword/assets/style.css']);
        $this->addJs(['components/pvtinhdbmientaychangepassword/assets/script.js']); 
 
    } 


    public function onSave()
    {
        try {
            $data = post(); 
            $user =  Auth::getUser();

            $rules = [
                'passwordold' => ['required', function ($attribute, $value, $fail) use ($user) {
                    if (!\Hash::check($value, $user->password)) {
                        return $fail('Mật khẩu bạn nhập vào chưa chính xác');
                    }
                }],
                'password'   => 'required|between:8,255|confirmed',  
                'password_confirmation' => 'required_with:password|between:8,255',
            ];

            $messages = [
                'passwordold.required'      => 'Vui lòng nhập mật khẩu cũ',
                'password.required'         => 'Vui lòng nhập mật khẩu của bạn!',                
                'password.between'          => 'Mật khẩu của bạn quá ngắn, phải từ 8 kí tự trở lên',
                'password.confirmed'        => 'Nhập lại mật khẩu chưa đúng!',
                'password_confirmation.required_with' => 'Nhập lại mật khẩu chưa đúng!'

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
                    'password' => Hash::make(Input::get('password')),
                ]);
                return Redirect('/tai-khoan');
            }
        }   
        catch (Exception $ex) {
            if (Request::ajax()) throw $ex;
            else Flash::error($ex->getMessage());
        }
    }
}
