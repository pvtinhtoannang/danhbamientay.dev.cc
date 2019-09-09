<?php namespace Toannang\Profile\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateToannangProfile extends Migration
{
    public function up()
    {
        Schema::create('toannang_profile_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('website')->nullable();
            $table->string('phone_number', 15)->nullable();
            $table->string('address')->nullable();
            $table->text('bio')->nullable();
            $table->string('id_social', 30)->nullable();
            $table->string('link_avatar')->nullable();
            $table->string('type_social', 30)->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('toannang_profile_');
    }
}
