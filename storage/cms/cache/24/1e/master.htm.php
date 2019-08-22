<?php 
class Cms5d5e38f9df678124368943_cb050dbb4c517ddbf3f620e1711860f3Class extends Cms\Classes\LayoutCode
{
public function onStart(){
    $this['favicon'] = \toannang\Settings\Models\Settings::getFavicon();
}
}
