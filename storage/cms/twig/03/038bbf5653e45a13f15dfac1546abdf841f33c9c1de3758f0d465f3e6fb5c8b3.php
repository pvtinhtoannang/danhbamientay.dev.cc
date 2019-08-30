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

/* F:\OCTOBERCMS\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaypartner/default.htm */
class __TwigTemplate_8c8ff663832f0700769bce320cbe95f60dcc1cf0c1d4039084221bfe5ab6084b extends \Twig\Template
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
        echo "<section id=\"lp_danhbamientay_partner\">
\t<div class=\"lp_danhbamientay_partner\">
        <div class=\"container\">
            <div class=\"partner_wrapper row\">
                ";
        // line 5
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["partner"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["brand"]) {
            // line 6
            echo "                ";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["brand"], "images", [], "any", false, false, false, 6), "html", null, true);
            echo "
                <div class=\"partner_item col-md-4\">
                    <a href=\"javascript:;\"><img src=\"";
            // line 8
            echo $this->extensions['System\Twig\Extension']->mediaFilter(twig_get_attribute($this->env, $this->source, $context["brand"], "image", [], "any", false, false, false, 8));
            echo "\"  alt=\"";
            echo $this->extensions['System\Twig\Extension']->mediaFilter(twig_get_attribute($this->env, $this->source, $context["brand"], "image", [], "any", false, false, false, 8));
            echo "\"></a>
                </div>\" 
                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['brand'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 11
        echo "            </div>
        </div>
\t</div>
</section> ";
    }

    public function getTemplateName()
    {
        return "F:\\OCTOBERCMS\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaypartner/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  62 => 11,  51 => 8,  45 => 6,  41 => 5,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<section id=\"lp_danhbamientay_partner\">
\t<div class=\"lp_danhbamientay_partner\">
        <div class=\"container\">
            <div class=\"partner_wrapper row\">
                {% for brand in partner %}
                {{ brand.images }}
                <div class=\"partner_item col-md-4\">
                    <a href=\"javascript:;\"><img src=\"{{ brand.image|media }}\"  alt=\"{{ brand.image|media  }}\"></a>
                </div>\" 
                {% endfor %}
            </div>
        </div>
\t</div>
</section> ", "F:\\OCTOBERCMS\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaypartner/default.htm", "");
    }
}
