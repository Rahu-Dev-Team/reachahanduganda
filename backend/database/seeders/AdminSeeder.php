<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$admin = User::where('email','info@reachahand.org')->first();
    	if(!$admin){
        	$admin = new User;
        }
        $admin->first_name = "Zaharah";
        $admin->last_name = "Nakawungu";
        $admin->username = "zaharah";
        $admin->email = "info@reachahand.org";
        $admin->password = Hash::make("admin123");
        $admin->position = 'Senior Administrator';
        $admin->role = "admin";
        $admin->save();

        $admin2 = User::where('email','zaharah@gmail.com ')->first();
        if(!$admin2){
            $admin2 = new User;
        }
        $admin2->first_name = "Jonathan";
        $admin2->last_name = "Bamuke";
        $admin2->username = "jonake";
        $admin2->email = "jonathandevops34@gmail.com ";
        $admin2->password = Hash::make("admin123");
        $admin2->role = "admin";
        $admin2->position = "administrator";
        $admin2->save();
    }
}