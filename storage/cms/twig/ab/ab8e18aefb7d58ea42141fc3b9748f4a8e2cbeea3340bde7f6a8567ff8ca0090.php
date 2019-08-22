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

/* F:\OCTOBERCMS\danhbamientay.dev.cc/themes/danhbamientay/pages/dang-ky-tai-khoan.htm */
class __TwigTemplate_6819218c696c5667ac899d1c5e685bd138beb6296c9b45bcb045df3c447fc365 extends \Twig\Template
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
        // line 6
        if ( !($context["user"] ?? null)) {
            // line 7
            echo "  <div class=\"row\">
    <div class=\"col-md-offset-2 col-md-7\">
      <div class=\"account_form \">
        <h3 class=\"account_title\">ĐĂNG KÝ</h3>
        <div class=\"row\">
          <div class=\"col-md-6\">
            <div class=\"login_form\">
              ";
            // line 14
            $context['__cms_partial_params'] = [];
            echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction((($context["account"] ?? null) . "::register")            , $context['__cms_partial_params']            , true            );
            unset($context['__cms_partial_params']);
            // line 15
            echo "
              <ul class=\"account_link\">
                <li>Bạn đã có tài khoản? <a href=\"/dang-nhap\" title=\"Đăng nhập\">Đăng nhập</a>  </li>

              </ul>
            </div>
          </div>
          <div class=\"col-md-6\">

          </div>
        </div>
      </div>
    </div>
  </div>


  ";
        } else {
            // line 32
            echo "
      ";
            // line 33
            $context['__cms_partial_params'] = [];
            echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction((($context["account"] ?? null) . "::activation_check")            , $context['__cms_partial_params']            , true            );
            unset($context['__cms_partial_params']);
            // line 34
            echo "
      ";
            // line 35
            $context['__cms_partial_params'] = [];
            echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction((($context["account"] ?? null) . "::update")            , $context['__cms_partial_params']            , true            );
            unset($context['__cms_partial_params']);
            // line 36
            echo "
      ";
            // line 37
            $context['__cms_partial_params'] = [];
            echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction((($context["account"] ?? null) . "::deactivate_link")            , $context['__cms_partial_params']            , true            );
            unset($context['__cms_partial_params']);
            // line 38
            echo "
  ";
        }
        // line 40
        echo "
  </div>
</div>";
    }

    public function getTemplateName()
    {
        return "F:\\OCTOBERCMS\\danhbamientay.dev.cc/themes/danhbamientay/pages/dang-ky-tai-khoan.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  104 => 40,  100 => 38,  96 => 37,  93 => 36,  89 => 35,  86 => 34,  82 => 33,  79 => 32,  60 => 15,  56 => 14,  47 => 7,  45 => 6,  39 => 2,  35 => 1,);
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
</div>", "F:\\OCTOBERCMS\\danhbamientay.dev.cc/themes/danhbamientay/pages/dang-ky-tai-khoan.htm", "");
    }
}
