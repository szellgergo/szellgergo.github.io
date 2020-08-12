<?php
  namespace App\Controllers;
  use Core\Controller;
  use Core\H;
  use App\Models\Users;

  class DashboardController extends Controller {

    public function __construct($controller, $action) {
      parent::__construct($controller, $action);
    }

    public function indexAction() {
      $this->view->render('dashboard/index');
    }

    public function testAjaxAction(){
      $resp = ['success'=>true,'data'=>['id'=>23,'name'=>'Curtis','favorite_food'=>'bread']];
      $this->jsonResponse($resp);
    }
  }
