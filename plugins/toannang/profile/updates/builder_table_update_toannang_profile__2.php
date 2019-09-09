<?php namespace Toannang\Profile\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateToannangProfile2 extends Migration
{
    public function up()
    {
        Schema::table('toannang_profile_', function($table)
        {
            $table->integer('user_id')->unsigned();
        });
    }
    
    public function down()
    {
        Schema::table('toannang_profile_', function($table)
        {
            $table->dropColumn('user_id');
        });
    }
}
