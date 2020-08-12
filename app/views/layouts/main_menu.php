<?php
  use Core\Router;
  use Core\H;
  use App\Models\Users;
  $menu = Router::getMenu('menu_acl');
  $currentPage = H::currentPage();
?>
<nav class="navbar navbar-dark navbar-expand-lg">
 
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="<?=PROOT?>home"><?=MENU_BRAND?></a>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="nav navbar-nav row">
        <?php foreach($menu as $key => $val):
          $active = ''; ?>
          <?php if(is_array($val)): ?>
            <li class="dropdown col">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><?=$key?> <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <?php foreach($val as $k => $v):
                  $active = ($v == $currentPage)? 'active':''; ?>
                  <?php if($k == 'separator'): ?>
                    <li role="separator" class="divider"></li>
                  <?php else: ?>
                    <li><a class="<?=$active?>" href="<?=$v?>"><?=$k?></a></li>
                  <?php endif; ?>
                <?php endforeach; ?>
              </ul>
            </li>
          <?php else:
            $active = ($val == $currentPage)? 'active':''; ?>
            <li class="col"><a class="<?=$active?>" href="<?=$val?>"><?=$key?></a></li>
          <?php endif; ?>
        <?php endforeach; ?>
      </ul>
    </div>
    <ul class="nav navbar-nav navbar-right">
        <?php if(Users::currentUser()): ?>
          <li><a href="#">Szia <?=Users::currentUser()->fname?></a></li>
         
        <?php endif; ?>
      </ul>
  </nav>

