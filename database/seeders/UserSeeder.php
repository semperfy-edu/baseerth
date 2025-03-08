<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'Eduardo',
            'email' => 'eduardo@gmail.com',
            'password' => bcrypt('123456a'),
        ]);

        User::create([
            'name' => 'Denise',
            'email' => 'denise@gmail.com',
            'password' => bcrypt('123456a'),
        ]);
    }
}
