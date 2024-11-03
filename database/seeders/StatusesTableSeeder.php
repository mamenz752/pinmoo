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
            'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715772974/pinmoo/statuses/friends.png'
        ]);
        DB::table('statuses')->insert([
            'status' => 'family',
            'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715772974/pinmoo/statuses/family.png'
        ]);
        DB::table('statuses')->insert([
            'status' => 'lover',
            'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715772974/pinmoo/statuses/lover.png'
        ]);
        DB::table('statuses')->insert([
            'status' => 'sunny',
            'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715772974/pinmoo/statuses/sunny.png'
        ]);
        DB::table('statuses')->insert([
            'status' => 'cloudy',
            'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715772974/pinmoo/statuses/cloudy.png'
        ]);
        DB::table('statuses')->insert([
            'status' => 'rainy',
            'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715772974/pinmoo/statuses/rainy.png'
        ]);
        DB::table('statuses')->insert([
            'status' => 'study',
            'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715772974/pinmoo/statuses/study.png'
        ]);
        DB::table('statuses')->insert([
            'status' => 'exam',
            'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715772974/pinmoo/statuses/exam.png'
        ]);
        DB::table('statuses')->insert([
            'status' => 'project',
            'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715772974/pinmoo/statuses/project.png'
        ]);
        DB::table('statuses')->insert([
            'status' => 'work',
            'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715772974/pinmoo/statuses/work.png'
        ]);
    }
}