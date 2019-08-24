<?php namespace Toannang\Raovat\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateToannangRaovatLocations extends Migration
{
    public function up()
    {
        Schema::table('toannang_raovat_locations', function($table)
        {
            $table->bigInteger('category_id');
        });
    }
    
    public function down()
    {
        Schema::table('toannang_raovat_locations', function($table)
        {
            $table->dropColumn('category_id');
        });
    }
}
