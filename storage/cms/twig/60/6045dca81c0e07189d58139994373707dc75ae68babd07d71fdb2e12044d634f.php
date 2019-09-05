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

/* C:\Program Files (x86)\Ampps\www\dev\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaychinhsuatindang/default.htm */
class __TwigTemplate_c83f6386d96420bbca867af729b7d4bc1dfccd7498f333222de1387fd88fafc6 extends \Twig\Template
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
        echo "<h2 class=\"text-dark text-center title-form\">CẬP NHẬT TIN ĐĂNG</h2>
\t<input type=\"hidden\" name=\"\" id=\"gallery_images_url\"  
\tvalue=\"";
        // line 3
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "images_gallery", [], "any", false, false, false, 3));
        $context['loop'] = [
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        ];
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["image"]) {
            echo " ";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["image"], "path", [], "any", false, false, false, 3), "html", null, true);
            if ((twig_get_attribute($this->env, $this->source, $context["loop"], "last", [], "any", false, false, false, 3) == false)) {
                echo ",";
            }
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['image'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        echo "\">
\t<input type=\"hidden\" name=\"\" id=\"gallery_images_file_name\"  
\tvalue=\"";
        // line 5
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "images_gallery", [], "any", false, false, false, 5));
        $context['loop'] = [
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        ];
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["image"]) {
            echo " ";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["image"], "file_name", [], "any", false, false, false, 5), "html", null, true);
            if ((twig_get_attribute($this->env, $this->source, $context["loop"], "last", [], "any", false, false, false, 5) == false)) {
                echo ",";
            }
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['image'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        echo "\">
\t<input type=\"hidden\" name=\"\" id=\"gallery_images_type\"  
\tvalue=\"";
        // line 7
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "images_gallery", [], "any", false, false, false, 7));
        $context['loop'] = [
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        ];
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["image"]) {
            echo " ";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["image"], "content_type", [], "any", false, false, false, 7), "html", null, true);
            if ((twig_get_attribute($this->env, $this->source, $context["loop"], "last", [], "any", false, false, false, 7) == false)) {
                echo ",";
            }
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['image'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        echo "\">
\t<form data-request=\"onSave\" data-request-validate data-request-flash  data-request-files class=\"postform\" data-request-success=\"formSubmit();\">   
\t\t";
        // line 9
        echo call_user_func_array($this->env->getFunction('form_open')->getCallable(), ["open", ["request" => "onSave", "files" => true]]);
        echo "
\t\t<div class=\"row\">
\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t  <div class=\"form-group\">
\t\t\t\t    <label for=\"category\">Chọn danh mục: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn vui lòng chọn vào danh mục, các loại hình tương ứng sẽ hiển thị vào ô loại hình/địa điểm \"></span></label>
\t\t\t\t     <select class=\"category input-dbmt\" id=\"category\" name=\"category\">
\t\t\t\t     \t";
        // line 15
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["category_all"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["category"]) {
            // line 16
            echo "\t\t\t\t\t  \t\t<option ";
            if ((twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "category_id", [], "any", false, false, false, 16) == twig_get_attribute($this->env, $this->source, $context["category"], "id", [], "any", false, false, false, 16))) {
                echo " selected=\"selected\" ";
            }
            echo " value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["category"], "id", [], "any", false, false, false, 16), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["category"], "name", [], "any", false, false, false, 16), "html", null, true);
            echo "</option> 
\t\t\t\t\t  \t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['category'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 17
        echo "  
\t\t\t\t\t</select>
\t\t\t\t  </div>
\t\t\t</div> 
\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t  \t<div class=\"form-group\">
\t\t\t    \t<label for=\"locations\">Chọn loại hình/địa điểm: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Dưới đây là các loại hình thuộc các danh mục bạn vừa chọn\"></span></label>
\t\t\t     \t<select class=\"location_id input-dbmt\" name=\"location_id\" id=\"location_id\"> 
\t\t\t     \t\t";
        // line 25
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["propertyType"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["property"]) {
            // line 26
            echo "\t\t\t\t\t  \t\t<option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["property"], "id", [], "any", false, false, false, 26), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["property"], "name", [], "any", false, false, false, 26), "html", null, true);
            echo "</option> 
\t\t\t\t\t  \t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['property'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 28
        echo "\t\t\t\t\t</select>
\t\t\t  \t</div>
\t\t\t</div>
\t\t\t<div class=\"col-xs-12\">
\t\t\t\t<div class=\"form-group\">
\t\t\t    \t<label for=\"category\">Tiêu đề tin đăng:  <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Tiêu đề tin đăng phải từ 8 - 255 kí tự, bạn vui lòng nhập các ký tự hợp lệ để bài đăng của bạn được sự quan tâm nhiều nhất\"></span></label>
\t\t\t     \t<input type=\"text\" placeholder=\"Nhập tiêu đề tin đăng\" name=\"title\" class=\"input-dbmt\" value=\"";
        // line 34
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "title", [], "any", false, false, false, 34), "html", null, true);
        echo "\">
\t\t\t     \t<span class=\"error-label\" data-validate-for=\"title\"></span>
\t\t\t  \t</div>
\t\t\t</div>
\t\t\t
\t\t\t<div class=\"col-xs-12\">
\t\t\t\t<div class=\"form-group\">
\t\t\t    \t<label for=\"description\">Mô tả tin đăng: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Nhập mô tả tin đăng của bạn, phần này sẽ mô tả sơ lượt về tin đăng của bạn để thu hút người xem\"></span></label>
\t\t\t     \t<textarea id=\"description\" placeholder=\"Nhập mô tả tin đăng\" name=\"description\" rows=\"5\" class=\"input-dbmt\">";
        // line 42
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "description", [], "any", false, false, false, 42), "html", null, true);
        echo "</textarea>
