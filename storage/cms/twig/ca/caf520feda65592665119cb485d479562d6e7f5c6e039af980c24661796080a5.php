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

/* C:\Program Files (x86)\Ampps\www\octobercms\danhbamientay.dev.cc/themes/danhbamientay/layouts/master.htm */
class __TwigTemplate_122bdac404f90c7542c6d6d3b66a8801aa2cac10abbc7bf68fc0fef294db0187 extends \Twig\Template
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
        echo "<!DOCTYPE html>
<html lang=\"vi\">
<head>
    <meta charset=\"utf-8\">
    <title>";
        // line 5
        if (twig_test_empty(($context["title"] ?? null))) {
            echo " ";
            echo twig_escape_filter($this->env, ($context["home_title"] ?? null), "html", null, true);
            echo " ";
        } else {
            echo " ";
            echo twig_escape_filter($this->env, ($context["title"] ?? null), "html", null, true);
            echo " | Danh bạ miền tây ";
        }
        echo "</title>
    <meta name=\"description\" content=\"";
        // line 6
        if (twig_test_empty(($context["meta_description"] ?? null))) {
            echo twig_escape_filter($this->env, ($context["home_meta_description"] ?? null), "html", null, true);
        } else {
            echo twig_escape_filter($this->env, ($context["meta_description"] ?? null), "html", null, true);
        }
        echo "\">
    <meta name=\"title\" content=\"";
        // line 7
        if (twig_test_empty(($context["meta_title"] ?? null))) {
            echo twig_escape_filter($this->env, ($context["home_meta_title"] ?? null), "html", null, true);
        } else {
            echo twig_escape_filter($this->env, ($context["meta_title"] ?? null), "html", null, true);
        }
        echo "\">
    <meta name=\"author\" content=\"Toàn Năng Cần Thơ\">
    <meta name=\"keywords\" content=\"";
        // line 9
        echo twig_escape_filter($this->env, ($context["home_meta_keyword"] ?? null), "html", null, true);
        echo "\">
    <link rel=\"canonical\" href=\"";
        // line 10
        if (twig_test_empty(($context["page_link"] ?? null))) {
            echo twig_escape_filter($this->env, ($context["home_page_link"] ?? null), "html", null, true);
        } else {
            echo twig_escape_filter($this->env, ($context["home_page_link"] ?? null), "html", null, true);
            echo twig_escape_filter($this->env, ($context["page_link"] ?? null), "html", null, true);
        }
        echo "\" >
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <meta name=\"generator\" content=\"Danh bạ Miền Tây\">
    <link rel=\"icon\" type=\"image/png\" href=\"";
        // line 13
        echo twig_escape_filter($this->env, ($context["favicon"] ?? null), "html", null, true);
        echo "\">
    <link href=\"";
        // line 14
        echo $this->extensions['Cms\Twig\Extension']->themeFilter([0 => "assets/include/font-awesome/css/font-awesome.min.css", 1 => "assets/css/bootstrap.css", 2 => "assets/include/mmenu/jquery.mmenu.all.css", 3 => "assets/include/wow/animate.css", 4 => "assets/include/slick/slick.css", 5 => "assets/include/slick/slick-theme.css", 6 => "assets/css/hover.css", 7 => "assets/css/reset.css", 8 => "assets/jquery.fancybox.min.css", 9 => "assets/css/style.css"]);
        // line 24
        echo "\" rel=\"stylesheet\">
    ";
        // line 25
        echo $this->env->getExtension('Cms\Twig\Extension')->assetsFunction('css');
        echo $this->env->getExtension('Cms\Twig\Extension')->displayBlock('styles');
        // line 26
        echo "    <script src=\"";
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/js/jquery-3.2.1.min.js");
        echo "\"></script>

    <script src=\"https://apis.google.com/js/platform.js\" async defer></script>
    <meta name=\"google-signin-client_id\"
          content=\"231854363690-35rtmknjscg3ih8ettcb66v57ucpm7as.apps.googleusercontent.com\">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-140944177-2\"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-140944177-2');
    </script>

