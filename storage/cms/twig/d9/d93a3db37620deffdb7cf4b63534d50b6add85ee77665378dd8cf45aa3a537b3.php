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

/* C:\Program Files (x86)\Ampps\www\octobercms\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaychangepassword/default.htm */
class __TwigTemplate_8d3852a9204b8f08f717870121d47a24856348eb85a5a575c067ed6dc030497d extends \Twig\Template
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
<form data-request=\"onSave\" data-request-validate data-request-flash  class=\"postform\" data-request-success=\"formEditAccount();\">  
\t<div class=\"row\">
\t\t<div class=\"col-xs-12 col-sm-6 col-md-6 col-md-offset-3\">
\t\t\t<div class=\"form-group\">
\t\t\t\t<label for=\"passwordold\">Mật khẩu cũ: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Mật khẩu hiện tại của bạn để chúng tôi xác nhận lại bạn đang đổi mật khẩu\"></span></label>
\t\t\t\t<input type=\"password\" name=\"passwordold\" value=\"\" class=\"input-dbmt\" placeholder=\"Nhập mật khẩu hiện tại\">
\t\t\t\t<span class=\"error-label\" data-validate-for=\"passwordold\"></span>
\t\t\t</div>
\t\t</div>
\t\t<div class=\"col-xs-12 col-sm-6 col-md-6 col-md-offset-3\">
\t\t\t<div class=\"form-group\">
\t\t\t\t<label for=\"password\">Mật khẩu mới: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Mật khẩu bạn muốn thay đổi\"></span></label>
\t\t\t\t<input type=\"password\" name=\"password\" class=\"input-dbmt\" placeholder=\"Nhập password của bạn: \">
\t\t\t\t<span class=\"error-label\" data-validate-for=\"password\"></span>
\t\t\t</div>
\t\t</div>

\t\t<div class=\"col-xs-12 col-sm-6 col-md-6 col-md-offset-3\">
\t\t\t<div class=\"form-group\">
\t\t\t\t<label for=\"newpassword\">Xác nhận mật khẩu: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Xác nhận lại lần nữa để chắc chắn bạn nhập đúng mật khẩu cần thay đổi\"></span></label>
\t\t\t\t<input type=\"password\" name=\"password_confirmation\" class=\"input-dbmt\" placeholder=\"Nhập lại mật khẩu mới\">
\t\t\t\t<span class=\"error-label\" data-validate-for=\"password_confirmation\"></span>
\t\t\t</div>
\t\t</div>
\t\t<div class=\"col-xs-12\">
\t\t\t<button type=\"submit\" class=\"button-bdmt \" data-attach-loading> Cập nhật </button>
\t\t</div>
\t</div> 
</form>\t";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\octobercms\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaychangepassword/default.htm";
    }

    public function getDebugInfo()
    {
        return array (  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<h2 class=\"text-dark text-center title-form\">Cập nhật tài khoản</h2>
<form data-request=\"onSave\" data-request-validate data-request-flash  class=\"postform\" data-request-success=\"formEditAccount();\">  
\t<div class=\"row\">
\t\t<div class=\"col-xs-12 col-sm-6 col-md-6 col-md-offset-3\">
\t\t\t<div class=\"form-group\">
\t\t\t\t<label for=\"passwordold\">Mật khẩu cũ: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Mật khẩu hiện tại của bạn để chúng tôi xác nhận lại bạn đang đổi mật khẩu\"></span></label>
\t\t\t\t<input type=\"password\" name=\"passwordold\" value=\"\" class=\"input-dbmt\" placeholder=\"Nhập mật khẩu hiện tại\">
\t\t\t\t<span class=\"error-label\" data-validate-for=\"passwordold\"></span>
\t\t\t</div>
\t\t</div>
\t\t<div class=\"col-xs-12 col-sm-6 col-md-6 col-md-offset-3\">
\t\t\t<div class=\"form-group\">
\t\t\t\t<label for=\"password\">Mật khẩu mới: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Mật khẩu bạn muốn thay đổi\"></span></label>
\t\t\t\t<input type=\"password\" name=\"password\" class=\"input-dbmt\" placeholder=\"Nhập password của bạn: \">
\t\t\t\t<span class=\"error-label\" data-validate-for=\"password\"></span>
\t\t\t</div>
\t\t</div>

\t\t<div class=\"col-xs-12 col-sm-6 col-md-6 col-md-offset-3\">
\t\t\t<div class=\"form-group\">
\t\t\t\t<label for=\"newpassword\">Xác nhận mật khẩu: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Xác nhận lại lần nữa để chắc chắn bạn nhập đúng mật khẩu cần thay đổi\"></span></label>
\t\t\t\t<input type=\"password\" name=\"password_confirmation\" class=\"input-dbmt\" placeholder=\"Nhập lại mật khẩu mới\">
\t\t\t\t<span class=\"error-label\" data-validate-for=\"password_confirmation\"></span>
\t\t\t</div>
\t\t</div>
\t\t<div class=\"col-xs-12\">
\t\t\t<button type=\"submit\" class=\"button-bdmt \" data-attach-loading> Cập nhật </button>
\t\t</div>
\t</div> 
</form>\t", "C:\\Program Files (x86)\\Ampps\\www\\octobercms\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaychangepassword/default.htm", "");
    }
}
