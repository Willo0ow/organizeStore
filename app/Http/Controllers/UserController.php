<?php

namespace App\Http\Controllers;
use Auth;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function currentUser(){
        return Auth::user()->email;
    }
}
