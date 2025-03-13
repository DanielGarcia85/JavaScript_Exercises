<?php
   
    if (rand(1,10)<=3) {
        http_response_code(204);
        exit();
    };
    
    $p = array();
    $p['x'] = round(rand(40, 300));
    $p['y'] = round(rand(30, $p['x']*0.5));
    $p['r'] = round(rand(1,3));
    $n = rand(1,10);
    if ($n<5) $p['style'] = "rgba(255,0,0,1)";
    else if ($n<7) $p['style'] = "rgba(255,86,55,0.5)";
    else if ($n<9) $p['style'] = "rgba(255,86,55,1)";
    else $p['style'] = "rgba(255,0,0,0.5)";            
    $res = array();
    $res['date'] = Date("Y-m-d H:i:s");
    $res['impact'] = $p;
    header("content-type:text/json");
    echo(json_encode($res));
?>
