<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header("Content-Type: text/html;charset=utf-8");

if(! empty($_GET)){
    //se enviaron parametros por el método _GET
    $iddelmovimiento=(isset($_GET["idmovimiento"])?$_GET["idmovimiento"]:"ninguno");
    $tipomovimiento =(isset($_GET["tipomovimiento"])?$_GET["tipomovimiento"]:"");
    $facturanom=(isset($_GET["facturanom"])?$_GET["facturanom"]:"");
    $total=(isset($_GET["toltal"])?$_GET["toltal"]:"");
    $totaliva=(isset($_GET["toltaliva"])?$_GET["toltaliva"]:"");
    $nombre=(isset($_GET["nombre"])?$_GET["nombre"]:"");
    http_response_code(200);

    echo $idmovimiento.",".$tipomovimiento.",".$factuanom.",".$total.",".$totaliva.","
    .$nombre;
}else{
    http_response_code(400);
    echo "sin datos recibidos";
}
exit();
?>