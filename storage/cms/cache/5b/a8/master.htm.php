<?php 
class Cms5d7761e180a87415338475_1541c970aa57ad5f7dfe09f616e8beb7Class extends Cms\Classes\LayoutCode
{
public function onStart(){
    $this['favicon'] = \toannang\Settings\Models\Settings::getFavicon();
}
}
