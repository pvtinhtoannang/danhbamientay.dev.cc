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

/* C:\Program Files (x86)\Ampps\www\octobercms\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/lamdbmientayheader/default.htm */
class __TwigTemplate_9a9cd86ff739730715361bb20bee007775b1851d00f82f106bd79dad450a487f extends \Twig\Template
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
        echo "<div id=\"fb-root\"></div>
<script async defer crossorigin=\"anonymous\"
        src=\"https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v4.0&appId=2242396325982501&autoLogAppEvents=1\"></script>
<section id=\"lp_danhbamientay_header\">
    <div class=\"lp_danhbamientay_header\">
        <div class=\"header_top_wrapper\">
            <div class=\"container\">
                <div class=\"row\">
                    <div class=\"header_city_wrapper col-sm-4\">
                        <span class=\"icon icon-map\"></span>
                        ";
        // line 11
        if (($context["locations"] ?? null)) {
            // line 12
            echo "                        <marquee>";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["locations"] ?? null));
            $context['loop'] = [
              'parent' => $context['_parent'],
              'index0' => 0,
              'index'  => 1,
              'first'  => true,
            ];
            if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                $length = count($context['_seq']);
                $context['loop']['revindex0'] = $length - 1;
                $context['loop']['revindex'] = $length;
                $context['loop']['length'] = $length;
                $context['loop']['last'] = 1 === $length;
            }
            foreach ($context['_seq'] as $context["_key"] => $context["location"]) {
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["location"], "name", [], "any", false, false, false, 12), "html", null, true);
                if ( !twig_get_attribute($this->env, $this->source, $context["loop"], "last", [], "any", false, false, false, 12)) {
                    echo " - ";
                }
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['location'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 14
            echo "                        </marquee>
                        ";
        }
        // line 16
        echo "                    </div>
                    <div class=\"header_hotline_wrapper col-sm-4 hidden-xs\">
                        <a href=\"tel:";
        // line 18
        echo twig_escape_filter($this->env, ($context["hotline"] ?? null), "html", null, true);
        echo "\">Hotline: <span>";
        echo twig_escape_filter($this->env, ($context["hotline"] ?? null), "html", null, true);
        echo "</span></a>
                    </div>
                    <div class=\"header_function col-sm-4\">
                        ";
        // line 21
        if (($context["user"] ?? null)) {
            // line 22
            echo "                        <ul class=\"header_account\">
                            <li>
                                <a href=\"/tai-khoan\">Tài khoản: ";
            // line 24
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "name", [], "any", false, false, false, 24), "html", null, true);
            echo "</a>
                            </li>
                        </ul>

                        ";
        }
        // line 29
        echo "                        ";
        if ( !($context["user"] ?? null)) {
            // line 30
            echo "                        <a href=\"/dang-ky\">Đăng ký</a>
                        <span>/</span>
                        <a href=\"/dang-nhap\">Đăng nhập</a>
                        ";
        }
        // line 34
        echo "                    </div>
                </div>
            </div>
        </div>
        <div class=\"header_bot_wrapper\">
            <div class=\"container\">
                <div class=\"row header_bot_box\">
                    <div class=\"col-md-3 col-sm-4 col-xs-12 logo_wrapper\">
                        <div class=\"logo_box\">
                            <h1 class=\"header_comname\">
                                <a href=\"";
        // line 44
        echo url("/");
        echo "\" title=\"";
        echo twig_escape_filter($this->env, ($context["site_name"] ?? null), "html", null, true);
        echo "\">
                                    ";
        // line 45
        if ((null === ($context["logo"] ?? null))) {
            // line 46
            echo "                                    ";
            echo twig_escape_filter($this->env, ($context["site_name"] ?? null), "html", null, true);
            echo "
                                    ";
        } else {
            // line 48
            echo "                                    <img src=\"";
            echo twig_escape_filter($this->env, ($context["logo"] ?? null), "html", null, true);
            echo "\" title=\"";
            echo twig_escape_filter($this->env, ($context["site_name"] ?? null), "html", null, true);
            echo "\"
                                         alt=\"";
            // line 49
            echo twig_escape_filter($this->env, ($context["site_name"] ?? null), "html", null, true);
            echo "\" class=\"img-responsive \"/>
                                    ";
        }
        // line 51
        echo "                                </a>
                            </h1>
                        </div>
                    </div>
                    <div class=\"col-md-6 col-sm-5 col-xs-12 search_wrapper\">
                        <div class=\"search_box\">
                            <form role=\"search\" method=\"get\" class=\"\" action=\"/tim-kiem\">
                                <input type=\"hidden\" name=\"danh-muc\" value=\"tat-ca-danh-muc\">
                                <input type=\"search\" class=\"search-field input-search-nuhoang\"
                                       placeholder=\"Tìm sản phẩm, thương hiệu và tên shop\" value=\"";
        // line 60
        echo twig_escape_filter($this->env, ($context["keyword"] ?? null), "html", null, true);
        echo "\"
                                       name=\"keyword\" title=\"\" autocomplete=\"off\"/>
                                <button class=\"btn-search-nuhoang\" type=\"submit\" value=\"\">
                                    <i class=\"fa fa-search\"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class=\"col-md-3 col-sm-3 col-xs-12 post_article_wrapper\">
                        <div class=\"post_article_box\">
                            <a href=\"/dang-tin\">Đăng tin <img
                                    src=\"";
        // line 71
        echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["lamdbmientayheader/images/checklist.png"]);
        echo "\" alt=\"checklist\"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\octobercms\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/lamdbmientayheader/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  185 => 71,  171 => 60,  160 => 51,  155 => 49,  148 => 48,  142 => 46,  140 => 45,  134 => 44,  122 => 34,  116 => 30,  113 => 29,  105 => 24,  101 => 22,  99 => 21,  91 => 18,  87 => 16,  83 => 14,  49 => 12,  47 => 11,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div id=\"fb-root\"></div>
