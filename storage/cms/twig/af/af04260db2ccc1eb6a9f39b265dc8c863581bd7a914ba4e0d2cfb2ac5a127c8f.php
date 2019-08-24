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
\t\t<div class=\"row\">
\t\t\t<div class=\"col-xs-12 col-sm-4 col-md-3\">
\t\t\t\t<div class=\"box-user\">
\t\t\t\t\t<ul class=\"list-user\">
\t\t\t\t\t\t<li class=\"text-dark\"><i class=\"fa fa-user\"></i><a href=\"/tai-khoan\" class=\"text-dark\" title=\"Tài khoản\">Trang cá nhân</a></li>
\t\t\t\t\t\t<li class=\"text-dark\"><i class=\"fa fa-plus\"></i><a href=\"/dang-tin\" class=\"text-dark\" title=\"Đăng tin\">Đăng tin</a></li>
\t\t\t\t\t\t<li class=\"text-dark\"><i class=\"fa fa-key\"></i><a href=\"/dang-tin\" class=\"text-dark\" title=\"Đổi mật khẩu\">Đổi mật khẩu</a></li>
\t\t\t\t\t\t<li class=\"text-dark\"><i class=\"fa fa-list\"></i><a href=\"/dang-tin\" class=\"text-dark\" title=\"Danh sách tin đăng\">Danh sách tin đăng</a></li>
\t\t\t\t\t\t<li class=\"text-dark\"><i class=\"fa fa-sign-out\"></i><a data-request=\"onLogout\" href=\"/dang-xuat\" class=\"text-dark\" title=\"Đăng xuất\">Đăng xuất</a></li>
\t\t\t\t\t</ul>\t
\t\t\t\t</div>
\t\t\t</div>
\t\t\t<div class=\"col-xs-12 col-sm-8 col-md-9\">
\t\t\t\t<h2 class=\"text-dark text-center title-form\">Đăng tin</h2>
\t\t\t\t<div class=\"row\">
\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t  <div class=\"form-group\">
\t\t\t\t\t\t    <label for=\"category\">Chọn danh mục:</label>
\t\t\t\t\t\t     <select class=\"js-example-basic-single input-dbmt\" name=\"category\">
\t\t\t\t\t\t\t  <option value=\"AL\">Alabama</option> 
\t\t\t\t\t\t\t  <option value=\"WY\">Wyoming</option>
\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t  </div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t  \t<div class=\"form-group\">
\t\t\t\t\t    \t<label for=\"category\">Chọn loại hình:</label>
\t\t\t\t\t     \t<select class=\"js-example-basic-single input-dbmt\" name=\"location\">
\t\t\t\t\t\t\t  <option value=\"AL\">Alabama</option> 
\t\t\t\t\t\t\t  <option value=\"WY\">Wyoming</option>
\t\t\t\t\t\t\t</select>
\t\t\t\t\t  \t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"col-xs-12\">
\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t    \t<label for=\"category\">Tiêu đề tin đăng:</label>
\t\t\t\t\t     \t<input type=\"text\" class=\"input-dbmt\">
\t\t\t\t\t  \t</div>
\t\t\t\t\t</div>

\t\t\t\t\t<div class=\"col-xs-12\">
\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t    \t<label for=\"category\">Mô tả tin đăng:</label>
\t\t\t\t\t     \t<textarea rows class=\"input-dbmt\"> Chèn wigth vào đây </textarea>  
\t\t\t\t\t  \t</div>
\t\t\t\t\t</div>

\t\t\t\t\t<div class=\"col-xs-6\">
\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t    \t<label for=\"category\">Nhập giá:</label>
\t\t\t\t\t     \t<input type=\"text\" class=\"input-dbmt\">
\t\t\t\t\t  \t</div>
\t\t\t\t\t</div>

