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

/* F:\OCTOBERCMS\danhbamientay.dev.cc/plugins/rainlab/user/components/account/activation_check.htm */
class __TwigTemplate_c0b5b410ff7019ba58eb896024821b6dce806f8118a35f128e02babc72e9cd52 extends \Twig\Template
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
        if ( !twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "is_activated", [], "any", false, false, false, 1)) {
            // line 2
            echo "
    <h3>Your email address has not yet been verified.</h3>
    <p>
        You should verify your account otherwise it may be deleted. Please check your email to verify.
        <a href=\"javascript:;\" data-request=\"onSendActivationEmail\">Send the verification email again</a>.
    </p>

";
        }
    }

    public function getTemplateName()
    {
        return "F:\\OCTOBERCMS\\danhbamientay.dev.cc/plugins/rainlab/user/components/account/activation_check.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  37 => 2,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% if not user.is_activated %}

    <h3>Your email address has not yet been verified.</h3>
    <p>
        You should verify your account otherwise it may be deleted. Please check your email to verify.
        <a href=\"javascript:;\" data-request=\"onSendActivationEmail\">Send the verification email again</a>.
    </p>

{% endif %}", "F:\\OCTOBERCMS\\danhbamientay.dev.cc/plugins/rainlab/user/components/account/activation_check.htm", "");
    }
}
