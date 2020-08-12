<?php
namespace App\Models;

use Core\Model;


class Sensor extends Model {

    public $id;
    public $current;
    public $did;
    public $date;

    public function __construct($user='') {
        $table = 'current';
        parent::__construct($table);
    
    }
    //Itt kérdezem le a szenzorok nevét a felületre amikor az betöltődik
    public function selectSensorsName(){
        $query='SELECT DISTINCT did FROM `current`';
        return $this->_db->query($query);
    }



}
