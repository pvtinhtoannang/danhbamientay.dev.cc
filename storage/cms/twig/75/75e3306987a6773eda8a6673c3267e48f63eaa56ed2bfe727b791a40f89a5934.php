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

/* C:\Program Files (x86)\Ampps\www\dev\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayarchive/default.htm */
class __TwigTemplate_a3c5184c58598c6934e603dac28edd00c2a6a5ce1fcc7080bae27962c3e02a30 extends \Twig\Template
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
\t        \t\t\t<div class=\"col-lg-2 col-md-3 col-xs-12 re_title_box\">
\t        \t\t\t\t<h2 class=\"re_title\">
\t        \t\t\t\t\t";
        // line 9
        echo twig_escape_filter($this->env, ($context["category_name"] ?? null), "html", null, true);
        echo "
\t        \t\t\t\t</h2>
\t        \t\t\t</div>
\t        \t\t\t<div class=\"col-lg-6 col-md-5 col-xs-12 re_cat_box\">
\t        \t\t\t\t<div class=\"re_cat real_estate_slider\">
\t        \t\t\t\t\t<div class=\"slick_content_archive\">
                                    ";
        // line 15
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["subcategory"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 16
            echo "\t        \t\t\t\t\t\t<div class=\"item_slick_archive\">
                                        ";
            // line 17
            if ((($context["isbds"] ?? null) == "true")) {
                // line 18
                echo "\t        \t\t\t\t\t\t\t    <a href=\"/loai-hinh/bat-dong-san/";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item"], "slug", [], "any", false, false, false, 18), "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item"], "name", [], "any", false, false, false, 18), "html", null, true);
                echo "</a>
                                        ";
            } else {
                // line 20
                echo "                                            <a href=\"\">";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item"], "name", [], "any", false, false, false, 20), "html", null, true);
                echo "</a>
                                        ";
            }
            // line 22
            echo "\t        \t\t\t\t\t\t</div>
                                    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 24
        echo "\t        \t\t\t\t\t</div>
\t        \t\t\t\t</div>
\t        \t\t\t</div>
                        <div class=\"col-md-1 col-sm-1 mientay_title_slider_arrow real_estate_arrow\"></div> 
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
        // line 44
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["listpost"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["posts"]) {
            // line 45
            echo "                    <div class=\"product_box_item col-md-3 col-sm-4 col-xs-6\">
                        <div class=\"product_item\">
                            <div class=\"product_img\">
                                <a href=\"#\">
                                \t";
            // line 49
            if (twig_test_empty(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["posts"], "images", [], "any", false, false, false, 49), "path", [], "any", false, false, false, 49))) {
                // line 50
                echo "                                        <img src=\"";
                echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayrealestate/images/no-image.jpg"]);
                echo "\" alt=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 50), "html", null, true);
                echo "\">
                                    ";
            } else {
                // line 52
                echo "                                        <img src=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["posts"], "images", [], "any", false, false, false, 52), "thumb", [0 => 360, 1 => 180, 2 => ["mode" => "crop"]], "method", false, false, false, 52), "html", null, true);
                echo "\" alt=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 52), "html", null, true);
                echo "\">
                                    ";
            }
            // line 54
            echo "                                </a>
                            </div>
                            <div class=\"product_content\">
                                <h3 class=\"product_name\"> 
                                    <a href=\"#\" data-toggle=\"tooltip\" title=\"";
            // line 58
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 58), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 58), "html", null, true);
            echo "</a>
                                </h3>
                                ";
            // line 60
            if ((($context["isbds"] ?? null) == "true")) {
                // line 61
                echo "                                <div class=\"product_info\">
                                    <p>
                                        <img src=\"";
                // line 63
                echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayarchive/images/money.png"]);
                echo " \" alt=\"money\">
                                        ";
                // line 64
                if ((twig_get_attribute($this->env, $this->source, $context["posts"], "price", [], "any", false, false, false, 64) == "0")) {
                    // line 65
                    echo "                                            Giá: <span>Thương lượng</span>
                                        ";
                } else {
                    // line 67
                    echo "                                            Giá: <span>";
                    echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "price", [], "any", false, false, false, 67)), "html", null, true);
                    echo "</span>
                                        ";
                }
                // line 69
                echo "                                    </p>
                                    <p>
                                        <img src=\" ";
                // line 71
                echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayarchive/images/ruler.png"]);
                echo " \" alt=\"ruler\">
                                        ";
                // line 72
                if ((twig_get_attribute($this->env, $this->source, $context["posts"], "area", [], "any", false, false, false, 72) == "0")) {
                    // line 73
                    echo "                                            Diện tích: Đang cập nhật
                                        ";
                } else {
                    // line 75
                    echo "                                            Diện tích: ";
                    echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "area", [], "any", false, false, false, 75)), "html", null, true);
                    echo "m2
                                        ";
                }
                // line 77
                echo "                                    </p>
                                    <p>
                                        <img src=\"";
                // line 79
                echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayarchive/images/map3.png"]);
                echo "\" alt=\"map3\">
                                        Khu vực: 
                                        ";
                // line 81
                if ( !twig_test_empty(twig_get_attribute($this->env, $this->source, $context["posts"], "ward", [], "any", false, false, false, 81))) {
                    // line 82
                    echo "                                            ";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "ward", [], "any", false, false, false, 82), "html", null, true);
                    echo ",
                                        ";
                }
                // line 84
                echo "                                        ";
                if ( !twig_test_empty(twig_get_attribute($this->env, $this->source, $context["posts"], "district", [], "any", false, false, false, 84))) {
                    // line 85
                    echo "                                            ";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "district", [], "any", false, false, false, 85), "html", null, true);
                    echo ",
                                        ";
                }
                // line 87
                echo "                                        ";
                if ( !twig_test_empty(twig_get_attribute($this->env, $this->source, $context["posts"], "province", [], "any", false, false, false, 87))) {
                    // line 88
                    echo "                                            ";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "province", [], "any", false, false, false, 88), "html", null, true);
                    echo "
                                        ";
                }
                // line 90
                echo "                                    </p>
                                </div>
                                ";
            }
            // line 93
            echo "                            </div>
                        </div>
                    </div>
                    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['posts'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 97
        echo "                </div>
            </div>
        </div>
\t</div>
</section> ";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayarchive/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  238 => 97,  229 => 93,  224 => 90,  218 => 88,  215 => 87,  209 => 85,  206 => 84,  200 => 82,  198 => 81,  193 => 79,  189 => 77,  183 => 75,  179 => 73,  177 => 72,  173 => 71,  169 => 69,  163 => 67,  159 => 65,  157 => 64,  153 => 63,  149 => 61,  147 => 60,  140 => 58,  134 => 54,  126 => 52,  118 => 50,  116 => 49,  110 => 45,  106 => 44,  84 => 24,  77 => 22,  71 => 20,  63 => 18,  61 => 17,  58 => 16,  54 => 15,  45 => 9,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<section id=\"lp_danhbamientay_archive_real_estate\">
\t<div class=\"lp_danhbamientay_archive_real_estate\">
        <div class=\"container\">
        \t<div class=\"arc_realestate_title_wrapper\">
        \t\t<div class=\"row\">
        \t\t\t<div class=\"re_title_wrapper\">
\t        \t\t\t<div class=\"col-lg-2 col-md-3 col-xs-12 re_title_box\">
\t        \t\t\t\t<h2 class=\"re_title\">
\t        \t\t\t\t\t{{ category_name }}
\t        \t\t\t\t</h2>
\t        \t\t\t</div>
\t        \t\t\t<div class=\"col-lg-6 col-md-5 col-xs-12 re_cat_box\">
\t        \t\t\t\t<div class=\"re_cat real_estate_slider\">
\t        \t\t\t\t\t<div class=\"slick_content_archive\">
                                    {% for item in subcategory %}
\t        \t\t\t\t\t\t<div class=\"item_slick_archive\">
                                        {% if isbds == 'true' %}
\t        \t\t\t\t\t\t\t    <a href=\"/loai-hinh/bat-dong-san/{{ item.slug }}\">{{ item.name }}</a>
                                        {% else %}
                                            <a href=\"\">{{ item.name }}</a>
                                        {% endif %}
\t        \t\t\t\t\t\t</div>
                                    {% endfor %}
\t        \t\t\t\t\t</div>
\t        \t\t\t\t</div>
\t        \t\t\t</div>
                        <div class=\"col-md-1 col-sm-1 mientay_title_slider_arrow real_estate_arrow\"></div> 
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
</section> ", "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayarchive/default.htm", "");
    }
}
