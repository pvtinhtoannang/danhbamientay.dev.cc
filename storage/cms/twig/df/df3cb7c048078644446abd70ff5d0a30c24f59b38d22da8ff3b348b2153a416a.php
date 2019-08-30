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

/* F:\OCTOBERCMS\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayarchive/default.htm */
class __TwigTemplate_6df4412d32fb5e879b67de6576ff65ebed5dfef5a5aa79865771d2fa3bc0bb92 extends \Twig\Template
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
\t        \t\t\t\t\tBất động sản
\t        \t\t\t\t</h2>
\t        \t\t\t</div>
\t        \t\t\t<div class=\"col-lg-6 col-md-5 col-xs-12 re_cat_box\">
\t        \t\t\t\t<div class=\"re_cat\">
\t        \t\t\t\t\t<ul>
\t        \t\t\t\t\t\t<li>
\t        \t\t\t\t\t\t\t<a href=\"#\">Mua bán</a>
\t        \t\t\t\t\t\t</li>
\t        \t\t\t\t\t\t<li>
\t        \t\t\t\t\t\t\t<a href=\"#\">Cho thuê</a>
\t        \t\t\t\t\t\t</li>
\t        \t\t\t\t\t\t<li>
\t        \t\t\t\t\t\t\t<a href=\"#\">Sang nhượng</a>
\t        \t\t\t\t\t\t</li>
\t        \t\t\t\t\t\t<li>
\t        \t\t\t\t\t\t\t<a href=\"#\">Dự án</a>
\t        \t\t\t\t\t\t</li>
\t        \t\t\t\t\t\t<li>
\t        \t\t\t\t\t\t\t<a href=\"#\">Dự án 1</a>
\t        \t\t\t\t\t\t</li>
\t        \t\t\t\t\t\t<li>
\t        \t\t\t\t\t\t\t<a href=\"#\">Dự án 2</a>
\t        \t\t\t\t\t\t</li>
\t        \t\t\t\t\t</ul>
\t        \t\t\t\t</div>
\t        \t\t\t</div> 
\t        \t\t\t<div class=\"col-lg-4 col-md-4 col-xs-12 re_search_box\">
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
                    
                    <div class=\"product_box_item col-md-3 col-sm-4 col-xs-6\">
                        <div class=\"product_item\">
                            <div class=\"product_img\">
                                <a href=\"#\"><img src=\"<?= \$linklp ?>images/item<?= \$i ?>.jpg\"></a>
                            </div>
                            <div class=\"product_content\">
                                <h3 class=\"product_name\">
                                    <a href=\"#\">Cần bán căn hộ 1PN ban công</a>
                                </h3>
                                <div class=\"product_info\">
                                    <p>
                                        <img src=\"";
        // line 64
        echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["lamdbmientayheader/images/money.png"]);
        echo " \" alt=\"money\">
                                        Giá: <span>900 Triệu VNĐ</span>
                                    </p>
                                    <p>
                                        <img src=\" ";
        // line 68
        echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["lamdbmientayheader/images/ruler.png"]);
        echo " \" alt=\"ruler\">
                                        Diện tích: 350 m2
                                    </p>
                                    <p>
                                        <img src=\"";
        // line 72
        echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["lamdbmientayheader/images/map3.png"]);
        echo "\" alt=\"map3\">
                                        Khu vực: Bình Mỹ, Củ Chi, TP HCM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php endfor; ?>
                </div>
            </div>
        </div>
\t</div>
</section> ";
    }

    public function getTemplateName()
    {
        return "F:\\OCTOBERCMS\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayarchive/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  114 => 72,  107 => 68,  100 => 64,  35 => 1,);
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
\t        \t\t\t\t\tBất động sản
\t        \t\t\t\t</h2>
\t        \t\t\t</div>
\t        \t\t\t<div class=\"col-lg-6 col-md-5 col-xs-12 re_cat_box\">
\t        \t\t\t\t<div class=\"re_cat\">
\t        \t\t\t\t\t<ul>
\t        \t\t\t\t\t\t<li>
\t        \t\t\t\t\t\t\t<a href=\"#\">Mua bán</a>
\t        \t\t\t\t\t\t</li>
\t        \t\t\t\t\t\t<li>
\t        \t\t\t\t\t\t\t<a href=\"#\">Cho thuê</a>
\t        \t\t\t\t\t\t</li>
\t        \t\t\t\t\t\t<li>
\t        \t\t\t\t\t\t\t<a href=\"#\">Sang nhượng</a>
\t        \t\t\t\t\t\t</li>
\t        \t\t\t\t\t\t<li>
\t        \t\t\t\t\t\t\t<a href=\"#\">Dự án</a>
\t        \t\t\t\t\t\t</li>
\t        \t\t\t\t\t\t<li>
\t        \t\t\t\t\t\t\t<a href=\"#\">Dự án 1</a>
\t        \t\t\t\t\t\t</li>
\t        \t\t\t\t\t\t<li>
\t        \t\t\t\t\t\t\t<a href=\"#\">Dự án 2</a>
\t        \t\t\t\t\t\t</li>
\t        \t\t\t\t\t</ul>
\t        \t\t\t\t</div>
\t        \t\t\t</div> 
\t        \t\t\t<div class=\"col-lg-4 col-md-4 col-xs-12 re_search_box\">
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
                    
                    <div class=\"product_box_item col-md-3 col-sm-4 col-xs-6\">
                        <div class=\"product_item\">
                            <div class=\"product_img\">
                                <a href=\"#\"><img src=\"<?= \$linklp ?>images/item<?= \$i ?>.jpg\"></a>
                            </div>
                            <div class=\"product_content\">
                                <h3 class=\"product_name\">
                                    <a href=\"#\">Cần bán căn hộ 1PN ban công</a>
                                </h3>
                                <div class=\"product_info\">
                                    <p>
                                        <img src=\"{{ 'lamdbmientayheader/images/money.png'|component }} \" alt=\"money\">
                                        Giá: <span>900 Triệu VNĐ</span>
                                    </p>
                                    <p>
                                        <img src=\" {{ 'lamdbmientayheader/images/ruler.png'|component }} \" alt=\"ruler\">
                                        Diện tích: 350 m2
                                    </p>
                                    <p>
                                        <img src=\"{{ 'lamdbmientayheader/images/map3.png'|component }}\" alt=\"map3\">
                                        Khu vực: Bình Mỹ, Củ Chi, TP HCM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php endfor; ?>
                </div>
            </div>
        </div>
\t</div>
</section> ", "F:\\OCTOBERCMS\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayarchive/default.htm", "");
    }
}
