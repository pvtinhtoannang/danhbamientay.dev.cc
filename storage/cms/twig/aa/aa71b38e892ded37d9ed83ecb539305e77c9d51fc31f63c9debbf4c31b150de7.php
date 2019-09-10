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

/* C:\Program Files (x86)\Ampps\www\octobercms\danhbamientay.dev.cc/themes/danhbamientay/pages/dang-tin.htm */
class __TwigTemplate_756b931b3867fef63cb414324e6865b38c4234c20fd6c2ef00bca6b11c8ca1ca extends \Twig\Template
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
        $context['__cms_component_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->componentFunction("PvtinhDBMienTayBreadCrumb"        , $context['__cms_component_params']        );
        unset($context['__cms_component_params']);
        // line 3
        echo "<section class=\"pvtinh-dbmientay-dang-tin\">
\t<div class=\"container\">
\t\t<div class=\"row\">
\t\t\t<div class=\"col-xs-12 col-sm-4 col-md-3\">
\t\t\t\t";
        // line 7
        $context['__cms_component_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->componentFunction("PvtinhDBMienTaySidebarAccount"        , $context['__cms_component_params']        );
        unset($context['__cms_component_params']);
        // line 8
        echo "\t\t\t</div>
\t\t\t<div class=\"col-xs-12 col-sm-8 col-md-9\">
\t\t\t\t";
        // line 10
        $context['__cms_component_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->componentFunction("PvtinhDBMienTayDangTin"        , $context['__cms_component_params']        );
        unset($context['__cms_component_params']);
        // line 11
        echo "\t\t\t</div>
\t\t</div>
\t</div>
</section>";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\octobercms\\danhbamientay.dev.cc/themes/danhbamientay/pages/dang-tin.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  61 => 11,  57 => 10,  53 => 8,  49 => 7,  43 => 3,  39 => 2,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% component 'session' %}
{% component 'PvtinhDBMienTayBreadCrumb' %}
<section class=\"pvtinh-dbmientay-dang-tin\">
\t<div class=\"container\">
\t\t<div class=\"row\">
\t\t\t<div class=\"col-xs-12 col-sm-4 col-md-3\">
\t\t\t\t{% component 'PvtinhDBMienTaySidebarAccount' %}
\t\t\t</div>
\t\t\t<div class=\"col-xs-12 col-sm-8 col-md-9\">
\t\t\t\t{% component 'PvtinhDBMienTayDangTin' %}
\t\t\t</div>
\t\t</div>
\t</div>
</section>", "C:\\Program Files (x86)\\Ampps\\www\\octobercms\\danhbamientay.dev.cc/themes/danhbamientay/pages/dang-tin.htm", "");
    }
}
