<!doctype html>
<!--
author: Joost Bakker
-->
<html>
  <head>
    <meta name="desciption" content="The game of life">
    <meta name="author" content="Joost Bakker & Noah Kastelein">
    <meta name="keywords" content="game,Game,of,Of,life,Life">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex">
    <link rel="Stylesheet" href="Style.css">
  </head>
  <body>
    <p class="author">
     PHP/CSS: <a href="https://bakkernillesen.nl/~Joost/PHP/Frondend_Javascripting.html">Joost Bakker.</a><br>
     JavaScript: <a href="http://noahk.ddns.net">Noah Kastelein.</a>
    </p>
    <form method="GET">
      Height: <input type="number" name="height" required><br>
      Width: <input type="number" name="width" required><br>
      <input type="submit" value="set">
    </form>
    <br>
<?php
$width = 50;
$height = 20;
if(isset($_GET["width"])) {
  $width = (int)$_GET["width"];
}
if(isset($_GET["height"])) {
  $height = (int)$_GET["height"];
}
echo "<button onclick= \"nextGen($width, $height)\">Next Gen</button>";
echo "<button onclick= \"nextGenAuto($width, $height)\">Auto</button>";
echo "<table>";
for($y = 0; $y < $height; $y++) {
  echo "<tr>";
  for($x = 0; $x < $width; $x++) {
	echo "<td id=\"x".$x."y".$y."\" onclick=\"clickEvent(".$x.",".$y.")\">&nbsp;</td>";
  }
  echo "</tr>";
}
?>
    <script src="game.js"></script>
  </body>