<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header("Content-Type: text/html;charset=utf-8");

if(! empty($_GET)){
    //se enviaron parametros por el método _GET
    $id =(isset($_GET["id"])?$_GET["id"]:"");
    $volumen =(isset($_GET["volumen"])?$_GET["volumen"]:"");
    $nombre =(isset($_GET["nombre"])?$_GET["nombre"]:"");
    $correo=(isset($_GET["correo"])?$_GET["correo"]:"");
    $producto=(isset($_GET["producto"])?$_GET["producto"]:"");
    $costo=(isset($_GET["costo"])?$_GET["costo"]:"");
    http_response_code(200);

    echo $id.",".$volumen.",".$nombre.",".$correo.",".$producto.","
    .$costo;
}else{
    http_response_code(400);
    echo "sin datos recibidos";
}
exit();
?>