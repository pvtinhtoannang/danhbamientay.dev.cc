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

/* C:\Program Files (x86)\Ampps\www\dev\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaysinglepost/default.htm */
class __TwigTemplate_333e01247a8eaefb648e91920d52153b08d84735353bf65c18c6cdada4d8426d extends \Twig\Template
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
        echo "<section>
    <div class=\"pvtinhdbmientaysinglepost\">
        
        <div class=\"container\">
            <div class=\"row\">
                <div class=\"col-xs-12 col-md-9\">
                    <div class=\"featured_images\">
                        ";
        // line 8
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "featured_images", [], "any", false, false, false, 8), "count", [], "any", false, false, false, 8)) {
            // line 9
            echo "                            <div class=\"featured-images text-center\">
                                ";
            // line 10
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "featured_images", [], "any", false, false, false, 10));
            foreach ($context['_seq'] as $context["_key"] => $context["image"]) {
                // line 11
                echo "                                    <p>
                                        <img
                                            data-src=\"";
                // line 13
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["image"], "filename", [], "any", false, false, false, 13), "html", null, true);
                echo "\"
                                            src=\"";
                // line 14
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["image"], "path", [], "any", false, false, false, 14), "html", null, true);
                echo "\"
                                            alt=\"";
                // line 15
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["image"], "description", [], "any", false, false, false, 15), "html", null, true);
                echo "\"
                                            style=\"max-width: 100%\" />
                                    </p>
                                ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['image'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 19
            echo "                            </div>
                        ";
        }
        // line 21
        echo "                    </div>
                    <h1>";
        // line 22
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "title", [], "any", false, false, false, 22), "html", null, true);
        echo "</h1>
                    <div class=\"info-post\">
                        <ul>
                            
                            <li><i class=\"fa fa-calendar\"></i> <span>";
        // line 26
        echo twig_escape_filter($this->env, twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "created_at", [], "any", false, false, false, 26), "d/m/Y"), "html", null, true);
        echo "</span></li>
                            <li><i class=\"fa fa-clock-o\"></i> <span>";
        // line 27
        echo twig_escape_filter($this->env, twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "created_at", [], "any", false, false, false, 27), "h:i"), "html", null, true);
        echo "</span></li>
                        </ul>
                    </div>
                    <div class=\"description\">
                        <blockquote>
                            <strong class=\"excerpt\">";
        // line 32
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "excerpt", [], "any", false, false, false, 32), "html", null, true);
        echo "</strong>    
                        </blockquote>
                        <div class=\"content\">
                            ";
        // line 35
        echo twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "content_html", [], "any", false, false, false, 35);
        echo "    
                        </div>                        
                    </div>
                </div>
                <div class=\"col-xs-12 col-md-3\">
                    
                </div>
            </div> 
        </div>
    </div>
</section>";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaysinglepost/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  107 => 35,  101 => 32,  93 => 27,  89 => 26,  82 => 22,  79 => 21,  75 => 19,  65 => 15,  61 => 14,  57 => 13,  53 => 11,  49 => 10,  46 => 9,  44 => 8,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<section>
    <div class=\"pvtinhdbmientaysinglepost\">
        
        <div class=\"container\">
            <div class=\"row\">
                <div class=\"col-xs-12 col-md-9\">
                    <div class=\"featured_images\">
                        {% if post.featured_images.count %}
                            <div class=\"featured-images text-center\">
                                {% for image in post.featured_images %}
                                    <p>
                                        <img
                                            data-src=\"{{ image.filename }}\"
                                            src=\"{{ image.path }}\"
                                            alt=\"{{ image.description }}\"
                                            style=\"max-width: 100%\" />
                                    </p>
                                {% endfor %}
                            </div>
                        {% endif %}
                    </div>
                    <h1>{{ post.title }}</h1>
                    <div class=\"info-post\">
                        <ul>
                            
                            <li><i class=\"fa fa-calendar\"></i> <span>{{ post.created_at|date(\"d/m/Y\") }}</span></li>
                            <li><i class=\"fa fa-clock-o\"></i> <span>{{ post.created_at|date(\"h:i\") }}</span></li>
                        </ul>
                    </div>
                    <div class=\"description\">
                        <blockquote>
                            <strong class=\"excerpt\">{{ post.excerpt }}</strong>    
                        </blockquote>
                        <div class=\"content\">
                            {{ post.content_html|raw }}    
                        </div>                        
                    </div>
                </div>
                <div class=\"col-xs-12 col-md-3\">
                    
                </div>
            </div> 
        </div>
    </div>
</section>", "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaysinglepost/default.htm", "");
    }
}
