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
class PvtinhDBMienTayMyPost extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Danh sách tin đăng',
            'description' => 'Tin đăng của USER'
        ];
    }

    public function defineProperties()
    {
        return [];
    }
    public function onRun()
    {
        $user = Auth::getUser();
        $this->addCss(['components/pvtinhdbmientaymypost/assets/style.css']);
        $this->addJs(['components/pvtinhdbmientaymypost/assets/script.js']); 
        $results = Posts::select('toannang_raovat_posts.*', 'toannang_raovat_categories.name as category_name' )
                ->where('toannang_raovat_posts.user_id' , '=' , $user->id)
                ->join('toannang_raovat_post_category', 'toannang_raovat_post_category.posts_id', '=', 'toannang_raovat_posts.id')
                ->join('toannang_raovat_categories', 'toannang_raovat_categories.id', '=', 'toannang_raovat_post_category.category_id') 
                ->orderBy('toannang_raovat_posts.id', 'DESC')
                ->paginate(10);
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
    }

 

    public function onDelete()
    {
        $data  = post();
        $id = $data['id'];
        Posts::where('id', '=', $id)->delete(); 
    }
}
