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

/* C:\Program Files (x86)\Ampps\www\dev\danhbamientay.dev.cc/themes/danhbamientay/layouts/master.htm */
class __TwigTemplate_9b8daebf55413258e8b5c58f08de9d74b13a98ff92857ea0edc7d0e59d069577 extends \Twig\Template
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
<html>
    <head>
        <meta charset=\"utf-8\">
        <title>";
        // line 5
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "page", [], "any", false, false, false, 5), "title", [], "any", false, false, false, 5), "html", null, true);
        echo "</title>
        <meta name=\"description\" content=\"";
        // line 6
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "page", [], "any", false, false, false, 6), "meta_description", [], "any", false, false, false, 6), "html", null, true);
        echo "\">
        <meta name=\"title\" content=\"";
        // line 7
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "page", [], "any", false, false, false, 7), "meta_title", [], "any", false, false, false, 7), "html", null, true);
        echo "\">
        <meta name=\"author\" content=\"Danh bạ Miền Tây\">
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
        <meta name=\"generator\" content=\"Danh bạ Miền Tây\">
        <link rel=\"icon\" type=\"image/png\" href=\"";
        // line 11
        echo twig_escape_filter($this->env, ($context["favicon"] ?? null), "html", null, true);
        echo "\">
        <link href=\"";
        // line 12
        echo $this->extensions['Cms\Twig\Extension']->themeFilter([0 => "assets/include/font-awesome/css/font-awesome.min.css", 1 => "assets/css/bootstrap.css", 2 => "assets/include/mmenu/jquery.mmenu.all.css", 3 => "assets/include/wow/animate.css", 4 => "assets/include/slick/slick.css", 5 => "assets/include/slick/slick-theme.css", 6 => "assets/css/hover.css", 7 => "assets/css/reset.css", 8 => "assets/jquery.fancybox.min.css", 9 => "assets/css/style.css"]);
        // line 22
        echo "\" rel=\"stylesheet\">
        ";
        // line 23
        echo $this->env->getExtension('Cms\Twig\Extension')->assetsFunction('css');
        echo $this->env->getExtension('Cms\Twig\Extension')->displayBlock('styles');
        // line 24
        echo "        <script src=\"";
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/js/jquery-3.2.1.min.js");
        echo "\"> </script>
    </head>
    <body>
    ";
        // line 27
        $context['__cms_component_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->componentFunction("LamDBMienTayHeader"        , $context['__cms_component_params']        );
        unset($context['__cms_component_params']);
        // line 28
        echo "        <!-- Content -->
        <section id=\"layout-content\">
            ";
        // line 30
        echo $this->env->getExtension('Cms\Twig\Extension')->pageFunction();
        // line 31
        echo "        </section>
    ";
        // line 32
        $context['__cms_component_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->componentFunction("LamDBMienTayFooter"        , $context['__cms_component_params']        );
        unset($context['__cms_component_params']);
        // line 33
        echo "
        <!-- Scripts -->
        <script src=\"";
        // line 35
        echo $this->extensions['Cms\Twig\Extension']->themeFilter([0 => "assets/include/mmenu/jquery.mmenu.all.min.js", 1 => "assets/include/slick/slick.js", 2 => "assets/include/wow/wow.js", 3 => "assets/js/bootstrap.js", 4 => "assets/jquery.fancybox.min.js", 5 => "assets/js/index.js"]);
        // line 41
        echo "\"></script>
        ";
        // line 42
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
        // line 43
        echo "        ";
        echo $this->env->getExtension('Cms\Twig\Extension')->assetsFunction('js');
        echo $this->env->getExtension('Cms\Twig\Extension')->displayBlock('scripts');
        // line 44
        echo "
    </body>
</html>";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/themes/danhbamientay/layouts/master.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  120 => 44,  116 => 43,  101 => 42,  98 => 41,  96 => 35,  92 => 33,  88 => 32,  85 => 31,  83 => 30,  79 => 28,  75 => 27,  68 => 24,  65 => 23,  62 => 22,  60 => 12,  56 => 11,  49 => 7,  45 => 6,  41 => 5,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"utf-8\">
        <title>{{ this.page.title }}</title>
        <meta name=\"description\" content=\"{{ this.page.meta_description }}\">
        <meta name=\"title\" content=\"{{ this.page.meta_title }}\">
        <meta name=\"author\" content=\"Danh bạ Miền Tây\">
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
                        'assets/css/style.css',
                ]|theme }}\" rel=\"stylesheet\">
        {% styles %}
        <script src=\"{{ 'assets/js/jquery-3.2.1.min.js'|theme }}\"> </script>
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
</html>", "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/themes/danhbamientay/layouts/master.htm", "");
    }
}
