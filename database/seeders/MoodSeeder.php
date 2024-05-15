<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MoodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('moods')->insert([
                'mood' => 'angry',
                'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715698852/wuw5uuezxt87nu20fgyd.png',
                'classification' => 'NEGATIVE',
        ]);
        DB::table('moods')->insert([
                'mood' => 'sad',
                'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715698852/l3cegdueomop6bgghcth.png',
                'classification' => 'NEGATIVE',
        ]);
        DB::table('moods')->insert([
                'mood' => 'scared',
                'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715698853/tlf0vy4nffm8en6yok3f.png',
                'classification' => 'NEGATIVE',
        ]);
        DB::table('moods')->insert([
                'mood' => 'nervous',
                'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715698853/c6njdmrirnxyd8xie5yf.png',
                'classification' => 'NEGATIVE',
        ]);
        DB::table('moods')->insert([
                'mood' => 'smile',
                'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715698852/atd8klzvhrvnklae0amu.png',
                'classification' => 'NORMAL',
        ]);
        DB::table('moods')->insert([
                'mood' => 'surprised',
                'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715698854/vt2qcofcxlyubbhvhskw.png',
                'classification' => 'NORMAL',
        ]);
        DB::table('moods')->insert([
                'mood' => 'wink',
                'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715698853/sjznomlr0efuy3it0wry.png',
                'classification' => 'POSITIVE',
        ]);
        DB::table('moods')->insert([
                'mood' => 'joyful',
                'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715698852/riqr0xy9zo2mbnvxxdx5.png',
                'classification' => 'POSITIVE',
        ]);
        DB::table('moods')->insert([
                'mood' => 'stared',
                'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715698853/uluezmj1leu4etmivn7r.png',
                'classification' => 'POSITIVE',
        ]);
        DB::table('moods')->insert([
                'mood' => 'love',
                'image_path' => 'https://res.cloudinary.com/drzq0yhkr/image/upload/v1715698852/dsjiqlnorndkqgq2v15u.png',
                'classification' => 'POSITIVE',
        ]);
    }
}
