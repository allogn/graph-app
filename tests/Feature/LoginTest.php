<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Support\Facades\Hash;
use App\User;

class LoginTest extends TestCase
{

    use RefreshDatabase;

    /**
     * A successful login test.
     *
     * @return void
     */
    public function testSuccessfulWebLogin()
    {
        $user = factory(User::class)->create([
            'email' => "i-know-this-email@email.com",
            'password' => Hash::make('i-know-this-password')
        ]);
        $response = $this->post('/login', [
            'email' => "i-know-this-email@email.com",
            'password' => 'i-know-this-password'
        ]);
        $response->assertRedirect('/home');
    }

    /**
     * An unsuccessful web login test
     * 
     * @return void
     */
    public function testUnsuccessfulWebLogin()
    {
        $response = $this->post('/login', [
            'email' => "non-existing@email.com",
            'password' => 'blabla'
        ]);
        $response->assertSessionHasErrors(['email' => 'These credentials do not match our records.'])
                 ->assertRedirect('/'); # post request is assumed to have '/' as a current url (https://stackoverflow.com/a/41650931/4213576)
    }
}
