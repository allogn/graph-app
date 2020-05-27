<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SignUpTest extends TestCase
{

    use RefreshDatabase;

    /**
     * A successful sign up test.
     *
     * @return void
     */
    public function testSuccessfulSignUp()
    {
        $response = $this->post('/register', [
            'email' => 'new_email@email.com',
            'password' => 'password',
            'password_confirmation' => 'password',
            'name' => 'username'
        ]);
        $response->assertRedirect('/home');
    }
}
