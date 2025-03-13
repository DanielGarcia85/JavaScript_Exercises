<?php

// Définir une plage de températures aléatoires
$minTemp = -10;
$maxTemp = 35;

// Générer une température aléatoire dans la plage définie
$temperature = rand($minTemp, $maxTemp);

// Créer un tableau associatif pour contenir la température
$response = array("temperature" => $temperature);

// Spécifier le type de contenu comme JSON
header('Content-Type: application/json');

// Retourner la réponse en format JSON
echo json_encode($response);

?>
