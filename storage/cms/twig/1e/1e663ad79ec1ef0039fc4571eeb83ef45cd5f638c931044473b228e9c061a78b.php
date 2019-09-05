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
\t\t    \t<th style=\"width: 10%\">Ảnh đại diện</th>
\t\t        <th style=\"width: 20%\">Tiêu đề</th>
\t\t        <th style=\"width: 10%\">Danh mục</th>
\t\t        <th style=\"width: 5%\">Giá</th>\t\t        
\t\t        <th style=\"width: 12%\">Cập nhật lần cuối</th>
\t\t        <th style=\"width: 8%\">Chức năng</th>
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
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["posts"], "images", [], "any", false, false, false, 18), "thumb", [0 => 100, 1 => 80, 2 => ["mode" => "crop"]], "method", false, false, false, 18), "html", null, true);
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
\t\t        <td class=\"function\">
\t\t        \t<button class=\"btn-function\">
\t\t        \t\t<a class=\"btn-function\" href=\"/chinh-sua-tin-dang/";
            // line 25
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "slug", [], "any", false, false, false, 25), "html", null, true);
            echo "/";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "id", [], "any", false, false, false, 25), "html", null, true);
            echo "\" data-toggle=\"tooltip\" title=\"Chỉnh sửa bài đăng '";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 25), "html", null, true);
            echo "' \"><i class=\"fa fa-edit\" > </i></a>  \t
\t\t        \t</button>
\t\t        \t";
            // line 27
            $context["pagecurrent"] = "/danh-sach-tin-dang?page=";
            // line 28
            echo "
\t\t        \t";
            // line 29
            echo call_user_func_array($this->env->getFunction('form_ajax')->getCallable(), ["ajax", "onDelete", ["redirect" => (($context["pagecurrent"] ?? null) . twig_get_attribute($this->env, $this->source, ($context["pagination"] ?? null), "current", [], "any", false, false, false, 29)), "data" => ["id" => twig_get_attribute($this->env, $this->source, $context["posts"], "id", [], "any", false, false, false, 29)], "confirm" => "Bạn có chắc chắn muốn xoá?"]]);
            echo "
\t\t        \t<button type=\"submit\" class=\"btn-function\"  data-toggle=\"tooltip\" title=\"Xoá bài đăng '";
            // line 30
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["posts"], "title", [], "any", false, false, false, 30), "html", null, true);
            echo "' \">
\t\t        \t\t<i class=\"fa fa-trash\"></i>
\t\t        \t</button>
\t\t        \t 
\t\t        \t";
            // line 34
            echo call_user_func_array($this->env->getFunction('form_close')->getCallable(), ["close"]);
            echo "
