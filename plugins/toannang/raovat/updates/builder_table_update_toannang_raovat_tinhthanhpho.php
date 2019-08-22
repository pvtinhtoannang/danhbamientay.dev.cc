<?php namespace Toannang\Raovat\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateToannangRaovatTinhthanhpho extends Migration
{
    public function up()
    {
        Schema::table('toannang_raovat_tinhthanhpho', function($table)
        {
            $table->dropPrimary(['matp']);
            $table->renameColumn('matp', 'id');
            $table->primary(['id']);
        });
    }
    
    public function down()
    {
        Schema::table('toannang_raovat_tinhthanhpho', function($table)
        {
            $table->dropPrimary(['id']);
            $table->renameColumn('id', 'matp');
            $table->primary(['matp']);
        });
    }
}
