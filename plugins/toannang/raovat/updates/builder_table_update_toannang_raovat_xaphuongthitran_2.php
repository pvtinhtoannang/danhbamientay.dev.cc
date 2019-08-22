<?php namespace Toannang\Raovat\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateToannangRaovatXaphuongthitran2 extends Migration
{
    public function up()
    {
        Schema::table('toannang_raovat_xaphuongthitran', function($table)
        {
            $table->renameColumn('maqh', 'district_id');
        });
    }
    
    public function down()
    {
        Schema::table('toannang_raovat_xaphuongthitran', function($table)
        {
            $table->renameColumn('district_id', 'maqh');
        });
    }
}
