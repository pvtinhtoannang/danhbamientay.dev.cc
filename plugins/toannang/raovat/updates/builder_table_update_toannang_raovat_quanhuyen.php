<?php namespace Toannang\Raovat\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateToannangRaovatQuanhuyen extends Migration
{
    public function up()
    {
        Schema::table('toannang_raovat_quanhuyen', function($table)
        {
            $table->dropPrimary(['maqh']);
            $table->renameColumn('maqh', 'id');
            $table->primary(['id']);
        });
    }
    
    public function down()
    {
        Schema::table('toannang_raovat_quanhuyen', function($table)
        {
            $table->dropPrimary(['id']);
            $table->renameColumn('id', 'maqh');
            $table->primary(['maqh']);
        });
    }
}
