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

/* C:\Program Files (x86)\Ampps\www\octobercms\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaypartner/default.htm */
class __TwigTemplate_86fedbf49075ce7f925e727a2dc217c1bcb879626c20d432140cced34826dbd7 extends \Twig\Template
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
            echo " 
                <div class=\"partner_item col-md-4\">
                    <a title=\"";
            // line 7
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["brand"], "name", [], "any", false, false, false, 7), "html", null, true);
            echo "\" target=\"_blank\"  href=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["brand"], "link", [], "any", false, false, false, 7), "html", null, true);
            echo "\"><img src=\"";
            echo $this->extensions['System\Twig\Extension']->mediaFilter(twig_get_attribute($this->env, $this->source, $context["brand"], "image", [], "any", false, false, false, 7));
            echo "\"  alt=\"";
            echo $this->extensions['System\Twig\Extension']->mediaFilter(twig_get_attribute($this->env, $this->source, $context["brand"], "image", [], "any", false, false, false, 7));
            echo "\"></a>
                </div>\" 
                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['brand'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 10
        echo "            </div>
        </div>
\t</div>
</section> ";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\octobercms\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaypartner/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  63 => 10,  48 => 7,  41 => 5,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<section id=\"lp_danhbamientay_partner\">
\t<div class=\"lp_danhbamientay_partner\">
        <div class=\"container\">
            <div class=\"partner_wrapper row\">
                {% for brand in partner %} 
                <div class=\"partner_item col-md-4\">
                    <a title=\"{{ brand.name }}\" target=\"_blank\"  href=\"{{ brand.link }}\"><img src=\"{{ brand.image|media }}\"  alt=\"{{ brand.image|media  }}\"></a>
                </div>\" 
                {% endfor %}
            </div>
        </div>
\t</div>
</section> ", "C:\\Program Files (x86)\\Ampps\\www\\octobercms\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaypartner/default.htm", "");
    }
}
