<?php
  $bdd = new mysqli("localhost", "root", "", "NOM_DE_VOTRE_BASE");
  if ($bdd->connect_error) {die("Impossible de se connecter");}
  $bdd->set_charset("utf-8");

  if (isset($_GET['recherche'])) {
    $recherche = addslashes($_GET['recherche']);
    $sql = "SELECT * from sommets where som_nom like '$recherche%'";
    $rec = $bdd->query($sql) or die($bdd->error);

    header("Content-type: text/xml");
    echo("<sommets>");
    while ($row = $rec->fetch_object()) {
      $row->som_nom = utf8_encode($row->som_nom);
      $row->som_region = utf8_encode($row->som_region);

      echo("<sommet altitude=\"$row->som_altitude\">");
      echo("<nom>$row->som_nom</nom>");
      echo("<region>$row->som_region</region>");
      echo("</sommet>");
    }
    echo("</sommets>");
}
?>
