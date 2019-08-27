<?php
use Toannang\Raovat\Models\PropertyType;
use Toannang\Raovat\Models\Category;
use Toannang\Raovat\Models\Locations;

use Toannang\Raovat\Models\District;
use Toannang\Raovat\Models\Province;
use Toannang\Raovat\Models\Ward;
/*
* DANH MỤC NHÀ ĐẤT
*/
  Route::get('seed-property-type', function(){
    /* NHÀ ĐẤT BÁN */
    $name = 'Mua bán';
    PropertyType::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'sort_order'=> 1
    ]);
    $name = 'Cho thuê';
    PropertyType::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'sort_order'=> 2
    ]);
    $name = 'Sang nhượng';
    PropertyType::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'sort_order'=> 3
    ]);
    $name = 'Dự án';
    PropertyType::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'sort_order'=> 4
    ]);


    return PropertyType::all();
  });
/*
* END DANH MỤC NHÀ ĐẤT
*/


  /*
  * CHUYÊN MỤC
  */
  Route::get('seed-category', function ()
  {
    $name = 'Bất động sản';
    Category::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'meta_title' => $name,
      'meta_description' => $name,
      'sort_order'=> 1
    ]);
    $name = 'Địa điểm ăn uống';
    Category::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'meta_title' => $name,
      'meta_description' => $name,
      'sort_order'=> 2
    ]);
    $name = 'Địa điểm du lịch';
    Category::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'meta_title' => $name,
      'meta_description' => $name,
      'sort_order'=> 3
    ]);

    $name = 'Thiết bị công nghệ';
    Category::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'meta_title' => $name,
      'meta_description' => $name,
      'sort_order'=> 4
    ]);

    $name = 'OTO xe máy';
    Category::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'meta_title' => $name,
      'meta_description' => $name,
      'sort_order'=> 5
    ]);


    $name = 'Xây dựng';
    Category::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'meta_title' => $name,
      'meta_description' => $name,
      'sort_order'=> 6
    ]);

    $name = 'Nông nghiệp';
    Category::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'meta_title' => $name,
      'meta_description' => $name,
      'sort_order'=> 7
    ]);

    $name = 'Tuyển dụng - việc làm';
    Category::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'meta_title' => $name,
      'meta_description' => $name,
      'sort_order'=> 8
    ]);

    $name = 'Làm đẹp';
    Category::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'meta_title' => $name,
      'meta_description' => $name,
      'sort_order'=> 9
    ]);

    return Category::all();
  });

  Route::get('seed-locations', function ()
  {
    $name = 'Địa điểm du lịch tâm linh';
    Locations::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'sort_order'=> 1
    ]);

    $name = 'Vườn trái cây';
    Locations::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'sort_order'=> 2
    ]);

    $name = 'Địa điểm lịch sử';
    Locations::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'sort_order'=> 3
    ]);

    $name = 'Địa điểm văn hoá';
    Locations::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'sort_order'=> 4
    ]);

    $name = 'Danh lam thắng cảnh';
    Locations::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'sort_order'=> 5
    ]);

    $name = 'Quán ăn gia đình';
    Locations::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'sort_order'=> 6
    ]);

    $name = 'Quán ăn lề đường, vỉa hè';
    Locations::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'sort_order'=> 7
    ]);

    $name = 'Cafe, trà sữa';
    Locations::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'sort_order'=> 8
    ]);

    $name = 'Sinh tố';
    Locations::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'sort_order'=> 9
    ]);

    $name = 'Ăn vặt';
    Locations::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'sort_order'=> 10
    ]);

    $name = 'Quán nhậu';
    Locations::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'sort_order'=> 11
    ]);

    $name = 'Bánh';
    Locations::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'sort_order'=> 12
    ]);

    $name = 'Khu ẩm thực';
    Locations::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'sort_order'=> 13
    ]);
    $name = 'Cơm văn phòng';
    Locations::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'sort_order'=> 14
    ]);

    $name = 'Beer Club';
    Locations::create([
      'name' => $name ,
      'slug' => str_slug($name),
      'sort_order'=> 15
    ]);

    return Locations::all();
  });

Route::get('backend-district/{id}', function ($id) {
    return District::all()->where('province_id', '=', $id);
});
Route::get('backend-ward/{id}', function ($id) {
    return Ward::all()->where('district_id', '=', $id);
});
Route::get('make-password', function ()
{
  return Hash::make('8935001800347');
});


Route::get('frontend-get-locations-bycategory/{id}', function ($id)
{
  return Locations::all()->where('category_id', '=', $id);
});
Route::get('frontend-get-property', function ()
{
  return PropertyType::all();
});

