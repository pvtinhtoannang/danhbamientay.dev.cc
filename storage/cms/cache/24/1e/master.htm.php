<?php 
class Cms5d67e8685b4c0015253755_02d97c566ba1285635e60966ee0e147dClass extends Cms\Classes\LayoutCode
{
public function onStart(){
    $this['favicon'] = \toannang\Settings\Models\Settings::getFavicon();
}
}
