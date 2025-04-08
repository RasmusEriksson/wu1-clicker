Lektion 1: 2025-03-11
    har för det mesta enbart försökt att denna lektion göra lite preperationer men har inte gått jätte-väl då jag inte riktigt vet hur eller vart jag ska börja.

    Jag har skissat på hur klickern kommer att se ut rent layout-messigt och har även bestämt mig för tema som då är "necromancer clicker".

    Jag har även tittat lite igenom javascript documentet och försökt att läsa igenom alla kommentarer samt förstå mig på hur systemet funkar.

Lektion 2: 2025-03-12
    Gjorde lite av detsamma som jag gjorde förra lektionen men med mer fokus på att försöka förstå mig på javascript och lära mig om vissa begrepp som fanns där. Läste igenom länken som fanns på klassroom där man kunde läsa om javascript och tyckte den var väldigt användbar och lärorik. Även om logiken och grunderna var drygt detsamma så kunde jag i alla fall lära mig viss syntax som är speciellt för javascript och andra C språk.

    Gjorde även en lätt design i figma där jag provade på lite färger och annat, glömde men ska även prova på lite fonter där också för att se om jag kan hitta några bra som passar till det upplägget som jag vill köra med.

Lektion 3: 2025-03-20
    Började denna lektion med att börja skapa den egentliga sidan, Hade skapat lite bilder hemma på morgonen som jag använde för att skapa basen till det jag ville ha, en bakgrund och något man kan clicka. Lärde mig lite mer om JS syntax och annat. Inte så produktiv lektion men kändes som att jag fick något på gång i alla fall.

Lektion 4: 2025-03-25
    Försökte för det mesta börja formatera mer html och css denna lektion, fastnade lite på att försöka ordna layouten i upgraderingarna så komm inte så långt, fick i alla fall lite gjort

Lektion 5-6: 2025-04-02
    glömde bort att anteckna under dessa lektioner men gjorde mycket och kommer försöka komma ihåg vad jag gjorde.

    Till en början lyckades jag få till upgraderingarna att fungera genom kod! De ser mycket bättre ut nu och fungerar faktiskt då de har påverkan på spelet. Det upstod inte många problem men jag behövde tänka lite gällande hur jag skulle sätta upp det så att varje upgradering kunda ha sin egna bild. 
    Jag ville först göra detta genom att nästan preloada bilden och sedan på något sätt ändra background bilden genom kod men det började bli alldeles för complext alldeles för snabbt. Den metoden som jag till slut använde var att göra en ny css fil där jag har en mängd id stylings som enbart innehåller en bakgrundsbild. Det jag gör för upgraderingarna är att helt enkelt lägga till det id till den bilden som jag vill använda i datan för varje upgradeing och bara lägga till det id't till bilden av upgraderingen när den skapas.
    Spelet känns nu mycket mer som ett spel och jag börjar känna mig nöjd med projektet :D

Lektion 7: 2025-04-08
    Var hemma och hängig denna lektion men gjorde fortfarande lite jobb. Började med att skapa några nya ikoner till alla upgraderingar och sedan började att tinkra på att få köp knappen att bli snyggare.

    Sedan så ville jag också att köp knappen för varje uppgradering skulle vara röd när man inte kunde köpa den. Jag gjorde detta genom att när upgraderingen skapades så satte jag in viss info inom ett objekt varav varje key var namnet på upgraderingen. Inom varje key fanns sitt egna objekt där jag hade: amount, cost och upgraderings knappen. Detta gjorde så att jag lätt kunde komma åt dessa värden utifrån den lokala funktionen som jag sedan tidigare använde för att hantera upgraderingarna.

    Med det så kollade jag varje frame för varje upgradering om den hade mängden "souls" som krävdes eller inte och därefter om den redan hade classen "button_off" och beroende på om man hade mängden souls eller inte skulle den tas bort eller inte. Det var här som jag hade en hel del strul då jag inte kunde få det att fungera i ett tag även om logiken var rätt. Till slut märkte jag att det helt enkelt var ett formaterings fel och en måsvinge var på fel plats.

    Relativt nöjd med det jag gjorde den tiden som jag spenderade på det.


