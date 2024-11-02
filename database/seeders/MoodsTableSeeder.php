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
            'image_path' => 'pinmoo/moods/angry',
            'category' => 'NEGATIVE'
        ]);
        DB::table('moods')->insert([
            'feeling' => 'sad',
            'image_path' => 'pinmoo/moods/sad',
            'category' => 'NEGATIVE'
        ]);
        DB::table('moods')->insert([
            'feeling' => 'scared',
            'image_path' => 'pinmoo/moods/scared',
            'category' => 'NEGATIVE'
        ]);
        DB::table('moods')->insert([
            'feeling' => 'nervous',
            'image_path' => 'pinmoo/moods/nervous',
            'category' => 'NEGATIVE'
        ]);
        DB::table('moods')->insert([
            'feeling' => 'smile',
            'image_path' => 'pinmoo/moods/smile',
            'category' => 'NORMAL'
        ]);
        DB::table('moods')->insert([
            'feeling' => 'surprised',
            'image_path' => 'pinmoo/moods/surprised',
            'category' => 'NORMAL'
        ]);
        DB::table('moods')->insert([
            'feeling' => 'wink',
            'image_path' => 'pinmoo/moods/wink',
            'category' => 'POSITIVE'
        ]);
        DB::table('moods')->insert([
            'feeling' => 'joyful',
            'image_path' => 'pinmoo/moods/joyful',
            'category' => 'POSITIVE'
        ]);
        DB::table('moods')->insert([
            'feeling' => 'stared',
            'image_path' => 'pinmoo/moods/stared',
            'category' => 'POSITIVE'
        ]);
        DB::table('moods')->insert([
            'feeling' => 'love',
            'image_path' => 'pinmoo/moods/love',
            'category' => 'POSITIVE'
        ]);
    }
}
