<?php $this->start('body')?>
<h2>Dashboard</h2>
<div class="row"><!--Ebbe a divbe jönnek a szenzorok -->
    <?php foreach($this->sensorNames as $sName): ?>
        <div class="col" onClick="update('<?=$sName->did?>')" style="float:left;margin:1px;padding:4px;background:grey;height:100px;width:200px;border: 0px white solid;">

        </div>
    <?php endforeach; ?>
</div>
<?php $this->end()?>