\t\t\t     \t<span class=\"error-label\" data-validate-for=\"description\"></span>  
\t\t\t  \t</div>
\t\t\t</div>
\t\t\t<div class=\"col-xs-12\">
\t\t\t\t<div class=\"form-group\">
\t\t\t    \t<label for=\"content\">Nội dung tin đăng:  <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn vui lòng nhập nội dung chính của bài đăng\"></span></label>
\t\t\t     \t<textarea id=\"content\" placeholder=\"Nhập nội dung tin đăng\" name=\"content\" class=\"input-dbmt\">";
        // line 49
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "content", [], "any", false, false, false, 49), "html", null, true);
        echo "</textarea>  
\t\t\t     \t<span class=\"error-label\" data-validate-for=\"content\"></span>
\t\t\t  \t</div>
\t\t\t</div>
\t\t\t<div class=\"col-xs-6\">
\t\t\t\t<div class=\"form-group\">
\t\t\t    \t<label for=\"price\">Nhập giá (đ): <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Giá của tin đăng phải là số nguyên dương, bạn nên nhập đúng mức giá để mọi người có thể tìm bài đăng của bạn chính xác nhất\"></span></label>
\t\t\t     \t<input type=\"number\" id=\"price\" placeholder=\"Nhập giá\" name=\"price\" min=\"0\" value=\"";
        // line 56
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "price", [], "any", false, false, false, 56), "html", null, true);
        echo "\" class=\"input-dbmt\">
\t\t\t     \t<span class=\"error-label\" data-validate-for=\"price\"></span>
\t\t\t  \t</div>
\t\t\t</div>

\t\t\t<div class=\"col-xs-6\">
\t\t\t\t<div class=\"form-group\" id=\"area-box\" ";
        // line 62
        if ((twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "category_id", [], "any", false, false, false, 62) != 1)) {
            echo " style=\"opacity: 0\" ";
        } else {
            echo " style=\"opacity: 1\" ";
        }
        echo ">
\t\t\t    \t<label for=\"area\">Diện tích (m <sup> <small>2</small> </sup>): <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Nếu bạn đang chọn chuyên mục bất động sản, vui lòng nhập diện tích bất động sản bạn đang sở hữu để mọi người có thể tìm kiếm nhanh nhất\"></span></label>
\t\t\t     \t<input type=\"number\" min=\"0\" value=\"";
        // line 64
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "area", [], "any", false, false, false, 64), "html", null, true);
        echo "\" placeholder=\"Diện tích\" name=\"area\" id=\"area\" class=\"input-dbmt\">
