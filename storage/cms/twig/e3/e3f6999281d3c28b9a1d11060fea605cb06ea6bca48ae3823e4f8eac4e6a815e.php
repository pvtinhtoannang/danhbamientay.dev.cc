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

/* C:\Program Files (x86)\Ampps\www\dev\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaysearch/default.htm */
class __TwigTemplate_11a689ef5532f00ec92d0e3fc9030638351a01590bbc0e3f0eaee18f782b8647 extends \Twig\Template
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
\t        \t\t\t\t\tTìm kiếm cho danh mục ";
        // line 9
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["categoryname"] ?? null), "name", [], "any", false, false, false, 9), "html", null, true);
        echo "
\t        \t\t\t\t</h2>
\t        \t\t\t</div>
\t        \t\t\t
\t        \t\t\t<div class=\"col-lg-3 col-md-3 col-xs-12 re_search_box\">
\t        \t\t\t\t<div class=\"search_box\">
\t                            <form role=\"search\"  method=\"get\" class=\"\" action=\"/tim-kiem\">
                                <input type=\"hidden\" name=\"danh-muc\" value=\"tat-ca-danh-muc\">
                                <input type=\"search\" class=\"search-field input-search-nuhoang\" placeholder=\"Tìm sản phẩm, thương hiệu và tên shop\" value=\"";
        // line 17
        echo twig_escape_filter($this->env, ($context["keyword"] ?? null), "html", null, true);
        echo "\" name=\"keyword\" title=\"\" autocomplete=\"off\" />
                                <button class=\"btn-search-nuhoang\" type=\"submit\" value=\"\">
                                    <i class=\"fa fa-search\"></i>
                                </button>
                            </form>
