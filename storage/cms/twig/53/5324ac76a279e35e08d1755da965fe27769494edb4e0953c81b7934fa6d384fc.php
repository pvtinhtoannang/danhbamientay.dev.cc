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

/* F:\OCTOBERCMS\danhbamientay.dev.cc/themes/danhbamientay/pages/dang-nhap.htm */
class __TwigTemplate_eccf31173167a319091d3a45eaec99f55210b21549ddb440182c558de9be136a extends \Twig\Template
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
        echo "<div class=\"pvtinh_account_dbmientay\">
  <div class=\"container\">
  ";
        // line 3
        if ( !($context["user"] ?? null)) {
            // line 4
            echo "  <div class=\"row\">
    <div class=\"col-md-offset-2 col-md-7\">
      <div class=\"account_form \">
        <h3 class=\"account_title\">ĐĂNG NHẬP</h3>
        <div class=\"row\">
          <div class=\"col-md-6\">
            <div class=\"login_form\">
              ";
            // line 11
            $context['__cms_partial_params'] = [];
            echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction((($context["account"] ?? null) . "::signin")            , $context['__cms_partial_params']            , true            );
            unset($context['__cms_partial_params']);
            // line 12
            echo "              
              <ul class=\"account_link\">
                <li>Bạn chưa có tài khoản? <a href=\"/dang-ky\" title=\"Đăng ký\">Tạo tài khoản</a>  </li>
                <li><a href=\"#\">Quên mật khẩu?</a></li>
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
            // line 29
            echo "
      ";
            // line 30
            $context['__cms_partial_params'] = [];
            echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction((($context["account"] ?? null) . "::activation_check")            , $context['__cms_partial_params']            , true            );
            unset($context['__cms_partial_params']);
            // line 31
            echo "
      ";
            // line 32
            $context['__cms_partial_params'] = [];
            echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction((($context["account"] ?? null) . "::update")            , $context['__cms_partial_params']            , true            );
            unset($context['__cms_partial_params']);
            // line 33
            echo "
      ";
            // line 34
            $context['__cms_partial_params'] = [];
            echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction((($context["account"] ?? null) . "::deactivate_link")            , $context['__cms_partial_params']            , true            );
            unset($context['__cms_partial_params']);
            // line 35
            echo "
  ";
        }
        // line 37
        echo "
  </div>
</div>";
    }

    public function getTemplateName()
    {
        return "F:\\OCTOBERCMS\\danhbamientay.dev.cc/themes/danhbamientay/pages/dang-nhap.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  98 => 37,  94 => 35,  90 => 34,  87 => 33,  83 => 32,  80 => 31,  76 => 30,  73 => 29,  54 => 12,  50 => 11,  41 => 4,  39 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div class=\"pvtinh_account_dbmientay\">
  <div class=\"container\">
  {% if not user %}
  <div class=\"row\">
    <div class=\"col-md-offset-2 col-md-7\">
      <div class=\"account_form \">
        <h3 class=\"account_title\">ĐĂNG NHẬP</h3>
        <div class=\"row\">
          <div class=\"col-md-6\">
            <div class=\"login_form\">
              {% partial account ~ '::signin' %}
              
              <ul class=\"account_link\">
                <li>Bạn chưa có tài khoản? <a href=\"/dang-ky\" title=\"Đăng ký\">Tạo tài khoản</a>  </li>
                <li><a href=\"#\">Quên mật khẩu?</a></li>
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
</div>", "F:\\OCTOBERCMS\\danhbamientay.dev.cc/themes/danhbamientay/pages/dang-nhap.htm", "");
    }
}
