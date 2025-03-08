<?php

namespace App\Http\Controllers;

use App\Models\ControleCoa;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CoaController extends Controller
{
    public function index()
    {
        $coas = ControleCoa::with('pdfFiles')->get();
        return Inertia::render('Coas/Index', ['coas' => $coas]);
    }

    public function create()
    {
        return Inertia::render('Coas/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nome_med' => 'required|string|max:255',
            'tipo_med' => 'required|in:sala,quarto',
            'pdf_file' => 'nullable|file|mimes:pdf|max:10240',
            'date_created_coa' => 'nullable|date',
            'link_sclabs' => 'nullable|string|url'
        ]);

        $coas = ControleCoa::create([
            'nome_med' => $validated['nome_med'],
            'tipo_med' => $validated['tipo_med']
        ]);

        if ($request->hasFile('pdf_file')) {
            $path = $request->file('pdf_file')->store('pdfs', 'public');

            $coas->pdfFiles()->create([
                'path' => $path,
                'date_created_coa' => $validated['date_created_coa'],
                'link_sclabs' => $validated['link_sclabs']
            ]);
        }

        return redirect()->route('coas.index');
    }


    public function show(ControleCoa $coa)
{
    $coa->load('pdfFiles');
    // dd($coa->toArray()); // This will show us exactly what data is being passed

    return Inertia::render('Coas/Show', [
        'coa' => $coa
    ]);
}



    // public function edit(ControleCoa $coas)
    // {
    //     return Inertia::render('Coas/Edit', ['coas' => $coas]);
    // }

    public function edit(ControleCoa $coa)  // Change $coas to $coa
    {
        return Inertia::render('Coas/Edit', [
            'coa' => $coa  // Change 'coas' to 'coa'
        ]);
    }


    public function update(Request $request, ControleCoa $coa)
    {
        $validated = $request->validate([
            'nome_med' => 'required|string|max:255',
            'tipo_med' => 'required|in:Oleo,Gummies,Nano Tecnologia,Topico',
        ]);

        $coa->update($validated);

        return redirect()->route('coas.index');
    }

    public function destroy(ControleCoa $coa)
    {
        $coa->delete();
        return redirect()->route('coas.index');
    }

    public function addFile(Request $request, ControleCoa $coa)
    {
        $validated = $request->validate([
            'pdf_file' => 'required|file|mimes:pdf|max:10240',
            'date_created_coa' => 'nullable|date',
            'link_sclabs' => 'nullable|string|url',
            'aprovado' => 'required|in:Sim,Nao',
            'completo' => 'required|in:Sim,Nao',
            'drive_existe' => 'nullable|in:Sim,Nao',
        ]);

        $path = $request->file('pdf_file')->store('pdfs', 'public');

        $coa->pdfFiles()->create([
            'path' => $path,
            'date_created_coa' => $validated['date_created_coa'],
            'link_sclabs' => $validated['link_sclabs'],
            'aprovado' => $request->aprovado ?? 'N/A',
            'completo' => $request->completo ?? 'N/A',
            'drive_existe' => $request->drive_existe ?? 'N/A',
            'coa_id' => $coa->id  // This is optional since the relationship handles it
        ]);

        return redirect()->back();
    }
}
