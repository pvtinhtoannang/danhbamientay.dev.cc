<?php 
class Cms5d64cf1b5155f188038583_7f425b9a6cc4020fcc2f1878079430b9Class extends Cms\Classes\LayoutCode
{
public function onStart(){
    $this['favicon'] = \toannang\Settings\Models\Settings::getFavicon();
}
}
