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

/* C:\Program Files (x86)\Ampps\www\dev\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayplace/default.htm */
class __TwigTemplate_48b72c5b2d53797ec7a941629e307cd0aceb52f92adc056154d4833bca2b755f extends \Twig\Template
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
            // line 5
            echo "    ";
            $context["slug_place"] = twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "item_place", [], "any", false, false, false, 5), "title_section", [], "any", false, false, false, 5), "slug", [], "any", false, false, false, 5);
            // line 6
            echo "\t<div class=\"lp_danhbamientay_place\">
        <div class=\"container\">
            <div class=\"mientay_title_wrapper\">
                <div class=\"row\">
                    <div class=\"col-md-3 col-sm-4 mientay_title_box\">
                        <h2 class=\"mientay_title\">";
            // line 11
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "item_place", [], "any", false, false, false, 11), "title_section", [], "any", false, false, false, 11), "name", [], "any", false, false, false, 11), "html", null, true);
            echo "</h2>
                    </div>
                    <div class=\"col-md-8 col-sm-7 mientay_title_slider_box\">
                        <div class=\"mientay_title_slider place_slider";
            // line 14
            echo twig_escape_filter($this->env, ($context["index"] ?? null), "html", null, true);
            echo " \">
                             ";
            // line 15
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["provinces"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["item_province"]) {
                // line 16
                echo "                            <a href=\"/dia-diem/";
                echo twig_escape_filter($this->env, ($context["slug_place"] ?? null), "html", null, true);
                echo "/";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item_province"], "id", [], "any", false, false, false, 16), "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item_province"], "name", [], "any", false, false, false, 16), "html", null, true);
                echo "</a>
                            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item_province'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 17
            echo " 
                        </div>
                    </div>
                    <div class=\"col-md-1 col-sm-1 mientay_title_slider_arrow place_slider_arrow arrows-place";
            // line 20
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
            // line 30
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "item_place", [], "any", false, false, false, 30), "locations_list", [], "any", false, false, false, 30));
            foreach ($context['_seq'] as $context["_key"] => $context["location"]) {
                // line 31
                echo "                                    <li>
                                        <a href=\"/loai-hinh/";
                // line 32
                echo twig_escape_filter($this->env, ($context["slug_place"] ?? null), "html", null, true);
                echo "/";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["location"], "slug", [], "any", false, false, false, 32), "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["location"], "name", [], "any", false, false, false, 32), "html", null, true);
                echo "</a>
                                    </li>
                                    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['location'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 35
            echo "                                    
                                </ul>
                            </div>
                        </div>
                        <div class=\"dbmt_ads_wrapper hidden-sm hidden-xs\">
                            <a href=\"#\">
                                <img src=\"";
            // line 41
            echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayplace/images/qc2.jpg"]);
            echo "\">
                            </a>
                        </div>
                        <div class=\"dbmt_ads_wrapper hidden-sm hidden-xs\">
                            <a href=\"#\">
                                <img src=\"";
            // line 46
            echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayplace/images/qc3.jpg"]);
            echo "\">
                            </a>
                        </div>
                    </div>
                </div>
                <div class=\"col-md-9 right_wrapper\">
                    <div class=\"product_wrapper\">
                        ";
            // line 53
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "item_place", [], "any", false, false, false, 53), "list_place", [], "any", false, false, false, 53));
            foreach ($context['_seq'] as $context["_key"] => $context["posts"]) {
                echo "  

                        <div class=\"product_box_item\">
                            <div class=\"product_item\">
                                <div class=\"product_img\">
                                    <a href=\"#\">
                                        ";
                // line 59
                if (twig_test_empty(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["posts"], "images", [], "any", false, false, false, 59), "path", [], "any", false, false, false, 59))) {
                    // line 60
                    echo "                                            <img src=\"";
                    echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayrealestate/images/no-image.jpg"]);
                    echo "\" alt=\"";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 60), "html", null, true);
                    echo "\">
                                        ";
                } else {
                    // line 62
                    echo "                                            <img src=\"";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["posts"], "images", [], "any", false, false, false, 62), "thumb", [0 => 360, 1 => 180, 2 => ["mode" => "crop"]], "method", false, false, false, 62), "html", null, true);
                    echo "\" alt=\"";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 62), "html", null, true);
                    echo "\">
                                        ";
                }
                // line 64
                echo "                                    </a>
                                </div> 
                                <div class=\"product_content content-product\">
                                    <h3 class=\"product_name medium-font\">
                                       <a href=\"#\" data-toggle=\"tooltip\" title=\"";
                // line 68
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 68), "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 68), "html", null, true);
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
            // line 74
            echo "                    </div>
                </div>
            </div>
        </div>
\t</div>
        ";
            // line 79
            $context["index"] = (($context["index"] ?? null) + 1);
            // line 80
            echo "    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 81
        echo "</section> 
";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayplace/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  211 => 81,  205 => 80,  203 => 79,  196 => 74,  182 => 68,  176 => 64,  168 => 62,  160 => 60,  158 => 59,  147 => 53,  137 => 46,  129 => 41,  121 => 35,  108 => 32,  105 => 31,  101 => 30,  88 => 20,  83 => 17,  70 => 16,  66 => 15,  62 => 14,  56 => 11,  49 => 6,  46 => 5,  41 => 4,  39 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source(" 
<section id=\"lp_danhbamientay_place\">
    {% set index = 1 %}
    {% for item in content %}
    {% set slug_place = item.item_place.title_section.slug %}
\t<div class=\"lp_danhbamientay_place\">
        <div class=\"container\">
            <div class=\"mientay_title_wrapper\">
                <div class=\"row\">
                    <div class=\"col-md-3 col-sm-4 mientay_title_box\">
                        <h2 class=\"mientay_title\">{{ item.item_place.title_section.name }}</h2>
                    </div>
                    <div class=\"col-md-8 col-sm-7 mientay_title_slider_box\">
                        <div class=\"mientay_title_slider place_slider{{index}} \">
                             {% for item_province in provinces %}
                            <a href=\"/dia-diem/{{ slug_place }}/{{ item_province.id }}\">{{ item_province.name }}</a>
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
                                        <a href=\"/loai-hinh/{{ slug_place }}/{{ location.slug}}\">{{ location.name }}</a>
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
", "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayplace/default.htm", "");
    }
}
