<?php
/*
 * Phan Kieu Thanh Lam
 * phankieuthanhlam@gmail.com
 */

namespace Toannang\Contact\Components;
use Cms\Classes\ComponentBase;
use Input;
use Jenssegers\Date\Date;
use Mail;
use System\Helpers\DateTime;
use Validator;
use Redirect;
use Toannang\Contact\Models\Contact as Contact;
class ContactForm extends ComponentBase{
    public function componentDetails()
    {
        // TODO: Implement componentDetails() method.
        return[
          'name' => 'Contact Form',
          'description' => 'Simple Contact Form',
        ];
    }
    public function onSend(){
        $valid = Validator::make([
            'name' => Input::get('fullname'),
            'email' => Input::get('email'),
            'phone' => Input::get('phone'),
        ],[
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required|numeric',
        ]);
        if($valid->fails()){
            return Redirect::back()->withErrors($valid);
        }else{
            $forms = [
                'name' => Input::get('fullname'),
                'email' => Input::get('email'),
                'phone' => Input::get('phone'),
                'content' => Input::get('message'),
            ];
            Mail::send('toannang.contact::mail.message',$forms,function ($message){
                $message->to('phankieuthanhlam@gmail.com','Admin');
                $message->subject('Test Email');
            });
            $contact = new Contact;
            $contact->name = Input::get('fullname');
            $contact->email = Input::get('email');
            $contact->phone = Input::get('phone');
            $contact->message = Input::get('message');
            $contact->created_at = Date::now();
            $contact->save();
        }

    }
}