\t\t\t     \t<span class=\"error-label\" data-validate-for=\"area\"></span>
\t\t\t  \t</div>
\t\t\t</div>
\t\t\t<div class=\"col-xs-12\">
\t\t\t\t<div class=\"row\">
\t\t\t\t\t<div class=\"col-xs-12 col-md-12\">
\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t    \t<label for=\"category\">Thêm ảnh: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn có thể thêm tối đa 5 ảnh cho bài đăng, mỗi ảnh tối đa 2MB và bạn có thể đăng các định dạng ảnh như: 'jpg', 'jpeg', 'png', 'gif', 'bmp'.\"></span>
\t\t\t\t\t    \t\t<small></small></label>
\t\t\t\t\t     \t    <input id=\"uploader\" type=\"file\" name=\"files-images\">
\t\t\t\t\t  \t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"col-xs-12\">
\t\t\t\t\t\t<div class=\"row\">
\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t\t\t<label for=\"address\">Nhập địa chỉ: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn vui lòng nhập địa chỉ là số phòng, số nhà tên đường hoặc khu bạn ở sau đó chọn tiếp vào phần tỉnh thành phố, quận huyện, phường xã\"></span></label>
\t\t\t\t\t\t     \t\t<input type=\"text\" placeholder=\"42 đường B23, Khu Dân Cư 91B ....\" class=\"input-dbmt\" name=\"address\" value=\"";
        // line 82
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "address", [], "any", false, false, false, 82), "html", null, true);
        echo "\" id=\"address\" >
\t\t\t\t\t     \t\t</div>
\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t    \t<label for=\"province\">Chọn Tỉnh/Thành phố</label> <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn chọn Tỉnh / Thành phố sau đó Quận / Huyện tương ứng sẽ xuất hiện bên dưới\"></span>
\t\t\t\t\t\t\t     \t<select class=\"input-dbmt province\" id=\"province\" name=\"province\">
\t\t\t\t\t\t\t     \t\t<option value=\"-1\">Chọn Tỉnh/Thành phố</option>
\t\t\t\t\t\t\t     \t\t";
        // line 91
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["provinces"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["province"]) {
            // line 92
            echo "\t\t\t\t\t\t\t\t\t  \t\t<option ";
            if ((twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "idprovince", [], "any", false, false, false, 92) == twig_get_attribute($this->env, $this->source, $context["province"], "id", [], "any", false, false, false, 92))) {
                echo " selected=\"selected\" ";
            }
            echo " value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["province"], "id", [], "any", false, false, false, 92), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["province"], "name", [], "any", false, false, false, 92), "html", null, true);
            echo "</option> 
