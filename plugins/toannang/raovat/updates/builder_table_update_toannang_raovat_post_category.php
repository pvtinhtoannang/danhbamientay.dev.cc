<?php namespace Toannang\Raovat\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateToannangRaovatPostCategory extends Migration
{
    public function up()
    {
        Schema::table('toannang_raovat_post_category', function($table)
        {
            $table->renameColumn('post_id', 'posts_id');
        });
    }
    
    public function down()
    {
        Schema::table('toannang_raovat_post_category', function($table)
        {
            $table->renameColumn('posts_id', 'post_id');
        });
    }
}
