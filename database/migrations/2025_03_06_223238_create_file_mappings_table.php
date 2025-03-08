<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('file_mappings', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('coa_id');
            $table->string('display_name');
            $table->unsignedBigInteger('sequence');
            $table->timestamps();

            $table->foreign('coa_id')->references('id')->on('coas')->onDelete('cascade');
        });
    }

    public function down(): void {
        Schema::dropIfExists('file_mappings');
    }
};
