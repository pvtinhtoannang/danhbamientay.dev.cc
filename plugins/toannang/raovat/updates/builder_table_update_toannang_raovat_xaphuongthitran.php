<?php namespace Toannang\Raovat\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateToannangRaovatXaphuongthitran extends Migration
{
    public function up()
    {
        Schema::table('toannang_raovat_xaphuongthitran', function($table)
        {
            $table->dropPrimary(['xaid']);
            $table->renameColumn('xaid', 'id');
            $table->primary(['id']);
        });
    }
    
    public function down()
    {
        Schema::table('toannang_raovat_xaphuongthitran', function($table)
        {
            $table->dropPrimary(['id']);
            $table->renameColumn('id', 'xaid');
            $table->primary(['xaid']);
        });
    }
}