\t\t\t\t\t<div class=\"col-xs-6\">
\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t    \t<label for=\"category\">Diện tích:</label>
\t\t\t\t\t     \t<input type=\"text\" class=\"input-dbmt\">
\t\t\t\t\t  \t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"col-xs-12\">
\t\t\t\t\t\t<div class=\"row\">
\t\t\t\t\t\t\t<div class=\"col-xs-12 col-md-6\">
\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t    \t<label for=\"category\">Thêm ảnh
\t\t\t\t\t\t\t    \t\t<small></small></label>
\t\t\t\t\t\t\t     \t    <input id=\"uploader\" type=\"file\" name=\"files\">
\t\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class=\"col-xs-12\">
\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t    \t<label for=\"province\">Chọn Tỉnh / Thành phố</label>
\t\t\t\t\t\t\t     \t<select class=\"js-example-basic-single input-dbmt\" name=\"province\">
\t\t\t\t\t\t\t\t\t  <option value=\"AL\">Tỉnh</option> 
\t\t\t\t\t\t\t\t\t  <option value=\"WY\">Thành phố</option><option value=\"AL\">Tỉnh</option> 
\t\t\t\t\t\t\t\t\t  <option value=\"WY\">Thành phố</option><option value=\"AL\">Tỉnh</option> 
\t\t\t\t\t\t\t\t\t  <option value=\"WY\">Thành phố</option><option value=\"AL\">Tỉnh</option> 
\t\t\t\t\t\t\t\t\t  <option value=\"WY\">Thành phố</option><option value=\"AL\">Tỉnh</option> 
\t\t\t\t\t\t\t\t\t  <option value=\"WY\">Thành phố</option><option value=\"AL\">Tỉnh</option> 
\t\t\t\t\t\t\t\t\t  <option value=\"WY\">Thành phố</option>
\t\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>\t
\t\t\t\t\t</div>\t\t\t\t\t
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t</div>
</section>
 ";
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
\t\t<div class=\"row\">
\t\t\t<div class=\"col-xs-12 col-sm-4 col-md-3\">
\t\t\t\t<div class=\"box-user\">
\t\t\t\t\t<ul class=\"list-user\">
\t\t\t\t\t\t<li class=\"text-dark\"><i class=\"fa fa-user\"></i><a href=\"/tai-khoan\" class=\"text-dark\" title=\"Tài khoản\">Trang cá nhân</a></li>
\t\t\t\t\t\t<li class=\"text-dark\"><i class=\"fa fa-plus\"></i><a href=\"/dang-tin\" class=\"text-dark\" title=\"Đăng tin\">Đăng tin</a></li>
\t\t\t\t\t\t<li class=\"text-dark\"><i class=\"fa fa-key\"></i><a href=\"/dang-tin\" class=\"text-dark\" title=\"Đổi mật khẩu\">Đổi mật khẩu</a></li>
\t\t\t\t\t\t<li class=\"text-dark\"><i class=\"fa fa-list\"></i><a href=\"/dang-tin\" class=\"text-dark\" title=\"Danh sách tin đăng\">Danh sách tin đăng</a></li>
\t\t\t\t\t\t<li class=\"text-dark\"><i class=\"fa fa-sign-out\"></i><a data-request=\"onLogout\" href=\"/dang-xuat\" class=\"text-dark\" title=\"Đăng xuất\">Đăng xuất</a></li>
\t\t\t\t\t</ul>\t
\t\t\t\t</div>
\t\t\t</div>
\t\t\t<div class=\"col-xs-12 col-sm-8 col-md-9\">
\t\t\t\t<h2 class=\"text-dark text-center title-form\">Đăng tin</h2>
\t\t\t\t<div class=\"row\">
\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t  <div class=\"form-group\">
\t\t\t\t\t\t    <label for=\"category\">Chọn danh mục:</label>
\t\t\t\t\t\t     <select class=\"js-example-basic-single input-dbmt\" name=\"category\">
\t\t\t\t\t\t\t  <option value=\"AL\">Alabama</option> 
\t\t\t\t\t\t\t  <option value=\"WY\">Wyoming</option>
\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t  </div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t  \t<div class=\"form-group\">
\t\t\t\t\t    \t<label for=\"category\">Chọn loại hình:</label>
\t\t\t\t\t     \t<select class=\"js-example-basic-single input-dbmt\" name=\"location\">
\t\t\t\t\t\t\t  <option value=\"AL\">Alabama</option> 
\t\t\t\t\t\t\t  <option value=\"WY\">Wyoming</option>
\t\t\t\t\t\t\t</select>
\t\t\t\t\t  \t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"col-xs-12\">
\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t    \t<label for=\"category\">Tiêu đề tin đăng:</label>
\t\t\t\t\t     \t<input type=\"text\" class=\"input-dbmt\">
\t\t\t\t\t  \t</div>
\t\t\t\t\t</div>

\t\t\t\t\t<div class=\"col-xs-12\">
\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t    \t<label for=\"category\">Mô tả tin đăng:</label>
\t\t\t\t\t     \t<textarea rows class=\"input-dbmt\"> Chèn wigth vào đây </textarea>  
\t\t\t\t\t  \t</div>
\t\t\t\t\t</div>

\t\t\t\t\t<div class=\"col-xs-6\">
\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t    \t<label for=\"category\">Nhập giá:</label>
\t\t\t\t\t     \t<input type=\"text\" class=\"input-dbmt\">
\t\t\t\t\t  \t</div>
\t\t\t\t\t</div>

\t\t\t\t\t<div class=\"col-xs-6\">
\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t    \t<label for=\"category\">Diện tích:</label>
\t\t\t\t\t     \t<input type=\"text\" class=\"input-dbmt\">
\t\t\t\t\t  \t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"col-xs-12\">
\t\t\t\t\t\t<div class=\"row\">
\t\t\t\t\t\t\t<div class=\"col-xs-12 col-md-6\">
\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t    \t<label for=\"category\">Thêm ảnh
\t\t\t\t\t\t\t    \t\t<small></small></label>
\t\t\t\t\t\t\t     \t    <input id=\"uploader\" type=\"file\" name=\"files\">
\t\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class=\"col-xs-12\">
\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t    \t<label for=\"province\">Chọn Tỉnh / Thành phố</label>
\t\t\t\t\t\t\t     \t<select class=\"js-example-basic-single input-dbmt\" name=\"province\">
\t\t\t\t\t\t\t\t\t  <option value=\"AL\">Tỉnh</option> 
\t\t\t\t\t\t\t\t\t  <option value=\"WY\">Thành phố</option><option value=\"AL\">Tỉnh</option> 
\t\t\t\t\t\t\t\t\t  <option value=\"WY\">Thành phố</option><option value=\"AL\">Tỉnh</option> 
\t\t\t\t\t\t\t\t\t  <option value=\"WY\">Thành phố</option><option value=\"AL\">Tỉnh</option> 
\t\t\t\t\t\t\t\t\t  <option value=\"WY\">Thành phố</option><option value=\"AL\">Tỉnh</option> 
\t\t\t\t\t\t\t\t\t  <option value=\"WY\">Thành phố</option><option value=\"AL\">Tỉnh</option> 
\t\t\t\t\t\t\t\t\t  <option value=\"WY\">Thành phố</option>
\t\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>\t
\t\t\t\t\t</div>\t\t\t\t\t
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t</div>
</section>
 ", "F:\\OCTOBERCMS\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaydangtin/default.htm", "");
    }
}
