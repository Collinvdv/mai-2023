<?php
    // if then redirect /richting?richtingId=1 to /richting/1
    if (isset($_GET['richtingId'])) {
        $richtingId = $_GET['richtingId'];

        if ($richtingId == 1) header("Location: /medewerker-fastfood");
        if ($richtingId == 2) header("Location: /medewerker-kamerdienst");
        if ($richtingId == 3) header("Location: /medewerker-spoelkeuken");
        if ($richtingId == 4) header("Location: /keukenmedewerker");
        if ($richtingId == 5) header("Location: /winkelmedewerker");
        if ($richtingId == 6) header("Location: /magazijnmedewerker");
        if ($richtingId == 7) header("Location: /");
        if ($richtingId == 8) header("Location: /verpakker");
        if ($richtingId == 9) header("Location: /logistiek-assistent");
        if ($richtingId == 10) header("Location: /huishoudhulp-zorg");
        if ($richtingId == 11) header("Location: /duaal-leren");
        die();
    }
