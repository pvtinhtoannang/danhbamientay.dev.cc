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

/* C:\Program Files (x86)\Ampps\www\dev\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayaccount/default.htm */
class __TwigTemplate_c9948e688e46055c99e9a2363f6e8f577ef4b4be2c84297d83267754196cb77f extends \Twig\Template
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
        echo "<h2 class=\"text-dark text-center title-form\">Cập nhật tài khoản</h2>
<form data-request=\"onSave\" data-request-validate data-request-flash   class=\"postform\" data-request-success=\"formEditAccount();\">   
";
        // line 3
        echo call_user_func_array($this->env->getFunction('form_open')->getCallable(), ["open", ["request" => "onSave"]]);
        echo "
\t<div class=\"row\">
\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t<div class=\"form-group\">
\t\t\t\t<label for=\"name\">Họ tên cá nhân / Tên doanh nghiệp: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn nên nhập chính xác tên của bạn hoặc tên doanh nghiệp của bạn để người dùng có thể tìm thấy bạn\"></span></label>
\t\t\t\t<input type=\"text\" name=\"name\" value=\"";
        // line 8
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "name", [], "any", false, false, false, 8), "html", null, true);
        echo "\" class=\"input-dbmt\" placeholder=\"Nhập họ và tên của bạn: \">
\t\t\t\t<span class=\"error-label\" data-validate-for=\"name\"></span>
\t\t\t</div>
\t\t</div>
\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t<div class=\"form-group\">
\t\t\t\t<label for=\"email\">Email: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn nên nhập chính xác email. Email dùng để đăng nhập vào website cũng như giúp bạn lấy lại mật khẩu khi cần.\"></span></label>
\t\t\t\t<input type=\"email\" name=\"email\" value=\"";
        // line 15
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "email", [], "any", false, false, false, 15), "html", null, true);
        echo "\" class=\"input-dbmt\" placeholder=\"Nhập email của bạn: \">
\t\t\t\t<span class=\"error-label\" data-validate-for=\"email\"></span>
\t\t\t</div>
\t\t</div>

\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t<div class=\"form-group\">
\t\t\t\t<label for=\"website\">Website: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Mọi người có thể tìm tới và tăng lượt truy cập cho website của bạn\"></span></label>
\t\t\t\t<input type=\"text\" name=\"website\" value=\"";
        // line 23
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "website", [], "any", false, false, false, 23), "html", null, true);
        echo "\" class=\"input-dbmt\" placeholder=\"Nhập website của bạn \">
\t\t\t\t<span class=\"error-label\" data-validate-for=\"website\"></span>
\t\t\t</div>
\t\t</div>
\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t<div class=\"form-group\">
\t\t\t\t<label for=\"phone_number\">Số điện thoại: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Số điện thoại giúp mọi người có thể liên lạc đến bạn\"></span></label>
\t\t\t\t<input type=\"text\" name=\"phone_number\" value=\"";
        // line 30
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "phone_number", [], "any", false, false, false, 30), "html", null, true);
        echo "\" class=\"input-dbmt\" placeholder=\"Nhập số điện thoại của bạn: \">
\t\t\t\t<span class=\"error-label\" data-validate-for=\"phone_number\"></span>
\t\t\t</div>
\t\t</div>
\t\t<div class=\"col-xs-12 col-sm-12 col-md-12\">
\t\t\t<div class=\"form-group\">
\t\t\t\t<label for=\"address\">Địa chỉ: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Địa chỉ giúp mọi người có thể tìm đến bạn\"></span></label>
\t\t\t\t<input type=\"text\" name=\"address\" value=\"";
        // line 37
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "address", [], "any", false, false, false, 37), "html", null, true);
        echo "\" class=\"input-dbmt\" placeholder=\"Nhập địa chỉ của bạn: \">
\t\t\t</div>
\t\t</div>
\t\t
\t\t<div class=\"col-xs-12 col-sm-12 col-md-12\">
\t\t\t<div class=\"form-group\">
\t\t\t\t<label for=\"bio\">Mô tả doanh nghiệp: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Địa chỉ giúp mọi người có thể tìm đến bạn, bạn nên nhập mô tả ít nhất 200 kí tự!\"></span></label>
\t\t\t\t<textarea name=\"bio\" id=\"bio\" class=\"input-dbmt\" rows=\"10\" placeholder=\"Mô tả doanh nghiệp của bạn\">";
        // line 44
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "bio", [], "any", false, false, false, 44), "html", null, true);
        echo "</textarea>  