\t\t\t\t\t\t\t\t\t  \t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['province'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 94
        echo "\t\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t    \t<label for=\"district\">Chọn Quận/Huyện</label> <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn chọn Quận/ huyện sau đó Phường xã tương ứng sẽ xuất hiện bên dưới\"></span>
\t\t\t\t\t\t\t     \t<select class=\"district input-dbmt\" id=\"district\" name=\"district\">
\t\t\t\t\t\t\t     \t\t<option value=\"-1\">Chọn Quận / Huyện</option>
\t\t\t\t\t\t\t     \t\t";
        // line 102
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["districts"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["district"]) {
            // line 103
            echo "\t\t\t\t\t\t\t\t\t  \t\t<option ";
            if ((twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "iddistrict", [], "any", false, false, false, 103) == twig_get_attribute($this->env, $this->source, $context["district"], "id", [], "any", false, false, false, 103))) {
                echo " selected=\"selected\" ";
            }
            echo " value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["district"], "id", [], "any", false, false, false, 103), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["district"], "name", [], "any", false, false, false, 103), "html", null, true);
            echo "</option> 
\t\t\t\t\t\t\t\t\t  \t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['district'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 105
        echo "\t\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t    \t<label for=\"ward\">Chọn Phường/Xã/Thị trấn</label>
\t\t\t\t\t\t\t     \t<select class=\"ward input-dbmt\" id=\"ward\" name=\"ward\">
\t\t\t\t\t\t\t     \t\t<option value=\"-1\">Chọn Phường / Xã </option>
\t\t\t\t\t\t\t     \t\t";
        // line 113
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["wards"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["ward"]) {
            // line 114
            echo "\t\t\t\t\t\t\t\t\t  \t\t<option ";
            if ((twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "idward", [], "any", false, false, false, 114) == twig_get_attribute($this->env, $this->source, $context["ward"], "id", [], "any", false, false, false, 114))) {
                echo " selected=\"selected\" ";
            }
            echo " value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["ward"], "id", [], "any", false, false, false, 114), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["ward"], "name", [], "any", false, false, false, 114), "html", null, true);
            echo "</option> 
\t\t\t\t\t\t\t\t\t  \t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['ward'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 116
        echo "\t\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t\t</div>\t
\t\t\t\t\t\t</div> 
\t\t\t\t\t</div>
\t\t\t\t</div>\t
\t\t\t</div>\t
\t\t\t<div class=\"col-xs-12 text-center\">
\t\t\t\t<button type=\"submit\" class=\"button-bdmt \" data-attach-loading>
\t\t\t\t\tĐăng tin
\t\t\t\t</button>\t
\t\t\t</div>

\t\t</div>\t
\t\t";
        // line 130
        echo call_user_func_array($this->env->getFunction('form_close')->getCallable(), ["close"]);
        echo "
\t</form>
<script >
\t\$(document).ready(function(){
\t\t\$('input[name=\"files-images\"]').fileuploader({
\t\t\t    extensions: ['jpg', 'jpeg', 'png', 'gif', 'bmp'],
\t\t\t\tchangeInput: ' ',
\t\t\t\tfileMaxSize: 2,
\t\t\t\tlimit: 5,
\t\t\t\tmaxSize: 2,
\t\t\t\ttheme: 'thumbnails',
\t\t\t\tenableApi: true,
\t\t\t\taddMore: true,
\t\t\t\tfiles: [
\t\t\t\t\t";
        // line 144
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "images_gallery", [], "any", false, false, false, 144));
        foreach ($context['_seq'] as $context["_key"] => $context["image"]) {
            // line 145
            echo "\t\t\t\t\t\t{
\t\t\t\t\t\t\tname: '";
            // line 146
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["image"], "file_name", [], "any", false, false, false, 146), "html", null, true);
            echo "',
\t\t\t\t\t\t\ttype: '";
            // line 147
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["image"], "content_type", [], "any", false, false, false, 147), "html", null, true);
            echo "',
\t\t\t\t\t\t\tfile: '";
            // line 148
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["image"], "path", [], "any", false, false, false, 148), "html", null, true);
            echo "'
\t\t\t\t\t\t}, 
\t\t\t\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['image'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 151
        echo "\t\t\t\t],
\t\t\t\tthumbnails: {
\t\t\t\t\tbox: '<div class=\"fileuploader-items\">' +
\t\t\t\t\t\t\t  '<ul class=\"fileuploader-items-list\">' +
\t\t\t\t\t\t\t\t  '<li class=\"fileuploader-thumbnails-input\"><div class=\"fileuploader-thumbnails-input-inner\">+</div></li>' +
\t\t\t\t\t\t\t  '</ul>' +
\t\t\t\t\t\t  '</div>',
\t\t\t\t\titem: '<li class=\"fileuploader-item\">' +
\t\t\t\t\t\t\t   '<div class=\"fileuploader-item-inner\">' +
\t\t\t\t\t\t\t\t   '<div class=\"thumbnail-holder\">\${image}</div>' +
\t\t\t\t\t\t\t\t   '<div class=\"actions-holder\">' +
\t\t\t\t\t\t\t\t   '<a class=\"fileuploader-action fileuploader-action-sort\" title=\"\${captions.sort}\"><i></i></a>' +
\t\t\t\t\t\t\t\t\t\t  '<a class=\"fileuploader-action fileuploader-action-remove\" title=\"\${captions.remove}\"><i class=\"remove\"></i></a>' +
\t\t\t\t\t\t\t\t\t   '<span class=\"fileuploader-action-popup\"></span>' +
\t\t\t\t\t\t\t\t   '</div>' +
\t\t\t\t\t\t\t\t\t  '<div class=\"progress-holder\">\${progressBar}</div>' +
\t\t\t\t\t\t\t   '</div>' +
\t\t\t\t\t\t   '</li>',
\t\t\t\t\titem2: '<li class=\"fileuploader-item\">' +
\t\t\t\t\t\t\t   '<div class=\"fileuploader-item-inner\">' +
\t\t\t\t\t\t\t\t   '<div class=\"thumbnail-holder\">\${image}</div>' +
\t\t\t\t\t\t\t\t   '<div class=\"actions-holder\">' +
\t\t\t\t\t\t\t\t\t\t   '<a class=\"fileuploader-action fileuploader-action-sort\" title=\"\${captions.sort}\"><i></i></a>' +
\t\t\t\t\t\t\t\t\t\t   '<a class=\"fileuploader-action fileuploader-action-remove\" title=\"\${captions.remove}\"><i class=\"remove\"></i></a>' +
\t\t\t\t\t\t\t\t\t\t   '<span class=\"fileuploader-action-popup\"></span>' +
\t\t\t\t\t\t\t\t   '</div>' +
\t\t\t\t\t\t\t   '</div>' +
\t\t\t\t\t\t   '</li>',
\t\t\t\t\tstartImageRenderer: true,
\t\t\t\t\tcanvasImage: false,
\t\t\t\t\t_selectors: {
\t\t\t\t\t\tlist: '.fileuploader-items-list',
\t\t\t\t\t\titem: '.fileuploader-item',
\t\t\t\t\t\tstart: '.fileuploader-action-start',
\t\t\t\t\t\tretry: '.fileuploader-action-retry',
\t\t\t\t\t\tremove: '.fileuploader-action-remove',
\t\t\t\t\t\tsorter: '.fileuploader-action-sort'
\t\t\t\t\t},
\t\t\t\t\tonItemShow: function(item, listEl) {
\t\t\t\t\t\tvar plusInput = listEl.find('.fileuploader-thumbnails-input');
\t\t\t\t\t\t
\t\t\t\t\t\tplusInput.insertAfter(item.html);
\t\t\t\t\t\t
\t\t\t\t\t\tif(item.format == 'image') {
\t\t\t\t\t\t\titem.html.find('.fileuploader-item-icon').hide();
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t},
\t\t\t\tafterRender: function(listEl, parentEl, newInputEl, inputEl) {
\t\t\t\t\tvar plusInput = listEl.find('.fileuploader-thumbnails-input'),
\t\t\t\t\t\tapi = \$.fileuploader.getInstance(inputEl.get(0));
\t\t\t\t
\t\t\t\t\tplusInput.on('click', function() {
\t\t\t\t\t\tapi.open();
\t\t\t\t\t});
\t\t\t\t},
\t\t\t});
\t});
\t


