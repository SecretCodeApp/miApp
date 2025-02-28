<?php
// Permite el acceso desde cualquier origen (ajusta esto según tus necesidades)
header("Access-Control-Allow-Origin: *");
// Define el tipo de contenido como JSON
header("Content-Type: application/json");

// URL del recurso en la máquina (HTTP)
$url = "http://200.59.9.141:2500/tara";

// Inicializa cURL
$ch = curl_init($url);

// Configura cURL para devolver el resultado en lugar de imprimirlo directamente
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Opcional: establece un timeout (en segundos) para evitar bloqueos prolongados
curl_setopt($ch, CURLOPT_TIMEOUT, 10);

// Ejecuta la petición
$response = curl_exec($ch);

// Manejo de errores
if (curl_errno($ch)) {
    $error_msg = curl_error($ch);
    http_response_code(500);
    echo json_encode(["error" => "Error al obtener datos: $error_msg"]);
    curl_close($ch);
    exit;
}

// Cierra la sesión cURL
curl_close($ch);

// Devuelve la respuesta obtenida
echo $response;
?>
