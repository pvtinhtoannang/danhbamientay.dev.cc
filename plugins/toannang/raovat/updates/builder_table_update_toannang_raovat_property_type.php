<?php namespace Toannang\Raovat\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateToannangRaovatPropertyType extends Migration
{
    public function up()
    {
        Schema::table('toannang_raovat_property_type', function($table)
        {
            $table->renameColumn('code', 'slug');
        });
    }
    
    public function down()
    {
        Schema::table('toannang_raovat_property_type', function($table)
        {
            $table->renameColumn('slug', 'code');
        });
    }
}
