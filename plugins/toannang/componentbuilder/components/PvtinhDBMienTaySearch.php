<?php namespace Toannang\Componentbuilder\Components;

use Cms\Classes\ComponentBase;
use RainLab\Pages\Components\StaticMenu;
use toannang\Settings\Models\Settings;
use Toannang\Raovat\Models\Posts;
use Toannang\Raovat\Models\PropertyType;
use Toannang\Raovat\Models\Province;
use Toannang\Raovat\Models\District;
use Toannang\Raovat\Models\Locations;
use Toannang\Raovat\Models\Category; 
use Illuminate\Pagination\Paginator;
use DB;
class PvtinhDBMienTaySearch extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Tìm kiếm',
            'description' => 'Tìm kiếm'
        ];
    }

    public function defineProperties()
    {
        return [];
    }



    public function onRun()
    {
        $this->addCss('components/pvtinhdbmientaysearch/assets/style.css');  
        $this->addJs('components/pvtinhdbmientaysearch/assets/script.js');
        if(isset($_GET['danh-muc'])){
            if(!empty($_GET['danh-muc']) || ($_GET['danh-muc'] == 'bat-dong-san')){
                if( isset($_GET['loai-hinh']) &&  ($_GET['tinh-thanh']!== NULL) &&  ($_GET['quan-huyen'] !== NULL) && ($_GET['dien-tich'] !== NULL)){
                    $PropertyType   =   $_GET['loai-hinh'];
                    $Province       =   $_GET['tinh-thanh'];
                    $District       =   $_GET['quan-huyen'];
                    $Area           =   $_GET['dien-tich'];
                    $key_property = $key_province = $key_district = $key_area = '';
                     
                    if(!empty($Province)){
                        $key_province = $Province;
                    }
                    else{
                        $key_province = -1;
                    }
                    if(!empty($District)){
                        $key_district = $District;
                    }
                    else{
                        $key_district = -1;
                    }
                    
                    if(!empty($Area) && $Area == 0){
                        $results = Posts::select('toannang_raovat_posts.*', 
                        'toannang_raovat_tinhthanhpho.name as province', 
                        'toannang_raovat_quanhuyen.name as district', 
                        'toannang_raovat_xaphuongthitran.name as ward')
                        ->leftJoin('toannang_raovat_quanhuyen', 'toannang_raovat_quanhuyen.id', '=', 'district')
                        ->leftJoin('toannang_raovat_tinhthanhpho', 'toannang_raovat_tinhthanhpho.id', '=', 'province')
                        ->leftJoin('toannang_raovat_xaphuongthitran', 'toannang_raovat_xaphuongthitran.id', '=', 'toannang_raovat_posts.district')
                        ->where('toannang_raovat_posts.property_type', '=', $PropertyType)
                        ->where('toannang_raovat_posts.province', '=', $Province)
                        ->where('toannang_raovat_posts.district', '=', $District) 
                        ->where('toannang_raovat_posts.area', '=', $key_area) 
                        ->paginate(16);
                    }
                    else{
                        $results = Posts::select('toannang_raovat_posts.*', 
                        'toannang_raovat_tinhthanhpho.name as province', 
                        'toannang_raovat_quanhuyen.name as district', 
                        'toannang_raovat_xaphuongthitran.name as ward')
                        ->leftJoin('toannang_raovat_quanhuyen', 'toannang_raovat_quanhuyen.id', '=', 'district')
                        ->leftJoin('toannang_raovat_tinhthanhpho', 'toannang_raovat_tinhthanhpho.id', '=', 'province')
                        ->leftJoin('toannang_raovat_xaphuongthitran', 'toannang_raovat_xaphuongthitran.id', '=', 'toannang_raovat_posts.district')
                        ->where('toannang_raovat_posts.property_type', '=', $PropertyType) 
                        ->where('toannang_raovat_posts.province', '=', $Province)
                        ->where('toannang_raovat_posts.district', '=', $District)  
                        ->paginate(16);
                    }
                 
                
                $this->page['listpost'] = $results;
                $this->page['categoryname'] = PropertyType::select('name')->where('slug', '=', $PropertyType )->first();
                $page = array();
                $page['count'] = $results->count();
                $page['current'] = $results->currentPage();
                $page['hasmore'] = $results->hasMorePages();
                $page['last'] = $results->lastPage();
                $page['nextpage'] = $results->nextPageUrl();
                $page['previous'] = $results->previousPageUrl();
                $page['total'] = $results->total();
                $this->page['pagination'] = $page;
                $this->page['isbds'] = 'true';

                }
            }else{
                return;
            }
            if(!empty($_GET['danh-muc']) || ($_GET['danh-muc'] != 'tat-ca-danh-muc')){
                if(isset($_GET['keyword'])){
                     $keyword = $_GET['keyword'];

                $results = Posts::select('toannang_raovat_posts.*', 
                        'toannang_raovat_tinhthanhpho.name as province', 
                        'toannang_raovat_quanhuyen.name as district', 
                        'toannang_raovat_xaphuongthitran.name as ward')
                        ->leftJoin('toannang_raovat_quanhuyen', 'toannang_raovat_quanhuyen.id', '=', 'district')
                        ->leftJoin('toannang_raovat_tinhthanhpho', 'toannang_raovat_tinhthanhpho.id', '=', 'province')
                        ->leftJoin('toannang_raovat_xaphuongthitran', 'toannang_raovat_xaphuongthitran.id', '=', 'toannang_raovat_posts.district')
                        ->where('toannang_raovat_posts.title', 'like', '%'.$keyword.'%')
                        ->paginate(16);
                        
                        $this->page['listpost'] = $results;
                        $page = array();
                        $page['count'] = $results->count();
                        $page['current'] = $results->currentPage();
                        $page['hasmore'] = $results->hasMorePages();
                        $page['last'] = $results->lastPage();
                        $page['nextpage'] = $results->nextPageUrl();
                        $page['previous'] = $results->previousPageUrl();
                        $page['total'] = $results->total();
                        $this->page['pagination'] = $page;
                        $this->page['isbds'] = 'false';
                }
               
            }else{
                return;
            }
        }
        else{

        }
        
    }
    
}