</script>";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaychinhsuatindang/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  427 => 151,  418 => 148,  414 => 147,  410 => 146,  407 => 145,  403 => 144,  386 => 130,  370 => 116,  355 => 114,  351 => 113,  341 => 105,  326 => 103,  322 => 102,  312 => 94,  297 => 92,  293 => 91,  281 => 82,  260 => 64,  251 => 62,  242 => 56,  232 => 49,  222 => 42,  211 => 34,  203 => 28,  192 => 26,  188 => 25,  178 => 17,  163 => 16,  159 => 15,  150 => 9,  113 => 7,  76 => 5,  39 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<h2 class=\"text-dark text-center title-form\">CẬP NHẬT TIN ĐĂNG</h2>
\t<input type=\"hidden\" name=\"\" id=\"gallery_images_url\"  
\tvalue=\"{% for image in post.images_gallery %} {{ image.path}}{% if loop.last == false %}{{ ',' }}{% endif %}{% endfor %}\">
\t<input type=\"hidden\" name=\"\" id=\"gallery_images_file_name\"  
\tvalue=\"{% for image in post.images_gallery %} {{ image.file_name}}{% if loop.last == false %}{{ ',' }}{% endif %}{% endfor %}\">
\t<input type=\"hidden\" name=\"\" id=\"gallery_images_type\"  
\tvalue=\"{% for image in post.images_gallery %} {{ image.content_type}}{% if loop.last == false %}{{ ',' }}{% endif %}{% endfor %}\">
\t<form data-request=\"onSave\" data-request-validate data-request-flash  data-request-files class=\"postform\" data-request-success=\"formSubmit();\">   
\t\t{{ form_open({ request: 'onSave', files: true }) }}
\t\t<div class=\"row\">
\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t  <div class=\"form-group\">
\t\t\t\t    <label for=\"category\">Chọn danh mục: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn vui lòng chọn vào danh mục, các loại hình tương ứng sẽ hiển thị vào ô loại hình/địa điểm \"></span></label>
\t\t\t\t     <select class=\"category input-dbmt\" id=\"category\" name=\"category\">
\t\t\t\t     \t{% for category in category_all %}
\t\t\t\t\t  \t\t<option {% if post.category_id==category.id %} selected=\"selected\" {% endif %} value=\"{{ category.id }}\">{{ category.name }}</option> 
\t\t\t\t\t  \t{% endfor %}  
\t\t\t\t\t</select>
\t\t\t\t  </div>
\t\t\t</div> 
\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t  \t<div class=\"form-group\">
\t\t\t    \t<label for=\"locations\">Chọn loại hình/địa điểm: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Dưới đây là các loại hình thuộc các danh mục bạn vừa chọn\"></span></label>
\t\t\t     \t<select class=\"location_id input-dbmt\" name=\"location_id\" id=\"location_id\"> 
\t\t\t     \t\t{% for property in propertyType %}
\t\t\t\t\t  \t\t<option value=\"{{ property.id }}\">{{ property.name }}</option> 
\t\t\t\t\t  \t{% endfor %}
\t\t\t\t\t</select>
\t\t\t  \t</div>
\t\t\t</div>
\t\t\t<div class=\"col-xs-12\">
\t\t\t\t<div class=\"form-group\">
\t\t\t    \t<label for=\"category\">Tiêu đề tin đăng:  <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Tiêu đề tin đăng phải từ 8 - 255 kí tự, bạn vui lòng nhập các ký tự hợp lệ để bài đăng của bạn được sự quan tâm nhiều nhất\"></span></label>
\t\t\t     \t<input type=\"text\" placeholder=\"Nhập tiêu đề tin đăng\" name=\"title\" class=\"input-dbmt\" value=\"{{ post.title }}\">
\t\t\t     \t<span class=\"error-label\" data-validate-for=\"title\"></span>
\t\t\t  \t</div>
\t\t\t</div>
\t\t\t
\t\t\t<div class=\"col-xs-12\">
\t\t\t\t<div class=\"form-group\">
\t\t\t    \t<label for=\"description\">Mô tả tin đăng: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Nhập mô tả tin đăng của bạn, phần này sẽ mô tả sơ lượt về tin đăng của bạn để thu hút người xem\"></span></label>
\t\t\t     \t<textarea id=\"description\" placeholder=\"Nhập mô tả tin đăng\" name=\"description\" rows=\"5\" class=\"input-dbmt\">{{ post.description }}</textarea>
\t\t\t     \t<span class=\"error-label\" data-validate-for=\"description\"></span>  
\t\t\t  \t</div>
\t\t\t</div>
\t\t\t<div class=\"col-xs-12\">
\t\t\t\t<div class=\"form-group\">
\t\t\t    \t<label for=\"content\">Nội dung tin đăng:  <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn vui lòng nhập nội dung chính của bài đăng\"></span></label>
\t\t\t     \t<textarea id=\"content\" placeholder=\"Nhập nội dung tin đăng\" name=\"content\" class=\"input-dbmt\">{{ post.content }}</textarea>  
\t\t\t     \t<span class=\"error-label\" data-validate-for=\"content\"></span>
\t\t\t  \t</div>
\t\t\t</div>
\t\t\t<div class=\"col-xs-6\">
\t\t\t\t<div class=\"form-group\">
\t\t\t    \t<label for=\"price\">Nhập giá (đ): <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Giá của tin đăng phải là số nguyên dương, bạn nên nhập đúng mức giá để mọi người có thể tìm bài đăng của bạn chính xác nhất\"></span></label>
\t\t\t     \t<input type=\"number\" id=\"price\" placeholder=\"Nhập giá\" name=\"price\" min=\"0\" value=\"{{ post.price }}\" class=\"input-dbmt\">
\t\t\t     \t<span class=\"error-label\" data-validate-for=\"price\"></span>
\t\t\t  \t</div>
\t\t\t</div>

