<?php namespace Toannang\Raovat\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateToannangRaovatLocations2 extends Migration
{
    public function up()
    {
        Schema::table('toannang_raovat_locations', function($table)
        {
            $table->text('meta_title');
            $table->text('meta_description');
        });
    }
    
    public function down()
    {
        Schema::table('toannang_raovat_locations', function($table)
        {
            $table->dropColumn('meta_title');
            $table->dropColumn('meta_description');
        });
    }
}
