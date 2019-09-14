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

/* C:\Program Files (x86)\Ampps\www\octobercms\danhbamientay.dev.cc/themes/danhbamientay/pages/home.htm */
class __TwigTemplate_470e0b8ed078aa205b61455329c58b754c111651fa3b71d552e4559356fca1cd extends \Twig\Template
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
        $context['__cms_component_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->componentFunction("session"        , $context['__cms_component_params']        );
        unset($context['__cms_component_params']);
        // line 2
        echo "
";
        // line 3
        $context['__cms_component_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->componentFunction("LamDBMienTaySlider"        , $context['__cms_component_params']        );
        unset($context['__cms_component_params']);
        // line 4
        echo "
";
        // line 5
        $context['__cms_component_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->componentFunction("PvtinhDBMienTayRealEstate"        , $context['__cms_component_params']        );
        unset($context['__cms_component_params']);
        // line 6
        echo "


";
        // line 9
        $context['__cms_component_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->componentFunction("PvtinhDBMienTayPlace"        , $context['__cms_component_params']        );
        unset($context['__cms_component_params']);
        // line 10
        echo "
";
        // line 11
        $context['__cms_component_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->componentFunction("PvtinhDBMienTayPartner"        , $context['__cms_component_params']        );
        unset($context['__cms_component_params']);
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\octobercms\\danhbamientay.dev.cc/themes/danhbamientay/pages/home.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  65 => 11,  62 => 10,  58 => 9,  53 => 6,  49 => 5,  46 => 4,  42 => 3,  39 => 2,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% component 'session' %}
{% component 'LamDBMienTaySlider' %}
{% component 'PvtinhDBMienTayRealEstate' %}

{% component 'PvtinhDBMienTayPlace' %}
{% component 'PvtinhDBMienTayPartner' %}", "C:\\Program Files (x86)\\Ampps\\www\\octobercms\\danhbamientay.dev.cc/themes/danhbamientay/pages/home.htm", "");
    }
}
