<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('statuses')->insert([
            "status" => "friends",
            "image_path" => "https://res.cloudinary.com/drzq0yhkr/image/upload/v1715772973/tmujhardkunvjhay8ebm.png",
        ]);
        DB::table('statuses')->insert([
            "status" => "family",
            "image_path" => "https://res.cloudinary.com/drzq0yhkr/image/upload/v1715772973/ajuk5sbsyygumuzzyyam.png",
        ]);
        DB::table('statuses')->insert([
            "status" => "lover",
            "image_path" => "https://res.cloudinary.com/drzq0yhkr/image/upload/v1715772973/sf1ijnbgtmcsfwoanmgn.png",
        ]);
        DB::table('statuses')->insert([
            "status" => "sunny",
            "image_path" => "https://res.cloudinary.com/drzq0yhkr/image/upload/v1715772974/qkpjctfhjx7yjvqj6t46.png",
        ]);
        DB::table('statuses')->insert([
            "status" => "cloudy",
            "image_path" => "https://res.cloudinary.com/drzq0yhkr/image/upload/v1715772973/maq6rlbkpg4oqjhtxwa4.png",
        ]);
        DB::table('statuses')->insert([
            "status" => "rainy",
            "image_path" => "https://res.cloudinary.com/drzq0yhkr/image/upload/v1715772973/q8j3dzvof8ew0mqdbyof.png",
        ]);
        DB::table('statuses')->insert([
            "status" => "study",
            "image_path" => "https://res.cloudinary.com/drzq0yhkr/image/upload/v1715772973/ipugfxkbxpnxil06ysdw.png",
        ]);
        DB::table('statuses')->insert([
            "status" => "exam",
            "image_path" => "https://res.cloudinary.com/drzq0yhkr/image/upload/v1715772973/szme5xszktbmavsotxku.png",
        ]);
        DB::table('statuses')->insert([
            "status" => "project",
            "image_path" => "https://res.cloudinary.com/drzq0yhkr/image/upload/v1715772973/ogxlgkium0qjfzthyliz.png",
        ]);
        DB::table('statuses')->insert([
            "status" => "work",
            "image_path" => "https://res.cloudinary.com/drzq0yhkr/image/upload/v1715772973/c4yz3ebhannbccoegjk3.png",
        ]);
    }
}
