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

/* F:\OCTOBERCMS\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayrealestate/default.htm */
class __TwigTemplate_40a4aa51a7dadd120cdb0111efb52148199b0699cbb754aae05d1ac8576ca8fb extends \Twig\Template
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
        echo "<section id=\"lp_danhbamientay_real_estate\">
\t<div class=\"lp_danhbamientay_real_estate\">
        <div class=\"container\">
            <div class=\"mientay_title_wrapper\">
                <div class=\"row\">
                    <div class=\"col-md-3 col-sm-4 mientay_title_box\">
                        <h2 class=\"mientay_title\">Bất động sản</h2>
                    </div>
                    <div class=\"col-md-8 col-sm-7 mientay_title_slider_box\">
                        <div class=\"mientay_title_slider real_estate_slider\">
                            ";
        // line 11
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["provinces"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 12
            echo "                            <a href=\"#\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item"], "name", [], "any", false, false, false, 12), "html", null, true);
            echo "</a>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 14
        echo "                        </div>
                    </div>
                    <div class=\"col-md-1 col-sm-1 mientay_title_slider_arrow real_estate_arrow\"></div>
                </div>
            </div>
            <div class=\"row real_estate_wrapper content_wrapper\">
                <div class=\"col-md-3 left_wrapper\">
                    <div class=\"left_box\">
                        <div class=\"advance_search_wrapper\">
                            <form role=\"search\" method=\"get\" class=\"search-form\" action=\"\">
                                <select name=\"property\">
                                    ";
        // line 25
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["propertytype"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 26
            echo "                                        <option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item"], "id", [], "any", false, false, false, 26), "html", null, true);
            echo "\" selected=\"selected\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item"], "name", [], "any", false, false, false, 26), "html", null, true);
            echo "</option>
                                    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 28
        echo "                                </select>
                                <select name=\"province\">                                    
                                    ";
        // line 30
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["provinces"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 31
            echo "                                        <option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item"], "id", [], "any", false, false, false, 31), "html", null, true);
            echo "\" selected=\"selected\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item"], "name", [], "any", false, false, false, 31), "html", null, true);
            echo "</option>
                                    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 33
        echo "                                </select>
                                <select name=\"district\">
                                    <option value=\"-1\">Chọn quận / huyện</option>

                                </select>
                                <input type=\"text\" name=\"area\" placeholder=\"Diện tích\">
                                <button type=\"submit\">Tìm kiếm<i class=\"fa fa-paper-plane-o\"></i></button>
                            </form>
                        </div>
                        <div class=\"dbmt_ads_wrapper hidden-sm hidden-xs\">
                            <a href=\"#\">
                                <img src=\"";
        // line 44
        echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayrealestate/images/qc1.jpg"]);
        echo " \">
                            </a>
                        </div>
                    </div>
                </div>
                <div class=\"col-md-9 right_wrapper\">
                    <div class=\"product_wrapper\">
                        ";
        // line 51
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["listpost"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["posts"]) {
            echo "                                                 
                        <div class=\"product_box_item\">
                            <div class=\"product_item\">
                                <div class=\"product_img\">
                                    <a href=\"#\" title=\"";
            // line 55
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 55), "html", null, true);
            echo "\">
                                        ";
            // line 56
            if (twig_test_empty(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["posts"], "images", [], "any", false, false, false, 56), "path", [], "any", false, false, false, 56))) {
                // line 57
                echo "                                            <img src=\"";
                echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayrealestate/images/no-image.jpg"]);
                echo "\" alt=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 57), "html", null, true);
                echo "\">
                                        ";
            } else {
                // line 59
                echo "                                            <img src=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["posts"], "images", [], "any", false, false, false, 59), "thumb", [0 => 360, 1 => 180, 2 => ["mode" => "crop"]], "method", false, false, false, 59), "html", null, true);
                echo "\" alt=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 59), "html", null, true);
                echo "\">
                                        ";
            }
            // line 61
            echo "                                        
                                    </a>
                                </div>
                                <div class=\"product_content\">
                                    <h3 class=\"product_name\">
                                        <a href=\"#\" data-toggle=\"tooltip\" title=\"";
            // line 66
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 66), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 66), "html", null, true);
            echo "</a>
                                    </h3>
                                    <div class=\"product_info\">
                                        <p>
                                            <img src=\"";
            // line 70
            echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayrealestate/images/money.png"]);
            echo "\" alt=\"money\">
                                            ";
            // line 71
            if ((twig_get_attribute($this->env, $this->source, $context["posts"], "price", [], "any", false, false, false, 71) == "0")) {
                // line 72
                echo "                                                Giá: <span>Thương lượng</span>
                                            ";
            } else {
                // line 74
                echo "                                                Giá: <span>";
                echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "price", [], "any", false, false, false, 74)), "html", null, true);
                echo "</span>
                                            ";
            }
            // line 76
            echo "                                            
                                        </p>
                                        <p>
                                            <img src=\"";
            // line 79
            echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayrealestate/images/ruler.png"]);
            echo "\" alt=\"ruler\">
                                            Diện tích:
                                            ";
            // line 81
            if ((twig_get_attribute($this->env, $this->source, $context["posts"], "area", [], "any", false, false, false, 81) == "0")) {
                // line 82
                echo "                                                Đang cập nhật
                                            ";
            } else {
                // line 84
                echo "                                                ";
                echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "area", [], "any", false, false, false, 84)), "html", null, true);
                echo "m2
                                            ";
            }
            // line 86
            echo "                                        </p>
                                        <p>
                                            <img src=\"";
            // line 88
            echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayrealestate/images/map3.png"]);
            echo "\" alt=\"map3\">
                                            Khu vực: 
                                            ";
            // line 90
            if ( !twig_test_empty(twig_get_attribute($this->env, $this->source, $context["posts"], "ward", [], "any", false, false, false, 90))) {
                // line 91
                echo "                                                ";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "ward", [], "any", false, false, false, 91), "html", null, true);
                echo ",
                                            ";
            }
            // line 93
            echo "                                            ";
            if ( !twig_test_empty(twig_get_attribute($this->env, $this->source, $context["posts"], "district", [], "any", false, false, false, 93))) {
                // line 94
                echo "                                                ";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "district", [], "any", false, false, false, 94), "html", null, true);
                echo ",
                                            ";
            }
            // line 96
            echo "                                            ";
            if ( !twig_test_empty(twig_get_attribute($this->env, $this->source, $context["posts"], "province", [], "any", false, false, false, 96))) {
                // line 97
                echo "                                                ";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "province", [], "any", false, false, false, 97), "html", null, true);
                echo "
                                            ";
            }
            // line 99
            echo "                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        \t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['posts'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 105
        echo "                    </div>
                </div>
            </div>
        </div>
