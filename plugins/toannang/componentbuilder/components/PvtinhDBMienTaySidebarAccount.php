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
class PvtinhDBMienTaySidebarAccount extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Sidebar Account',
            'description' => 'Menu tài khoản'
        ];
    }

    public function defineProperties()
    {
        return [];
    }
    public function onRun()
    {
        $this->addCss(['components/pvtinhdbmientaysidebaraccount/assets/style.css']);
        $this->addJs(['components/pvtinhdbmientaysidebaraccount/assets/script.js']); 
 
    }

 

    public function onSubmit()
    {
        $user = Auth::getUser();  

        if (Input::file('avatar')) {
            $image = Input::file('avatar');
            $userupdate = User::where('id', $user->id)->first();     

            $userupdate->avatar = $image; 

            $userupdate->update(); 
        }  
        else {
            echo 'khog co file';
        }

        // return Redirect('\tai-khoan');
    }
}
