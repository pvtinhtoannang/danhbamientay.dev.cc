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

/* C:\Program Files (x86)\Ampps\www\dev\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaymypost/default.htm */
class __TwigTemplate_a65cf82ffe8a758ebdae8033b39929f570b989be726fc8110bd703c6a861684d extends \Twig\Template
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
        echo "<h2 class=\"text-dark text-center title-form\">DANH SÁCH TIN ĐĂNG</h2>

<div class=\"table-responsive\">
\t<table id=\"example\" class=\"display table table-striped\" style=\"width:100%\">
\t\t<thead>
\t\t    <tr >
\t\t    \t<th>Ảnh đại diện</th>
\t\t        <th>Tiêu đề</th>
\t\t        <th>Danh mục</th>
\t\t        <th>Giá</th>\t\t        
\t\t        <th>Cập nhật lần cuối</th>
\t\t        <th>Chức năng</th>
\t\t    </tr>
\t\t</thead>
\t\t<tbody>
\t\t\t";
        // line 16
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["listpost"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["posts"]) {
            echo " 
\t\t    <tr>
\t\t        <td><img src=\"";
            // line 18
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["posts"], "images", [], "any", false, false, false, 18), "thumb", [0 => 100, 1 => 100, 2 => ["mode" => "crop"]], "method", false, false, false, 18), "html", null, true);
            echo "\" alt=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 18), "html", null, true);
            echo "\"></td>
\t\t        <td>";
            // line 19
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 19), "html", null, true);
            echo "</td>
\t\t        <td>";
            // line 20
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "category_name", [], "any", false, false, false, 20), "html", null, true);
            echo "</td>
\t\t        <td>";
            // line 21
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "price", [], "any", false, false, false, 21), "html", null, true);
            echo "</td>
\t\t        <td>";
            // line 22
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "updated_at", [], "any", false, false, false, 22), "html", null, true);
            echo "</td>
\t\t        <td><a href=\"#\"><i class=\"fa fa-edit\"></i></a>  <a href=\"#\"><i class=\"fa fa-trash\"></i></a></td>
\t\t    </tr>
\t\t    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['posts'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 26
        echo "\t\t</tbody>
\t\t<tfoot>
\t\t    <tr>
\t\t        <th>Ảnh đại diện</th>
\t\t        <th>Tiêu đề</th>
\t\t        <th>Danh mục</th>
\t\t        <th>Loại hình</th>\t\t        
\t\t        <th>Cập nhật lần cuối</th>
\t\t        <th>Chức năng</th> 
\t\t    </tr>
\t\t</tfoot>
\t\t</table>
</div>
";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaymypost/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  87 => 26,  77 => 22,  73 => 21,  69 => 20,  65 => 19,  59 => 18,  52 => 16,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<h2 class=\"text-dark text-center title-form\">DANH SÁCH TIN ĐĂNG</h2>

<div class=\"table-responsive\">
\t<table id=\"example\" class=\"display table table-striped\" style=\"width:100%\">
\t\t<thead>
\t\t    <tr >
\t\t    \t<th>Ảnh đại diện</th>
\t\t        <th>Tiêu đề</th>
\t\t        <th>Danh mục</th>
\t\t        <th>Giá</th>\t\t        
\t\t        <th>Cập nhật lần cuối</th>
\t\t        <th>Chức năng</th>
\t\t    </tr>
\t\t</thead>
\t\t<tbody>
\t\t\t{% for posts in listpost  %} 
\t\t    <tr>
\t\t        <td><img src=\"{{ posts.images.thumb(100,100, {'mode':'crop'}) }}\" alt=\"{{ posts.title }}\"></td>
\t\t        <td>{{ posts.title }}</td>
\t\t        <td>{{ posts.category_name }}</td>
\t\t        <td>{{ posts.price }}</td>
\t\t        <td>{{ posts.updated_at }}</td>
\t\t        <td><a href=\"#\"><i class=\"fa fa-edit\"></i></a>  <a href=\"#\"><i class=\"fa fa-trash\"></i></a></td>
\t\t    </tr>
\t\t    {% endfor %}
\t\t</tbody>
\t\t<tfoot>
\t\t    <tr>
\t\t        <th>Ảnh đại diện</th>
\t\t        <th>Tiêu đề</th>
\t\t        <th>Danh mục</th>
\t\t        <th>Loại hình</th>\t\t        
\t\t        <th>Cập nhật lần cuối</th>
\t\t        <th>Chức năng</th> 
\t\t    </tr>
\t\t</tfoot>
\t\t</table>
</div>
", "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaymypost/default.htm", "");
    }
}
