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

/* F:\OCTOBERCMS\danhbamientay.dev.cc/plugins/rainlab/user/components/account/signin.htm */
class __TwigTemplate_514e34987896fcfeb6eb077b31598c029a002fbf8fb13b4fba54852dcfeee6af extends \Twig\Template
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
        echo "
<form
    data-request=\"onSignin\" data-request-validate data-request-flash>
    <div class=\"form-group\">
        <label for=\"userSigninLogin\">";
        // line 5
        echo twig_escape_filter($this->env, ($context["loginAttributeLabel"] ?? null), "html", null, true);
        echo "</label>
        <input
            name=\"login\"
            type=\"text\"
            class=\"input-dbmt\"
            id=\"userSigninLogin\"
            placeholder=\"Vui lòng nhập ";
        // line 11
        echo twig_escape_filter($this->env, twig_lower_filter($this->env, ($context["loginAttributeLabel"] ?? null)), "html", null, true);
        echo "\" />
         <span class=\"error-label\" data-validate-for=\"login\"></span>
    </div>

    <div class=\"form-group\">
        <label for=\"userSigninPassword\">Mật khẩu</label>
        <input
            name=\"password\"
            type=\"password\"
            class=\"input-dbmt\"
            id=\"userSigninPassword\"
            placeholder=\"Vui lòng mật khẩu\" />
        <span class=\"error-label\" data-validate-for=\"password\"></span>
    </div>

    <button type=\"submit\" class=\"button-bdmt\" data-attach-loading >Đăng nhập</button>
</form>
";
    }

    public function getTemplateName()
    {
        return "F:\\OCTOBERCMS\\danhbamientay.dev.cc/plugins/rainlab/user/components/account/signin.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  50 => 11,  41 => 5,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("
<form
    data-request=\"onSignin\" data-request-validate data-request-flash>
    <div class=\"form-group\">
        <label for=\"userSigninLogin\">{{ loginAttributeLabel }}</label>
        <input
            name=\"login\"
            type=\"text\"
            class=\"input-dbmt\"
            id=\"userSigninLogin\"
            placeholder=\"Vui lòng nhập {{ loginAttributeLabel|lower }}\" />
         <span class=\"error-label\" data-validate-for=\"login\"></span>
    </div>

    <div class=\"form-group\">
        <label for=\"userSigninPassword\">Mật khẩu</label>
        <input
            name=\"password\"
            type=\"password\"
            class=\"input-dbmt\"
            id=\"userSigninPassword\"
            placeholder=\"Vui lòng mật khẩu\" />
        <span class=\"error-label\" data-validate-for=\"password\"></span>
    </div>

    <button type=\"submit\" class=\"button-bdmt\" data-attach-loading >Đăng nhập</button>
</form>
", "F:\\OCTOBERCMS\\danhbamientay.dev.cc/plugins/rainlab/user/components/account/signin.htm", "");
    }
}
