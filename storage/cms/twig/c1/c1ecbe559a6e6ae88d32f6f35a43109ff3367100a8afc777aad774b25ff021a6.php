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

/* C:\Program Files (x86)\Ampps\www\dev\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaysidebaraccount/default.htm */
class __TwigTemplate_fade133dd49539811fb6c3cee75392132a1de181cbdc894fee55d88be790fa34 extends \Twig\Template
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
        echo "<div class=\"box-user\">
\t<input type=\"hidden\" value=\"";
        // line 2
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "avatar", [], "any", false, false, false, 2), "path", [], "any", false, false, false, 2), "html", null, true);
        echo "\" name=\"pathimage\" id=\"pathimage\">
\t<input type=\"hidden\" value=\"";
        // line 3
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "avatar", [], "any", false, false, false, 3), "file_name", [], "any", false, false, false, 3), "html", null, true);
        echo "\" name=\"filename\" id=\"filename\">
\t<input type=\"hidden\" value=\"";
        // line 4
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "avatar", [], "any", false, false, false, 4), "content_type", [], "any", false, false, false, 4), "html", null, true);
        echo "\" name=\"content_type\" id=\"content_type\"> 
\t<div class=\"form-group avatar-form\">
\t  
\t\t";
        // line 7
        echo call_user_func_array($this->env->getFunction('form_open')->getCallable(), ["open", ["request" => "onSubmit", "files" => true]]);
        echo "
\t\t";
        // line 8
        echo call_user_func_array($this->env->getFunction('form_token')->getCallable(), ["token"]);
        echo "
\t\t";
        // line 9
        echo call_user_func_array($this->env->getFunction('form_sessionKey')->getCallable(), ["sessionKey"]);
        echo "
\t\t\t\t<input type=\"hidden\" name=\"_handler\" value=\"onSubmit\">
\t\t\t<div id=\"image-preview\" style=\"background-image: url(";
        // line 11
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "avatar", [], "any", false, false, false, 11), "getThumb", [0 => 200, 1 => 200, 2 => [0 => "mode", 1 => "crop"]], "method", false, false, false, 11), "html", null, true);
        echo ")\">
\t\t\t\t<label id=\"image-label\" for=\"avatar\">Ảnh đại diện</label>
\t\t\t\t<input type=\"file\" name=\"avatar\" id=\"avatar\">
\t\t\t</div>\t\t\t\t
\t\t\t\t<button type=\"submit\" class=\"button-bdmt btn-user-avatar\">TẢI ẢNH LÊN</button>
\t\t\t";
        // line 16
        echo call_user_func_array($this->env->getFunction('form_close')->getCallable(), ["close"]);
        echo " 
\t</div>
\t<ul class=\"list-user\">
\t\t<li class=\"text-dark\"><i class=\"fa fa-user\"></i><a href=\"/tai-khoan\" class=\"text-dark\" title=\"Tài khoản\">Trang cá nhân</a></li>
\t\t<li class=\"text-dark\"><i class=\"fa fa-plus\"></i><a href=\"/dang-tin\" class=\"text-dark\" title=\"Đăng tin\">Đăng tin</a></li>
\t\t<li class=\"text-dark\"><i class=\"fa fa-key\"></i><a href=\"/doi-mat-khau\" class=\"text-dark\" title=\"Đổi mật khẩu\">Đổi mật khẩu</a></li>
\t\t<li class=\"text-dark\"><i class=\"fa fa-list\"></i><a href=\"/danh-sach-tin-dang\" class=\"text-dark\" title=\"Danh sách tin đăng\">Danh sách tin đăng</a></li>
\t\t<li class=\"text-dark\"><i class=\"fa fa-sign-out\"></i><a data-request=\"onLogout\" href=\"/dang-xuat\" class=\"text-dark\" title=\"Đăng xuất\">Đăng xuất</a></li>
\t</ul>\t 
</div>   ";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaysidebaraccount/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  73 => 16,  65 => 11,  60 => 9,  56 => 8,  52 => 7,  46 => 4,  42 => 3,  38 => 2,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div class=\"box-user\">
\t<input type=\"hidden\" value=\"{{ user.avatar.path }}\" name=\"pathimage\" id=\"pathimage\">
\t<input type=\"hidden\" value=\"{{ user.avatar.file_name }}\" name=\"filename\" id=\"filename\">
\t<input type=\"hidden\" value=\"{{ user.avatar.content_type }}\" name=\"content_type\" id=\"content_type\"> 
\t<div class=\"form-group avatar-form\">
\t  
\t\t{{ form_open({ request: 'onSubmit', files: true }) }}
\t\t{{ form_token() }}
\t\t{{ form_sessionKey() }}
\t\t\t\t<input type=\"hidden\" name=\"_handler\" value=\"onSubmit\">
\t\t\t<div id=\"image-preview\" style=\"background-image: url({{ user.avatar.getThumb(200, 200, ['mode','crop'])  }})\">
\t\t\t\t<label id=\"image-label\" for=\"avatar\">Ảnh đại diện</label>
\t\t\t\t<input type=\"file\" name=\"avatar\" id=\"avatar\">
\t\t\t</div>\t\t\t\t
\t\t\t\t<button type=\"submit\" class=\"button-bdmt btn-user-avatar\">TẢI ẢNH LÊN</button>
\t\t\t{{ form_close() }} 
\t</div>
\t<ul class=\"list-user\">
\t\t<li class=\"text-dark\"><i class=\"fa fa-user\"></i><a href=\"/tai-khoan\" class=\"text-dark\" title=\"Tài khoản\">Trang cá nhân</a></li>
\t\t<li class=\"text-dark\"><i class=\"fa fa-plus\"></i><a href=\"/dang-tin\" class=\"text-dark\" title=\"Đăng tin\">Đăng tin</a></li>
\t\t<li class=\"text-dark\"><i class=\"fa fa-key\"></i><a href=\"/doi-mat-khau\" class=\"text-dark\" title=\"Đổi mật khẩu\">Đổi mật khẩu</a></li>
\t\t<li class=\"text-dark\"><i class=\"fa fa-list\"></i><a href=\"/danh-sach-tin-dang\" class=\"text-dark\" title=\"Danh sách tin đăng\">Danh sách tin đăng</a></li>
\t\t<li class=\"text-dark\"><i class=\"fa fa-sign-out\"></i><a data-request=\"onLogout\" href=\"/dang-xuat\" class=\"text-dark\" title=\"Đăng xuất\">Đăng xuất</a></li>
\t</ul>\t 
</div>   ", "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaysidebaraccount/default.htm", "");
    }
}
