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
                            <a href=\"#\">Cần Thơ</a>
                            <a href=\"#\">Kiên Giang</a>
                            <a href=\"#\">Cà Mau</a>
                            <a href=\"#\">Hậu Giang</a>
                            <a href=\"#\">Tiền Giang</a>
                            <a href=\"#\">Bến Tre</a>
                            <a href=\"#\">An Giang</a>
                            <a href=\"#\">Bạc Liêu</a>
                            <a href=\"#\">Cần Thơ</a>
                            <a href=\"#\">Kiên Giang</a>
                            <a href=\"#\">Cà Mau</a>
                            <a href=\"#\">Hậu Giang</a>
                            <a href=\"#\">Tiền Giang</a>
                            <a href=\"#\">Bến Tre</a>
                            <a href=\"#\">An Giang</a>
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
                                <select>
                                    <option value=\"0\" selected=\"selected\">Loại nhà đất</option>
                                    <option class=\"level-0\" value=\"104\">Mua bán</option>
                                    <option class=\"level-0\" value=\"104\">Cho thuê</option>
                                    <option class=\"level-0\" value=\"104\">Sang nhượng</option>
                                    <option class=\"level-0\" value=\"104\">Dự án</option>
                                </select>
                                <select>
                                    <option value=\"0\" selected=\"selected\">Tỉnh/Thành Phố</option>
                                    <option class=\"level-0\" value=\"104\">Cần Thơ</option>
                                    <option class=\"level-0\" value=\"104\">Tp. Hồ Chí Minh</option>
                                    <option class=\"level-0\" value=\"104\">Kiên Giang</option>
                                    <option class=\"level-0\" value=\"104\">Sóc Trăng</option>
                                    <option class=\"level-0\" value=\"104\">Bạc Liêu</option>
                                </select>
                                <select>
                                    <option value=\"0\" selected=\"selected\">Quận/Huyện</option>
                                    <option class=\"level-0\" value=\"104\">Ninh Kiều</option>
                                    <option class=\"level-0\" value=\"104\">Bình Thủy</option>
                                    <option class=\"level-0\" value=\"104\">Thốt nốt</option>
                                    <option class=\"level-0\" value=\"104\">Cái Răng</option>
                                </select>
                                <input type=\"text\" name=\"\" placeholder=\"Diện tích\">
                                <button type=\"submit\">Tìm kiếm<i class=\"fa fa-paper-plane-o\"></i></button>
                            </form>
                        </div>
                        <div class=\"dbmt_ads_wrapper hidden-sm hidden-xs\">
                            <a href=\"#\">
                                <img src=\"";
        // line 64
        echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayrealestate/images/qc1.jpg"]);
        echo " \">
                            </a>
                        </div>
                    </div>
                </div>
                <div class=\"col-md-9 right_wrapper\">
                    <div class=\"product_wrapper\">
                       ";
        // line 71
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(range(1, 12));
        foreach ($context['_seq'] as $context["_key"] => $context["i"]) {
            // line 72
            echo "                        <div class=\"product_box_item\">
                            <div class=\"product_item\">
                                <div class=\"product_img\">
                                    <a href=\"#\"><img src=\"";
            // line 75
            echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayrealestate/images/"]);
            echo "/item";
            echo twig_escape_filter($this->env, $context["i"], "html", null, true);
            echo ".jpg\"></a>
                                </div>
                                <div class=\"product_content\">
                                    <h3 class=\"product_name\">
                                        <a href=\"#\">Cần bán căn hộ 1PN ban công</a>
                                    </h3>
                                    <div class=\"product_info\">
                                        <p>
                                            <img src=\"";
            // line 83
            echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayrealestate/images/money.png"]);
            echo "\" alt=\"money\">
                                            Giá: <span>900 Triệu VNĐ</span>
                                        </p>
                                        <p>
                                            <img src=\"";
            // line 87
            echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayrealestate/images/ruler.png"]);
            echo "\" alt=\"ruler\">
                                            Diện tích: 350 m2
                                        </p>
                                        <p>
                                            <img src=\"";
            // line 91
            echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayrealestate/images/map3.png"]);
            echo "\" alt=\"map3\">
                                            Khu vực: Bình Mỹ, Củ Chi, TP HCM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        \t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['i'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 99
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
        return array (  160 => 99,  146 => 91,  139 => 87,  132 => 83,  119 => 75,  114 => 72,  110 => 71,  100 => 64,  35 => 1,);
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
                            <a href=\"#\">Cần Thơ</a>
                            <a href=\"#\">Kiên Giang</a>
                            <a href=\"#\">Cà Mau</a>
                            <a href=\"#\">Hậu Giang</a>
                            <a href=\"#\">Tiền Giang</a>
                            <a href=\"#\">Bến Tre</a>
                            <a href=\"#\">An Giang</a>
                            <a href=\"#\">Bạc Liêu</a>
                            <a href=\"#\">Cần Thơ</a>
                            <a href=\"#\">Kiên Giang</a>
                            <a href=\"#\">Cà Mau</a>
                            <a href=\"#\">Hậu Giang</a>
                            <a href=\"#\">Tiền Giang</a>
                            <a href=\"#\">Bến Tre</a>
                            <a href=\"#\">An Giang</a>
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
                                <select>
                                    <option value=\"0\" selected=\"selected\">Loại nhà đất</option>
                                    <option class=\"level-0\" value=\"104\">Mua bán</option>
                                    <option class=\"level-0\" value=\"104\">Cho thuê</option>
                                    <option class=\"level-0\" value=\"104\">Sang nhượng</option>
                                    <option class=\"level-0\" value=\"104\">Dự án</option>
                                </select>
                                <select>
                                    <option value=\"0\" selected=\"selected\">Tỉnh/Thành Phố</option>
                                    <option class=\"level-0\" value=\"104\">Cần Thơ</option>
                                    <option class=\"level-0\" value=\"104\">Tp. Hồ Chí Minh</option>
                                    <option class=\"level-0\" value=\"104\">Kiên Giang</option>
                                    <option class=\"level-0\" value=\"104\">Sóc Trăng</option>
                                    <option class=\"level-0\" value=\"104\">Bạc Liêu</option>
                                </select>
                                <select>
                                    <option value=\"0\" selected=\"selected\">Quận/Huyện</option>
                                    <option class=\"level-0\" value=\"104\">Ninh Kiều</option>
                                    <option class=\"level-0\" value=\"104\">Bình Thủy</option>
                                    <option class=\"level-0\" value=\"104\">Thốt nốt</option>
                                    <option class=\"level-0\" value=\"104\">Cái Răng</option>
                                </select>
                                <input type=\"text\" name=\"\" placeholder=\"Diện tích\">
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
                       {% for i in 1..12 %}
                        <div class=\"product_box_item\">
                            <div class=\"product_item\">
                                <div class=\"product_img\">
                                    <a href=\"#\"><img src=\"{{ 'pvtinhdbmientayrealestate/images/'|component }}/item{{i}}.jpg\"></a>
                                </div>
                                <div class=\"product_content\">
                                    <h3 class=\"product_name\">
                                        <a href=\"#\">Cần bán căn hộ 1PN ban công</a>
                                    </h3>
                                    <div class=\"product_info\">
                                        <p>
                                            <img src=\"{{ 'pvtinhdbmientayrealestate/images/money.png'|component }}\" alt=\"money\">
                                            Giá: <span>900 Triệu VNĐ</span>
                                        </p>
                                        <p>
                                            <img src=\"{{ 'pvtinhdbmientayrealestate/images/ruler.png'|component }}\" alt=\"ruler\">
                                            Diện tích: 350 m2
                                        </p>
                                        <p>
                                            <img src=\"{{ 'pvtinhdbmientayrealestate/images/map3.png'|component }}\" alt=\"map3\">
                                            Khu vực: Bình Mỹ, Củ Chi, TP HCM
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
