<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('statuses')->insert([
            'status' => 'friends',
            'image_path' => 'pinmoo/statuses/friends'
        ]);
        DB::table('statuses')->insert([
            'status' => 'family',
            'image_path' => 'pinmoo/statuses/family'
        ]);
        DB::table('statuses')->insert([
            'status' => 'lover',
            'image_path' => 'pinmoo/statuses/lover'
        ]);
        DB::table('statuses')->insert([
            'status' => 'sunny',
            'image_path' => 'pinmoo/statuses/sunny'
        ]);
        DB::table('statuses')->insert([
            'status' => 'cloudy',
            'image_path' => 'pinmoo/statuses/cloudy'
        ]);
        DB::table('statuses')->insert([
            'status' => 'rainy',
            'image_path' => '/pinmoo/statuses/rainy'
        ]);
        DB::table('statuses')->insert([
            'status' => 'study',
            'image_path' => 'pinmoo/statuses/study'
        ]);
        DB::table('statuses')->insert([
            'status' => 'exam',
            'image_path' => 'pinmoo/statuses/exam'
        ]);
        DB::table('statuses')->insert([
            'status' => 'project',
            'image_path' => 'pinmoo/statuses/project'
        ]);
        DB::table('statuses')->insert([
            'status' => 'work',
            'image_path' => 'pinmoo/statuses/work'
        ]);
    }
}
