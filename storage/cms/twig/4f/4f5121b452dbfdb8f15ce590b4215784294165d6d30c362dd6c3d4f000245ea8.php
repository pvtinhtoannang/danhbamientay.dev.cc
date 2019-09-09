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

/* C:\Program Files (x86)\Ampps\www\dev\danhbamientay.dev.cc/themes/danhbamientay/pages/dang-ky.htm */
class __TwigTemplate_8ae5a59995399985fb35e20a335bffc0a05733675d8bb0ccde4356ad5b17c9d0 extends \Twig\Template
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
        $context['__cms_component_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->componentFunction("session"        , $context['__cms_component_params']        );
        unset($context['__cms_component_params']);
        // line 2
        echo "
<div class=\"pvtinh_account_dbmientay\">
  <div class=\"container\">
    ";
        // line 5
        if ( !($context["user"] ?? null)) {
            // line 6
            echo "    <div class=\"row\">
      <div class=\"col-md-offset-2 col-md-7\">
        <div class=\"account_form \">
          <h3 class=\"account_title\">ĐĂNG KÝ</h3>
          <div class=\"row\">
            <div class=\"col-md-6\">
              <div class=\"login_form\">
                ";
            // line 13
            $context['__cms_partial_params'] = [];
            echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction((($context["account"] ?? null) . "::register")            , $context['__cms_partial_params']            , true            );
            unset($context['__cms_partial_params']);
            // line 14
            echo "
                <ul class=\"account_link\">
                  <li>Bạn đã có tài khoản? <a href=\"/dang-nhap\" title=\"Đăng nhập\">Đăng nhập</a>  </li>

                </ul>
              </div>
            </div>
            <div class=\"col-md-6\">
                <div class=\"g-signin2\" data-onsuccess=\"onSignIn\"></div>
            </div>
          </div>
        </div>
      </div>
    </div>


    ";
        } else {
            // line 31
            echo "
        ";
            // line 32
            $context['__cms_partial_params'] = [];
            echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction((($context["account"] ?? null) . "::activation_check")            , $context['__cms_partial_params']            , true            );
            unset($context['__cms_partial_params']);
            // line 33
            echo "
        ";
            // line 34
            $context['__cms_partial_params'] = [];
            echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction((($context["account"] ?? null) . "::update")            , $context['__cms_partial_params']            , true            );
            unset($context['__cms_partial_params']);
            // line 35
            echo "
        ";
            // line 36
            $context['__cms_partial_params'] = [];
            echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction((($context["account"] ?? null) . "::deactivate_link")            , $context['__cms_partial_params']            , true            );
            unset($context['__cms_partial_params']);
            // line 37
            echo "
    ";
        }
        // line 39
        echo "  </div>
</div>";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/themes/danhbamientay/pages/dang-ky.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  103 => 39,  99 => 37,  95 => 36,  92 => 35,  88 => 34,  85 => 33,  81 => 32,  78 => 31,  59 => 14,  55 => 13,  46 => 6,  44 => 5,  39 => 2,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% component 'session' %}

<div class=\"pvtinh_account_dbmientay\">
  <div class=\"container\">
    {% if not user %}
    <div class=\"row\">
      <div class=\"col-md-offset-2 col-md-7\">
        <div class=\"account_form \">
          <h3 class=\"account_title\">ĐĂNG KÝ</h3>
          <div class=\"row\">
            <div class=\"col-md-6\">
              <div class=\"login_form\">
                {% partial account ~ '::register' %}

                <ul class=\"account_link\">
                  <li>Bạn đã có tài khoản? <a href=\"/dang-nhap\" title=\"Đăng nhập\">Đăng nhập</a>  </li>

                </ul>
              </div>
            </div>
            <div class=\"col-md-6\">
                <div class=\"g-signin2\" data-onsuccess=\"onSignIn\"></div>
            </div>
          </div>
        </div>
      </div>
    </div>


    {% else %}

        {% partial account ~ '::activation_check' %}

        {% partial account ~ '::update' %}

        {% partial account ~ '::deactivate_link' %}

    {% endif %}
  </div>
</div>", "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/themes/danhbamientay/pages/dang-ky.htm", "");
    }
}
