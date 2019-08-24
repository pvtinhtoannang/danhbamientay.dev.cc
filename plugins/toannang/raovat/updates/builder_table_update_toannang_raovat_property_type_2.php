<?php namespace Toannang\Raovat\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateToannangRaovatPropertyType2 extends Migration
{
    public function up()
    {
        Schema::table('toannang_raovat_property_type', function($table)
        {
            $table->string('name', 190)->change();
        });
    }
    
    public function down()
    {
        Schema::table('toannang_raovat_property_type', function($table)
        {
            $table->string('name', 191)->change();
        });
    }
}
