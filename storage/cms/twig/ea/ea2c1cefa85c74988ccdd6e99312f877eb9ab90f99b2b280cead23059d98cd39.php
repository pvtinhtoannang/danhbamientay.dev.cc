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

/* F:\OCTOBERCMS\danhbamientay.dev.cc/plugins/rainlab/user/components/account/deactivate_link.htm */
class __TwigTemplate_0a1e5cd7c911c71a4c188fa2ec3299bc76fed2cd345bb1ad0895fc444982a2a1 extends \Twig\Template
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
        echo "<a
    href=\"javascript:;\"
    onclick=\"\$('#accountDeactivateForm').toggle()\">
    Deactivate account
</a>

<div id=\"accountDeactivateForm\" style=\"display: none\">
    ";
        // line 8
        echo call_user_func_array($this->env->getFunction('form_ajax')->getCallable(), ["ajax", "onDeactivate"]);
        echo "
        <hr />
        <h3>Deactivate your account?</h3>
        <p>
            Your account will be disabled and your details removed from the site.
            You can reactivate your account any time by signing back in.
        </p>
        <div class=\"form-group\">
            <label for=\"accountDeletePassword\">To continue, please enter your password:</label>
            <input name=\"password\" type=\"password\" class=\"form-control\" id=\"accountDeletePassword\" />
        </div>
        <button type=\"submit\" class=\"btn btn-danger\">
            Confirm Deactivate Account
        </button>
        <a
            href=\"javascript:;\"
            onclick=\"\$('#accountDeactivateForm').toggle()\">
            I changed my mind
        </a>
    ";
        // line 27
        echo call_user_func_array($this->env->getFunction('form_close')->getCallable(), ["close"]);
        echo "
</div>
";
    }

    public function getTemplateName()
    {
        return "F:\\OCTOBERCMS\\danhbamientay.dev.cc/plugins/rainlab/user/components/account/deactivate_link.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  66 => 27,  44 => 8,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<a
    href=\"javascript:;\"
    onclick=\"\$('#accountDeactivateForm').toggle()\">
    Deactivate account
</a>

<div id=\"accountDeactivateForm\" style=\"display: none\">
    {{ form_ajax('onDeactivate') }}
        <hr />
        <h3>Deactivate your account?</h3>
        <p>
            Your account will be disabled and your details removed from the site.
            You can reactivate your account any time by signing back in.
        </p>
        <div class=\"form-group\">
            <label for=\"accountDeletePassword\">To continue, please enter your password:</label>
            <input name=\"password\" type=\"password\" class=\"form-control\" id=\"accountDeletePassword\" />
        </div>
        <button type=\"submit\" class=\"btn btn-danger\">
            Confirm Deactivate Account
        </button>
        <a
            href=\"javascript:;\"
            onclick=\"\$('#accountDeactivateForm').toggle()\">
            I changed my mind
        </a>
    {{ form_close() }}
</div>
", "F:\\OCTOBERCMS\\danhbamientay.dev.cc/plugins/rainlab/user/components/account/deactivate_link.htm", "");
    }
}
