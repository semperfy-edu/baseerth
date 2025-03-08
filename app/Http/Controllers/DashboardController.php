<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ControleCoa;
use App\Models\PdfFile;

class DashboardController extends Controller
{
    public function stats()
    {
        return response()->json([
            'total_coas' => ControleCoa::count(),
            'total_pdf_files' => PdfFile::count(),
            'aprovados' => PdfFile::where('aprovado', 'Sim')->count(),
            'nao_aprovados' => PdfFile::where('aprovado', 'Nao')->count(),
            'completos' => PdfFile::where('completo', 'Sim')->count(),
            'nao_completos' => PdfFile::where('completo', 'Nao')->count(),
        ]);
    }
}
