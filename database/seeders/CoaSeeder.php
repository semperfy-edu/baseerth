<?php

namespace Database\Seeders;

use App\Models\ControleCoa;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CoaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('coas')->insert([
            'nome_med' => 'CBD Full Spectrum 1500mg S/S',
            'tipo_med' => 'Oleo',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'CBD Full Spectrum 1500mg Passion Fruit',
            'tipo_med' => 'Oleo',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'CBD Full Spectrum 3000mg S/S',
            'tipo_med' => 'Oleo',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'CBD Full Spectrum 3000mg Passion Fruit',
            'tipo_med' => 'Oleo',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'CBD Full Spectrum 6000mg S/S',
            'tipo_med' => 'Oleo',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'CBD Full Spectrum 6000mg Passion Fruit',
            'tipo_med' => 'Oleo',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'CBD Broad Spectrum (THC Free) 1500mg S/S',
            'tipo_med' => 'Oleo',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'CBD Broad Spectrum (THC Free) 1500mg Fruit Punch',
            'tipo_med' => 'Oleo',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'CBD Broad Spectrum (THC Free) 3000mg S/S',
            'tipo_med' => 'Oleo',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'CBD Broad Spectrum (THC Free) 3000mg Fruit Punch',
            'tipo_med' => 'Oleo',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'CBD 1000mg + THCV 1000mg S/S',
            'tipo_med' => 'Oleo',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'CBD 1000mg + THCV 1000mg Straw Melon',
            'tipo_med' => 'Oleo',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'CBD 3000mg + CBG 3000mg S/S',
            'tipo_med' => 'Oleo',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'CBD 3000mg + CBG 3000mg Orange',
            'tipo_med' => 'Oleo',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'CBD 500mg + CBG 500mg (Hidrossoluvel)',
            'tipo_med' => 'Nano Tecnologia',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'CBD 1000mg (Hidrossoluvel)',
            'tipo_med' => 'Nano Tecnologia',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'CBD 750mg + CBN 250mg + Melatonina 90mg (Hidrossoluvel)',
            'tipo_med' => 'Nano Tecnologia',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'GOMAS THC 300mg Strawberry Haze (Sativa)',
            'tipo_med' => 'Gummies',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'GOMAS THC 300mg Green Crack (Sativa)',
            'tipo_med' => 'Gummies',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'GOMAS THC 300mg Pineapple Express (Sativa)',
            'tipo_med' => 'Gummies',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'GOMAS THC 300mg Blue Dream (Hibrida)',
            'tipo_med' => 'Gummies',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'GOMAS THC 300mg Watermelon Zkittles (Indica)',
            'tipo_med' => 'Gummies',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'GOMAS THC 300mg Wedding Cake (Hibrida)',
            'tipo_med' => 'Gummies',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'GOMAS THC 300mg Northern Lights (Indica)',
            'tipo_med' => 'Gummies',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'GOMAS THC 300mg Jack Herer (Sativa)',
            'tipo_med' => 'Gummies',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'GOMAS THC 300mg GrandDaddy Purple (Indica)',
            'tipo_med' => 'Gummies',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'GOMAS THC 300mg Gorilla Glue (Hibrida)',
            'tipo_med' => 'Gummies',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'GOMAS THC 300mg Tutti-Frutti (Hibrida)',
            'tipo_med' => 'Gummies',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'GOMAS CBG 750mg + CBD Broad Spectrum 750mg',
            'tipo_med' => 'Gummies',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'GOMAS CBN 600mg + THC 150mg + Melatonina 45mg',
            'tipo_med' => 'Gummies',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'GOMAS CBN 600mg + Melatonina 45mg',
            'tipo_med' => 'Gummies',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'GOMAS CBD Broad spectrum 1500mg',
            'tipo_med' => 'Gummies',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'GOMAS CBD Full Spectrum 1500mg',
            'tipo_med' => 'Gummies',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'CBD 1500mg Full Spectrum',
            'tipo_med' => 'Gummies',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'Balm Stick CBD 1500mg',
            'tipo_med' => 'Topico',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'Arthridiol Stick CBD 3000mg',
            'tipo_med' => 'Topico',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'Arthridiol Muscle Gel CBD 3000mg',
            'tipo_med' => 'Topico',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'Serum Facial CBD 250mg',
            'tipo_med' => 'Topico',
        ]);
        DB::table('coas')->insert([
            'nome_med' => 'Oleo de Massagem CBD Broad Spectrum 1500mg',
            'tipo_med' => 'Topico',
        ]);
    }
}
