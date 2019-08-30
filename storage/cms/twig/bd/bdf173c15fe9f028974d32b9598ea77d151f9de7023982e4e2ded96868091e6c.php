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

/* F:\OCTOBERCMS\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayplace/default.htm */
class __TwigTemplate_195fa6e0aacc88be78584f5d0ef4f8dbaf8e51476b7abd212bff71a9fbbdc651 extends \Twig\Template
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
        echo " 
<section id=\"lp_danhbamientay_place\">
    ";
        // line 3
        $context["index"] = 1;
        // line 4
        echo "    ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["content"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            echo " 
\t<div class=\"lp_danhbamientay_place\">
        <div class=\"container\">
            <div class=\"mientay_title_wrapper\">
                <div class=\"row\">
                    <div class=\"col-md-3 col-sm-4 mientay_title_box\">
                        <h2 class=\"mientay_title\">";
            // line 10
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "item_place", [], "any", false, false, false, 10), "title_section", [], "any", false, false, false, 10), "name", [], "any", false, false, false, 10), "html", null, true);
            echo "</h2>
                    </div>
                    <div class=\"col-md-8 col-sm-7 mientay_title_slider_box\">
                        <div class=\"mientay_title_slider place_slider";
            // line 13
            echo twig_escape_filter($this->env, ($context["index"] ?? null), "html", null, true);
            echo " \">
                             ";
            // line 14
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["provinces"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                // line 15
                echo "                            <a href=\"#\">";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item"], "name", [], "any", false, false, false, 15), "html", null, true);
                echo "</a>
                            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 17
            echo "                        </div>
                    </div>
                    <div class=\"col-md-1 col-sm-1 mientay_title_slider_arrow place_slider_arrow arrows-place";
            // line 19
            echo twig_escape_filter($this->env, ($context["index"] ?? null), "html", null, true);
            echo "\"></div>
                     
                </div>
            </div>
            <div class=\"row place_wrapper content_wrapper\">
                <div class=\"col-md-3 left_wrapper\">
                    <div class=\"left_box\">
                        <div class=\"place_category_wrapper\">
                            <div class=\"place_category\"> 
                                <ul> 
                                    ";
            // line 29
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "item_place", [], "any", false, false, false, 29), "locations_list", [], "any", false, false, false, 29));
            foreach ($context['_seq'] as $context["_key"] => $context["location"]) {
                // line 30
                echo "                                    <li>
                                        <a href=\"#\">";
                // line 31
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["location"], "name", [], "any", false, false, false, 31), "html", null, true);
                echo "</a>
                                    </li>
                                    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['location'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 34
            echo "                                    
                                </ul>
                            </div>
                        </div>
                        <div class=\"dbmt_ads_wrapper hidden-sm hidden-xs\">
                            <a href=\"#\">
                                <img src=\"";
            // line 40
            echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayplace/images/qc2.jpg"]);
            echo "\">
                            </a>
                        </div>
                        <div class=\"dbmt_ads_wrapper hidden-sm hidden-xs\">
                            <a href=\"#\">
                                <img src=\"";
            // line 45
            echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayplace/images/qc3.jpg"]);
            echo "\">
                            </a>
                        </div>
                    </div>
                </div>
                <div class=\"col-md-9 right_wrapper\">
                    <div class=\"product_wrapper\">
                        ";
            // line 52
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "item_place", [], "any", false, false, false, 52), "list_place", [], "any", false, false, false, 52));
            foreach ($context['_seq'] as $context["_key"] => $context["posts"]) {
                echo "  

                        <div class=\"product_box_item\">
                            <div class=\"product_item\">
                                <div class=\"product_img\">
                                    <a href=\"#\">
                                        ";
                // line 58
                if (twig_test_empty(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["posts"], "images", [], "any", false, false, false, 58), "path", [], "any", false, false, false, 58))) {
                    // line 59
                    echo "                                            <img src=\"";
                    echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayrealestate/images/no-image.jpg"]);
                    echo "\" alt=\"";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 59), "html", null, true);
                    echo "\">
                                        ";
                } else {
                    // line 61
                    echo "                                            <img src=\"";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["posts"], "images", [], "any", false, false, false, 61), "thumb", [0 => 360, 1 => 180, 2 => ["mode" => "crop"]], "method", false, false, false, 61), "html", null, true);
                    echo "\" alt=\"";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 61), "html", null, true);
                    echo "\">
                                        ";
                }
                // line 63
                echo "                                    </a>
                                </div> 
                                <div class=\"product_content content-product\">
                                    <h3 class=\"product_name medium-font\">
                                       <a href=\"#\" data-toggle=\"tooltip\" title=\"";
                // line 67
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 67), "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 67), "html", null, true);
                echo "</a>
                                    </h3>    
                                </div>                                
                            </div>
                        </div>
                        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['posts'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 73
            echo "                    </div>
                </div>
            </div>
        </div>
\t</div>
        ";
            // line 78
            $context["index"] = (($context["index"] ?? null) + 1);
            // line 79
            echo "    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 80
        echo "</section> 
";
    }

    public function getTemplateName()
    {
        return "F:\\OCTOBERCMS\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayplace/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  199 => 80,  193 => 79,  191 => 78,  184 => 73,  170 => 67,  164 => 63,  156 => 61,  148 => 59,  146 => 58,  135 => 52,  125 => 45,  117 => 40,  109 => 34,  100 => 31,  97 => 30,  93 => 29,  80 => 19,  76 => 17,  67 => 15,  63 => 14,  59 => 13,  53 => 10,  41 => 4,  39 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source(" 
<section id=\"lp_danhbamientay_place\">
    {% set index = 1 %}
    {% for item in content %} 
\t<div class=\"lp_danhbamientay_place\">
        <div class=\"container\">
            <div class=\"mientay_title_wrapper\">
                <div class=\"row\">
                    <div class=\"col-md-3 col-sm-4 mientay_title_box\">
                        <h2 class=\"mientay_title\">{{ item.item_place.title_section.name }}</h2>
                    </div>
                    <div class=\"col-md-8 col-sm-7 mientay_title_slider_box\">
                        <div class=\"mientay_title_slider place_slider{{index}} \">
                             {% for item in provinces %}
                            <a href=\"#\">{{ item.name }}</a>
                            {% endfor %}
                        </div>
                    </div>
                    <div class=\"col-md-1 col-sm-1 mientay_title_slider_arrow place_slider_arrow arrows-place{{ index }}\"></div>
                     
                </div>
            </div>
            <div class=\"row place_wrapper content_wrapper\">
                <div class=\"col-md-3 left_wrapper\">
                    <div class=\"left_box\">
                        <div class=\"place_category_wrapper\">
                            <div class=\"place_category\"> 
                                <ul> 
                                    {% for location in item.item_place.locations_list %}
                                    <li>
                                        <a href=\"#\">{{ location.name }}</a>
                                    </li>
                                    {% endfor %}
                                    
                                </ul>
                            </div>
                        </div>
                        <div class=\"dbmt_ads_wrapper hidden-sm hidden-xs\">
                            <a href=\"#\">
                                <img src=\"{{ 'pvtinhdbmientayplace/images/qc2.jpg'|component }}\">
                            </a>
                        </div>
                        <div class=\"dbmt_ads_wrapper hidden-sm hidden-xs\">
                            <a href=\"#\">
                                <img src=\"{{ 'pvtinhdbmientayplace/images/qc3.jpg'|component }}\">
                            </a>
                        </div>
                    </div>
                </div>
                <div class=\"col-md-9 right_wrapper\">
                    <div class=\"product_wrapper\">
                        {% for posts in item.item_place.list_place %}  

                        <div class=\"product_box_item\">
                            <div class=\"product_item\">
                                <div class=\"product_img\">
                                    <a href=\"#\">
                                        {% if posts.images.path is empty %}
                                            <img src=\"{{ 'pvtinhdbmientayrealestate/images/no-image.jpg'|component }}\" alt=\"{{ posts.title }}\">
                                        {% else %}
                                            <img src=\"{{ posts.images.thumb(360,180, {'mode':'crop'}) }}\" alt=\"{{ posts.title }}\">
                                        {% endif %}
                                    </a>
                                </div> 
                                <div class=\"product_content content-product\">
                                    <h3 class=\"product_name medium-font\">
                                       <a href=\"#\" data-toggle=\"tooltip\" title=\"{{ posts.title }}\">{{ posts.title }}</a>
                                    </h3>    
                                </div>                                
                            </div>
                        </div>
                        {% endfor %}
                    </div>
                </div>
            </div>
        </div>
\t</div>
        {% set index = index + 1 %}
    {% endfor %}
</section> 
", "F:\\OCTOBERCMS\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayplace/default.htm", "");
    }
}
