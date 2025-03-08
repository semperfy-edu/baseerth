<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('coas', function (Blueprint $table) {
            $table->id();
            $table->string('nome_med');
            $table->enum('tipo_med', ['Oleo', 'Gummies', 'Nano Tecnologia', 'Topico'])->nullable();
            $table->timestamps();
        });

        Schema::table('pdf_files', function (Blueprint $table) {
            $table->foreignId('coa_id')->nullable()->constrained()->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('pdf_files', function (Blueprint $table) {
            $table->dropForeign(['coa_id']);
            $table->dropColumn('coa_id');
        });
        Schema::dropIfExists('coas');
    }
};