\t\t\t<div class=\"col-xs-6\">
\t\t\t\t<div class=\"form-group\" id=\"area-box\" {% if post.category_id != 1 %} style=\"opacity: 0\" {% else %} style=\"opacity: 1\" {% endif %}>
\t\t\t    \t<label for=\"area\">Diện tích (m <sup> <small>2</small> </sup>): <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Nếu bạn đang chọn chuyên mục bất động sản, vui lòng nhập diện tích bất động sản bạn đang sở hữu để mọi người có thể tìm kiếm nhanh nhất\"></span></label>
\t\t\t     \t<input type=\"number\" min=\"0\" value=\"{{ post.area }}\" placeholder=\"Diện tích\" name=\"area\" id=\"area\" class=\"input-dbmt\">
\t\t\t     \t<span class=\"error-label\" data-validate-for=\"area\"></span>
\t\t\t  \t</div>
\t\t\t</div>
\t\t\t<div class=\"col-xs-12\">
\t\t\t\t<div class=\"row\">
\t\t\t\t\t<div class=\"col-xs-12 col-md-12\">
\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t    \t<label for=\"category\">Thêm ảnh: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn có thể thêm tối đa 5 ảnh cho bài đăng, mỗi ảnh tối đa 2MB và bạn có thể đăng các định dạng ảnh như: 'jpg', 'jpeg', 'png', 'gif', 'bmp'.\"></span>
\t\t\t\t\t    \t\t<small></small></label>
\t\t\t\t\t     \t    <input id=\"uploader\" type=\"file\" name=\"files-images\">
\t\t\t\t\t  \t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"col-xs-12\">
\t\t\t\t\t\t<div class=\"row\">
\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t\t\t<label for=\"address\">Nhập địa chỉ: <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn vui lòng nhập địa chỉ là số phòng, số nhà tên đường hoặc khu bạn ở sau đó chọn tiếp vào phần tỉnh thành phố, quận huyện, phường xã\"></span></label>
\t\t\t\t\t\t     \t\t<input type=\"text\" placeholder=\"42 đường B23, Khu Dân Cư 91B ....\" class=\"input-dbmt\" name=\"address\" value=\"{{ post.address }}\" id=\"address\" >
\t\t\t\t\t     \t\t</div>
\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t    \t<label for=\"province\">Chọn Tỉnh/Thành phố</label> <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn chọn Tỉnh / Thành phố sau đó Quận / Huyện tương ứng sẽ xuất hiện bên dưới\"></span>
\t\t\t\t\t\t\t     \t<select class=\"input-dbmt province\" id=\"province\" name=\"province\">
\t\t\t\t\t\t\t     \t\t<option value=\"-1\">Chọn Tỉnh/Thành phố</option>
\t\t\t\t\t\t\t     \t\t{% for province in provinces %}
\t\t\t\t\t\t\t\t\t  \t\t<option {% if post.idprovince == province.id %} selected=\"selected\" {% endif %} value=\"{{ province.id }}\">{{ province.name }}</option> 
\t\t\t\t\t\t\t\t\t  \t{% endfor %}
\t\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t    \t<label for=\"district\">Chọn Quận/Huyện</label> <span class=\"fa fa-question-circle text-primary\" data-toggle=\"tooltip\" title=\"Bạn chọn Quận/ huyện sau đó Phường xã tương ứng sẽ xuất hiện bên dưới\"></span>
\t\t\t\t\t\t\t     \t<select class=\"district input-dbmt\" id=\"district\" name=\"district\">
\t\t\t\t\t\t\t     \t\t<option value=\"-1\">Chọn Quận / Huyện</option>
\t\t\t\t\t\t\t     \t\t{% for district in districts %}
\t\t\t\t\t\t\t\t\t  \t\t<option {% if post.iddistrict == district.id %} selected=\"selected\" {% endif %} value=\"{{ district.id }}\">{{ district.name }}</option> 
\t\t\t\t\t\t\t\t\t  \t{% endfor %}
\t\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\">
\t\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t    \t<label for=\"ward\">Chọn Phường/Xã/Thị trấn</label>
\t\t\t\t\t\t\t     \t<select class=\"ward input-dbmt\" id=\"ward\" name=\"ward\">
\t\t\t\t\t\t\t     \t\t<option value=\"-1\">Chọn Phường / Xã </option>
\t\t\t\t\t\t\t     \t\t{% for ward in wards %}
\t\t\t\t\t\t\t\t\t  \t\t<option {% if post.idward == ward.id %} selected=\"selected\" {% endif %} value=\"{{ ward.id }}\">{{ ward.name }}</option> 
\t\t\t\t\t\t\t\t\t  \t{% endfor %}
\t\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t  \t</div>
\t\t\t\t\t\t\t</div>\t
\t\t\t\t\t\t</div> 
\t\t\t\t\t</div>
\t\t\t\t</div>\t
\t\t\t</div>\t
\t\t\t<div class=\"col-xs-12 text-center\">
\t\t\t\t<button type=\"submit\" class=\"button-bdmt \" data-attach-loading>
\t\t\t\t\tĐăng tin
\t\t\t\t</button>\t
\t\t\t</div>

