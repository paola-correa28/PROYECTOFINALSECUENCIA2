<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header("Content-Type: text/html;charset=utf-8");

if(! empty($_GET)){
    //se enviaron parametros por el método _GET
    $Idproducto=(isset($_GET["idproducto"])?$_GET["idproducto"]:"");
    $nombre=(isset($_GET["nombre"])?$_GET["nombre"]:"");
    $caracteristica=(isset($_GET["caracteristica"])?$_GET["caracteristica"]:"");
    $marca=(isset($_GET["marca"])?$_GET["marca"]:"");
    $cantidad=(isset($_GET["cantidad"])?$_GET["cantidad"]:"");
    $proveedor=(isset($_GET["proveedor"])?$_GET["proveedor"]:"");
    http_response_code(200);

    echo $idproducto.",".$nombre.",".$caracteristicas.",".$marca.",".$cantidad.",".$proveedor;
}else{
    http_response_code(400);
    echo "sin datos recibidos";
}
exit();
?>