<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PdfFile extends Model
{
    protected $fillable = [
        'path',
        'date_created_coa',
        'link_sclabs',
        'coa_id',
        'aprovado',
        'completo',
        'drive_existe'
    ];

    protected $casts = [
        'date_created_coa' => 'date',
        'aprovado' => 'string',
        'completo' => 'string',
        'drive_existe' => 'string'
    ];


    public function coas(): BelongsTo
    {
        return $this->belongsTo(ControleCoa::class);
    }
}
