<?php
$nom = $_GET['nom'] ?? 'paella';
?>
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Receptes catalanes</title>
    <link rel="stylesheet" href="estil.css">
</head>
<body>
    <div id="missatge">
        <h2>desc: <?php echo $receptes[$nom]['descripcio']; ?> </h2>
        <br\>
        <p>desc: <?php echo $receptes[$nom]['descripcio']; ?> </p>
    </div>
    <script src="script.js"></script>
</body>
</html>