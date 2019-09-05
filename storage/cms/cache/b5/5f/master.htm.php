<?php 
class Cms5d70bc50e263f943506626_b341853a670b8149448715ef2848c55bClass extends Cms\Classes\LayoutCode
{
public function onStart(){
    $this['favicon'] = \toannang\Settings\Models\Settings::getFavicon();
}
}
