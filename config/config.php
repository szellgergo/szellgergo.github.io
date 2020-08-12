<?php

define('DEBUG',true);

define( 'DB_NAME','onlineidea');
define('DB_USER','root');
define('DB_PASSWORD','');
define('DB_HOST','127.0.0.1:3308');//Azt a rohadt portot bele kell írni 

define('DEFAULT_CONTROLLER','Home');
define('DEFAULT_LAYOUT','default');

define('PROOT', '/szellgergo.github.io/');//Ez valszeg szar ennek utánna kell nézni

define('SITE_TITLE','OnlineIdea');
define('MENU_BRAND','OnlineIdea');

define('CURRENT_USER_SESSION_NAME','kwXeusqldkiIKjehsLQZJFKJ');//session name for logged in user
define('REMEMBER_ME_COOKIE_NAME', 'JAJEI6382LSJVlkdjfh3801jvD');// cookie name for logged in user remember me
define('REMEMBER_ME_COOKIE_EXPIRY', 2592000); // time in seconds for remember me cookie to live (30 days)

define('ACCESS_RESTRICTED', 'Restricted'); //controller name for the restricted redirect