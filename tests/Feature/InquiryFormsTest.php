<?php

namespace Tests\Feature;

use Tests\TestCase;

class InquiryFormsTest extends TestCase
{
    public function test_marketing_pages_load_successfully(): void
    {
        foreach (['/', '/products', '/support', '/about-us', '/wholesale', '/news', '/verification'] as $uri) {
            $this->get($uri)->assertOk();
        }
    }

    public function test_support_form_submits_successfully(): void
    {
        $response = $this->post('/support', [
            'name' => 'Ash Example',
            'email' => 'ash@example.com',
            'topic' => 'Warranty question',
            'message' => 'Battery indicator stopped responding after one day.',
        ]);

        $response
            ->assertRedirect(route('support').'#contact')
            ->assertSessionHas('status.message', 'Support request sent. The details were logged for manual follow-up.');
    }

    public function test_verification_form_submits_successfully(): void
    {
        $response = $this->post('/verification', [
            'serial_code' => 'VRF-123456',
            'product_type' => 'Disposable device',
            'purchase_region' => 'Dhaka',
        ]);

        $response
            ->assertRedirect(route('verification').'#manual-review')
            ->assertSessionHas('status.message', 'Verification request received. The code was logged for manual review.');
    }

    public function test_wholesale_form_submits_successfully(): void
    {
        $response = $this->post('/wholesale', [
            'company' => 'Roop Retail',
            'buyer_email' => 'buyer@example.com',
            'region' => 'Bangladesh',
            'monthly_volume' => '500 - 2,000 units',
            'message' => 'Interested in starter stock and verification-supported batches.',
        ]);

        $response
            ->assertRedirect(route('wholesale').'#trade-inquiry')
            ->assertSessionHas('status.message', 'Wholesale inquiry submitted. The trade team details were logged for follow-up.');
    }

    public function test_support_form_requires_all_fields(): void
    {
        $response = $this->from('/support')->post('/support', []);

        $response
            ->assertRedirect('/support')
            ->assertSessionHasErrors(['name', 'email', 'topic', 'message']);
    }
}
