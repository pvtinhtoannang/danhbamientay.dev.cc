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

/* C:\Program Files (x86)\Ampps\www\dev\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayarchiveaddress/default.htm */
class __TwigTemplate_90a4976b67f98ffcbb67e0c326a8992cbc29a38698010efe2ca097a5da397fa7 extends \Twig\Template
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
        echo "<section id=\"lp_danhbamientay_archive_real_estate\">
\t<div class=\"lp_danhbamientay_archive_real_estate\">
        <div class=\"container\">
        \t<div class=\"arc_realestate_title_wrapper\">
        \t\t<div class=\"row\">
        \t\t\t<div class=\"re_title_wrapper\">
\t        \t\t\t<div class=\"col-lg-9 col-md-9 col-xs-12 re_title_box\">
\t        \t\t\t\t<h2 class=\"re_title\">
\t        \t\t\t\t\t";
        // line 9
        echo twig_escape_filter($this->env, ($context["locations_name"] ?? null), "html", null, true);
        echo "
\t        \t\t\t\t</h2>
\t        \t\t\t</div>
\t        \t\t\t 
                        
\t        \t\t\t<div class=\"col-lg-3 col-md-3 col-xs-12 re_search_box\">
\t        \t\t\t\t<div class=\"search_box\">
\t                            <form role=\"search\" method=\"get\" class=\"woocommerce-product-search\" action=\"<?php //echo esc_url( home_url( '/'  ) ); ?>\">
\t                                <input type=\"search\" class=\"search-field input-search-nuhoang\" placeholder=\"Tìm kiếm nâng cao....\" value=\"<?php //echo get_search_query(); ?>\" name=\"s\" title=\"<?php //echo esc_attr_x( 'Search for:', 'label', 'woocommerce' ); ?>\" />
\t                                <input type=\"hidden\" name=\"post_type\" value=\"product\" />
\t                                <button class=\"btn-search-nuhoang\" type=\"submit\" value=\"<?php //echo esc_attr_x( 'Search', 'submit button', 'woocommerce' ); ?>\">
\t                                    <i class=\"fa fa-search\"></i>
\t                                </button>
\t                            </form>
\t                        </div>
\t        \t\t\t</div>
        \t\t\t</div>
        \t\t</div> 
        \t</div>
            <div class=\"row\"> 
            \t<div class=\"product_wrapper\">
                    ";
        // line 30
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["listpost"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["posts"]) {
            // line 31
            echo "                    <div class=\"product_box_item col-md-3 col-sm-4 col-xs-6\">
                        <div class=\"product_item\">
                            <div class=\"product_img\">
                                <a href=\"#\">
                                \t";
            // line 35
            if (twig_test_empty(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["posts"], "images", [], "any", false, false, false, 35), "path", [], "any", false, false, false, 35))) {
                // line 36
                echo "                                        <img src=\"";
                echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayrealestate/images/no-image.jpg"]);
                echo "\" alt=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 36), "html", null, true);
                echo "\">
                                    ";
            } else {
                // line 38
                echo "                                        <img src=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["posts"], "images", [], "any", false, false, false, 38), "thumb", [0 => 360, 1 => 180, 2 => ["mode" => "crop"]], "method", false, false, false, 38), "html", null, true);
                echo "\" alt=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 38), "html", null, true);
                echo "\">
                                    ";
            }
            // line 40
            echo "                                </a>
                            </div>
                            <div class=\"product_content\">
                                <h3 class=\"product_name\"> 
                                    <a href=\"#\" data-toggle=\"tooltip\" title=\"";
            // line 44
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 44), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 44), "html", null, true);
            echo "</a>
                                </h3>
                                ";
            // line 46
            if ((($context["isbds"] ?? null) == "true")) {
                // line 47
                echo "                                <div class=\"product_info\">
                                    <p>
                                        <img src=\"";
                // line 49
                echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayarchive/images/money.png"]);
                echo " \" alt=\"money\">
                                        ";
                // line 50
                if ((twig_get_attribute($this->env, $this->source, $context["posts"], "price", [], "any", false, false, false, 50) == "0")) {
                    // line 51
                    echo "                                            Giá: <span>Thương lượng</span>
                                        ";
                } else {
                    // line 53
                    echo "                                            Giá: <span>";
                    echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "price", [], "any", false, false, false, 53)), "html", null, true);
                    echo "</span>
                                        ";
                }
                // line 55
                echo "                                    </p>
                                    <p>
                                        <img src=\" ";
                // line 57
                echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayarchive/images/ruler.png"]);
                echo " \" alt=\"ruler\">
                                        ";
                // line 58
                if ((twig_get_attribute($this->env, $this->source, $context["posts"], "area", [], "any", false, false, false, 58) == "0")) {
                    // line 59
                    echo "                                            Diện tích: Đang cập nhật
                                        ";
                } else {
                    // line 61
                    echo "                                            Diện tích: ";
                    echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "area", [], "any", false, false, false, 61)), "html", null, true);
                    echo "m2
                                        ";
                }
                // line 63
                echo "                                    </p>
                                    <p>
                                        <img src=\"";
                // line 65
                echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayarchive/images/map3.png"]);
                echo "\" alt=\"map3\">
                                        Khu vực: 
                                        ";
                // line 67
                if ( !twig_test_empty(twig_get_attribute($this->env, $this->source, $context["posts"], "ward", [], "any", false, false, false, 67))) {
                    // line 68
                    echo "                                            ";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "ward", [], "any", false, false, false, 68), "html", null, true);
                    echo ",
                                        ";
                }
                // line 70
                echo "                                        ";
                if ( !twig_test_empty(twig_get_attribute($this->env, $this->source, $context["posts"], "district", [], "any", false, false, false, 70))) {
                    // line 71
                    echo "                                            ";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "district", [], "any", false, false, false, 71), "html", null, true);
                    echo ",
                                        ";
                }
                // line 73
                echo "                                        ";
                if ( !twig_test_empty(twig_get_attribute($this->env, $this->source, $context["posts"], "province", [], "any", false, false, false, 73))) {
                    // line 74
                    echo "                                            ";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "province", [], "any", false, false, false, 74), "html", null, true);
                    echo "
                                        ";
                }
                // line 76
                echo "                                    </p>
                                </div>
                                ";
            }
            // line 79
            echo "                            </div>
                        </div>
                    </div>
                    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['posts'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 83
        echo "                </div>
            </div>
        </div>
\t</div>
</section> ";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayarchiveaddress/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  201 => 83,  192 => 79,  187 => 76,  181 => 74,  178 => 73,  172 => 71,  169 => 70,  163 => 68,  161 => 67,  156 => 65,  152 => 63,  146 => 61,  142 => 59,  140 => 58,  136 => 57,  132 => 55,  126 => 53,  122 => 51,  120 => 50,  116 => 49,  112 => 47,  110 => 46,  103 => 44,  97 => 40,  89 => 38,  81 => 36,  79 => 35,  73 => 31,  69 => 30,  45 => 9,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<section id=\"lp_danhbamientay_archive_real_estate\">
\t<div class=\"lp_danhbamientay_archive_real_estate\">
        <div class=\"container\">
        \t<div class=\"arc_realestate_title_wrapper\">
        \t\t<div class=\"row\">
        \t\t\t<div class=\"re_title_wrapper\">
\t        \t\t\t<div class=\"col-lg-9 col-md-9 col-xs-12 re_title_box\">
\t        \t\t\t\t<h2 class=\"re_title\">
\t        \t\t\t\t\t{{ locations_name }}
\t        \t\t\t\t</h2>
\t        \t\t\t</div>
\t        \t\t\t 
                        
\t        \t\t\t<div class=\"col-lg-3 col-md-3 col-xs-12 re_search_box\">
\t        \t\t\t\t<div class=\"search_box\">
\t                            <form role=\"search\" method=\"get\" class=\"woocommerce-product-search\" action=\"<?php //echo esc_url( home_url( '/'  ) ); ?>\">
\t                                <input type=\"search\" class=\"search-field input-search-nuhoang\" placeholder=\"Tìm kiếm nâng cao....\" value=\"<?php //echo get_search_query(); ?>\" name=\"s\" title=\"<?php //echo esc_attr_x( 'Search for:', 'label', 'woocommerce' ); ?>\" />
\t                                <input type=\"hidden\" name=\"post_type\" value=\"product\" />
\t                                <button class=\"btn-search-nuhoang\" type=\"submit\" value=\"<?php //echo esc_attr_x( 'Search', 'submit button', 'woocommerce' ); ?>\">
\t                                    <i class=\"fa fa-search\"></i>
\t                                </button>
\t                            </form>
\t                        </div>
\t        \t\t\t</div>
        \t\t\t</div>
        \t\t</div> 
        \t</div>
            <div class=\"row\"> 
            \t<div class=\"product_wrapper\">
                    {% for posts in listpost  %}
                    <div class=\"product_box_item col-md-3 col-sm-4 col-xs-6\">
                        <div class=\"product_item\">
                            <div class=\"product_img\">
                                <a href=\"#\">
                                \t{% if posts.images.path is empty %}
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
                                {% if isbds == 'true' %}
                                <div class=\"product_info\">
                                    <p>
                                        <img src=\"{{ 'pvtinhdbmientayarchive/images/money.png'|component }} \" alt=\"money\">
                                        {% if posts.price == '0' %}
                                            Giá: <span>Thương lượng</span>
                                        {% else %}
                                            Giá: <span>{{ posts.price|number_format }}</span>
                                        {% endif %}
                                    </p>
                                    <p>
                                        <img src=\" {{ 'pvtinhdbmientayarchive/images/ruler.png'|component }} \" alt=\"ruler\">
                                        {% if posts.area == '0' %}
                                            Diện tích: Đang cập nhật
                                        {% else %}
                                            Diện tích: {{ posts.area|number_format }}m2
                                        {% endif %}
                                    </p>
                                    <p>
                                        <img src=\"{{ 'pvtinhdbmientayarchive/images/map3.png'|component }}\" alt=\"map3\">
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
                                {% endif %}
                            </div>
                        </div>
                    </div>
                    {% endfor %}
                </div>
            </div>
        </div>
\t</div>
</section> ", "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayarchiveaddress/default.htm", "");
    }
}
