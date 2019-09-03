<?php namespace Toannang\Componentbuilder\Components;

use Cms\Classes\ComponentBase;
use RainLab\Pages\Components\StaticMenu;
use toannang\Settings\Models\Settings;
use Toannang\Raovat\Models\Posts;
use Toannang\Raovat\Models\PropertyType;
use Toannang\Raovat\Models\Province;
use Toannang\Raovat\Models\District;
use DB;
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

class PvtinhDBMienTayRealEstate extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Real Estate',
            'description' => 'Real Estate'
        ];
    }

    public function defineProperties()
    {
        return [];
    }
    public function onRun()
    {
        $this->addCss('components/pvtinhdbmientayrealestate/assets/style.css');
        $this->addJs('components/pvtinhdbmientayrealestate/assets/script.js');
        $this->addComponent(StaticMenu::class,'categoryMenu',['code' => 'danh-muc']);
        $this->page['listpost'] = Posts::select('toannang_raovat_posts.*', 'toannang_raovat_tinhthanhpho.name as province', 'toannang_raovat_quanhuyen.name as district', 'toannang_raovat_xaphuongthitran.name as ward')
            ->where('category_id' , '=' , Settings::get('propertytype'))
            ->join('toannang_raovat_post_category', 'toannang_raovat_post_category.posts_id', '=', 'toannang_raovat_posts.id')
            ->leftJoin('toannang_raovat_tinhthanhpho','toannang_raovat_tinhthanhpho.id', '=', 'toannang_raovat_posts.province')
            ->leftJoin('toannang_raovat_quanhuyen','toannang_raovat_quanhuyen.id', '=', 'toannang_raovat_posts.district')
            ->leftJoin('toannang_raovat_xaphuongthitran','toannang_raovat_xaphuongthitran.id', '=', 'toannang_raovat_posts.ward')
            ->paginate(12);

        $this->page['propertytype_home'] = DB::table('toannang_raovat_property_type' )
        ->select(  'name', 'slug')
        ->get();
        $this->page['provinces'] = Province::select('id','name')->get();
        
    }
    public function onSave()
    {
        try {
            $data = post(); 
            
            $rules = [
                'quan-huyen'         => 'min:0|numeric',
                'dien-tich'          => 'min:0|numeric'
            ];

            $messages = [
                'quan-huyen.min' => 'Vui lòng chọn quận huyện!',   
                'quan-huyen.numeric'           => 'Vui lòng chọn quận huyện!',
                'dien-tich.min' => 'Diện tích không hợp lệ!',
                'dien-tich.numeric'           => 'Vui lòng nhập diện tích!'
            ];
            $validation = Validator::make($data, $rules,$messages);

            if ($validation->fails()) {
                throw new ValidationException($validation);
            } 
            else{
                $link = 'tim-kiem?danh-muc='.Input::get('danh-muc').'&loai-hinh='.Input::get('loai-hinh').'&tinh-thanh='.Input::get('tinh-thanh').'&quan-huyen='.Input::get('quan-huyen').'&dien-tich='.Input::get('dien-tich');
                return Redirect($link);
            }
        }   
        catch (Exception $ex) {
            if (Request::ajax()) throw $ex;
            else Flash::error($ex->getMessage());
        }
    }
}
