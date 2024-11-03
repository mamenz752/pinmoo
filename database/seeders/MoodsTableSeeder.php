<?php
namespace Database\Seeders;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class MoodsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('moods')->insert([
            'feeling' => 'angry',
            'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715698852/pinmoo/moods/angry.png',
            'category' => 'NEGATIVE'
        ]);
        DB::table('moods')->insert([
            'feeling' => 'sad',
            'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715698852/pinmoo/moods/sad.png',
            'category' => 'NEGATIVE'
        ]);
        DB::table('moods')->insert([
            'feeling' => 'scared',
            'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715698852/pinmoo/moods/scared.png',
            'category' => 'NEGATIVE'
        ]);
        DB::table('moods')->insert([
            'feeling' => 'nervous',
            'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715698852/pinmoo/moods/nervous.png',
            'category' => 'NEGATIVE'
        ]);
        DB::table('moods')->insert([
            'feeling' => 'smile',
            'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715698852/pinmoo/moods/smile.png',
            'category' => 'NORMAL'
        ]);
        DB::table('moods')->insert([
            'feeling' => 'surprised',
            'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715698852/pinmoo/moods/surprised.png',
            'category' => 'NORMAL'
        ]);
        DB::table('moods')->insert([
            'feeling' => 'wink',
            'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715698852/pinmoo/moods/wink.png',
            'category' => 'POSITIVE'
        ]);
        DB::table('moods')->insert([
            'feeling' => 'joyful',
            'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715698852/pinmoo/moods/joyful.png',
            'category' => 'POSITIVE'
        ]);
        DB::table('moods')->insert([
            'feeling' => 'stared',
            'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715698852/pinmoo/moods/stared.png',
            'category' => 'POSITIVE'
        ]);
        DB::table('moods')->insert([
            'feeling' => 'love',
            'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715698852/pinmoo/moods/love.png',
            'category' => 'POSITIVE'
        ]);
    }
}