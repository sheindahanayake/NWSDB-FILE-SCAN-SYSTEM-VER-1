<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Consumer;

class ConsumerController extends Controller
{
    // Retrieve all consumers
    public function index()
    {
        return Consumer::all();
    }

    // Store a newly created consumer
    public function store(Request $request)
    {
        // Validate incoming data
        $validatedData = $request->validate([
            'region' => 'required|string',
            'wss' => 'required|string',
            'account_no' => 'required|string|unique:consumers,account_no',  // Ensure account_no is unique
            'nic_no' => 'required|string',
            'pdfFile' => 'nullable|file|mimes:pdf|max:2048',  // Optional PDF upload
        ]);

        // Handle the file upload if a PDF is provided
$consumerData = $validatedData;
if ($request->hasFile('pdfFile')) {
    $file = $request->file('pdfFile');
    $filename = $file->getClientOriginalName();
    $path = $file->storeAs('pdfs', $filename, 'public');
    $consumerData['pdf_path'] = $path;
}

        // Create and return the new consumer
        $consumer = Consumer::create($consumerData);
        return response()->json($consumer, 201);
    }

    // Update an existing consumer using account_no instead of id
    public function update(Request $request, $account_no)
    {
        // Find the consumer by account_no
        $consumer = Consumer::where('account_no', $account_no)->first();

        if (!$consumer) {
            return response()->json(['message' => 'Consumer not found'], 404);
        }

        // Validate the data
        $validatedData = $request->validate([
            'region' => 'sometimes|required|string',
            'wss' => 'sometimes|required|string',
            'account_no' => 'sometimes|required|string',
            'nic_no' => 'sometimes|required|string',
            'pdfFile' => 'nullable|file|mimes:pdf|max:2048',
        ]);

        // Handle PDF file upload if provided
        if ($request->hasFile('pdfFile')) {
            $file = $request->file('pdfFile');
            $path = $file->store('pdfs', 'public');
            $validatedData['pdf_path'] = $path;
        }

        // Update the consumer
        $consumer->update($validatedData);
        return response()->json($consumer, 200);
    }

    // Delete a consumer by account_no
    public function destroy($account_no)
    {
        // Find and delete the consumer by account_no
        $consumer = Consumer::where('account_no', $account_no)->first();
        
        if (!$consumer) {
            return response()->json(['message' => 'Consumer not found'], 404);
        }

        $consumer->delete();
        return response()->json(null, 204); // No content response
    }

    // View a PDF associated with a consumer using account_no
    public function viewPdf($account_no)
    {
        $consumer = Consumer::where('account_no', $account_no)->first();

        if (!$consumer || !$consumer->pdf_path) {
            return response()->json(['message' => 'PDF not found'], 404);
        }

        return response()->file(storage_path("app/public/{$consumer->pdf_path}"));
    }

    // Search for a consumer by account_no or nic_no
    public function search(Request $request)
    {
        $accountNo = $request->query('account_no');
        $nicNo = $request->query('nic_no');

        // Search consumer using account_no or nic_no
        $query = Consumer::query();
        if ($accountNo) {
            $query->where('account_no', $accountNo);
        }
        if ($nicNo) {
            $query->where('nic_no', $nicNo);
        }

        $consumers = $query->get();

        if ($consumers->isNotEmpty()) {
            if ($nicNo && $consumers->count() > 1) {
                // If multiple account numbers are found for the same NIC number
                $accountNumbers = $consumers->pluck('account_no');
                return response()->json(['account_numbers' => $accountNumbers], 200);
            } else {
                // If a single consumer is found
                return response()->json($consumers->first(), 200);
            }
        } else {
            return response()->json(['message' => 'Consumer not found'], 404);
        }
    }

    // Count the total number of consumers
    public function count()
    {
        $total = Consumer::count();
        return response()->json(['total' => $total], 200);
    }

    // Get the counts for each region
    public function regionCounts()
    {
        $regionCounts = Consumer::select('region', \DB::raw('count(*) as total'))
            ->groupBy('region')
            ->pluck('total', 'region');

        return response()->json($regionCounts);
    }

    // Get the counts for each WSS
    public function wssCounts()
    {
        $wssCounts = Consumer::select('wss', \DB::raw('count(*) as total'))
            ->groupBy('wss')
            ->pluck('total', 'wss');

        return response()->json($wssCounts);
    }
}