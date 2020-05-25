<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'deterministic_name',
            'email' => 'deterministic@email.com',
            'password' => Hash::make('password')
        ]);

        $regular_users = factory(App\User::class, 3)->make();
        foreach ($regular_users as $user) {
            $user->save();
        }

        $not_verified_email_users = factory(App\User::class, 1)->states("not_verified_email")->make();
        foreach ($not_verified_email_users as $user) {
            $user->save();
        }
    }
}
