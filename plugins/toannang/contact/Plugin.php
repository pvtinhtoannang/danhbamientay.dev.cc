<?php namespace toannang\Contact;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
        return[
          'Toannang\Contact\Components\ContactForm' => 'contactform'
        ];
    }

    public function registerSettings()
    {
    }
}
