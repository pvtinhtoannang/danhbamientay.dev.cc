<?php namespace Toannang\Profile\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateToannangProfile extends Migration
{
    public function up()
    {
        Schema::table('toannang_profile_', function($table)
        {
            $table->string('website')->change();
            $table->string('address')->change();
            $table->string('link_avatar')->change();
        });
    }
    
    public function down()
    {
        Schema::table('toannang_profile_', function($table)
        {
            $table->string('website', 191)->change();
            $table->string('address', 191)->change();
            $table->string('link_avatar', 191)->change();
        });
    }
}
