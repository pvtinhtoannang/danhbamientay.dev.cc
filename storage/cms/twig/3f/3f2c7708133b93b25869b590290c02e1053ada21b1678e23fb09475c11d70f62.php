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

/* C:\Program Files (x86)\Ampps\www\octobercms\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayrealestate/default.htm */
class __TwigTemplate_d6938bf0d6eda29d5ac6e275eb8c3b276ac905e2f311edd2098770ba5ce3f0d0 extends \Twig\Template
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
                        <div class=\"mientay_title_slider real_estate_slider menu-slider\">
                            ";
        // line 11
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["provinces"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item_province"]) {
            // line 12
            echo "                            <a href=\"/dia-diem/bat-dong-san/";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item_province"], "id", [], "any", false, false, false, 12), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item_province"], "name", [], "any", false, false, false, 12), "html", null, true);
            echo "</a>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item_province'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 13
        echo "  
                        </div> 
                    </div>
                    <div class=\"col-md-1 col-sm-1 mientay_title_slider_arrow real_estate_arrow\"></div>
                </div>
            </div>
            <div class=\"row real_estate_wrapper content_wrapper\">
                <div class=\"col-md-3 left_wrapper\">
                    <div class=\"left_box\">
                        <div class=\"advance_search_wrapper\">
                            <!-- <form action=\"/tim-kiem\" class=\"search-form\"  > -->
                            <form  data-request=\"onSave\" action=\"/tim-kiem\" class=\"search-form\"  data-request-validate data-request-flash>
                                <input type=\"hidden\" name=\"danh-muc\" value=\"bat-dong-san\">
                                <select name=\"loai-hinh\">
                                    ";
        // line 27
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["propertytype_home"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 28
            echo "                                        <option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item"], "slug", [], "any", false, false, false, 28), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item"], "name", [], "any", false, false, false, 28), "html", null, true);
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item"], "id", [], "any", false, false, false, 28), "html", null, true);
            echo "</option>
                                    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 30
        echo "                                </select>
                                <select name=\"tinh-thanh\" id=\"province\">
                                    ";
        // line 32
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["provinces"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 33
            echo "                                        <option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item"], "id", [], "any", false, false, false, 33), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item"], "name", [], "any", false, false, false, 33), "html", null, true);
            echo "</option>
                                    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 35
        echo "                                </select>
                                <select required=\"required\" name=\"quan-huyen\" id=\"district\">
                                    <option value=\"-1\">Chọn quận / huyện</option>
                                </select>  
                                <span data-validate-for=\"quan-huyen\"></span>
                                <input type=\"number\" name=\"dien-tich\" placeholder=\"Diện tích\" value=\"0\">
                                <span data-validate-for=\"dien-tich\"></span>
                                <button type=\"submit\" class=\"btn-search\">Tìm kiếm<i class=\"fa fa-paper-plane-o\"></i></button>

                            </form>
                        </div>
                        <div class=\"dbmt_ads_wrapper hidden-sm hidden-xs\">
                            ";
        // line 47
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["banner_item"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            echo " 
                            <a href=\"";
            // line 48
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item"], "link", [], "any", false, false, false, 48), "html", null, true);
            echo "\" target=\"_blank\" title=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item"], "name", [], "any", false, false, false, 48), "html", null, true);
            echo "\">
                                <img src=\"";
            // line 49
            echo $this->extensions['System\Twig\Extension']->mediaFilter(twig_get_attribute($this->env, $this->source, $context["item"], "image", [], "any", false, false, false, 49));
            echo "\" alt=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item"], "name", [], "any", false, false, false, 49), "html", null, true);
            echo "\">
                            </a>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 52
        echo "                        </div>
                    </div>
                </div>
                <div class=\"col-md-9 right_wrapper\">
                    <div class=\"product_wrapper\">
                        ";
        // line 57
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["listpost"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["posts"]) {
            echo "                                                 
                        <div class=\"product_box_item\">
                            <div class=\"product_item\">
                                <div class=\"product_img\">
                                    <a href=\"/tin-dang/";
            // line 61
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "slug", [], "any", false, false, false, 61), "html", null, true);
            echo "/";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "id", [], "any", false, false, false, 61), "html", null, true);
            echo "\" title=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 61), "html", null, true);
            echo "\">
                                        ";
            // line 62
            if (twig_test_empty(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["posts"], "images", [], "any", false, false, false, 62), "path", [], "any", false, false, false, 62))) {
                // line 63
                echo "                                            <img src=\"";
                echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayrealestate/images/no-image.jpg"]);
                echo "\" alt=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 63), "html", null, true);
                echo "\">
                                        ";
            } else {
                // line 64
                echo " 
                                            <img src=\"";
                // line 65
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["posts"], "images", [], "any", false, false, false, 65), "thumb", [0 => 360, 1 => 180, 2 => ["mode" => "crop"]], "method", false, false, false, 65), "html", null, true);
                echo "\" alt=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 65), "html", null, true);
                echo "\">
                                        ";
            }
            // line 67
            echo "                                        
                                    </a>
                                </div>
                                <div class=\"product_content\">
                                    <h3 class=\"product_name inline-text\">
                                        <a href=\"/tin-dang/";
            // line 72
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "slug", [], "any", false, false, false, 72), "html", null, true);
            echo "/";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "id", [], "any", false, false, false, 72), "html", null, true);
            echo "\" data-toggle=\"tooltip\" title=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 72), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 72), "html", null, true);
            echo "</a>
                                    </h3>
                                    <div class=\"product_info\">
                                        <p>
                                            <img src=\"";
            // line 76
            echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayrealestate/images/money.png"]);
            echo "\" alt=\"money\">
                                            ";
            // line 77
            if ((twig_get_attribute($this->env, $this->source, $context["posts"], "price", [], "any", false, false, false, 77) == "0")) {
                // line 78
                echo "                                                Giá: <span>Thương lượng</span>
                                            ";
            } else {
                // line 80
                echo "                                                Giá: <span>";
                echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "price", [], "any", false, false, false, 80)), "html", null, true);
                echo "</span>
                                            ";
            }
            // line 82
            echo "                                            
                                        </p>
                                        <p>
                                            <img src=\"";
            // line 85
            echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayrealestate/images/ruler.png"]);
            echo "\" alt=\"ruler\">
                                            Diện tích:
                                            ";
            // line 87
            if ((twig_get_attribute($this->env, $this->source, $context["posts"], "area", [], "any", false, false, false, 87) == "0")) {
                // line 88
                echo "                                                Đang cập nhật
                                            ";
            } else {
                // line 90
                echo "                                                ";
                echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "area", [], "any", false, false, false, 90)), "html", null, true);
                echo "m2
                                            ";
            }
            // line 92
            echo "                                        </p>
                                        <p>
                                            <img src=\"";
            // line 94
            echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayrealestate/images/map3.png"]);
            echo "\" alt=\"map3\">
                                            Khu vực: 
                                            ";
            // line 96
            if ( !twig_test_empty(twig_get_attribute($this->env, $this->source, $context["posts"], "ward", [], "any", false, false, false, 96))) {
                // line 97
                echo "                                                ";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "ward", [], "any", false, false, false, 97), "html", null, true);
                echo ",
                                            ";
            }
            // line 99
            echo "                                            ";
            if ( !twig_test_empty(twig_get_attribute($this->env, $this->source, $context["posts"], "district", [], "any", false, false, false, 99))) {
                // line 100
                echo "                                                ";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "district", [], "any", false, false, false, 100), "html", null, true);
                echo ",
                                            ";
            }
            // line 102
            echo "                                            ";
            if ( !twig_test_empty(twig_get_attribute($this->env, $this->source, $context["posts"], "province", [], "any", false, false, false, 102))) {
                // line 103
                echo "                                                ";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "province", [], "any", false, false, false, 103), "html", null, true);
                echo "
                                            ";
            }
            // line 105
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
        // line 111
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
        return "C:\\Program Files (x86)\\Ampps\\www\\octobercms\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayrealestate/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  298 => 111,  287 => 105,  281 => 103,  278 => 102,  272 => 100,  269 => 99,  263 => 97,  261 => 96,  256 => 94,  252 => 92,  246 => 90,  242 => 88,  240 => 87,  235 => 85,  230 => 82,  224 => 80,  220 => 78,  218 => 77,  214 => 76,  201 => 72,  194 => 67,  187 => 65,  184 => 64,  176 => 63,  174 => 62,  166 => 61,  157 => 57,  150 => 52,  139 => 49,  133 => 48,  127 => 47,  113 => 35,  102 => 33,  98 => 32,  94 => 30,  82 => 28,  78 => 27,  62 => 13,  51 => 12,  47 => 11,  35 => 1,);
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
                        <div class=\"mientay_title_slider real_estate_slider menu-slider\">
                            {% for item_province in provinces %}
                            <a href=\"/dia-diem/bat-dong-san/{{ item_province.id }}\">{{ item_province.name }}</a>
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
                            <!-- <form action=\"/tim-kiem\" class=\"search-form\"  > -->
                            <form  data-request=\"onSave\" action=\"/tim-kiem\" class=\"search-form\"  data-request-validate data-request-flash>
                                <input type=\"hidden\" name=\"danh-muc\" value=\"bat-dong-san\">
                                <select name=\"loai-hinh\">
                                    {% for item in propertytype_home %}
                                        <option value=\"{{ item.slug }}\">{{ item.name }}{{ item.id }}</option>
                                    {% endfor %}
                                </select>
                                <select name=\"tinh-thanh\" id=\"province\">
                                    {% for item in provinces %}
                                        <option value=\"{{ item.id }}\">{{ item.name }}</option>
                                    {% endfor %}
                                </select>
                                <select required=\"required\" name=\"quan-huyen\" id=\"district\">
                                    <option value=\"-1\">Chọn quận / huyện</option>
                                </select>  
                                <span data-validate-for=\"quan-huyen\"></span>
                                <input type=\"number\" name=\"dien-tich\" placeholder=\"Diện tích\" value=\"0\">
                                <span data-validate-for=\"dien-tich\"></span>
                                <button type=\"submit\" class=\"btn-search\">Tìm kiếm<i class=\"fa fa-paper-plane-o\"></i></button>

                            </form>
                        </div>
                        <div class=\"dbmt_ads_wrapper hidden-sm hidden-xs\">
                            {% for item in banner_item %} 
                            <a href=\"{{ item.link }}\" target=\"_blank\" title=\"{{ item.name }}\">
                                <img src=\"{{ item.image|media }}\" alt=\"{{ item.name }}\">
                            </a>
                            {% endfor %}
                        </div>
                    </div>
                </div>
                <div class=\"col-md-9 right_wrapper\">
                    <div class=\"product_wrapper\">
                        {% for posts in listpost  %}                                                 
                        <div class=\"product_box_item\">
                            <div class=\"product_item\">
                                <div class=\"product_img\">
                                    <a href=\"/tin-dang/{{ posts.slug }}/{{ posts.id }}\" title=\"{{ posts.title }}\">
                                        {% if posts.images.path is empty %}
                                            <img src=\"{{ 'pvtinhdbmientayrealestate/images/no-image.jpg'|component }}\" alt=\"{{ posts.title }}\">
                                        {% else %} 
                                            <img src=\"{{ posts.images.thumb(360,180, {'mode':'crop'}) }}\" alt=\"{{ posts.title }}\">
                                        {% endif %}
                                        
                                    </a>
                                </div>
                                <div class=\"product_content\">
                                    <h3 class=\"product_name inline-text\">
                                        <a href=\"/tin-dang/{{ posts.slug }}/{{ posts.id }}\" data-toggle=\"tooltip\" title=\"{{ posts.title }}\">{{ posts.title }}</a>
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
", "C:\\Program Files (x86)\\Ampps\\www\\octobercms\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayrealestate/default.htm", "");
    }
}
