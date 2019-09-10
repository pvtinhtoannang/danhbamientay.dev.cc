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

/* C:\Program Files (x86)\Ampps\www\octobercms\danhbamientay.dev.cc/themes/danhbamientay/pages/dang-nhap.htm */
class __TwigTemplate_1f361ff1d2aa0ef09dbb5e7582fdbf15eeded323b7c4bf0e52f8605c5d97e5e3 extends \Twig\Template
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
        echo "<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '526242978202571',
      cookie     : true,
      xfbml      : true,
      version    : 'v4.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = \"https://connect.facebook.net/en_US/sdk.js\";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
<div class=\"pvtinh_account_dbmientay\">
  <div class=\"container\">
  ";
        // line 24
        if ( !($context["user"] ?? null)) {
            // line 25
            echo "  <div class=\"row\">
    <div class=\"col-md-offset-2 col-md-7\">
      <div class=\"account_form \">
        <h3 class=\"account_title\">ĐĂNG NHẬP</h3>
        <div class=\"row\">
          <div class=\"col-md-6\">
            <div class=\"login_form\">
              ";
            // line 32
            $context['__cms_partial_params'] = [];
            echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction((($context["account"] ?? null) . "::signin")            , $context['__cms_partial_params']            , true            );
            unset($context['__cms_partial_params']);
            // line 33
            echo "              
              <ul class=\"account_link\">
                <li>Bạn chưa có tài khoản? <a href=\"/dang-ky\" title=\"Đăng ký\">Tạo tài khoản</a>  </li>
                <li><a href=\"/quen-mat-khau\">Quên mật khẩu?</a></li>
              </ul>
            </div>
          </div>
          <div class=\"col-md-6\">
            <div class=\"login_form\">
              <label for=\"\">Đăng nhập với Google</label>
              <div class=\"g-signin2\" data-width=\"290\" data-onsuccess=\"onSignIn\" data-longtitle=\"true\"></div>
              <a href=\"#\" onclick=\"signOut();\">Sign out</a>
              <p>Hoặc</p>
              <label for=\"\">Đăng nhập với Facebook</label>

              <div class=\"fb-login-button\" data-width=\"290\" data-size=\"large\" data-button-type=\"continue_with\" data-auto-logout-link=\"false\" data-use-continue-as=\"false\"></div>
            </div>              
          </div>
        </div>
      </div>
    </div>
  </div>


  ";
        } else {
            // line 58
            echo "
      ";
            // line 59
            $context['__cms_partial_params'] = [];
            echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction((($context["account"] ?? null) . "::activation_check")            , $context['__cms_partial_params']            , true            );
            unset($context['__cms_partial_params']);
            // line 60
            echo "
      ";
            // line 61
            $context['__cms_partial_params'] = [];
            echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction((($context["account"] ?? null) . "::update")            , $context['__cms_partial_params']            , true            );
            unset($context['__cms_partial_params']);
            // line 62
            echo "
      ";
            // line 63
            $context['__cms_partial_params'] = [];
            echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction((($context["account"] ?? null) . "::deactivate_link")            , $context['__cms_partial_params']            , true            );
            unset($context['__cms_partial_params']);
            // line 64
            echo "
  ";
        }
        // line 66
        echo "
  </div>
</div>";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\octobercms\\danhbamientay.dev.cc/themes/danhbamientay/pages/dang-nhap.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  127 => 66,  123 => 64,  119 => 63,  116 => 62,  112 => 61,  109 => 60,  105 => 59,  102 => 58,  75 => 33,  71 => 32,  62 => 25,  60 => 24,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '526242978202571',
      cookie     : true,
      xfbml      : true,
      version    : 'v4.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = \"https://connect.facebook.net/en_US/sdk.js\";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
<div class=\"pvtinh_account_dbmientay\">
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
                <li><a href=\"/quen-mat-khau\">Quên mật khẩu?</a></li>
              </ul>
            </div>
          </div>
          <div class=\"col-md-6\">
            <div class=\"login_form\">
              <label for=\"\">Đăng nhập với Google</label>
              <div class=\"g-signin2\" data-width=\"290\" data-onsuccess=\"onSignIn\" data-longtitle=\"true\"></div>
              <a href=\"#\" onclick=\"signOut();\">Sign out</a>
              <p>Hoặc</p>
              <label for=\"\">Đăng nhập với Facebook</label>

              <div class=\"fb-login-button\" data-width=\"290\" data-size=\"large\" data-button-type=\"continue_with\" data-auto-logout-link=\"false\" data-use-continue-as=\"false\"></div>
            </div>              
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
</div>", "C:\\Program Files (x86)\\Ampps\\www\\octobercms\\danhbamientay.dev.cc/themes/danhbamientay/pages/dang-nhap.htm", "");
    }
}
