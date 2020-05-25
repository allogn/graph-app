<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Node extends Model
{
    // Defines one node of the graph.

    /**
     * Relation to the profile that corresponds the node.
     */
    public function profile()
    {
        return $this->hasOne('App\Profile');
    }
}
