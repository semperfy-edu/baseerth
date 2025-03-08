<?php

namespace App\Http\Controllers;

use App\Models\ControleCoa;
use App\Models\PdfFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PdfFileController extends Controller
{
    public function index()
    {
        $pdfFiles = PdfFile::with('coas')->latest()->get();
        $coas = ControleCoa::all();
        return Inertia::render('PdfFiles/Index', [
            'pdfFiles' => $pdfFiles,
            'coas' => $coas
        ]);
    }

    public function create()
    {
        return Inertia::render('PdfFiles/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'pdf_file' => 'required|file|mimes:pdf|max:10240',
            'date_created_coa' => 'nullable|date',
            'link_sclabs' => 'nullable|string|url',
            'coa_id' => 'nullable|exists:coas,id',
            'aprovado' => 'required|in:Sim,Nao',
            'completo' => 'required|in:Sim,Nao',
            'drive_existe' => 'nullable|in:Sim,Nao',
        ]);

        $path = $request->file('pdf_file')->store('pdfs', 'public');

        PdfFile::create([
            'path' => $path,
            'date_created_coa' => $request->date_created_coa,
            'link_sclabs' => $request->link_sclabs,
            'coa_id' => $request->coa_id,
            'aprovado' => $request->aprovado ?? 'N/A',
            'completo' => $request->completo ?? 'N/A',
            'drive_existe' => $request->drive_existe ?? 'N/A'
        ]);

        return redirect()->route('pdf-files.index');
    }



    public function show(PdfFile $pdfFile)
    {
        return Inertia::render('PdfFiles/Show', ['pdfFile' => $pdfFile]);
    }

    public function edit(PdfFile $pdfFile)
    {
        return Inertia::render('PdfFiles/Edit', ['pdfFile' => $pdfFile]);
    }

    public function update(Request $request, PdfFile $pdfFile)
    {
        $validated = [];

        if ($request->hasFile('pdf_file')) {
            $request->validate([
                'pdf_file' => 'file|mimes:pdf|max:10240',
            ]);

            // Delete old file
            Storage::disk('public')->delete($pdfFile->path);

            // Store new file
            $validated['path'] = $request->file('pdf_file')->store('pdfs', 'public');
        }

        if ($request->has('date_created_coa') && $request->date_created_coa !== $pdfFile->date_created_coa) {
            $request->validate(['date_created_coa' => 'nullable|date']);
            $validated['date_created_coa'] = $request->date_created_coa;
        }

        if ($request->has('link_sclabs') && $request->link_sclabs !== $pdfFile->link_sclabs) {
            $request->validate(['link_sclabs' => 'nullable|string|url']);
            $validated['link_sclabs'] = $request->link_sclabs;
        }

        if (!empty($validated)) {
            $pdfFile->update($validated);
        }

        return redirect()->route('pdf-files.index');
    }


    public function destroy(PdfFile $pdfFile)
    {
        $pdfFile->delete();
        return redirect()->route('pdf-files.index');
    }

    public function updateEstante(Request $request, PdfFile $pdfFile)
    {
        $validated = $request->validate([
            'coa_id' => 'required|exists:coas,id'
        ]);

        $pdfFile->update($validated);

        return redirect()->back();
    }
}
