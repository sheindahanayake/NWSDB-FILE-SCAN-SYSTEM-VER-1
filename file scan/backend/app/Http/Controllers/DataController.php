<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Consumer;

class DataController extends Controller
{
    public function index()
    {
        // Fetch data from the database
        $data = Consumer::all(); // Replace with actual data fetching logic
        return response()->json($data);
    }

    public function store(Request $request)
    {
        // Validate and store data in the database
        $validatedData = $request->validate([
            'region' => 'required|string',
            'wss' => 'required|string',
            'account_no' => 'required|string|unique:consumers',
            'nic_no' => 'required|string|unique:consumers',
            'pdfFile' => 'required|file|mimes:pdf|max:2048',
        ]);

        // Store the PDF file
        $pdfPath = $request->file('pdfFile')->store('pdfs', 'public');

        // Create a new consumer record
        $consumer = new Consumer();
        $consumer->region = $request->input('region');
        $consumer->wss = $request->input('wss');
        $consumer->account_no = $request->input('account_no');
        $consumer->nic_no = $request->input('nic_no');
        $consumer->pdf_path = $pdfPath;
        $consumer->save();

        return response()->json(['message' => 'Data saved successfully', 'consumer' => $consumer], 201);
    }
}