\t\t</div>\t
\t\t{{ form_close() }}
\t</form>
<script >
\t\$(document).ready(function(){
\t\t\$('input[name=\"files-images\"]').fileuploader({
\t\t\t    extensions: ['jpg', 'jpeg', 'png', 'gif', 'bmp'],
\t\t\t\tchangeInput: ' ',
\t\t\t\tfileMaxSize: 2,
\t\t\t\tlimit: 5,
\t\t\t\tmaxSize: 2,
\t\t\t\ttheme: 'thumbnails',
\t\t\t\tenableApi: true,
\t\t\t\taddMore: true,
\t\t\t\tfiles: [
\t\t\t\t\t{% for image in post.images_gallery %}
\t\t\t\t\t\t{
\t\t\t\t\t\t\tname: '{{ image.file_name}}',
\t\t\t\t\t\t\ttype: '{{ image.content_type}}',
\t\t\t\t\t\t\tfile: '{{ image.path}}'
\t\t\t\t\t\t}, 
\t\t\t\t\t{% endfor %}
\t\t\t\t],
\t\t\t\tthumbnails: {
\t\t\t\t\tbox: '<div class=\"fileuploader-items\">' +
\t\t\t\t\t\t\t  '<ul class=\"fileuploader-items-list\">' +
\t\t\t\t\t\t\t\t  '<li class=\"fileuploader-thumbnails-input\"><div class=\"fileuploader-thumbnails-input-inner\">+</div></li>' +
\t\t\t\t\t\t\t  '</ul>' +
\t\t\t\t\t\t  '</div>',
\t\t\t\t\titem: '<li class=\"fileuploader-item\">' +
\t\t\t\t\t\t\t   '<div class=\"fileuploader-item-inner\">' +
\t\t\t\t\t\t\t\t   '<div class=\"thumbnail-holder\">\${image}</div>' +
\t\t\t\t\t\t\t\t   '<div class=\"actions-holder\">' +
\t\t\t\t\t\t\t\t   '<a class=\"fileuploader-action fileuploader-action-sort\" title=\"\${captions.sort}\"><i></i></a>' +
\t\t\t\t\t\t\t\t\t\t  '<a class=\"fileuploader-action fileuploader-action-remove\" title=\"\${captions.remove}\"><i class=\"remove\"></i></a>' +
\t\t\t\t\t\t\t\t\t   '<span class=\"fileuploader-action-popup\"></span>' +
\t\t\t\t\t\t\t\t   '</div>' +
\t\t\t\t\t\t\t\t\t  '<div class=\"progress-holder\">\${progressBar}</div>' +
\t\t\t\t\t\t\t   '</div>' +
\t\t\t\t\t\t   '</li>',
\t\t\t\t\titem2: '<li class=\"fileuploader-item\">' +
\t\t\t\t\t\t\t   '<div class=\"fileuploader-item-inner\">' +
\t\t\t\t\t\t\t\t   '<div class=\"thumbnail-holder\">\${image}</div>' +
\t\t\t\t\t\t\t\t   '<div class=\"actions-holder\">' +
\t\t\t\t\t\t\t\t\t\t   '<a class=\"fileuploader-action fileuploader-action-sort\" title=\"\${captions.sort}\"><i></i></a>' +
\t\t\t\t\t\t\t\t\t\t   '<a class=\"fileuploader-action fileuploader-action-remove\" title=\"\${captions.remove}\"><i class=\"remove\"></i></a>' +
\t\t\t\t\t\t\t\t\t\t   '<span class=\"fileuploader-action-popup\"></span>' +
\t\t\t\t\t\t\t\t   '</div>' +
\t\t\t\t\t\t\t   '</div>' +
\t\t\t\t\t\t   '</li>',
\t\t\t\t\tstartImageRenderer: true,
\t\t\t\t\tcanvasImage: false,
\t\t\t\t\t_selectors: {
\t\t\t\t\t\tlist: '.fileuploader-items-list',
\t\t\t\t\t\titem: '.fileuploader-item',
\t\t\t\t\t\tstart: '.fileuploader-action-start',
\t\t\t\t\t\tretry: '.fileuploader-action-retry',
\t\t\t\t\t\tremove: '.fileuploader-action-remove',
\t\t\t\t\t\tsorter: '.fileuploader-action-sort'
\t\t\t\t\t},
\t\t\t\t\tonItemShow: function(item, listEl) {
\t\t\t\t\t\tvar plusInput = listEl.find('.fileuploader-thumbnails-input');
\t\t\t\t\t\t
\t\t\t\t\t\tplusInput.insertAfter(item.html);
\t\t\t\t\t\t
\t\t\t\t\t\tif(item.format == 'image') {
\t\t\t\t\t\t\titem.html.find('.fileuploader-item-icon').hide();
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t},
\t\t\t\tafterRender: function(listEl, parentEl, newInputEl, inputEl) {
\t\t\t\t\tvar plusInput = listEl.find('.fileuploader-thumbnails-input'),
\t\t\t\t\t\tapi = \$.fileuploader.getInstance(inputEl.get(0));
\t\t\t\t
\t\t\t\t\tplusInput.on('click', function() {
\t\t\t\t\t\tapi.open();
\t\t\t\t\t});
\t\t\t\t},
\t\t\t});
\t});
\t


</script>", "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientaychinhsuatindang/default.htm", "");
    }
}
