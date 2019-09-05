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

class PvtinhDBMienTayChinhSuaTinDang extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Update Post',
            'description' => 'Chỉnh sửa tin đã đăng'
        ];
    }

    public function defineProperties()
    {
        return [];
    }
    public function onRun()
    {
        $this->addCss(['components/pvtinhdbmientaychinhsuatindang/assets/style.css']);
        $this->addJs(['components/pvtinhdbmientaychinhsuatindang/assets/script.js']);
        $id =  $this->param('id');
        $slug =  $this->param('slug');
        $results = Posts::select('toannang_raovat_posts.*','toannang_raovat_posts.district as iddistrict' ,'toannang_raovat_posts.province as idprovince' , 'toannang_raovat_posts.ward as idward' , 'toannang_raovat_tinhthanhpho.name as province', 'toannang_raovat_quanhuyen.name as district', 'toannang_raovat_xaphuongthitran.name as ward', 'toannang_raovat_post_category.category_id', 'toannang_raovat_property_type.id as property_type_id')
                ->where('toannang_raovat_posts.slug' , '=' , $slug)
                ->where('toannang_raovat_posts.id' , '=' , $id)
                ->join('toannang_raovat_post_category', 'toannang_raovat_post_category.posts_id', '=', 'toannang_raovat_posts.id')
                ->join('toannang_raovat_categories', 'toannang_raovat_categories.id', '=', 'toannang_raovat_post_category.category_id')
                ->leftJoin('toannang_raovat_tinhthanhpho','toannang_raovat_tinhthanhpho.id', '=', 'toannang_raovat_posts.province')
                ->leftJoin('toannang_raovat_quanhuyen','toannang_raovat_quanhuyen.id', '=', 'toannang_raovat_posts.district')
                ->leftJoin('toannang_raovat_xaphuongthitran','toannang_raovat_xaphuongthitran.id', '=', 'toannang_raovat_posts.ward')
                ->leftJoin('toannang_raovat_property_type', 'toannang_raovat_property_type.slug', '=', 'toannang_raovat_posts.property_type')
                ->first();

        $this->page['post'] = $results;

        // dd($results->perPage());
       
        if($slug == 'bat-dong-san'){
            $this->page['isbds'] = 'true';
        }
        else{           
            $this->page['isbds'] = 'false';
        }


        $this->page['category_all'] = DB::table('toannang_raovat_categories')->select('id','name')->orderBy('sort_order','DESC')->get();

        if($results->category_id == 1){
            $this->page['propertyType'] = DB::table('toannang_raovat_property_type')->select('id', 'slug' , 'name')->orderBy('sort_order','DESC')->get();    
        }
        else{
            $this->page['propertyType'] = DB::table('toannang_raovat_locations')->select('id', 'slug', 'name')->orderBy('sort_order', 'DESC')->get();    
        }        


        $this->page['provinces'] = DB::table('toannang_raovat_tinhthanhpho')->select('id', 'name')->orderBy('id', 'DESC')->get();
        $this->page['districts'] = DB::table('toannang_raovat_quanhuyen')->select('id', 'name')->where('province_id','=', $results->idprovince)->orderBy('id', 'DESC')->get();
    
        $this->page['wards'] = DB::table('toannang_raovat_xaphuongthitran')->select('id', 'name')->where('district_id','=', $results->iddistrict)->orderBy('id', 'DESC')->get();

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
                'price'         => 'min:0|numeric',
                'area'          => 'min:0|numeric'
            ];

            $messages = [
                'title.required' => 'Vui lòng nhập tiêu đề tin đăng!',                
                'title.between' => 'Tiêu đề tin đăng phải có độ dài từ 8 đến 225 kí tự!',
                'description.required' => 'Vui lòng nhập mô tả tin đăng!',
                'content.required' => 'Vui lòng nhập nội dung!',
                'price.min' => 'Giá nhập vào không hợp lệ!',
                'area.min' => 'Diện tích nhập vào không hợp lệ!',

            ];
            $validation = Validator::make($data, $rules,$messages);

            if ($validation->fails()) {
                throw new ValidationException($validation);
            }
            else{
                $user = Auth::getUser();
                $image = Input::file('files-images');
                Posts::where('id', $this->param('id'))
                        ->update([
                            'title'=>$data['title'],                           
                            'slug'=>str_slug($data['title']),  
                            'description'=>$data['description'],  
                            'content'=>$data['content'],  
                            'area'=>$data['area'],  
                            'province'=>$data['province'],  
                            'district'=>$data['district'],  
                            'ward'=>$data['ward'],  
                            'meta_title'=>$data['title'],  
                            'meta_description'=>$data['description'],  
                            'meta_title'=>$data['title'],  
                            'price'=>$data['price'],
                            'address'=>$data['address']
                        ]);
                $post = Posts::find($this->param('id'));
                $post->categories   = $data['category'];
                if (Input::file('files-images')) {
                    $image = Input::file('files-images');
                    $post->images = $image[0];
                    foreach ($image as $files) {
                        $post->images_gallery = $files;    
                    }
                }
                if($data['category'] == 1){
                    $propertyType = PropertyType::select('slug')->where('id','=', $data['location_id'])->first();
                    $post->property_type = $propertyType->slug;
                }
                else{
                    $post->locations    = $data['location_id'];
                }                
                $post->save();
 
                return \Redirect::to('/danh-sach-tin-dang/');
            }
        }   
        catch (Exception $ex) {
            if (Request::ajax()) throw $ex;
            else Flash::error($ex->getMessage());
        }
    }
}
