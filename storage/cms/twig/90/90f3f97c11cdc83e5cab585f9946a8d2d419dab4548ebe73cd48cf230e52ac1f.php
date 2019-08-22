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

/* F:\OCTOBERCMS\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/lamdbmientayfooter/default.htm */
class __TwigTemplate_13f8293ea6c8843e3a4ddf829bd209d12e87b722f01f573cce8480f39b59ee9b extends \Twig\Template
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
        echo "<section id=\"lp_danhbamientay_footer\">
    <div class=\"lp_danhbamientay_footer\" style=\"background-image: url( ";
        // line 2
        echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["lamdbmientayfooter/images/bg_footer.jpg"]);
        echo " )\">
        <div class=\"container\">
            <div class=\"row footer_wrapper\">
                <div class=\"col-md-4 col-sm-12 footer_info_wrapper\">
                    <h2 class=\"ft_title\">
                        <span><img src=\"";
        // line 7
        echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["lamdbmientayfooter/images/cube.png"]);
        echo "\" alt=\"cube\"></span>
                        ";
        // line 8
        echo twig_escape_filter($this->env, ($context["company_name"] ?? null), "html", null, true);
        echo "
                    </h2>

                    <div class=\"footer_info\">
                        <div class=\"info_item text-white\">
                            <span><img src=\"";
        // line 13
        echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["lamdbmientayfooter/images/address.png"]);
        echo "\" alt=\"address\"></span>
                            <p><strong>Địa chỉ: </strong>";
        // line 14
        echo twig_escape_filter($this->env, ($context["address"] ?? null), "html", null, true);
        echo "</p>
                        </div>
                        <div class=\"info_item text-white\">
                            <span><img src=\"";
        // line 17
        echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["lamdbmientayfooter/images/email.png"]);
        echo "\" alt=\"email\"></span>
                            <p><strong>Điện thoại: </strong>";
        // line 18
        echo twig_escape_filter($this->env, ($context["hotline"] ?? null), "html", null, true);
        echo "</p>
                        </div>
                        <div class=\"info_item text-white\">
                            <span><img src=\"";
        // line 21
        echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["lamdbmientayfooter/images/phone.png"]);
        echo "\" alt=\"phone\"></span>
                            <p><strong>Email: </strong>";
        // line 22
        echo twig_escape_filter($this->env, ($context["email"] ?? null), "html", null, true);
        echo "</p>
                        </div>
                    </div> 

                    <div class=\"report_wrapper\">
                        <a href=\"#\"><img src=\"";
        // line 27
        echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["lamdbmientayfooter/images/report.png"]);
        echo "\" alt=\"report\"></a>
                    </div>
                </div>
                <div class=\"col-md-4 col-sm-6 footer_category_wrapper\">
                    <h2 class=\"ft_title\">
                        <span><img src=\"";
        // line 32
        echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["lamdbmientayfooter/images/cube.png"]);
        echo "\" alt=\"cube\"></span>
                        Danh mục
                    </h2>
                    <div class=\"footer_category\">
                        ";
        // line 36
        $context['__cms_component_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->componentFunction("footerMenu"        , $context['__cms_component_params']        );
        unset($context['__cms_component_params']);
        // line 37
        echo "                    </div>
                </div>
                <div class=\"col-md-4 col-sm-6 footer_fanpage\">
                    <h2 class=\"ft_title\">
                        <span><img src=\"";
        // line 41
        echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["lamdbmientayfooter/images/cube.png"]);
        echo "\" alt=\"cube\"></span>
                        Facebook fanpage
                    </h2>
                    <div class=\"fanpage_wrapper\">
                        <div class=\"fb-page\" data-href=\"";
        // line 45
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["socials"] ?? null), 0, [], "any", false, false, false, 45), "link_social", [], "any", false, false, false, 45), "html", null, true);
        echo "\" data-tabs=\"timeline\" data-width=\"500\" data-height=\"231\" data-small-header=\"true\" data-adapt-container-width=\"true\" data-hide-cover=\"false\" data-show-facepile=\"true\"><blockquote cite=\"https://www.facebook.com/facebook\" class=\"fb-xfbml-parse-ignore\"><a href=\"https://www.facebook.com/facebook\">Facebook</a></blockquote></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class=\"copyright\">
        ";
        // line 52
        echo twig_escape_filter($this->env, ($context["copyright"] ?? null), "html", null, true);
        echo ". Designed by <a href=\"https://toannang.com.vn\">Toan Nang</a>
    </div>