\t\t        </td>
\t\t    </tr>
\t\t    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['posts'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 38
        echo "\t\t</tbody>
\t\t<tfoot>
\t\t    <tr>
\t\t    \t<th style=\"width: 10%\">Ảnh đại diện</th>
\t\t        <th style=\"width: 20%\">Tiêu đề</th>
\t\t        <th style=\"width: 10%\">Danh mục</th>
\t\t        <th style=\"width: 5%\">Giá</th>\t\t        
\t\t        <th style=\"width: 12%\">Cập nhật lần cuối</th>
\t\t        <th style=\"width: 8%\">Chức năng</th>
\t\t    </tr>
\t\t</tfoot>
\t</table>
\t";
        // line 50
        if ((twig_get_attribute($this->env, $this->source, ($context["pagination"] ?? null), "last", [], "any", false, false, false, 50) > 1)) {
            // line 51
            echo "    <div class=\"page_render\"> 
        <div class=\"col-xs-12\">
            <div class=\"pagination\"> 
              <a href=\"";
            // line 54
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["pagination"] ?? null), "previous", [], "any", false, false, false, 54), "html", null, true);
            echo "\">&laquo;</a>
              ";
            // line 55
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(range(1, twig_get_attribute($this->env, $this->source, ($context["pagination"] ?? null), "last", [], "any", false, false, false, 55)));
            foreach ($context['_seq'] as $context["_key"] => $context["i"]) {
                echo " 
                <a ";
                // line 56
                if ((twig_get_attribute($this->env, $this->source, ($context["pagination"] ?? null), "current", [], "any", false, false, false, 56) == $context["i"])) {
                    echo " class=\"active\" ";
                }
                echo " href=\"/danh-sach-tin-dang?page=";
                echo twig_escape_filter($this->env, $context["i"], "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, $context["i"], "html", null, true);
                echo " </a>
              ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['i'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 58
            echo "              <a href=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["pagination"] ?? null), "nextpage", [], "any", false, false, false, 58), "html", null, true);
            echo "\">&raquo;</a>
            </div>    
        </div>                    
    </div>                 
    ";
        }
        // line 63
        echo "</div>
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
        return array (  172 => 63,  163 => 58,  149 => 56,  143 => 55,  139 => 54,  134 => 51,  132 => 50,  118 => 38,  108 => 34,  101 => 30,  97 => 29,  94 => 28,  92 => 27,  83 => 25,  77 => 22,  73 => 21,  69 => 20,  65 => 19,  59 => 18,  52 => 16,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<h2 class=\"text-dark text-center title-form\">DANH SÁCH TIN ĐĂNG</h2>

<div class=\"table-responsive\">
\t<table id=\"example\" class=\"display table table-striped\" style=\"width:100%\">
\t\t<thead>
\t\t    <tr >
\t\t    \t<th style=\"width: 10%\">Ảnh đại diện</th>
\t\t        <th style=\"width: 20%\">Tiêu đề</th>
\t\t        <th style=\"width: 10%\">Danh mục</th>
\t\t        <th style=\"width: 5%\">Giá</th>\t\t        
\t\t        <th style=\"width: 12%\">Cập nhật lần cuối</th>
\t\t        <th style=\"width: 8%\">Chức năng</th>
\t\t    </tr>
\t\t</thead>
\t\t<tbody>
\t\t\t{% for posts in listpost  %} 
\t\t    <tr>
\t\t        <td><img src=\"{{ posts.images.thumb(100,80, {'mode':'crop'}) }}\" alt=\"{{ posts.title }}\"></td>
\t\t        <td>{{ posts.title }}</td>
\t\t        <td>{{ posts.category_name }}</td>
\t\t        <td>{{ posts.price }}</td>
\t\t        <td>{{ posts.updated_at }}</td>
\t\t        <td class=\"function\">
\t\t        \t<button class=\"btn-function\">
\t\t        \t\t<a class=\"btn-function\" href=\"/chinh-sua-tin-dang/{{ posts.slug }}/{{ posts.id }}\" data-toggle=\"tooltip\" title=\"Chỉnh sửa bài đăng '{{ posts.title }}' \"><i class=\"fa fa-edit\" > </i></a>  \t
\t\t        \t</button>
\t\t        \t{% set pagecurrent = '/danh-sach-tin-dang?page=' %}

\t\t        \t{{ form_ajax('onDelete', {redirect: pagecurrent~pagination.current  ,data: { id: posts.id }, confirm: 'Bạn có chắc chắn muốn xoá?' }) }}
\t\t        \t<button type=\"submit\" class=\"btn-function\"  data-toggle=\"tooltip\" title=\"Xoá bài đăng '{{ posts.title }}' \">
\t\t        \t\t<i class=\"fa fa-trash\"></i>
\t\t        \t</button>
\t\t        \t 
\t\t        \t{{ form_close() }}
\t\t        </td>
\t\t    </tr>
\t\t    {% endfor %}
\t\t</tbody>
\t\t<tfoot>
\t\t    <tr>
\t\t    \t<th style=\"width: 10%\">Ảnh đại diện</th>
\t\t        <th style=\"width: 20%\">Tiêu đề</th>
\t\t        <th style=\"width: 10%\">Danh mục</th>
\t\t        <th style=\"width: 5%\">Giá</th>\t\t        
\t\t        <th style=\"width: 12%\">Cập nhật lần cuối</th>
\t\t        <th style=\"width: 8%\">Chức năng</th>
\t\t    </tr>
\t\t</tfoot>
\t</table>
\t{% if pagination.last > 1 %}
    <div class=\"page_render\"> 
        <div class=\"col-xs-12\">
            <div class=\"pagination\"> 
              <a href=\"{{ pagination.previous }}\">&laquo;</a>
              {% for i in 1..pagination.last  %} 
                <a {% if pagination.current == i %} class=\"active\" {% endif %} href=\"/danh-sach-tin-dang?page={{ i }}\">{{ i }} </a>
              {% endfor %}
              <a href=\"{{ pagination.nextpage }}\">&raquo;</a>
            </div>    
        </div>                    
    </div>                 
    {% endif %}
</div>
", "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaymypost/default.htm", "");
    }
}