</head>
<body>
";
        // line 43
        $context['__cms_component_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->componentFunction("LamDBMienTayHeader"        , $context['__cms_component_params']        );
        unset($context['__cms_component_params']);
        // line 44
        echo "<!-- Content -->
<section id=\"layout-content\">
    ";
        // line 46
        echo $this->env->getExtension('Cms\Twig\Extension')->pageFunction();
        // line 47
        echo "</section>
";
        // line 48
        $context['__cms_component_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->componentFunction("LamDBMienTayFooter"        , $context['__cms_component_params']        );
        unset($context['__cms_component_params']);
        // line 49
        echo "
<!-- Scripts -->
<script src=\"";
        // line 51
        echo $this->extensions['Cms\Twig\Extension']->themeFilter([0 => "assets/include/mmenu/jquery.mmenu.all.min.js", 1 => "assets/include/slick/slick.js", 2 => "assets/include/wow/wow.js", 3 => "assets/js/bootstrap.js", 4 => "assets/jquery.fancybox.min.js", 5 => "assets/js/index.js"]);
        // line 57
        echo "\"></script>
";
        // line 58
        $_minify = System\Classes\CombineAssets::instance()->useMinify;
        if ($_minify) {
            echo '<script src="'. Request::getBasePath()
                    .'/modules/system/assets/js/framework.combined-min.js"></script>'.PHP_EOL;
        }
        else {
            echo '<script src="'. Request::getBasePath()
                    .'/modules/system/assets/js/framework.js"></script>'.PHP_EOL;
            echo '<script src="'. Request::getBasePath()
                    .'/modules/system/assets/js/framework.extras.js"></script>'.PHP_EOL;
        }
        echo '<link rel="stylesheet" property="stylesheet" href="'. Request::getBasePath()
                    .'/modules/system/assets/css/framework.extras'.($_minify ? '-min' : '').'.css">'.PHP_EOL;
        unset($_minify);
        // line 59
        echo $this->env->getExtension('Cms\Twig\Extension')->assetsFunction('js');
        echo $this->env->getExtension('Cms\Twig\Extension')->displayBlock('scripts');
        // line 60
        echo "
</body>
</html>";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\octobercms\\danhbamientay.dev.cc/themes/danhbamientay/layouts/master.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  162 => 60,  159 => 59,  144 => 58,  141 => 57,  139 => 51,  135 => 49,  131 => 48,  128 => 47,  126 => 46,  122 => 44,  118 => 43,  97 => 26,  94 => 25,  91 => 24,  89 => 14,  85 => 13,  74 => 10,  70 => 9,  61 => 7,  53 => 6,  41 => 5,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE html>
<html lang=\"vi\">
<head>
    <meta charset=\"utf-8\">
    <title>{% if title is empty %} {{ home_title }} {% else %} {{ title }} | Danh bạ miền tây {% endif %}</title>
    <meta name=\"description\" content=\"{% if meta_description is empty %}{{ home_meta_description }}{% else %}{{ meta_description }}{% endif %}\">
    <meta name=\"title\" content=\"{% if meta_title is empty %}{{ home_meta_title }}{% else %}{{ meta_title }}{% endif %}\">
    <meta name=\"author\" content=\"Toàn Năng Cần Thơ\">
    <meta name=\"keywords\" content=\"{{ home_meta_keyword }}\">
    <link rel=\"canonical\" href=\"{% if page_link is empty %}{{ home_page_link }}{% else %}{{ home_page_link }}{{ page_link }}{% endif %}\" >
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <meta name=\"generator\" content=\"Danh bạ Miền Tây\">
    <link rel=\"icon\" type=\"image/png\" href=\"{{ favicon }}\">
    <link href=\"{{ ['assets/include/font-awesome/css/font-awesome.min.css',
                        'assets/css/bootstrap.css',
                        'assets/include/mmenu/jquery.mmenu.all.css',
                        'assets/include/wow/animate.css',
                        'assets/include/slick/slick.css',
                        'assets/include/slick/slick-theme.css',
                        'assets/css/hover.css',
                        'assets/css/reset.css',
                        'assets/jquery.fancybox.min.css',
                        'assets/css/style.css'
                ]|theme }}\" rel=\"stylesheet\">
    {% styles %}
    <script src=\"{{ 'assets/js/jquery-3.2.1.min.js'|theme }}\"></script>

    <script src=\"https://apis.google.com/js/platform.js\" async defer></script>
    <meta name=\"google-signin-client_id\"
          content=\"231854363690-35rtmknjscg3ih8ettcb66v57ucpm7as.apps.googleusercontent.com\">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-140944177-2\"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-140944177-2');
    </script>

</head>
<body>
{% component 'LamDBMienTayHeader' %}
<!-- Content -->
<section id=\"layout-content\">
    {% page %}
</section>
{% component 'LamDBMienTayFooter' %}

<!-- Scripts -->
<script src=\"{{ ['assets/include/mmenu/jquery.mmenu.all.min.js',
                'assets/include/slick/slick.js',
                'assets/include/wow/wow.js',
                'assets/js/bootstrap.js',
                'assets/jquery.fancybox.min.js',
                'assets/js/index.js',
                ]|theme }}\"></script>
{% framework extras %}
{% scripts %}

</body>
</html>", "C:\\Program Files (x86)\\Ampps\\www\\octobercms\\danhbamientay.dev.cc/themes/danhbamientay/layouts/master.htm", "");
    }
}