\t</div>
</section>
";
    }

    public function getTemplateName()
    {
        return "F:\\OCTOBERCMS\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayrealestate/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  261 => 105,  250 => 99,  244 => 97,  241 => 96,  235 => 94,  232 => 93,  226 => 91,  224 => 90,  219 => 88,  215 => 86,  209 => 84,  205 => 82,  203 => 81,  198 => 79,  193 => 76,  187 => 74,  183 => 72,  181 => 71,  177 => 70,  168 => 66,  161 => 61,  153 => 59,  145 => 57,  143 => 56,  139 => 55,  130 => 51,  120 => 44,  107 => 33,  96 => 31,  92 => 30,  88 => 28,  77 => 26,  73 => 25,  60 => 14,  51 => 12,  47 => 11,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<section id=\"lp_danhbamientay_real_estate\">
\t<div class=\"lp_danhbamientay_real_estate\">
        <div class=\"container\">
            <div class=\"mientay_title_wrapper\">
                <div class=\"row\">
                    <div class=\"col-md-3 col-sm-4 mientay_title_box\">
                        <h2 class=\"mientay_title\">Bất động sản</h2>
                    </div>
                    <div class=\"col-md-8 col-sm-7 mientay_title_slider_box\">
                        <div class=\"mientay_title_slider real_estate_slider\">
                            {% for item in provinces %}
                            <a href=\"#\">{{ item.name }}</a>
                            {% endfor %}
                        </div>
                    </div>
                    <div class=\"col-md-1 col-sm-1 mientay_title_slider_arrow real_estate_arrow\"></div>
                </div>
            </div>
            <div class=\"row real_estate_wrapper content_wrapper\">
                <div class=\"col-md-3 left_wrapper\">
                    <div class=\"left_box\">
                        <div class=\"advance_search_wrapper\">
                            <form role=\"search\" method=\"get\" class=\"search-form\" action=\"\">
                                <select name=\"property\">
                                    {% for item in propertytype %}
                                        <option value=\"{{ item.id }}\" selected=\"selected\">{{ item.name }}</option>
                                    {% endfor %}
                                </select>
                                <select name=\"province\">                                    
                                    {% for item in provinces %}
                                        <option value=\"{{ item.id }}\" selected=\"selected\">{{ item.name }}</option>
                                    {% endfor %}
                                </select>
                                <select name=\"district\">
                                    <option value=\"-1\">Chọn quận / huyện</option>

                                </select>
                                <input type=\"text\" name=\"area\" placeholder=\"Diện tích\">
                                <button type=\"submit\">Tìm kiếm<i class=\"fa fa-paper-plane-o\"></i></button>
                            </form>
                        </div>
                        <div class=\"dbmt_ads_wrapper hidden-sm hidden-xs\">
                            <a href=\"#\">
                                <img src=\"{{ 'pvtinhdbmientayrealestate/images/qc1.jpg'|component }} \">
                            </a>
                        </div>
                    </div>
                </div>
                <div class=\"col-md-9 right_wrapper\">
                    <div class=\"product_wrapper\">
                        {% for posts in listpost %}                                                 
                        <div class=\"product_box_item\">
                            <div class=\"product_item\">
                                <div class=\"product_img\">
                                    <a href=\"#\" title=\"{{ posts.title }}\">
                                        {% if posts.images.path is empty %}
                                            <img src=\"{{ 'pvtinhdbmientayrealestate/images/no-image.jpg'|component }}\" alt=\"{{ posts.title }}\">
                                        {% else %}
                                            <img src=\"{{ posts.images.thumb(360,180, {'mode':'crop'}) }}\" alt=\"{{ posts.title }}\">
                                        {% endif %}
                                        
                                    </a>
                                </div>
                                <div class=\"product_content\">
                                    <h3 class=\"product_name\">
                                        <a href=\"#\" data-toggle=\"tooltip\" title=\"{{ posts.title }}\">{{ posts.title }}</a>
                                    </h3>
                                    <div class=\"product_info\">
                                        <p>
                                            <img src=\"{{ 'pvtinhdbmientayrealestate/images/money.png'|component }}\" alt=\"money\">
                                            {% if posts.price == '0' %}
                                                Giá: <span>Thương lượng</span>
                                            {% else %}
                                                Giá: <span>{{ posts.price|number_format }}</span>
                                            {% endif %}
                                            
                                        </p>
                                        <p>
                                            <img src=\"{{ 'pvtinhdbmientayrealestate/images/ruler.png'|component }}\" alt=\"ruler\">
                                            Diện tích:
                                            {% if posts.area == '0' %}
                                                Đang cập nhật
                                            {% else %}
                                                {{ posts.area|number_format }}m2
                                            {% endif %}
                                        </p>
                                        <p>
                                            <img src=\"{{ 'pvtinhdbmientayrealestate/images/map3.png'|component }}\" alt=\"map3\">
                                            Khu vực: 
                                            {% if posts.ward is not empty %}
                                                {{ posts.ward }},
                                            {% endif %}
                                            {% if posts.district is not empty %}
                                                {{ posts.district }},
                                            {% endif %}
                                            {% if posts.province is not empty %}
                                                {{ posts.province }}
                                            {% endif %}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        \t{% endfor %}
                    </div>
                </div>
            </div>
        </div>
\t</div>
</section>
", "F:\\OCTOBERCMS\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayrealestate/default.htm", "");
    }
}
