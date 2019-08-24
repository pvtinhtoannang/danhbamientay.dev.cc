<?php namespace Toannang\Raovat\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateToannangRaovatQuanhuyen5 extends Migration
{
    public function up()
    {
        Schema::table('toannang_raovat_quanhuyen', function($table)
        {
            $table->string('type', 32)->change();
        });
    }
    
    public function down()
    {
        Schema::table('toannang_raovat_quanhuyen', function($table)
        {
            $table->string('type', 30)->change();
        });
    }
}
