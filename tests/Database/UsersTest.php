<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UsersTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test existence of the user table, and states of the user factory
     *
     * @return void
     */
    public function testUserTable()
    {
        $this->seed("UserSeeder");

        $this->assertDatabaseHas('users', [
            'name' => 'deterministic_name',
            'email' => 'deterministic@email.com'
        ]);

        $this->assertDatabaseHas('users', [
            'email_verified_at' => null
        ]);
    }
}