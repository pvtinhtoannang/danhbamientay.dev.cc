<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 6/7/2019
 * Time: 16:15
 */

namespace toannang\ComponentBuilder\Classes;

use OFFLINE\Mall\Models\GeneralSettings;
use OFFLINE\Mall\Models\Category;
use OFFLINE\Mall\Models\Product;
use System\Classes\PluginManager;
use Cms\Classes\Page;


class Helpers
{
    public $product;
    public $theme;

    public function __construct()
    {
        $this->theme = new \Cms\Classes\Theme;
    }
    static protected function instance(){
        return new Helpers();

    }
    static public function getTheme(){
        return Helpers::instance()->theme;
    }
    static public function getProductsByCatID($catID, $limit = 4 ){
        $page    = GeneralSettings::get('product_page', 'product');
        $cmsPage = Page::loadCached(self::getTheme(), $page);
        $bestseller = Category::findOrFail($catID);
        $categories = optional($bestseller->getAllChildrenAndSelf())->pluck('id');
        $products = Product::whereHas('categories', function ($q) use ($categories) {
            $q->whereIn('category_id', $categories);
        })->take($limit)->get()
            ->map(function ($item) use ($cmsPage,$page){
                $pageUrl = $cmsPage->url($page, [
                    'slug'    => $item->slug
                ]);
                return [
                    'product_id' => $item->id,
                    'slug' => $pageUrl,
                    'price' => $item->price('VND')->string,
                    'old_price' => $item->old_price->first(),
                    'name' => $item->name,
                    'featured_img' => $item->main_image_set->images()->first(),
                    //'images' => $item->main_image_set->images()->get(),
                    'description' => $item->description_short
                ];
            });
        return $products;
    }
    static public function getNewestProducts($limit){
        $page    = GeneralSettings::get('product_page', 'product');
        $cmsPage = Page::loadCached(self::getTheme(), $page);
        $products = Product::orderBy('created_at','desc')->take($limit)->get()
            ->map(function ($item) use ($cmsPage,$page){
                $pageUrl = $cmsPage->url($page, [
                    'slug'    => $item->slug
                ]);
                return [
                    'product_id' => $item->id,
                    'slug' => $pageUrl,
                    'price' => $item->price('VND')->string,
                    'old_price' => $item->old_price->first(),
                    'name' => $item->name,
                    'featured_img' => $item->main_image_set->images()->first(),
                    //'images' => $item->main_image_set->images()->get(),
                    'description' => $item->description_short
                ];
            });
        return $products;
    }
    static public function getProductsByCatIDs($catIDs = array(),$limit){
        $page    = GeneralSettings::get('product_page', 'product');

        $cmsPage = Page::loadCached(self::getTheme(), $page);
        $categories = Category::whereIn('id',$catIDs)->get()->map(function ($cat){
            return [$cat->id];
        });
        $products = Product::whereHas('categories', function ($q) use ($categories) {
            $q->whereIn('category_id', $categories);
        })->take($limit)->get()
            ->map(function ($item) use ($cmsPage,$page){
                $pageUrl = $cmsPage->url($page, [
                    'slug'    => $item->slug
                ]);
                return [
                    'product_id' => $item->id,
                    'slug' => $pageUrl,
                    'price' => $item->price('VND')->string,
                    'old_price' => $item->old_price->first(),
                    'name' => $item->name,
                    'featured_img' => $item->main_image_set->images()->first(),
                    //'images' => $item->main_image_set->images()->get(),
                    'description' => $item->description_short
                ];
            });
        return $products;
    }
    static public function rainlabTranslateInstalled(): bool
    {
        return PluginManager::instance()->exists('RainLab.Translate');
    }

    static public function getAllCategory(){
        $page    = GeneralSettings::get('category_page', 'product');
        $cmsPage = Page::loadCached(self::getTheme(), $page);
        $categories = new Category();
        return $categories->getNested()->map(function ($cat) use ($cmsPage,$page){
            $pageUrl = $cmsPage->url($page, [
                'slug'    => $cat->slug
            ]);
            return[
                'name'=> $cat->name,
                'slug' => $pageUrl,
                'children' =>   $cat->children->map(function ($child) use ($cmsPage,$page){
                    $pageUrl = $cmsPage->url($page, [
                        'slug'    => $child->slug
                    ]);
                    return[
                        'name'=> $child->name,
                        'slug' => $pageUrl
                    ];
                }),
            ];
        });
    }
}