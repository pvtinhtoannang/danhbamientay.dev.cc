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

/* F:\OCTOBERCMS\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaydangtin/default.htm */
class __TwigTemplate_557e7044eecbd21bb1d340b5036502ff8794e0e6940408425da182259e385dfe extends \Twig\Template
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
        echo "<section class=\"pvtinh-dbmientay-dang-tin\">
\t<div class=\"container\">
\t\t<div class=\"col-xs-12 col-sm-4 col-md-3\">
\t\t\t<ul>
\t\t\t\t<li class=\"text-dark\"><i class=\"fa fa-user\"></i><a href=\"/tai-khoan\" class=\"text-dark\" title=\"Tài khoản\">Trang cá nhân</a></li>
\t\t\t\t<li class=\"text-dark\"><i class=\"fa fa-plus\"></i><a href=\"/dang-tin\" class=\"text-dark\" title=\"Đăng tin\">Đăng tin</a></li>
\t\t\t\t<li class=\"text-dark\"><i class=\"fa fa-key\"></i><a href=\"/dang-tin\" class=\"text-dark\" title=\"Đổi mật khẩu\">Đổi mật khẩu</a></li>
\t\t\t\t<li class=\"text-dark\"><i class=\"fa fa-list\"></i><a href=\"/dang-tin\" class=\"text-dark\" title=\"Danh sách tin đăng\">Danh sách tin đăng</a></li>
\t\t\t\t<li class=\"text-dark\"><i class=\"fa fa-sign-out\"></i><a data-request=\"onLogout\" href=\"/dang-xuat\" class=\"text-dark\" title=\"Đăng xuất\">Đăng xuất</a></li>
\t\t\t\t
\t\t\t</ul>
\t\t</div>
\t</div>
</section>";
    }

    public function getTemplateName()
    {
        return "F:\\OCTOBERCMS\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaydangtin/default.htm";
    }

    public function getDebugInfo()
    {
        return array (  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<section class=\"pvtinh-dbmientay-dang-tin\">
\t<div class=\"container\">
\t\t<div class=\"col-xs-12 col-sm-4 col-md-3\">
\t\t\t<ul>
\t\t\t\t<li class=\"text-dark\"><i class=\"fa fa-user\"></i><a href=\"/tai-khoan\" class=\"text-dark\" title=\"Tài khoản\">Trang cá nhân</a></li>
\t\t\t\t<li class=\"text-dark\"><i class=\"fa fa-plus\"></i><a href=\"/dang-tin\" class=\"text-dark\" title=\"Đăng tin\">Đăng tin</a></li>
\t\t\t\t<li class=\"text-dark\"><i class=\"fa fa-key\"></i><a href=\"/dang-tin\" class=\"text-dark\" title=\"Đổi mật khẩu\">Đổi mật khẩu</a></li>
\t\t\t\t<li class=\"text-dark\"><i class=\"fa fa-list\"></i><a href=\"/dang-tin\" class=\"text-dark\" title=\"Danh sách tin đăng\">Danh sách tin đăng</a></li>
\t\t\t\t<li class=\"text-dark\"><i class=\"fa fa-sign-out\"></i><a data-request=\"onLogout\" href=\"/dang-xuat\" class=\"text-dark\" title=\"Đăng xuất\">Đăng xuất</a></li>
\t\t\t\t
\t\t\t</ul>
\t\t</div>
\t</div>
</section>", "F:\\OCTOBERCMS\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaydangtin/default.htm", "");
    }
}
