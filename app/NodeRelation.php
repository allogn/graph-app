<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NodeRelation extends Model
{
    // Defines one existing relationship between two nodes.

    /**
     * Get the node that has invited the target node.
     */
    public function source_node()
    {
        return $this->hasOne('App\Node');
    }

    /**
     * Get the node that was invited by the source node.
     */
    public function target_node()
    {
        return $this->hasOne('App\Node');
    }
}
