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

/* C:\Program Files (x86)\Ampps\www\dev\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaybreadcrumb/default.htm */
class __TwigTemplate_4fd47e8073d19dc09d11a3204d02ed7a4da6acd7260da61ba20b6da065445c5d extends \Twig\Template
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
        echo "<section id=\"lp_danhbamientay_breadcrumb\">
\t<div class=\"lp_danhbamientay_breadcrumb\" style=\"background-image: url('";
        // line 2
        echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientaybreadcrumb/images/bg_breadcrumb.jpg"]);
        echo "')\">
        <div class=\"container\">
            <div class=\"dbmt_breadcrumb\">
            \t<a href=\"/\" title=\"Trang chủ\" >Trang chủ</a><span> >> </span><span>";
        // line 5
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "page", [], "any", false, false, false, 5), "title", [], "any", false, false, false, 5), "html", null, true);
        echo "</span>
            </div>
        </div>
\t</div>
</section>";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaybreadcrumb/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  44 => 5,  38 => 2,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<section id=\"lp_danhbamientay_breadcrumb\">
\t<div class=\"lp_danhbamientay_breadcrumb\" style=\"background-image: url('{{ 'pvtinhdbmientaybreadcrumb/images/bg_breadcrumb.jpg'|component }}')\">
        <div class=\"container\">
            <div class=\"dbmt_breadcrumb\">
            \t<a href=\"/\" title=\"Trang chủ\" >Trang chủ</a><span> >> </span><span>{{ this.page.title }}</span>
            </div>
        </div>
\t</div>
</section>", "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaybreadcrumb/default.htm", "");
    }
}
