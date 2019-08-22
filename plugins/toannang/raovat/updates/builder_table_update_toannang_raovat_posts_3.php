<?php namespace Toannang\Raovat\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateToannangRaovatPosts3 extends Migration
{
    public function up()
    {
        Schema::table('toannang_raovat_posts', function($table)
        {
            $table->renameColumn('users_id', 'user_id');
        });
    }
    
    public function down()
    {
        Schema::table('toannang_raovat_posts', function($table)
        {
            $table->renameColumn('user_id', 'users_id');
        });
    }
}
