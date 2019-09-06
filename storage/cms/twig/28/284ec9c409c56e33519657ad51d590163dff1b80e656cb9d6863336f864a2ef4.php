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

/* C:\Program Files (x86)\Ampps\www\dev\danhbamientay.dev.cc/themes/danhbamientay/pages/tim-kiem.htm */
class __TwigTemplate_71264e3db9d0451b3c77256fbbe6c065f71f84b5c96bb911134a41e09acd8680 extends \Twig\Template
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
        echo $this->env->getExtension('Cms\Twig\Extension')->componentFunction("PvtinhDBMienTaySearch"        , $context['__cms_component_params']        );
        unset($context['__cms_component_params']);
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/themes/danhbamientay/pages/tim-kiem.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% component 'PvtinhDBMienTaySearch' %}", "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/themes/danhbamientay/pages/tim-kiem.htm", "");
    }
}
