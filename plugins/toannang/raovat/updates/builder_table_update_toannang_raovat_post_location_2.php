<?php namespace Toannang\Raovat\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateToannangRaovatPostLocation2 extends Migration
{
    public function up()
    {
        Schema::table('toannang_raovat_post_location', function($table)
        {
            $table->renameColumn('location_id', 'locations_id');
        });
    }
    
    public function down()
    {
        Schema::table('toannang_raovat_post_location', function($table)
        {
            $table->renameColumn('locations_id', 'location_id');
        });
    }
}