<script async defer crossorigin=\"anonymous\"
        src=\"https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v4.0&appId=2242396325982501&autoLogAppEvents=1\"></script>
<section id=\"lp_danhbamientay_header\">
    <div class=\"lp_danhbamientay_header\">
        <div class=\"header_top_wrapper\">
            <div class=\"container\">
                <div class=\"row\">
                    <div class=\"header_city_wrapper col-sm-4\">
                        <span class=\"icon icon-map\"></span>
                        {% if locations %}
                        <marquee>{% for location in locations %}{{ location.name }}{% if not loop.last%} - {% endif %}{%
                            endfor %}
                        </marquee>
                        {% endif %}
                    </div>
                    <div class=\"header_hotline_wrapper col-sm-4 hidden-xs\">
                        <a href=\"tel:{{hotline}}\">Hotline: <span>{{ hotline }}</span></a>
                    </div>
                    <div class=\"header_function col-sm-4\">
                        {% if user %}
                        <ul class=\"header_account\">
                            <li>
                                <a href=\"/tai-khoan\">Tài khoản: {{ user.name }}</a>
                            </li>
                        </ul>

                        {% endif %}
                        {% if not user %}
                        <a href=\"/dang-ky\">Đăng ký</a>
                        <span>/</span>
                        <a href=\"/dang-nhap\">Đăng nhập</a>
                        {% endif %}
                    </div>
                </div>
            </div>
        </div>
        <div class=\"header_bot_wrapper\">
            <div class=\"container\">
                <div class=\"row header_bot_box\">
                    <div class=\"col-md-3 col-sm-4 col-xs-12 logo_wrapper\">
                        <div class=\"logo_box\">
                            <h1 class=\"header_comname\">
                                <a href=\"{{ url('/') }}\" title=\"{{ site_name }}\">
                                    {% if logo is null %}
                                    {{ site_name }}
                                    {% else %}
                                    <img src=\"{{ logo }}\" title=\"{{ site_name }}\"
                                         alt=\"{{ site_name }}\" class=\"img-responsive \"/>
                                    {% endif %}
                                </a>
                            </h1>
                        </div>
                    </div>
                    <div class=\"col-md-6 col-sm-5 col-xs-12 search_wrapper\">
                        <div class=\"search_box\">
                            <form role=\"search\" method=\"get\" class=\"\" action=\"/tim-kiem\">
                                <input type=\"hidden\" name=\"danh-muc\" value=\"tat-ca-danh-muc\">
                                <input type=\"search\" class=\"search-field input-search-nuhoang\"
                                       placeholder=\"Tìm sản phẩm, thương hiệu và tên shop\" value=\"{{ keyword }}\"
                                       name=\"keyword\" title=\"\" autocomplete=\"off\"/>
                                <button class=\"btn-search-nuhoang\" type=\"submit\" value=\"\">
                                    <i class=\"fa fa-search\"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class=\"col-md-3 col-sm-3 col-xs-12 post_article_wrapper\">
                        <div class=\"post_article_box\">
                            <a href=\"/dang-tin\">Đăng tin <img
                                    src=\"{{ 'lamdbmientayheader/images/checklist.png'|component }}\" alt=\"checklist\"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
", "C:\\Program Files (x86)\\Ampps\\www\\octobercms\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/lamdbmientayheader/default.htm", "");
    }
}
