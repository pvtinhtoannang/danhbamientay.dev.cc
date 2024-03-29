<?php namespace Toannang\Componentbuilder\Components;

use Cms\Classes\ComponentBase; 
use toannang\Settings\Models\Settings;
use DB;
use Toannang\RaoVat\Models\Locations;
use Toannang\RaoVat\Models\Posts;
use Toannang\RaoVat\Models\PropertyType;

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

class PvtinhDBMienTayDangTin extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Đăng tin',
            'description' => 'PvtinhDBMienTayDangTin'
        ];
    }

    public function defineProperties()
    {
        return [];
    }
    public function onRun()
    {
        $this->addCss(['components/pvtinhdbmientaydangtin/assets/style.css']);
        $this->addJs(['components/pvtinhdbmientaydangtin/assets/script.js']); 
        $this->page['category_all'] = DB::table('toannang_raovat_categories')->select('id','name')->orderBy('sort_order','ASC')->get();
        $this->page['propertyType'] = DB::table('toannang_raovat_property_type')->select('id', 'name')->orderBy('sort_order','ASC')->get();

        $this->page['provinces'] = DB::table('toannang_raovat_tinhthanhpho')->select('id', 'name')->orderBy('id', 'DESC')->get();

        $this->page['districts'] = DB::table('toannang_raovat_quanhuyen')->select('id', 'name')->orderBy('id', 'DESC')->get();

        $this->page['wards'] = DB::table('toannang_raovat_xaphuongthitran')->select('id', 'name')->orderBy('id', 'DESC')->get();

    }

 

    public function onSave()
    {

        try {
            $data = post(); 
            $var = ['title'=> Input::get('title')];
            $rules = [
                'title'         => 'required|between:8,255',
                'description'   => 'required',
                'content'       => 'required',
            ];

            $messages = [
                'title.required' => 'Vui lòng nhập tiêu đề tin đăng!',                
                'title.between' => 'Tiêu đề tin đăng phải có độ dài từ 8 đến 225 kí tự!',
                'description.required' => 'Vui lòng nhập mô tả tin đăng!',
                'content.required' => 'Vui lòng nhập nội dung!',

            ];
            $validation = Validator::make($data, $rules,$messages);

            if ($validation->fails()) {
                throw new ValidationException($validation);
            }
            else{
                $price = (float)$data['price'];
                $post               = new Posts();
                $post->title        = $data['title'];
                $post->slug         = str_slug($data['title']); 
                $post->description  = $data['description'];
                $post->content      = $data['content'];
                $post->price        = $price;
                $post->area         = $data['area'];
                $post->province     = $data['province'];
                $post->district     = $data['district'];
                $post->ward         = $data['ward']; 
                $post->meta_title   = $data['title'];
                $post->meta_description = $data['description'];
                $post->categories = $data['category'];
                $post->address   = $data['address'];
                
                $post->user         = Auth::user()->id;
                if($data['category'] == 1){
                    $propertyType = PropertyType::select('slug')->where('id','=', $data['location_id'])->first();
                    $post->property_type = $propertyType->slug;
                }
                else{
                    $post->locations    = $data['location_id'];
                }
                if (Input::file('files-images')) {
                    $image = Input::file('files-images');
                    
                    $post->images = $image[0];
                    
                    foreach ($image as $files) {
                        $post->images_gallery = $files;    
                    }
                }                
                $post->save();
                return \Redirect::to('/dang-tin/');
//                return $post;
            }
        }   
        catch (Exception $ex) {
            if (Request::ajax()) throw $ex;
            else Flash::error($ex->getMessage());
        }
    }
}