\t                        </div>
\t        \t\t\t</div>
        \t\t\t</div>
                    
        \t\t</div>
        \t</div>
            <div class=\"row\">  
                <div class=\"col-xs-12\">
                    <div class=\"results-count\">
                        <span>Có ";
        // line 31
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["pagination"] ?? null), "total", [], "any", false, false, false, 31), "html", null, true);
        echo " kết quả tìm kiếm </span>
                    </div>
                </div>
            \t<div class=\"product_wrapper\">

                    ";
        // line 36
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["listpost"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["posts"]) {
            // line 37
            echo "                    <div class=\"product_box_item col-md-3 col-sm-4 col-xs-6\">
                        <div class=\"product_item\">
                            <div class=\"product_img\">
                                <a href=\"/tin-dang/";
            // line 40
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "slug", [], "any", false, false, false, 40), "html", null, true);
            echo "/";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "id", [], "any", false, false, false, 40), "html", null, true);
            echo "\" title=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 40), "html", null, true);
            echo "\">
                                \t";
            // line 41
            if (twig_test_empty(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["posts"], "images", [], "any", false, false, false, 41), "path", [], "any", false, false, false, 41))) {
                // line 42
                echo "                                        <img src=\"";
                echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayrealestate/images/no-image.jpg"]);
                echo "\" alt=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 42), "html", null, true);
                echo "\">
                                    ";
            } else {
                // line 44
                echo "                                        <img src=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["posts"], "images", [], "any", false, false, false, 44), "thumb", [0 => 360, 1 => 180, 2 => ["mode" => "crop"]], "method", false, false, false, 44), "html", null, true);
                echo "\" alt=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 44), "html", null, true);
                echo "\">
                                    ";
            }
            // line 46
            echo "                                </a>
                            </div>
                            <div class=\"product_content\">
                                <h3 class=\"product_name\"> 
                                    <a href=\"/tin-dang/";
            // line 50
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "slug", [], "any", false, false, false, 50), "html", null, true);
            echo "/";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "id", [], "any", false, false, false, 50), "html", null, true);
            echo "\" data-toggle=\"tooltip\" title=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 50), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 50), "html", null, true);
            echo "</a>
                                </h3>
                                ";
            // line 52
            if ((($context["isbds"] ?? null) == "true")) {
                // line 53
                echo "                                <div class=\"product_info\">
                                    <p>
                                        <img src=\"";
                // line 55
                echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayarchive/images/money.png"]);
                echo " \" alt=\"money\">
                                        ";
                // line 56
                if ((twig_get_attribute($this->env, $this->source, $context["posts"], "price", [], "any", false, false, false, 56) == "0")) {
                    // line 57
                    echo "                                            Giá: <span>Thương lượng</span>
                                        ";
                } else {
                    // line 59
                    echo "                                            Giá: <span>";
                    echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "price", [], "any", false, false, false, 59)), "html", null, true);
                    echo " VNĐ</span>
                                        ";
                }
                // line 61
                echo "                                    </p>
                                    <p>
                                        <img src=\" ";
                // line 63
                echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayarchive/images/ruler.png"]);
                echo " \" alt=\"ruler\">
                                        ";
                // line 64
                if ((twig_get_attribute($this->env, $this->source, $context["posts"], "area", [], "any", false, false, false, 64) == "0")) {
                    // line 65
                    echo "                                            Diện tích: Đang cập nhật
                                        ";
                } else {
                    // line 67
                    echo "                                            Diện tích: ";
                    echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "area", [], "any", false, false, false, 67)), "html", null, true);
                    echo "m2
                                        ";
                }
                // line 69
                echo "                                    </p>
                                    <p>
                                        <img src=\"";
                // line 71
                echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayarchive/images/map3.png"]);
                echo "\" alt=\"map3\">
                                        Khu vực: 
                                        ";
                // line 73
                if ( !twig_test_empty(twig_get_attribute($this->env, $this->source, $context["posts"], "ward", [], "any", false, false, false, 73))) {
                    // line 74
                    echo "                                            ";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "ward", [], "any", false, false, false, 74), "html", null, true);
                    echo ", 
                                        ";
                }
                // line 76
                echo "                                        ";
                if ( !twig_test_empty(twig_get_attribute($this->env, $this->source, $context["posts"], "district", [], "any", false, false, false, 76))) {
                    // line 77
                    echo "                                            ";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "district", [], "any", false, false, false, 77), "html", null, true);
                    echo ",
                                        ";
                }
                // line 79
                echo "                                        ";
                if ( !twig_test_empty(twig_get_attribute($this->env, $this->source, $context["posts"], "province", [], "any", false, false, false, 79))) {
                    // line 80
                    echo "                                            ";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "province", [], "any", false, false, false, 80), "html", null, true);
                    echo "
                                        ";
                }
                // line 82
                echo "                                    </p>
                                </div>
                                ";
            }
            // line 85
            echo "                            </div>
                        </div>
                    </div>
                    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['posts'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 89
        echo "                </div> 
                ";
        // line 90
        if ((twig_get_attribute($this->env, $this->source, ($context["pagination"] ?? null), "last", [], "any", false, false, false, 90) > 1)) {
            // line 91
            echo "                <div class=\"page_render\"> 
                    <div class=\"col-xs-12\">
                        <div class=\"pagination\"> 
                          <a href=\"";
            // line 94
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["pagination"] ?? null), "previous", [], "any", false, false, false, 94), "html", null, true);
            echo "\">&laquo;</a>
                          ";
            // line 95
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(range(1, twig_get_attribute($this->env, $this->source, ($context["pagination"] ?? null), "last", [], "any", false, false, false, 95)));
            foreach ($context['_seq'] as $context["_key"] => $context["i"]) {
                echo " 
                            <a ";
                // line 96
                if ((twig_get_attribute($this->env, $this->source, ($context["pagination"] ?? null), "current", [], "any", false, false, false, 96) == $context["i"])) {
                    echo " class=\"active\" ";
                }
                echo " href=\"/chuyen-muc/";
                echo twig_escape_filter($this->env, ($context["category_slug"] ?? null), "html", null, true);
                echo "?page=";
                echo twig_escape_filter($this->env, $context["i"], "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, $context["i"], "html", null, true);
                echo " </a>
                          ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['i'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 98
            echo "                          <a href=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["pagination"] ?? null), "nextpage", [], "any", false, false, false, 98), "html", null, true);
            echo "\">&raquo;</a>
                        </div>    
                    </div>                    
                </div>                 
                ";
        }
        // line 103
        echo "            </div>
        </div>
\t</div>
</section> ";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaysearch/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  269 => 103,  260 => 98,  244 => 96,  238 => 95,  234 => 94,  229 => 91,  227 => 90,  224 => 89,  215 => 85,  210 => 82,  204 => 80,  201 => 79,  195 => 77,  192 => 76,  186 => 74,  184 => 73,  179 => 71,  175 => 69,  169 => 67,  165 => 65,  163 => 64,  159 => 63,  155 => 61,  149 => 59,  145 => 57,  143 => 56,  139 => 55,  135 => 53,  133 => 52,  122 => 50,  116 => 46,  108 => 44,  100 => 42,  98 => 41,  90 => 40,  85 => 37,  81 => 36,  73 => 31,  56 => 17,  45 => 9,  35 => 1,);
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
\t        \t\t\t\t\tTìm kiếm cho danh mục {{ categoryname.name }}
\t        \t\t\t\t</h2>
\t        \t\t\t</div>
\t        \t\t\t
\t        \t\t\t<div class=\"col-lg-3 col-md-3 col-xs-12 re_search_box\">
\t        \t\t\t\t<div class=\"search_box\">
\t                            <form role=\"search\"  method=\"get\" class=\"\" action=\"/tim-kiem\">
                                <input type=\"hidden\" name=\"danh-muc\" value=\"tat-ca-danh-muc\">
                                <input type=\"search\" class=\"search-field input-search-nuhoang\" placeholder=\"Tìm sản phẩm, thương hiệu và tên shop\" value=\"{{ keyword }}\" name=\"keyword\" title=\"\" autocomplete=\"off\" />
                                <button class=\"btn-search-nuhoang\" type=\"submit\" value=\"\">
                                    <i class=\"fa fa-search\"></i>
                                </button>
                            </form>
\t                        </div>
\t        \t\t\t</div>
        \t\t\t</div>
                    
        \t\t</div>
        \t</div>
            <div class=\"row\">  
                <div class=\"col-xs-12\">
                    <div class=\"results-count\">
                        <span>Có {{ pagination.total }} kết quả tìm kiếm </span>
                    </div>
                </div>
            \t<div class=\"product_wrapper\">

                    {% for posts in listpost  %}
                    <div class=\"product_box_item col-md-3 col-sm-4 col-xs-6\">
                        <div class=\"product_item\">
                            <div class=\"product_img\">
                                <a href=\"/tin-dang/{{ posts.slug }}/{{ posts.id }}\" title=\"{{ posts.title }}\">
                                \t{% if posts.images.path is empty %}
                                        <img src=\"{{ 'pvtinhdbmientayrealestate/images/no-image.jpg'|component }}\" alt=\"{{ posts.title }}\">
                                    {% else %}
                                        <img src=\"{{ posts.images.thumb(360,180, {'mode':'crop'}) }}\" alt=\"{{ posts.title }}\">
                                    {% endif %}
                                </a>
                            </div>
                            <div class=\"product_content\">
                                <h3 class=\"product_name\"> 
                                    <a href=\"/tin-dang/{{ posts.slug }}/{{ posts.id }}\" data-toggle=\"tooltip\" title=\"{{ posts.title }}\">{{ posts.title }}</a>
                                </h3>
                                {% if isbds == 'true' %}
                                <div class=\"product_info\">
                                    <p>
                                        <img src=\"{{ 'pvtinhdbmientayarchive/images/money.png'|component }} \" alt=\"money\">
                                        {% if posts.price == '0' %}
                                            Giá: <span>Thương lượng</span>
                                        {% else %}
                                            Giá: <span>{{ posts.price|number_format }} VNĐ</span>
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
                {% if pagination.last > 1 %}
                <div class=\"page_render\"> 
                    <div class=\"col-xs-12\">
                        <div class=\"pagination\"> 
                          <a href=\"{{ pagination.previous }}\">&laquo;</a>
                          {% for i in 1..pagination.last  %} 
                            <a {% if pagination.current == i %} class=\"active\" {% endif %} href=\"/chuyen-muc/{{ category_slug }}?page={{ i }}\">{{ i }} </a>
                          {% endfor %}
                          <a href=\"{{ pagination.nextpage }}\">&raquo;</a>
                        </div>    
                    </div>                    
                </div>                 
                {% endif %}
            </div>
        </div>
\t</div>
</section> ", "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaysearch/default.htm", "");
    }
}
