<?php namespace toannang\Contact\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateToannangContactEntries extends Migration
{
    public function up()
    {
        Schema::create('toannang_contact_entries', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name', 191)->nullable();
            $table->string('email', 191)->nullable();
            $table->integer('phone')->nullable();
            $table->text('message')->nullable();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('toannang_contact_entries');
    }
}
