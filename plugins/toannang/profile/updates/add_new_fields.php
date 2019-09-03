<?php namespace Toannang\Profile\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddNewFields extends Migration
{

    public function up()
    {
        Schema::table('users', function($table)
        {
            $table->string('website')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('address')->nullable();
            $table->text('bio')->nullable();

        });
    }

    public function down()
    {
        $table->dropDown([
            'website',
            'phone_number',
            'address',
            'bio'
        ]);
    }
}
