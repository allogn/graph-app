<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class LoginTest extends DuskTestCase
{
    /**
     * A login page test
     *
     * @return void
     */
    public function testLoginBox()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/login')
                    ->assertSee('My App');
        });
    }
}
