<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Programs extends Model
{
    use HasFactory;

    public $timestamps=false;
    
    protected $fillable=['program_name','sector','province','company_agency','address','email','contact_number'];
}
