<?php namespace Toannang\Raovat\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateToannangRaovatPosts5 extends Migration
{
    public function up()
    {
        Schema::table('toannang_raovat_posts', function($table)
        {
            $table->string('address');
        });
    }
    
    public function down()
    {
        Schema::table('toannang_raovat_posts', function($table)
        {
            $table->dropColumn('address');
        });
    }
}
