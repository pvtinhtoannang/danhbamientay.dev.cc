<?php 
class Cms5d761fdc09f16947386316_b99397a57f8af5e2a76c94d6bfe3debcClass extends Cms\Classes\LayoutCode
{
public function onStart(){
    $this['favicon'] = \toannang\Settings\Models\Settings::getFavicon();
}
}
