<?php namespace Toannang\Raovat\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateToannangRaovatTinhthanhpho2 extends Migration
{
    public function up()
    {
        Schema::table('toannang_raovat_tinhthanhpho', function($table)
        {
            $table->bigInteger('id')->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('toannang_raovat_tinhthanhpho', function($table)
        {
            $table->string('id', 5)->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
}
