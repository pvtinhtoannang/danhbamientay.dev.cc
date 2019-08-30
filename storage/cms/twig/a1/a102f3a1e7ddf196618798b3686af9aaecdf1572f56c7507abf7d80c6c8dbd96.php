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

/* C:\Program Files (x86)\Ampps\www\dev\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayinfopost/default.htm */
class __TwigTemplate_06693a67632faaabf7612f479f65403af7b2c3a3c620165d833662dc52c2c16b extends \Twig\Template
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
        echo "<section class=\"pvtinh_dbmt_dangtin_thongtintindang\">
    <div class=\"container\">
        <div class=\"row\">
            <div class=\"content__post\">
                <div class=\"col-xs-12 col-md-6\">
                    <div class=\"gallery__post\">
                        <div class=\"gallery__main slider-for\">
                            ";
        // line 8
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["infopost"] ?? null), "images_gallery", [], "any", false, false, false, 8));
        foreach ($context['_seq'] as $context["_key"] => $context["gallery"]) {
            // line 9
            echo "                                <div class=\"img_main\">
                                    <img src=\"";
            // line 10
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["gallery"], "path", [], "any", false, false, false, 10), "html", null, true);
            echo "\" alt=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["gallery"], "path", [], "any", false, false, false, 10), "html", null, true);
            echo "\">
                                </div>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['gallery'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 13
        echo "                            
                        </div>

                        <div class=\"gallery__thumb slider-nav\">
                            ";
        // line 17
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["infopost"] ?? null), "images_gallery", [], "any", false, false, false, 17));
        foreach ($context['_seq'] as $context["_key"] => $context["gallery"]) {
            // line 18
            echo "                                <div class=\"img_thumb\">
                                    <img src=\"";
            // line 19
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["gallery"], "path", [], "any", false, false, false, 19), "html", null, true);
            echo "\" alt=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["gallery"], "path", [], "any", false, false, false, 19), "html", null, true);
            echo "\">
                                </div>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['gallery'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 22
        echo "                        </div>
                    </div>
                </div>
                <div class=\"col-xs-12 col-md-6 right__post\">
                    <div class=\"info__post\">
                        <div class=\"title__post\">
                            <h1>";
        // line 28
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["infopost"] ?? null), "title", [], "any", false, false, false, 28), "html", null, true);
        echo "</h1>
                        </div>
                        <div class=\"sub_info_post\">
                            <p class=\"date_post\">";
        // line 31
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["infopost"] ?? null), "updated_at", [], "any", false, false, false, 31), "html", null, true);
        echo "</p>
                            <p class=\"category_post\">Cùng chủ đề: <a href=\"\">BẤT ĐỘNG SẢN</a></p>
                        </div>
                        <div class=\"description_post\">
                            ";
        // line 35
        echo twig_get_attribute($this->env, $this->source, ($context["infopost"] ?? null), "description", [], "any", false, false, false, 35);
        echo "
                        </div>
                    </div>
                </div>
            </div>

            <div class=\"info__author_comment__post\">
                <div class=\"col-xs-12 col-md-4\">
                    <div class=\"info__author\">
                        <div class=\"title__group\">
                            <p>THÔNG TIN CHỦ ĐĂNG</p>
                        </div>
                        <div class=\"content_info_author\">
                            <div class=\"list__info_author\">
                                <ul>
                                    <li>Họ tên: <span>PHAN VĂN VỸ</span></li>
                                    <li>Địa chỉ: P.Hưng Lợi, Q. Ninh Kiều, TP. Cần Thơ</li>
                                    <li>Số điện thoại: <a href=\"tel:(029) 2224 3637\">(029) 2224 3637</a></li>
                                    <li>Email: info@toannang.com.vn</li>
                                </ul>
                            </div>
                            <div class=\"button_subscribe\">
                                <a href=\"#\"><span>ĐĂNG KÝ</span></a>
                            </div>    
                        </div>
                    </div>
                </div>
                <div class=\"col-xs-12 col-md-6\">
                    <div class=\"comment__post\">
                        <div class=\"title__comment_group\">
                            <p>BÌNH LUẬN ĐÁNH GIÁ</p>
                        </div>

                        <div class=\"list__comments\">
                            <ul>
                                <?php for(\$i = 0; \$i < 4; \$i++): ?>
                                <li>
                                    <div class=\"info_user_comment\">
                                        <div class=\"name_user flex_item\">
                                            <div class=\"avatar_user\">
                                                <a href=\"#\" title=\"\">
                                                    <img src=\"<?= \$urlCom ?>/images/user.png\">
                                                </a>
                                            </div>
                                            <div class=\"name \">
                                                <a href=\"#\">xace</a>
                                            </div>
                                        </div>
                                        <div class=\"comment_date flex_item\">
                                            <div class=\"date\">
                                                <i class=\"fa fa-calendar\"></i>
                                                <span>30/01/2019</span>    
                                            </div>
                                            <a href=\"#\" class=\"edit_comment\">Sửa</a>
                                        </div>
                                        <div class=\"reply flex_item\"><a href=\"#\"><i class=\"fa fa-reply\" aria-hidden=\"true\"></i> Trả lời</a></div>
                                    </div> 
                                    <div class=\"comment\">
                                        Sản phẩm đẹp 2X, chất lượng, đánh giá 10 sao sản phẩm
                                    </div>                                     
                                </li>
                            <?php endfor; ?>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class=\"col-xs-6 col-sm-3 col-md-2\">
                    <div class=\"box_img_ads_right\">
                        <a href=\"#\" target=\"_blank\">
                            <img src=\"";
        // line 104
        echo call_user_func_array($this->env->getFilter('component')->getCallable(), ["pvtinhdbmientayinfopost/images/ads_right.jpg"]);
        echo "\" alt=\"\">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> ";
    }

    public function getTemplateName()
    {
        return "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayinfopost/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  179 => 104,  107 => 35,  100 => 31,  94 => 28,  86 => 22,  75 => 19,  72 => 18,  68 => 17,  62 => 13,  51 => 10,  48 => 9,  44 => 8,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<section class=\"pvtinh_dbmt_dangtin_thongtintindang\">
    <div class=\"container\">
        <div class=\"row\">
            <div class=\"content__post\">
                <div class=\"col-xs-12 col-md-6\">
                    <div class=\"gallery__post\">
                        <div class=\"gallery__main slider-for\">
                            {% for gallery in infopost.images_gallery %}
                                <div class=\"img_main\">
                                    <img src=\"{{ gallery.path }}\" alt=\"{{ gallery.path }}\">
                                </div>
                            {% endfor %}
                            
                        </div>

                        <div class=\"gallery__thumb slider-nav\">
                            {% for gallery in infopost.images_gallery %}
                                <div class=\"img_thumb\">
                                    <img src=\"{{ gallery.path }}\" alt=\"{{ gallery.path }}\">
                                </div>
                            {% endfor %}
                        </div>
                    </div>
                </div>
                <div class=\"col-xs-12 col-md-6 right__post\">
                    <div class=\"info__post\">
                        <div class=\"title__post\">
                            <h1>{{ infopost.title }}</h1>
                        </div>
                        <div class=\"sub_info_post\">
                            <p class=\"date_post\">{{ infopost.updated_at }}</p>
                            <p class=\"category_post\">Cùng chủ đề: <a href=\"\">BẤT ĐỘNG SẢN</a></p>
                        </div>
                        <div class=\"description_post\">
                            {{ infopost.description|raw }}
                        </div>
                    </div>
                </div>
            </div>

            <div class=\"info__author_comment__post\">
                <div class=\"col-xs-12 col-md-4\">
                    <div class=\"info__author\">
                        <div class=\"title__group\">
                            <p>THÔNG TIN CHỦ ĐĂNG</p>
                        </div>
                        <div class=\"content_info_author\">
                            <div class=\"list__info_author\">
                                <ul>
                                    <li>Họ tên: <span>PHAN VĂN VỸ</span></li>
                                    <li>Địa chỉ: P.Hưng Lợi, Q. Ninh Kiều, TP. Cần Thơ</li>
                                    <li>Số điện thoại: <a href=\"tel:(029) 2224 3637\">(029) 2224 3637</a></li>
                                    <li>Email: info@toannang.com.vn</li>
                                </ul>
                            </div>
                            <div class=\"button_subscribe\">
                                <a href=\"#\"><span>ĐĂNG KÝ</span></a>
                            </div>    
                        </div>
                    </div>
                </div>
                <div class=\"col-xs-12 col-md-6\">
                    <div class=\"comment__post\">
                        <div class=\"title__comment_group\">
                            <p>BÌNH LUẬN ĐÁNH GIÁ</p>
                        </div>

                        <div class=\"list__comments\">
                            <ul>
                                <?php for(\$i = 0; \$i < 4; \$i++): ?>
                                <li>
                                    <div class=\"info_user_comment\">
                                        <div class=\"name_user flex_item\">
                                            <div class=\"avatar_user\">
                                                <a href=\"#\" title=\"\">
                                                    <img src=\"<?= \$urlCom ?>/images/user.png\">
                                                </a>
                                            </div>
                                            <div class=\"name \">
                                                <a href=\"#\">xace</a>
                                            </div>
                                        </div>
                                        <div class=\"comment_date flex_item\">
                                            <div class=\"date\">
                                                <i class=\"fa fa-calendar\"></i>
                                                <span>30/01/2019</span>    
                                            </div>
                                            <a href=\"#\" class=\"edit_comment\">Sửa</a>
                                        </div>
                                        <div class=\"reply flex_item\"><a href=\"#\"><i class=\"fa fa-reply\" aria-hidden=\"true\"></i> Trả lời</a></div>
                                    </div> 
                                    <div class=\"comment\">
                                        Sản phẩm đẹp 2X, chất lượng, đánh giá 10 sao sản phẩm
                                    </div>                                     
                                </li>
                            <?php endfor; ?>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class=\"col-xs-6 col-sm-3 col-md-2\">
                    <div class=\"box_img_ads_right\">
                        <a href=\"#\" target=\"_blank\">
                            <img src=\"{{ 'pvtinhdbmientayinfopost/images/ads_right.jpg'|component }}\" alt=\"\">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> ", "C:\\Program Files (x86)\\Ampps\\www\\dev\\danhbamientay.dev.cc/plugins/toannang/componentbuilder/components/pvtinhdbmientayinfopost/default.htm", "");
    }
}
