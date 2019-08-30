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

/* C:\Program Files (x86)\Ampps\www\dev\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/lamdbmientayslider/default.htm */
class __TwigTemplate_1280e926549f44b11119dc507c5db666ae826a7730f7ef217e12bb076e189275 extends \Twig\Template
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
        echo "<section id=\"lp_danhbamientay_big_component\">
    <div class=\"lp_danhbamientay_big_component\">
        <div class=\"btn-menu-mobile hidden-lg hidden-md\">
            <a href=\"#sidebar_mmenu\"><i class=\"fa fa-bars\"></i></a>
        </div>
        <div class=\"container\">
            <div class=\"row big_cpn_box\">
                <div class=\"col-md-3 sidebar_wrapper\">
                    <div class=\"sidebar hidden-sm hidden-xs\">
                       ";
        // line 10
        $context['__cms_component_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->componentFunction("categoryMenu"        , $context['__cms_component_params']        );
        unset($context['__cms_component_params']);
        // line 11
        echo "                    </div>
                    <div class=\"sidebar hidden-lg hidden-md\" id=\"sidebar_mmenu\">
                        ";
        // line 13
        $context['__cms_component_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->componentFunction("categoryMenu"        , $context['__cms_component_params']        );
        unset($context['__cms_component_params']);
        // line 14
        echo "                    </div>
                </div>
                <div class=\"col-md-9 slider_wrapper\">
                    ";
        // line 17
        if (($context["home_sliders"] ?? null)) {
            // line 18
            echo "                    <div class=\"big_slider\">
                        ";
            // line 19
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["home_sliders"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["slide"]) {
                // line 20
                echo "                        <div class=\"big_slider_item\">
                            <a href=\"";
                // line 21
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["slide"], "link", [], "any", false, false, false, 21), "html", null, true);
                echo "\" title=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["slide"], "name", [], "any", false, false, false, 21), "html", null, true);
                echo "\"><img src=\"";
                echo $this->extensions['System\Twig\Extension']->mediaFilter(twig_get_attribute($this->env, $this->source, $context["slide"], "image", [], "any", false, false, false, 21));
                echo "\" alt=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["slide"], "name", [], "any", false, false, false, 21), "html", null, true);
                echo "\" /></a>
                        </div>
                        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['slide'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 24
            echo "                    </div>
                    <div class=\"row small_slider\">
                        ";
            // line 26
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["home_sliders"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["slide"]) {
                // line 27
                echo "                        <div class=\"col-md-3 small_slider_box_item\">
                            <div class=\"small_slider_item\">
                                <img src=\"";
                // line 29
                echo $this->extensions['System\Twig\Extension']->mediaFilter(twig_get_attribute($this->env, $this->source, $context["slide"], "thumbnail", [], "any", false, false, false, 29));
                echo "\" alt=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["slide"], "name", [], "any", false, false, false, 29), "html", null, true);
                echo "\" />
                            </div>
                        </div>
                        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['slide'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 33
            echo "                    </div>
                    ";
        }
        // line 35
        echo "                </div>
            </div>
        </div>
    </div>
</section>
";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/lamdbmientayslider/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  118 => 35,  114 => 33,  102 => 29,  98 => 27,  94 => 26,  90 => 24,  75 => 21,  72 => 20,  68 => 19,  65 => 18,  63 => 17,  58 => 14,  54 => 13,  50 => 11,  46 => 10,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<section id=\"lp_danhbamientay_big_component\">
    <div class=\"lp_danhbamientay_big_component\">
        <div class=\"btn-menu-mobile hidden-lg hidden-md\">
            <a href=\"#sidebar_mmenu\"><i class=\"fa fa-bars\"></i></a>
        </div>
        <div class=\"container\">
            <div class=\"row big_cpn_box\">
                <div class=\"col-md-3 sidebar_wrapper\">
                    <div class=\"sidebar hidden-sm hidden-xs\">
                       {% component \"categoryMenu\" %}
                    </div>
                    <div class=\"sidebar hidden-lg hidden-md\" id=\"sidebar_mmenu\">
                        {% component \"categoryMenu\" %}
                    </div>
                </div>
                <div class=\"col-md-9 slider_wrapper\">
                    {% if home_sliders %}
                    <div class=\"big_slider\">
                        {% for slide in home_sliders %}
                        <div class=\"big_slider_item\">
                            <a href=\"{{ slide.link}}\" title=\"{{ slide.name }}\"><img src=\"{{ slide.image|media }}\" alt=\"{{ slide.name }}\" /></a>
                        </div>
                        {% endfor %}
                    </div>
                    <div class=\"row small_slider\">
                        {% for slide in home_sliders %}
                        <div class=\"col-md-3 small_slider_box_item\">
                            <div class=\"small_slider_item\">
                                <img src=\"{{ slide.thumbnail|media }}\" alt=\"{{ slide.name }}\" />
                            </div>
                        </div>
                        {% endfor %}
                    </div>
                    {% endif %}
                </div>
            </div>
        </div>
    </div>
</section>
", "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/lamdbmientayslider/default.htm", "");
    }
}