</section>";
    }

    public function getTemplateName()
    {
        return "F:\\OCTOBERCMS\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/lamdbmientayfooter/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  132 => 52,  122 => 45,  115 => 41,  109 => 37,  105 => 36,  98 => 32,  90 => 27,  82 => 22,  78 => 21,  72 => 18,  68 => 17,  62 => 14,  58 => 13,  50 => 8,  46 => 7,  38 => 2,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<section id=\"lp_danhbamientay_footer\">
    <div class=\"lp_danhbamientay_footer\" style=\"background-image: url( {{ 'lamdbmientayfooter/images/bg_footer.jpg'|component }} )\">
        <div class=\"container\">
            <div class=\"row footer_wrapper\">
                <div class=\"col-md-4 col-sm-12 footer_info_wrapper\">
                    <h2 class=\"ft_title\">
                        <span><img src=\"{{ 'lamdbmientayfooter/images/cube.png'|component }}\" alt=\"cube\"></span>
                        {{ company_name }}
                    </h2>

                    <div class=\"footer_info\">
                        <div class=\"info_item text-white\">
                            <span><img src=\"{{ 'lamdbmientayfooter/images/address.png'|component }}\" alt=\"address\"></span>
                            <p><strong>Địa chỉ: </strong>{{ address }}</p>
                        </div>
                        <div class=\"info_item text-white\">
                            <span><img src=\"{{ 'lamdbmientayfooter/images/email.png'|component }}\" alt=\"email\"></span>
                            <p><strong>Điện thoại: </strong>{{ hotline }}</p>
                        </div>
                        <div class=\"info_item text-white\">
                            <span><img src=\"{{ 'lamdbmientayfooter/images/phone.png'|component }}\" alt=\"phone\"></span>
                            <p><strong>Email: </strong>{{ email }}</p>
                        </div>
                    </div> 

                    <div class=\"report_wrapper\">
                        <a href=\"#\"><img src=\"{{ 'lamdbmientayfooter/images/report.png'|component }}\" alt=\"report\"></a>
                    </div>
                </div>
                <div class=\"col-md-4 col-sm-6 footer_category_wrapper\">
                    <h2 class=\"ft_title\">
                        <span><img src=\"{{ 'lamdbmientayfooter/images/cube.png'|component }}\" alt=\"cube\"></span>
                        Danh mục
                    </h2>
                    <div class=\"footer_category\">
                        {% component \"footerMenu\" %}
                    </div>
                </div>
                <div class=\"col-md-4 col-sm-6 footer_fanpage\">
                    <h2 class=\"ft_title\">
                        <span><img src=\"{{ 'lamdbmientayfooter/images/cube.png'|component }}\" alt=\"cube\"></span>
                        Facebook fanpage
                    </h2>
                    <div class=\"fanpage_wrapper\">
                        <div class=\"fb-page\" data-href=\"{{ socials.0.link_social }}\" data-tabs=\"timeline\" data-width=\"500\" data-height=\"231\" data-small-header=\"true\" data-adapt-container-width=\"true\" data-hide-cover=\"false\" data-show-facepile=\"true\"><blockquote cite=\"https://www.facebook.com/facebook\" class=\"fb-xfbml-parse-ignore\"><a href=\"https://www.facebook.com/facebook\">Facebook</a></blockquote></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class=\"copyright\">
        {{ copyright }}. Designed by <a href=\"https://toannang.com.vn\">Toan Nang</a>
    </div>
</section>", "F:\\OCTOBERCMS\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/lamdbmientayfooter/default.htm", "");
    }
}
