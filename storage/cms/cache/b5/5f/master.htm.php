<?php 
class Cms5d72185664661338877560_e809750a843e7e86e4bb47a46323cca6Class extends Cms\Classes\LayoutCode
{
public function onStart(){
    $this['favicon'] = \toannang\Settings\Models\Settings::getFavicon();
}
}
