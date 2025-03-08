<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FileMapping extends Model {
    use HasFactory;

    protected $fillable = ['coa_id', 'display_name', 'sequence'];

    public function coa() {
        return $this->belongsTo(ControleCoa::class);
    }
}
