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

/* C:\Program Files (x86)\Ampps\www\octobercms\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayarchivenews/default.htm */
class __TwigTemplate_fa348df94b3f6060ef8abc813fee07c77e66e59ac1a6460b60ec92d58600a650 extends \Twig\Template
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
        echo "<div class=\"lp_danhbamientay_news\">
        <div class=\"container\">
            <h2 class=\"news_title\">Tin tức</h2>
            <div class=\"row news_wrapper\">
                ";
        // line 5
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["newslist"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 6
            echo "
                <div class=\"col-md-4 news_box_item\">
                    <div class=\"news_item\">
                        ";
            // line 9
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["item"], "featured_images", [], "any", false, false, false, 9));
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
            foreach ($context['_seq'] as $context["_key"] => $context["images"]) {
                // line 10
                echo "                        ";
                if (twig_get_attribute($this->env, $this->source, $context["loop"], "first", [], "any", false, false, false, 10)) {
                    // line 11
                    echo "                        <div class=\"news_img\">
                            <a href=\"";
                    // line 12
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["images"], "path", [], "any", false, false, false, 12), "html", null, true);
                    echo "\"><img src=\"";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["images"], "path", [], "any", false, false, false, 12), "html", null, true);
                    echo "\"></a>
                        </div>
                        ";
                }
                // line 15
                echo "                        ";
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
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['images'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 16
            echo "                        <div class=\"news_content\">
                            <div class=\"news_name\">
                                <a href=\"/tin-tuc/";
            // line 18
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item"], "slug", [], "any", false, false, false, 18), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, false, 18), "html", null, true);
            echo "</a>
                            </div>
                            <div class=\"news_date\">
                                ";
            // line 21
            echo twig_escape_filter($this->env, twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item"], "created_at", [], "any", false, false, false, 21), "d/m/Y"), "html", null, true);
            echo "
                            </div>
                            <div class=\"news_des\">
                                <p>";
            // line 24
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["item"], "excerpt", [], "any", false, false, false, 24), "html", null, true);
            echo "</p>
                            </div>
                            <div class=\"news_more\">
                                <a href=\"#\">XEM THÊM <i class=\"fa fa-angle-double-right\"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 33
        echo "            </div>
        </div>
    </div>";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\octobercms\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayarchivenews/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  128 => 33,  113 => 24,  107 => 21,  99 => 18,  95 => 16,  81 => 15,  73 => 12,  70 => 11,  67 => 10,  50 => 9,  45 => 6,  41 => 5,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div class=\"lp_danhbamientay_news\">
        <div class=\"container\">
            <h2 class=\"news_title\">Tin tức</h2>
            <div class=\"row news_wrapper\">
                {% for item in newslist %}

                <div class=\"col-md-4 news_box_item\">
                    <div class=\"news_item\">
                        {% for images in item.featured_images %}
                        {% if loop.first %}
                        <div class=\"news_img\">
                            <a href=\"{{ images.path }}\"><img src=\"{{ images.path }}\"></a>
                        </div>
                        {% endif %}
                        {% endfor %}
                        <div class=\"news_content\">
                            <div class=\"news_name\">
                                <a href=\"/tin-tuc/{{ item.slug }}\">{{ item.title }}</a>
                            </div>
                            <div class=\"news_date\">
                                {{ item.created_at|date(\"d/m/Y\") }}
                            </div>
                            <div class=\"news_des\">
                                <p>{{ item.excerpt }}</p>
                            </div>
                            <div class=\"news_more\">
                                <a href=\"#\">XEM THÊM <i class=\"fa fa-angle-double-right\"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>
    </div>", "C:\\Program Files (x86)\\Ampps\\www\\octobercms\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayarchivenews/default.htm", "");
    }
}
