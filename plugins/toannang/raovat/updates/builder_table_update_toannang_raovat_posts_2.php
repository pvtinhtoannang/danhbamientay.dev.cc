<?php namespace Toannang\Raovat\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateToannangRaovatPosts2 extends Migration
{
    public function up()
    {
        Schema::table('toannang_raovat_posts', function($table)
        {
            $table->smallInteger('users_id')->nullable(false)->unsigned()->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('toannang_raovat_posts', function($table)
        {
            $table->bigInteger('users_id')->nullable(false)->unsigned()->default(null)->change();
        });
    }
}
