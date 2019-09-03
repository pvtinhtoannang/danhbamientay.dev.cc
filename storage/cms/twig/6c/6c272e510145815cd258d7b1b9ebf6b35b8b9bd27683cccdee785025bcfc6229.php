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

/* C:\Program Files (x86)\Ampps\www\dev\danhbamientay.dev.cc/themes/danhbamientay/pages/tai-khoan.htm */
class __TwigTemplate_b113867fd628140c1458a1e85ac6fd0a1e0acb9d5d7a195084e11b0b33a99f3c extends \Twig\Template
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
        echo "<div class=\"pvtinh_account_dbmien\">
  <div class=\"container\">
  ";
        // line 3
        if ( !($context["user"] ?? null)) {
            // line 4
            echo "      <div class=\"row\">
        <div class=\"col-xs-12 col-sm-6\">
          <h3 class=\"title_form\">Đăng nhập</h3>
          <div class=\"form_account \">
              ";
            // line 8
            $context['__cms_partial_params'] = [];
            echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction((($context["account"] ?? null) . "::signin")            , $context['__cms_partial_params']            , true            );
            unset($context['__cms_partial_params']);
            // line 9
            echo "          </div>
        </div>
        <div class=\"col-xs-12 col-sm-6\">
          <h3 class=\"title_form\">Hoặc đăng nhập với</h3>
          <div class=\"form_account \">
              ";
            // line 14
            $context['__cms_partial_params'] = [];
            echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction((($context["account"] ?? null) . "::signin")            , $context['__cms_partial_params']            , true            );
            unset($context['__cms_partial_params']);
            // line 15
            echo "          </div>
        </div>
      </div>

  ";
        } else {
            // line 20
            echo "      <h3 class=\"title_form\">Tài khoản</h3>
      <div class=\"form_account \">
        ";
            // line 22
            $context['__cms_partial_params'] = [];
            echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction((($context["account"] ?? null) . "::activation_check")            , $context['__cms_partial_params']            , true            );
            unset($context['__cms_partial_params']);
            // line 23
            echo "        ";
            $context['__cms_partial_params'] = [];
            echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction((($context["account"] ?? null) . "::update")            , $context['__cms_partial_params']            , true            );
            unset($context['__cms_partial_params']);
            // line 24
            echo "        ";
            $context['__cms_partial_params'] = [];
            echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction((($context["account"] ?? null) . "::deactivate_link")            , $context['__cms_partial_params']            , true            );
            unset($context['__cms_partial_params']);
            // line 25
            echo "      </div>
  ";
        }
        // line 27
        echo "  </div>
</div>";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/themes/danhbamientay/pages/tai-khoan.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  91 => 27,  87 => 25,  82 => 24,  77 => 23,  73 => 22,  69 => 20,  62 => 15,  58 => 14,  51 => 9,  47 => 8,  41 => 4,  39 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div class=\"pvtinh_account_dbmien\">
  <div class=\"container\">
  {% if not user %}
      <div class=\"row\">
        <div class=\"col-xs-12 col-sm-6\">
          <h3 class=\"title_form\">Đăng nhập</h3>
          <div class=\"form_account \">
              {% partial account ~ '::signin' %}
          </div>
        </div>
        <div class=\"col-xs-12 col-sm-6\">
          <h3 class=\"title_form\">Hoặc đăng nhập với</h3>
          <div class=\"form_account \">
              {% partial account ~ '::signin' %}
          </div>
        </div>
      </div>

  {% else %}
      <h3 class=\"title_form\">Tài khoản</h3>
      <div class=\"form_account \">
        {% partial account ~ '::activation_check' %}
        {% partial account ~ '::update' %}
        {% partial account ~ '::deactivate_link' %}
      </div>
  {% endif %}
  </div>
</div>", "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/themes/danhbamientay/pages/tai-khoan.htm", "");
    }
}
