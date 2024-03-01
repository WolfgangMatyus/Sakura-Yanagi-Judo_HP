<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Empfänger-E-Mail-Adresse
    $empfaenger_email = "office@sakura-yanagi-judo.at";

    // Betreff der E-Mail
    $betreff = "Neue Registrierung";

    // Erstellen Sie den E-Mail-Inhalt aus den Formulardaten
    $nachricht = "Neue Registrierung:\n\n";
    $nachricht .= "Vorname: " . $_POST["Vorname"] . "\n";
    $nachricht .= "Familienname: " . $_POST["Familienname"] . "\n";
    $nachricht .= "Strasse: " . $_POST["Strasse"] . "\n";
    $nachricht .= "Postleitzahl: " . $_POST["Postleitzahl"] . "\n";
    $nachricht .= "Wohnort: " . $_POST["Wohnort"] . "\n";
    $nachricht .= "Geboren am: " . $_POST["GeborenAm"] . "\n";
    $nachricht .= "Telefon: " . $_POST["Telefon"] . "\n";
    $nachricht .= "Nationalität: " . $_POST["Nationalität"] . "\n";
    $nachricht .= "Gesundheitliche Probleme: " . $_POST["gesundheitlicheProbleme"] . "\n";
    $nachricht .= "Email Adresse: " . $_POST["Email"] . "\n";

    // E-Mail versenden
    mail($empfaenger_email, $betreff, $nachricht);

    // Optional: Weiterleitung nach dem Absenden des Formulars
    header("Location: danke.html");
} else {
    // Wenn das Formular nicht korrekt aufgerufen wurde, wird eine Fehlermeldung ausgegeben
    echo "Es ist ein Fehler aufgetreten.";
}
?>