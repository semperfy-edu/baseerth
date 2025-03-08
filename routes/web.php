<?php

use App\Http\Controllers\CoaController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PdfFileController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ArquivoController;
Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/pdf-files/{pdfFile}/update-coas', [PdfFileController::class, 'updateEstante'])->name('pdf-files.update-coas');
    Route::post('/exportar-arquivos', [ArquivoController::class, 'exportar'])->name('exportar.arquivos');

});

Route::middleware(['auth'])->group(function () {
    Route::resource('coas', CoaController::class);
    Route::post('/coas/{coa}/add-file', [CoaController::class, 'addFile'])->name('coas.add-file');


});


Route::middleware(['auth'])->group(function () {
    Route::get('/pdf-files', [PdfFileController::class, 'index'])->name('pdf-files.index');
    Route::get('/pdf-files/create', [PdfFileController::class, 'create'])->name('pdf-files.create');
    Route::post('/pdf-files', [PdfFileController::class, 'store'])->name('pdf-files.store');
    Route::get('/pdf-files/{pdfFile}', [PdfFileController::class, 'show'])->name('pdf-files.show');
    Route::get('/pdf-files/{pdfFile}/edit', [PdfFileController::class, 'edit'])->name('pdf-files.edit');
    Route::put('/pdf-files/{pdfFile}', [PdfFileController::class, 'update'])->name('pdf-files.update');
    Route::delete('/pdf-files/{pdfFile}', [PdfFileController::class, 'destroy'])->name('pdf-files.destroy');
    Route::get('/dashboard/stats', [DashboardController::class, 'getStats']);
    Route::get('/dashboard/stats', [DashboardController::class, 'stats'])->name('dashboard.stats');

});

require __DIR__.'/auth.php';
