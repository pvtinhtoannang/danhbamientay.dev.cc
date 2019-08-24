<?php 
class Cms5d5f5174f02d8233532163_792aa9069e33b255982ff915f3f234efClass extends Cms\Classes\LayoutCode
{
public function onStart(){
    $this['favicon'] = \toannang\Settings\Models\Settings::getFavicon();
}
}
