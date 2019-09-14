<?php 
class Cms5d7b354c1c6c8787640819_1db900eccc5bf678aa373c6557580a3dClass extends Cms\Classes\LayoutCode
{
public function onStart(){
    $this['favicon'] = \toannang\Settings\Models\Settings::getFavicon();
}
}
