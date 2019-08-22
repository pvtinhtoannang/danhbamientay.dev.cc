<?php namespace Toannang\Raovat\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateToannangRaovatPosts4 extends Migration
{
    public function up()
    {
        Schema::table('toannang_raovat_posts', function($table)
        {
            $table->decimal('price', 15, 0)->default(0)->change();
        });
    }
    
    public function down()
    {
        Schema::table('toannang_raovat_posts', function($table)
        {
            $table->decimal('price', 15, 0)->default(null)->change();
        });
    }
}
