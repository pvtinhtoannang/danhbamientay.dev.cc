<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* C:\Program Files (x86)\Ampps\www\dev\danhbamientay.dev.cc/plugins/rainlab/user/components/account/update.htm */
class __TwigTemplate_3c7aefd6e8cb3e9f5e280dbfd7542f94a53a821285a44abb6d7aee4d9b60b9a5 extends \Twig\Template
{
    private $source;

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo call_user_func_array($this->env->getFunction('form_ajax')->getCallable(), ["ajax", "onUpdate"]);
        echo "
    
    ";
        // line 3
        echo call_user_func_array($this->env->getFunction('form_token')->getCallable(), ["token"]);
        echo "
    ";
        // line 4
        echo call_user_func_array($this->env->getFunction('form_sessionKey')->getCallable(), ["sessionKey"]);
        echo "
    

    <div class=\"form-group\">
        <label for=\"accountName\">Full Name</label>
        <input name=\"name\" type=\"text\" class=\"form-control\" id=\"accountName\" value=\"";
        // line 9
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "name", [], "any", false, false, false, 9), "html", null, true);
        echo "\">
    </div>

    <div class=\"form-group\">
        <label for=\"accountEmail\">Email</label>
        <input name=\"email\" type=\"email\" class=\"form-control\" id=\"accountEmail\" value=\"";
        // line 14
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "email", [], "any", false, false, false, 14), "html", null, true);
        echo "\">
    </div>

    <div class=\"form-group\">
        <label for=\"accountPassword\">New Password</label>
        <input name=\"password\" type=\"password\" class=\"form-control\" id=\"accountPassword\">
    </div>

    <div class=\"form-group\">
        <label for=\"accountPasswordConfirm\">Confirm New Password</label>
        <input name=\"password_confirmation\" type=\"password\" class=\"form-control\" id=\"accountPasswordConfirm\">
    </div>

    <div class=\"form-group\">
        <label for=\"accountName\">Bio</label>
        <input name=\"bio\" type=\"text\" class=\"form-control\" id=\"accountBio\" value=\"";
        // line 29
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "bio", [], "any", false, false, false, 29), "html", null, true);
        echo "\">
    </div>

    <button type=\"submit\" class=\"btn btn-default\">Save</button>

";
        // line 34
        echo call_user_func_array($this->env->getFunction('form_close')->getCallable(), ["close"]);
        echo "
";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/rainlab/user/components/account/update.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  86 => 34,  78 => 29,  60 => 14,  52 => 9,  44 => 4,  40 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{{ form_ajax('onUpdate') }}
    
    {{ form_token() }}
    {{ form_sessionKey() }}
    

    <div class=\"form-group\">
        <label for=\"accountName\">Full Name</label>
        <input name=\"name\" type=\"text\" class=\"form-control\" id=\"accountName\" value=\"{{ user.name }}\">
    </div>

    <div class=\"form-group\">
        <label for=\"accountEmail\">Email</label>
        <input name=\"email\" type=\"email\" class=\"form-control\" id=\"accountEmail\" value=\"{{ user.email }}\">
    </div>

    <div class=\"form-group\">
        <label for=\"accountPassword\">New Password</label>
        <input name=\"password\" type=\"password\" class=\"form-control\" id=\"accountPassword\">
    </div>

    <div class=\"form-group\">
        <label for=\"accountPasswordConfirm\">Confirm New Password</label>
        <input name=\"password_confirmation\" type=\"password\" class=\"form-control\" id=\"accountPasswordConfirm\">
    </div>

    <div class=\"form-group\">
        <label for=\"accountName\">Bio</label>
        <input name=\"bio\" type=\"text\" class=\"form-control\" id=\"accountBio\" value=\"{{ user.bio }}\">
    </div>

    <button type=\"submit\" class=\"btn btn-default\">Save</button>

{{ form_close() }}
", "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/rainlab/user/components/account/update.htm", "");
    }
}
