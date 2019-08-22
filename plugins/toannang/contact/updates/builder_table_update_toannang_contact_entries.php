<?php namespace toannang\Contact\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateToannangContactEntries extends Migration
{
    public function up()
    {
        Schema::table('toannang_contact_entries', function($table)
        {
            $table->string('name', 191)->nullable(false)->change();
            $table->string('email', 191)->nullable(false)->change();
            $table->text('phone')->nullable(false)->unsigned(false)->default(null)->change();
            $table->text('message')->nullable(false)->change();
        });
    }
    
    public function down()
    {
        Schema::table('toannang_contact_entries', function($table)
        {
            $table->string('name', 191)->nullable()->change();
            $table->string('email', 191)->nullable()->change();
            $table->integer('phone')->nullable()->unsigned(false)->default(null)->change();
            $table->text('message')->nullable()->change();
        });
    }
}