<?php 
class Cms5d73162a45d59476119430_2180f7f196445fc176ae68a950b69de2Class extends Cms\Classes\LayoutCode
{
public function onStart(){
    $this['favicon'] = \toannang\Settings\Models\Settings::getFavicon();
}
}
