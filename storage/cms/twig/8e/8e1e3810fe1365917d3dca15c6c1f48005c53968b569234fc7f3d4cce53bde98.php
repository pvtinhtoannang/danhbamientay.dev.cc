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

/* C:\Program Files (x86)\Ampps\www\dev\danhbamientay.dev.cc/plugins/rainlab/user/components/account/register.htm */
class __TwigTemplate_f7e0e64c072ea0b5907ef36853e93251a59d17e711e7c0e259850b6b34accf50 extends \Twig\Template
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
        if (($context["canRegister"] ?? null)) {
            // line 2
            echo "    <form
        data-request=\"onRegister\" data-request-validate data-request-flash>
        <div class=\"form-group\">
            <label for=\"registerName\">Họ và tên:</label>
            <input
                name=\"name\"
                type=\"text\"
                class=\"input-dbmt\"
                id=\"registerName\"
                placeholder=\"Vui lòng nhập họ và tên\" />
            <span class=\"error-label\" data-validate-for=\"name\"></span>
        </div>

        <div class=\"form-group\">
            <label for=\"registerEmail\">Email</label>
            <input
                name=\"email\"
                type=\"email\"
                class=\"input-dbmt\"
                id=\"registerEmail\"
                placeholder=\"Vui lòng nhập email\" />
            <span class=\"error-label\" data-validate-for=\"email\"></span>
        </div>

        ";
            // line 26
            if ((($context["loginAttribute"] ?? null) == "username")) {
                // line 27
                echo "            <div class=\"form-group\">
                <label for=\"registerUsername\">Tài khoản</label>
                <input
                    name=\"username\"
                    type=\"text\"
                    class=\"input-dbmt\"
                    id=\"registerUsername\"
                    placeholder=\"Vui lòng nhập tài khoản\" />
                <span class=\"error-label\" data-validate-for=\"username\"></span>
            </div>
        ";
            }
            // line 38
            echo "
        <div class=\"form-group\">
            <label for=\"registerPassword\">Mật khẩu</label>
            <input
                name=\"password\"
                type=\"password\"
                class=\"input-dbmt\"
                id=\"registerPassword\"
                placeholder=\"Vui lòng nhập mật khẩu\" />
            <span class=\"error-label\" data-validate-for=\"password\"></span>
        </div>
        <div class=\"form-group\">
            <label for=\"registerPasswordConfirmation\">Nhập lại mật khẩu</label>
            <input
                name=\"password_confirmation\"
                type=\"password\"
                class=\"input-dbmt\"
                id=\"registerPasswordConfirmation\"
                placeholder=\"Vui lòng nhập lại mật khẩu\" />
            <span class=\"error-label\" data-validate-for=\"password_confirmation\"></span>
        </div>
        <button type=\"submit\" data-attach-loading class=\"button-bdmt\">ĐĂNG KÝ</button>
    </form>
";
        } else {
            // line 62
            echo "    <!-- Registration is disabled. -->
";
        }
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/rainlab/user/components/account/register.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  104 => 62,  78 => 38,  65 => 27,  63 => 26,  37 => 2,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% if canRegister %}
    <form
        data-request=\"onRegister\" data-request-validate data-request-flash>
        <div class=\"form-group\">
            <label for=\"registerName\">Họ và tên:</label>
            <input
                name=\"name\"
                type=\"text\"
                class=\"input-dbmt\"
                id=\"registerName\"
                placeholder=\"Vui lòng nhập họ và tên\" />
            <span class=\"error-label\" data-validate-for=\"name\"></span>
        </div>

        <div class=\"form-group\">
            <label for=\"registerEmail\">Email</label>
            <input
                name=\"email\"
                type=\"email\"
                class=\"input-dbmt\"
                id=\"registerEmail\"
                placeholder=\"Vui lòng nhập email\" />
            <span class=\"error-label\" data-validate-for=\"email\"></span>
        </div>

        {% if loginAttribute == \"username\" %}
            <div class=\"form-group\">
                <label for=\"registerUsername\">Tài khoản</label>
                <input
                    name=\"username\"
                    type=\"text\"
                    class=\"input-dbmt\"
                    id=\"registerUsername\"
                    placeholder=\"Vui lòng nhập tài khoản\" />
                <span class=\"error-label\" data-validate-for=\"username\"></span>
            </div>
        {% endif %}

        <div class=\"form-group\">
            <label for=\"registerPassword\">Mật khẩu</label>
            <input
                name=\"password\"
                type=\"password\"
                class=\"input-dbmt\"
                id=\"registerPassword\"
                placeholder=\"Vui lòng nhập mật khẩu\" />
            <span class=\"error-label\" data-validate-for=\"password\"></span>
        </div>
        <div class=\"form-group\">
            <label for=\"registerPasswordConfirmation\">Nhập lại mật khẩu</label>
            <input
                name=\"password_confirmation\"
                type=\"password\"
                class=\"input-dbmt\"
                id=\"registerPasswordConfirmation\"
                placeholder=\"Vui lòng nhập lại mật khẩu\" />
            <span class=\"error-label\" data-validate-for=\"password_confirmation\"></span>
        </div>
        <button type=\"submit\" data-attach-loading class=\"button-bdmt\">ĐĂNG KÝ</button>
    </form>
{% else %}
    <!-- Registration is disabled. -->
{% endif %}
", "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/rainlab/user/components/account/register.htm", "");
    }
}
