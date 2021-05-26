<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::firstOrCreate(['name' => 'Admin'],['email'=>'admin@test.com','role'=>1, 'permission_group'=>1, 'password'=>Hash::make('admin123')]);
    }
}
