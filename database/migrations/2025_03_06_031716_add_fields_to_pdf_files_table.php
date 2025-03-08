<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('pdf_files', function (Blueprint $table) {
            $table->enum('aprovado', ['Sim', 'Nao','N/A'])->default('N/A')->nullable();
            $table->enum('completo', ['Sim', 'Nao', 'N/A'])->default('N/A')->nullable();
            $table->enum('drive_existe', ['Sim', 'Nao', 'N/A'])->default('N/A')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('pdf_files', function (Blueprint $table) {
            $table->dropColumn(['aprovado', 'completo', 'drive_existe']);
        });
    }
};
