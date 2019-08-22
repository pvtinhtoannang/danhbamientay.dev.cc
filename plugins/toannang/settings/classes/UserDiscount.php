<?php
/**
 * Created by PhpStorm.
 * User: thanhlam
 * Date: 14/06/2019
 * Time: 22:56
 */

namespace toannang\settings\classes;
use RainLab\User\Models\User;
use toannang\Settings\Models\Settings;
use Auth;

class UserDiscount
{
    static public function getUserDiscount($total){
        //lấy giảm giá cho khách hàng
        $ranks = Settings::get('point_system');
        $result = [
            'rank_name' => '',
            'percent' => 0,
            'amount' => 0
        ];
        if(!empty($ranks)){
            $user = Auth::getUser();
            if(!$user) return redirect(url('/dang-nhap'));
            if(key_exists($user->rank_name,$ranks)){
                $user_discount = $ranks[$user->rank_name]['amount'];
                $result =  [
                    'rank_name' => $ranks[$user->rank_name]['rank_name'],
                    'percent' => $ranks[$user->rank_name]['amount'],
                    'amount' => $user_discount*($total/100)
                ];

            }
        }
        return $result;
    }
    static public function increaseUserPoint($user_id,$amount){
        $user = User::find($user_id);
        $user->points = (float)$user->points + $amount;
        $user->save();
    }
}