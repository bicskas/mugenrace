<?php

use Illuminate\Database\Seeder;

class AdminSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Admin',
            'email' => 'admin@mugenrace.com',
            'password' => Hash::make('123456'),
            'role' => 'admin',
            'status' => 'active',
            'editable' => 0,
        ]);
    }
}
