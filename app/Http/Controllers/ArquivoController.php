<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use ZipArchive;
use App\Models\FileMapping;
use App\Models\PdfFile;

class ArquivoController extends Controller {
    public function exportar(Request $request) {
        $files = FileMapping::with('coa')
            ->join('pdf_files', 'pdf_files.id', '=', 'file_mappings.sequence')
            ->select('file_mappings.*', 'pdf_files.path as file_path')
            ->get();

        $exportPath = storage_path('app/public');
        if (!is_dir($exportPath)) {
            mkdir($exportPath, 0755, true);
        }

        // Gera os PDFs com nomes amigáveis
        foreach ($files as $file) {
            $pdfPath = storage_path("/exports/{$file->file_path}");
            $newName = "{$exportPath}/{$file->display_name}.pdf";
            copy($pdfPath, $newName);
        }

        // Cria o ZIP
        $zipPath = "{$exportPath}/arquivos_exportados.zip";
        $zip = new ZipArchive();
        if ($zip->open($zipPath, ZipArchive::CREATE | ZipArchive::OVERWRITE)) {
            foreach (glob("{$exportPath}/*.pdf") as $pdfFile) {
                $zip->addFile($pdfFile, basename($pdfFile));
            }
            $zip->close();
        }

        // Limpa os PDFs temporários
        foreach (glob("{$exportPath}/*.pdf") as $pdfFile) {
            unlink($pdfFile);
        }

        return response()->download($zipPath)->deleteFileAfterSend(true);
    }
}
