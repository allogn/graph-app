<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NodeRelation extends Model
{
    // Defines on edge of the graph.

    /**
     * Get the source node.
     */
    public function source_node()
    {
        return $this->hasOne('App\Node');
    }

    /**
     * Get the target node.
     */
    public function target_node()
    {
        return $this->hasOne('App\Node');
    }
}
