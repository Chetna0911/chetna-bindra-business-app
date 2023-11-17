<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Business;

class BusinessController extends Controller
{
    public function index()
    {
        $businesses = Business::all();
    
        return inertia('Business/List', [
            'businesses' => $businesses,
        ]);
    }
    
    public function create()
    {
        return inertia('Business/Create');
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:120',
            'address' => 'required|max:1000',
            'email' => 'required|email|unique:businesses,email',
            'website' => 'nullable|url',
            'contact_person_name' => 'required',
            'phone_number' => 'required',
        ]);
    
        Business::create($request->all());
    
        return redirect()->route('business.index');
    }

}