\t\t\t\t<span class=\"error-label\" data-validate-for=\"bio\"></span>
\t\t\t</div>
\t\t</div>
\t\t<div class=\"col-xs-12\">
\t\t\t<button type=\"submit\" class=\"button-bdmt \" data-attach-loading> Cập nhật </button>
\t\t</div>
\t</div>
";
        // line 52
        echo call_user_func_array($this->env->getFunction('form_close')->getCallable(), ["close"]);
        echo "
</form>\t";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayaccount/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  109 => 52,  98 => 44,  88 => 37,  78 => 30,  68 => 23,  57 => 15,  47 => 8,  39 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<h2 class=\"text-dark text-center title-form\">Cập nhật tài khoản</h2>
<form data-request=\"onSave\" data-request-validate data-request-flash   class=\"postform\" data-request-success=\"formEditAccount();\">   
{{ form_open({ request: 'onSave' }) }}
\t<div class=\"row\">
\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t<div class=\"form-group\">
\t\t\t\t<label for=\"name\">Họ tên cá nhân / Tên doanh nghiệp: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn nên nhập chính xác tên của bạn hoặc tên doanh nghiệp của bạn để người dùng có thể tìm thấy bạn\"></span></label>
\t\t\t\t<input type=\"text\" name=\"name\" value=\"{{ user.name }}\" class=\"input-dbmt\" placeholder=\"Nhập họ và tên của bạn: \">
\t\t\t\t<span class=\"error-label\" data-validate-for=\"name\"></span>
\t\t\t</div>
\t\t</div>
\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t<div class=\"form-group\">
\t\t\t\t<label for=\"email\">Email: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn nên nhập chính xác email. Email dùng để đăng nhập vào website cũng như giúp bạn lấy lại mật khẩu khi cần.\"></span></label>
\t\t\t\t<input type=\"email\" name=\"email\" value=\"{{ user.email }}\" class=\"input-dbmt\" placeholder=\"Nhập email của bạn: \">
\t\t\t\t<span class=\"error-label\" data-validate-for=\"email\"></span>
\t\t\t</div>
\t\t</div>

\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t<div class=\"form-group\">
\t\t\t\t<label for=\"website\">Website: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Mọi người có thể tìm tới và tăng lượt truy cập cho website của bạn\"></span></label>
\t\t\t\t<input type=\"text\" name=\"website\" value=\"{{ user.website }}\" class=\"input-dbmt\" placeholder=\"Nhập website của bạn \">
\t\t\t\t<span class=\"error-label\" data-validate-for=\"website\"></span>
\t\t\t</div>
\t\t</div>
\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t<div class=\"form-group\">
\t\t\t\t<label for=\"phone_number\">Số điện thoại: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Số điện thoại giúp mọi người có thể liên lạc đến bạn\"></span></label>
\t\t\t\t<input type=\"text\" name=\"phone_number\" value=\"{{ user.phone_number }}\" class=\"input-dbmt\" placeholder=\"Nhập số điện thoại của bạn: \">
\t\t\t\t<span class=\"error-label\" data-validate-for=\"phone_number\"></span>
\t\t\t</div>
\t\t</div>
\t\t<div class=\"col-xs-12 col-sm-12 col-md-12\">
\t\t\t<div class=\"form-group\">
\t\t\t\t<label for=\"address\">Địa chỉ: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Địa chỉ giúp mọi người có thể tìm đến bạn\"></span></label>
\t\t\t\t<input type=\"text\" name=\"address\" value=\"{{ user.address }}\" class=\"input-dbmt\" placeholder=\"Nhập địa chỉ của bạn: \">
\t\t\t</div>
\t\t</div>
\t\t
\t\t<div class=\"col-xs-12 col-sm-12 col-md-12\">
\t\t\t<div class=\"form-group\">
\t\t\t\t<label for=\"bio\">Mô tả doanh nghiệp: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Địa chỉ giúp mọi người có thể tìm đến bạn, bạn nên nhập mô tả ít nhất 200 kí tự!\"></span></label>
\t\t\t\t<textarea name=\"bio\" id=\"bio\" class=\"input-dbmt\" rows=\"10\" placeholder=\"Mô tả doanh nghiệp của bạn\">{{ user.bio }}</textarea>  
\t\t\t\t<span class=\"error-label\" data-validate-for=\"bio\"></span>
\t\t\t</div>
\t\t</div>
\t\t<div class=\"col-xs-12\">
\t\t\t<button type=\"submit\" class=\"button-bdmt \" data-attach-loading> Cập nhật </button>
\t\t</div>
\t</div>
{{ form_close() }}
</form>\t", "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayaccount/default.htm", "");
    }
}
