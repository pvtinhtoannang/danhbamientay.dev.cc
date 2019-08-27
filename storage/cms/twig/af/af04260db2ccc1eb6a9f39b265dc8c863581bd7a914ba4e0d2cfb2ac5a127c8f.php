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
\t\t\t\t<form data-request=\"onSave\" data-request-validate data-request-flash class=\"postform\" enctype='multipart/form-data'>
\t\t\t\t\t<div class=\"row\">
\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t\t  <div class=\"form-group\">
\t\t\t\t\t\t\t    <label for=\"category\">Chọn danh mục: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn vui lòng chọn vào danh mục, các loại hình tương ứng sẽ hiển thị vào ô loại hình/địa điểm \"></span></label>
\t\t\t\t\t\t\t     <select class=\"category input-dbmt\" id=\"category\" name=\"category\">
\t\t\t\t\t\t\t     \t";
        // line 23
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["category_all"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["category"]) {
            // line 24
            echo "\t\t\t\t\t\t\t\t  \t\t<option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["category"], "id", [], "any", false, false, false, 24), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["category"], "name", [], "any", false, false, false, 24), "html", null, true);
            echo "</option> 
\t\t\t\t\t\t\t\t  \t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['category'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 26
        echo "\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t  </div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t  \t<div class=\"form-group\">
\t\t\t\t\t\t    \t<label for=\"locations\">Chọn loại hình/địa điểm: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Dưới đây là các loại hình thuộc các danh mục bạn vừa chọn\"></span></label>
\t\t\t\t\t\t     \t<select class=\"location_id input-dbmt\" name=\"location_id\" id=\"location_id\">
\t\t\t\t\t\t     \t\t";
        // line 33
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["propertyType"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["property"]) {
            // line 34
            echo "\t\t\t\t\t\t\t\t  \t\t<option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["property"], "id", [], "any", false, false, false, 34), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["property"], "name", [], "any", false, false, false, 34), "html", null, true);
            echo "</option> 
\t\t\t\t\t\t\t\t  \t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['property'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 36
        echo "\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class=\"col-xs-12\">
\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t    \t<label for=\"category\">Tiêu đề tin đăng:  <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Tiêu đề tin đăng phải từ 8 - 255 kí tự, bạn vui lòng nhập các ký tự hợp lệ để bài đăng của bạn được sự quan tâm nhiều nhất\"></span></label>
\t\t\t\t\t\t     \t<input type=\"text\" placeholder=\"Nhập tiêu đề tin đăng\" name=\"title\" class=\"input-dbmt\">
\t\t\t\t\t\t     \t<span class=\"error-label\" data-validate-for=\"title\"></span>
\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t
\t\t\t\t\t\t<div class=\"col-xs-12\">
\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t    \t<label for=\"description\">Mô tả tin đăng: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Nhập mô tả tin đăng của bạn, phần này sẽ mô tả sơ lượt về tin đăng của bạn để thu hút người xem\"></span></label>
\t\t\t\t\t\t     \t<textarea id=\"description\" placeholder=\"Nhập mô tả tin đăng\" name=\"description\" rows=\"5\" class=\"input-dbmt\"></textarea>
\t\t\t\t\t\t     \t<span class=\"error-label\" data-validate-for=\"description\"></span>  
\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class=\"col-xs-12\">
\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t    \t<label for=\"content\">Nội dung tin đăng:  <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn vui lòng nhập nội dung chính của bài đăng\"></span></label>
\t\t\t\t\t\t     \t<textarea id=\"content\" placeholder=\"Nhập nội dung tin đăng\" name=\"content\" class=\"input-dbmt\"></textarea>  
\t\t\t\t\t\t     \t<span class=\"error-label\" data-validate-for=\"content\"></span>
\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class=\"col-xs-6\">
\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t    \t<label for=\"price\">Nhập giá (đ): <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Giá của tin đăng phải là số nguyên dương, bạn nên nhập đúng mức giá để mọi người có thể tìm bài đăng của bạn chính xác nhất\"></span></label>
\t\t\t\t\t\t     \t<input type=\"number\" id=\"price\" placeholder=\"Nhập giá\" name=\"price\" min=\"0\" value=\"0\" class=\"input-dbmt\">
\t\t\t\t\t\t     \t<span class=\"error-label\" data-validate-for=\"price\"></span>
\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t</div>

\t\t\t\t\t\t<div class=\"col-xs-6\">
\t\t\t\t\t\t\t<div class=\"form-group\" id=\"area-box\">
\t\t\t\t\t\t    \t<label for=\"area\">Diện tích (m <sup> <small>2</small> </sup>): <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Nếu bạn đang chọn chuyên mục bất động sản, vui lòng nhập diện tích bất động sản bạn đang sở hữu để mọi người có thể tìm kiếm nhanh nhất\"></span></label>
\t\t\t\t\t\t     \t<input type=\"number\" min=\"0\" value=\"0\" placeholder=\"Diện tích\" name=\"area\" id=\"area\" class=\"input-dbmt\">
\t\t\t\t\t\t     \t<span class=\"error-label\" data-validate-for=\"area\"></span>
\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class=\"col-xs-12\">
\t\t\t\t\t\t\t<div class=\"row\">
\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-md-12\">
\t\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t\t    \t<label for=\"category\">Thêm ảnh: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn có thể thêm tối đa 5 ảnh cho bài đăng, mỗi ảnh tối đa 2MB và bạn có thể đăng các định dạng ảnh như: 'jpg', 'jpeg', 'png', 'gif', 'bmp'\"></span>
\t\t\t\t\t\t\t\t    \t\t<small></small></label>
\t\t\t\t\t\t\t\t     \t    <input id=\"uploader\" type=\"file\" name=\"files\">
\t\t\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">
\t\t\t\t\t\t\t\t\t<div class=\"row\">
\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"address\">Nhập địa chỉ: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn vui lòng nhập địa chỉ là số phòng, số nhà tên đường hoặc khu bạn ở sau đó chọn tiếp vào phần tỉnh thành phố, quận huyện, phường xã\"></span></label>
\t\t\t\t\t\t\t\t\t     \t\t<input type=\"text\" placeholder=\"42 đường B23, Khu Dân Cư 91B ....\" class=\"input-dbmt\" name=\"address\" id=\"address\" >
\t\t\t\t\t\t\t\t     \t\t</div>
\t\t\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t\t\t\t    \t<label for=\"province\">Chọn Tỉnh/Thành phố</label> <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn chọn Tỉnh / Thành phố sau đó Quận / Huyện tương ứng sẽ xuất hiện bên dưới\"></span>
\t\t\t\t\t\t\t\t\t\t     \t<select class=\"input-dbmt province\" id=\"province\" name=\"province\">
\t\t\t\t\t\t\t\t\t\t     \t\t<option value=\"-1\">Chọn Tỉnh/Thành phố</option>
\t\t\t\t\t\t\t\t\t\t     \t\t";
        // line 99
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["provinces"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["province"]) {
            // line 100
            echo "\t\t\t\t\t\t\t\t\t\t\t\t  \t\t<option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["province"], "id", [], "any", false, false, false, 100), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["province"], "name", [], "any", false, false, false, 100), "html", null, true);
            echo "</option> 
\t\t\t\t\t\t\t\t\t\t\t\t  \t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['province'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 102
        echo "\t\t\t\t\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t\t\t\t    \t<label for=\"district\">Chọn Quận/Huyện</label> <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn chọn Quận/ huyện sau đó Phường xã tương ứng sẽ xuất hiện bên dưới\"></span>
\t\t\t\t\t\t\t\t\t\t     \t<select class=\"district input-dbmt\" id=\"district\" name=\"district\">
\t\t\t\t\t\t\t\t\t\t     \t\t<option value=\"-1\">Chọn Quận / Huyện</option>
\t\t\t\t\t\t\t\t\t\t     \t\t";
        // line 110
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["districts"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["district"]) {
            // line 111
            echo "\t\t\t\t\t\t\t\t\t\t\t\t  \t\t<option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["district"], "id", [], "any", false, false, false, 111), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["district"], "name", [], "any", false, false, false, 111), "html", null, true);
            echo "</option> 
\t\t\t\t\t\t\t\t\t\t\t\t  \t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['district'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 113
        echo "\t\t\t\t\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t\t\t\t    \t<label for=\"ward\">Chọn Phường/Xã/Thị trấn</label>
\t\t\t\t\t\t\t\t\t\t     \t<select class=\"ward input-dbmt\" id=\"ward\" name=\"ward\">
\t\t\t\t\t\t\t\t\t\t     \t\t<option value=\"-1\">Chọn Phường / Xã </option>
\t\t\t\t\t\t\t\t\t\t     \t\t";
        // line 121
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["wards"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["ward"]) {
            // line 122
            echo "\t\t\t\t\t\t\t\t\t\t\t\t  \t\t<option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["ward"], "id", [], "any", false, false, false, 122), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["ward"], "name", [], "any", false, false, false, 122), "html", null, true);
            echo "</option> 
\t\t\t\t\t\t\t\t\t\t\t\t  \t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['ward'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 124
        echo "\t\t\t\t\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t\t\t\t\t</div>\t
\t\t\t\t\t\t\t\t\t</div> 
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>\t
\t\t\t\t\t\t</div>\t
\t\t\t\t\t\t<div class=\"col-xs-12 text-center\">
\t\t\t\t\t\t\t<button type=\"submit\" class=\"button-bdmt \" data-attach-loading>
\t\t\t\t\t\t\t\tĐăng tin
\t\t\t\t\t\t\t</button>\t
\t\t\t\t\t\t</div>\t\t\t\t

\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t
\t\t\t\t</form>
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

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  228 => 124,  217 => 122,  213 => 121,  203 => 113,  192 => 111,  188 => 110,  178 => 102,  167 => 100,  163 => 99,  98 => 36,  87 => 34,  83 => 33,  74 => 26,  63 => 24,  59 => 23,  35 => 1,);
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
\t\t\t\t<form data-request=\"onSave\" data-request-validate data-request-flash class=\"postform\" enctype='multipart/form-data'>
\t\t\t\t\t<div class=\"row\">
\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t\t  <div class=\"form-group\">
\t\t\t\t\t\t\t    <label for=\"category\">Chọn danh mục: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn vui lòng chọn vào danh mục, các loại hình tương ứng sẽ hiển thị vào ô loại hình/địa điểm \"></span></label>
\t\t\t\t\t\t\t     <select class=\"category input-dbmt\" id=\"category\" name=\"category\">
\t\t\t\t\t\t\t     \t{% for category in category_all %}
\t\t\t\t\t\t\t\t  \t\t<option value=\"{{ category.id }}\">{{ category.name }}</option> 
\t\t\t\t\t\t\t\t  \t{% endfor %}
\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t  </div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t  \t<div class=\"form-group\">
\t\t\t\t\t\t    \t<label for=\"locations\">Chọn loại hình/địa điểm: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Dưới đây là các loại hình thuộc các danh mục bạn vừa chọn\"></span></label>
\t\t\t\t\t\t     \t<select class=\"location_id input-dbmt\" name=\"location_id\" id=\"location_id\">
\t\t\t\t\t\t     \t\t{% for property in propertyType %}
\t\t\t\t\t\t\t\t  \t\t<option value=\"{{ property.id }}\">{{ property.name }}</option> 
\t\t\t\t\t\t\t\t  \t{% endfor %}
\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class=\"col-xs-12\">
\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t    \t<label for=\"category\">Tiêu đề tin đăng:  <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Tiêu đề tin đăng phải từ 8 - 255 kí tự, bạn vui lòng nhập các ký tự hợp lệ để bài đăng của bạn được sự quan tâm nhiều nhất\"></span></label>
\t\t\t\t\t\t     \t<input type=\"text\" placeholder=\"Nhập tiêu đề tin đăng\" name=\"title\" class=\"input-dbmt\">
\t\t\t\t\t\t     \t<span class=\"error-label\" data-validate-for=\"title\"></span>
\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t
\t\t\t\t\t\t<div class=\"col-xs-12\">
\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t    \t<label for=\"description\">Mô tả tin đăng: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Nhập mô tả tin đăng của bạn, phần này sẽ mô tả sơ lượt về tin đăng của bạn để thu hút người xem\"></span></label>
\t\t\t\t\t\t     \t<textarea id=\"description\" placeholder=\"Nhập mô tả tin đăng\" name=\"description\" rows=\"5\" class=\"input-dbmt\"></textarea>
\t\t\t\t\t\t     \t<span class=\"error-label\" data-validate-for=\"description\"></span>  
\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class=\"col-xs-12\">
\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t    \t<label for=\"content\">Nội dung tin đăng:  <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn vui lòng nhập nội dung chính của bài đăng\"></span></label>
\t\t\t\t\t\t     \t<textarea id=\"content\" placeholder=\"Nhập nội dung tin đăng\" name=\"content\" class=\"input-dbmt\"></textarea>  
\t\t\t\t\t\t     \t<span class=\"error-label\" data-validate-for=\"content\"></span>
\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class=\"col-xs-6\">
\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t    \t<label for=\"price\">Nhập giá (đ): <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Giá của tin đăng phải là số nguyên dương, bạn nên nhập đúng mức giá để mọi người có thể tìm bài đăng của bạn chính xác nhất\"></span></label>
\t\t\t\t\t\t     \t<input type=\"number\" id=\"price\" placeholder=\"Nhập giá\" name=\"price\" min=\"0\" value=\"0\" class=\"input-dbmt\">
\t\t\t\t\t\t     \t<span class=\"error-label\" data-validate-for=\"price\"></span>
\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t</div>

\t\t\t\t\t\t<div class=\"col-xs-6\">
\t\t\t\t\t\t\t<div class=\"form-group\" id=\"area-box\">
\t\t\t\t\t\t    \t<label for=\"area\">Diện tích (m <sup> <small>2</small> </sup>): <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Nếu bạn đang chọn chuyên mục bất động sản, vui lòng nhập diện tích bất động sản bạn đang sở hữu để mọi người có thể tìm kiếm nhanh nhất\"></span></label>
\t\t\t\t\t\t     \t<input type=\"number\" min=\"0\" value=\"0\" placeholder=\"Diện tích\" name=\"area\" id=\"area\" class=\"input-dbmt\">
\t\t\t\t\t\t     \t<span class=\"error-label\" data-validate-for=\"area\"></span>
\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class=\"col-xs-12\">
\t\t\t\t\t\t\t<div class=\"row\">
\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-md-12\">
\t\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t\t    \t<label for=\"category\">Thêm ảnh: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn có thể thêm tối đa 5 ảnh cho bài đăng, mỗi ảnh tối đa 2MB và bạn có thể đăng các định dạng ảnh như: 'jpg', 'jpeg', 'png', 'gif', 'bmp'\"></span>
\t\t\t\t\t\t\t\t    \t\t<small></small></label>
\t\t\t\t\t\t\t\t     \t    <input id=\"uploader\" type=\"file\" name=\"files\">
\t\t\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">
\t\t\t\t\t\t\t\t\t<div class=\"row\">
\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"address\">Nhập địa chỉ: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn vui lòng nhập địa chỉ là số phòng, số nhà tên đường hoặc khu bạn ở sau đó chọn tiếp vào phần tỉnh thành phố, quận huyện, phường xã\"></span></label>
\t\t\t\t\t\t\t\t\t     \t\t<input type=\"text\" placeholder=\"42 đường B23, Khu Dân Cư 91B ....\" class=\"input-dbmt\" name=\"address\" id=\"address\" >
\t\t\t\t\t\t\t\t     \t\t</div>
\t\t\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t\t\t\t    \t<label for=\"province\">Chọn Tỉnh/Thành phố</label> <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn chọn Tỉnh / Thành phố sau đó Quận / Huyện tương ứng sẽ xuất hiện bên dưới\"></span>
\t\t\t\t\t\t\t\t\t\t     \t<select class=\"input-dbmt province\" id=\"province\" name=\"province\">
\t\t\t\t\t\t\t\t\t\t     \t\t<option value=\"-1\">Chọn Tỉnh/Thành phố</option>
\t\t\t\t\t\t\t\t\t\t     \t\t{% for province in provinces %}
\t\t\t\t\t\t\t\t\t\t\t\t  \t\t<option value=\"{{ province.id }}\">{{ province.name }}</option> 
\t\t\t\t\t\t\t\t\t\t\t\t  \t{% endfor %}
\t\t\t\t\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t\t\t\t    \t<label for=\"district\">Chọn Quận/Huyện</label> <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn chọn Quận/ huyện sau đó Phường xã tương ứng sẽ xuất hiện bên dưới\"></span>
\t\t\t\t\t\t\t\t\t\t     \t<select class=\"district input-dbmt\" id=\"district\" name=\"district\">
\t\t\t\t\t\t\t\t\t\t     \t\t<option value=\"-1\">Chọn Quận / Huyện</option>
\t\t\t\t\t\t\t\t\t\t     \t\t{% for district in districts %}
\t\t\t\t\t\t\t\t\t\t\t\t  \t\t<option value=\"{{ district.id }}\">{{ district.name }}</option> 
\t\t\t\t\t\t\t\t\t\t\t\t  \t{% endfor %}
\t\t\t\t\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t\t\t\t    \t<label for=\"ward\">Chọn Phường/Xã/Thị trấn</label>
\t\t\t\t\t\t\t\t\t\t     \t<select class=\"ward input-dbmt\" id=\"ward\" name=\"ward\">
\t\t\t\t\t\t\t\t\t\t     \t\t<option value=\"-1\">Chọn Phường / Xã </option>
\t\t\t\t\t\t\t\t\t\t     \t\t{% for ward in wards %}
\t\t\t\t\t\t\t\t\t\t\t\t  \t\t<option value=\"{{ ward.id }}\">{{ ward.name }}</option> 
\t\t\t\t\t\t\t\t\t\t\t\t  \t{% endfor %}
\t\t\t\t\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t\t\t\t\t</div>\t
\t\t\t\t\t\t\t\t\t</div> 
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>\t
\t\t\t\t\t\t</div>\t
\t\t\t\t\t\t<div class=\"col-xs-12 text-center\">
\t\t\t\t\t\t\t<button type=\"submit\" class=\"button-bdmt \" data-attach-loading>
\t\t\t\t\t\t\t\tĐăng tin
\t\t\t\t\t\t\t</button>\t
\t\t\t\t\t\t</div>\t\t\t\t

\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t
\t\t\t\t</form>
\t\t\t</div>
\t\t</div>
\t</div>
</section>
 ", "F:\\OCTOBERCMS\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaydangtin/default.htm", "");
    }
}
