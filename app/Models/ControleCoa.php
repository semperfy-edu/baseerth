<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ControleCoa extends Model
{
    protected $table = 'coas';
    protected $fillable = ['nome_med', 'tipo_med'];

    public function pdfFiles()
{
    return $this->hasMany(PdfFile::class, 'coa_id');
}
}
