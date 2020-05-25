<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class BasicTest extends DuskTestCase
{
    /**
     * A basic page test
     *
     * @return void
     */
    public function testBasic()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')->assertPathIs('/');
        });
    }
}
