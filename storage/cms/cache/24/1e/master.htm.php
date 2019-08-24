<?php 
class Cms5d60b2e9c9842539013171_55975d965dfd85dd9587d148823295fdClass extends Cms\Classes\LayoutCode
{
public function onStart(){
    $this['favicon'] = \toannang\Settings\Models\Settings::getFavicon();
}
}
