<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Node extends Model
{
    // Defines one entry point in the structure.

    /**
     * Relation to the profile that entered the structure through the node.
     */
    public function profile()
    {
        return $this->hasOne('App\Profile');
    }
}
