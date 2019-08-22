<?php namespace Toannang\Raovat\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateToannangRaovatXaphuongthitran3 extends Migration
{
    public function up()
    {
        Schema::table('toannang_raovat_xaphuongthitran', function($table)
        {
            $table->bigInteger('id')->nullable(false)->unsigned(false)->default(null)->change();
            $table->bigInteger('district_id')->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('toannang_raovat_xaphuongthitran', function($table)
        {
            $table->string('id', 5)->nullable(false)->unsigned(false)->default(null)->change();
            $table->string('district_id', 5)->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
}
