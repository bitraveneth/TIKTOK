<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;

class InquiryController extends Controller
{
    public function submitSupport(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email', 'max:255'],
            'topic' => ['required', Rule::in($this->supportTopics())],
            'message' => ['required', 'string', 'max:2000'],
        ]);

        Log::info('Support inquiry submitted.', $validated);

        return redirect()
            ->to(route('support').'#contact')
            ->with('status', ['message' => 'Support request sent. The details were logged for manual follow-up.']);
    }

    public function submitVerification(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'serial_code' => ['required', 'string', 'min:4', 'max:120'],
            'product_type' => ['required', Rule::in($this->verificationProductTypes())],
            'purchase_region' => ['nullable', 'string', 'max:120'],
        ]);

        Log::info('Verification request submitted.', $validated);

        return redirect()
            ->to(route('verification').'#manual-review')
            ->with('status', ['message' => 'Verification request received. The code was logged for manual review.']);
    }

    public function submitWholesale(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'company' => ['required', 'string', 'max:160'],
            'buyer_email' => ['required', 'email', 'max:255'],
            'region' => ['required', 'string', 'max:120'],
            'monthly_volume' => ['required', Rule::in($this->wholesaleVolumes())],
            'message' => ['required', 'string', 'max:2000'],
        ]);

        Log::info('Wholesale inquiry submitted.', $validated);

        return redirect()
            ->to(route('wholesale').'#trade-inquiry')
            ->with('status', ['message' => 'Wholesale inquiry submitted. The trade team details were logged for follow-up.']);
    }

    /**
     * @return array<int, string>
     */
    private function supportTopics(): array
    {
        return [
            'Product verification',
            'Warranty question',
            'Retail support',
        ];
    }

    /**
     * @return array<int, string>
     */
    private function verificationProductTypes(): array
    {
        return [
            'Disposable device',
            'Pod system',
            'Flavor refill',
        ];
    }

    /**
     * @return array<int, string>
     */
    private function wholesaleVolumes(): array
    {
        return [
            'Under 500 units',
            '500 - 2,000 units',
            '2,000+ units',
        ];
    }
}
