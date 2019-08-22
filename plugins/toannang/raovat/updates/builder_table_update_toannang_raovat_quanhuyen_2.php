<?php namespace Toannang\Raovat\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateToannangRaovatQuanhuyen2 extends Migration
{
    public function up()
    {
        Schema::table('toannang_raovat_quanhuyen', function($table)
        {
            $table->renameColumn('matp', 'district_id');
        });
    }
    
    public function down()
    {
        Schema::table('toannang_raovat_quanhuyen', function($table)
        {
            $table->renameColumn('district_id', 'matp');
        });
    }
}
