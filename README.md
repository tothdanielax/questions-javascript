# questions-javascript
Simple questions solved in JavaScript.


<h2>1. feladat: Diákok (1-students)</h2>
<p>Az <code>index.js</code> állományban adott a <code>students</code> tömb, amely diákokról tárol adatokat: az egyedi oktatási azonosítójukat (<code>code</code>), nevüket (<code>name</code>) és egy tárgyból elért jegyeiket (<code>grades</code>). A diákoknak egymástól eltérő számú jegyük lehet hiányzások, szorgalmik és egyéb pluszmunkák miatt. Oldd meg a következő feladatokat a <code>students</code> tömb felhasználásával!
<ul>
<li>a.  A <code>task1</code> azonosítójú elembe írd ki, hogy mi a neve az <code>xrpwmb</code> kódú diáknak!</li>
<li>b.  A <code>task2</code> azonosítójú elembe írd ki minden olyan diák nevét, akinek csupa 5-öse van!</li>
<li>c.  A <code>task3</code> azonosítójú elembe írd ki, hogy hány olyan diák van, aki megbukott (legalább 3 darab 1-ese van)!</li>
<li>d.  A <code>task4</code> azonosítójú elembe írd ki annak a diáknak a nevét, aki a legtöbb 1-est kapta!</li>
</ul>

<h2>2. feladat: Szójáték (2-word-game)</h2>
<p>A magyar nyelvben viszonylag sok ötbetűs szó van. Ezekkel lehet olyan játékot játszani, hogy a játékmester gondol egy ötbetűs szóra, a többiek pedig megpróbálják ezt kitalálni úgy, hogy ötbetűs szavakat mondanak. A játékmester mindegyik tippre megmondja, hogy <em>hány betű van benne a megfelelő helyen</em>. Ez alapján kell a többieknek beszűkíteniük és kitalálniuk a szót.</p>

<li>a.  Válassz egy véletlen szót a <code>wordList</code> tömbből, és jelenítsd meg a <code>details</code> elemen belüli div-ben (<code>divTheWord</code>)! (Ezt használhatod később a megoldás megtekintéséhez.)</li>
<li>b.  Jelenleg a beviteli mezőben ENTER-t nyomva vagy a gombra kattintva az űrlap elküldésre kerül. Akadályozd meg ezt a viselkedést JavaScript segítségével! Az űrlap elküldésekor a tényleges küldés helyett jelöld ki az beviteli mezőben lévő szöveget és töröld az űrlapon belüli <code>span</code> elem tartalmát!</li>
<li>c.  Az űrlap elküldésekor ellenőrizd, hogy a beírt szó pontosan 5 karakterből áll-e, és ha nem, akkor jelezd ezt az űrlapon belüli <code>span</code> elemben ("The length of the word is not 5!")!</li>
<li>d.  Az űrlap elküldésekor ellenőrizd, hogy a beírt szó szerepel-e a <code>wordList</code> tömbben, és ha nem, akkor jelezd ezt az űrlapon belüli <code>span</code> elemben ("The word is not considered acceptable!")!</li>
<li>e.  Számold meg, hogy a kitalált és a tippelt szóban hány karakter szerepel ugyanazon a helyen, majd írd ki ezt a számot konzolra!</li>
<li>f.  A táblázat első soraként szúrd be a tippelt szót és a hozzá tartozó egyezőségi számot!</li>
<li>g.  Ha kitaláltuk a szót, akkor azt jelezzük a táblázatsorban a <code>correct</code> stílusosztállyal, és jelenítsük meg az <code>end-of-game</code> azonosítójú div-et!</li>
<li>h.  Az <code>end-of-game</code> azonosítójú div-ben lévő gombra kattintva töltsük újra az oldalt, így újrakezdve a játékot!</li>
</ul>

<h2>3. feladat: Időbüntetések (3-time-penalty)</h2>
<p>Egy képzeletbeli versenyben a résztvevőket (most nem részletezett okok miatt) időbüntetésekkel sújtják. Egy olyan alkalmazást készítünk, amelyben megjelenítjük és kezeljük ezeket a büntetéseket. Az <code>index.js</code> állományban található egy példa adatszerkezet a versenyzők tárolására. Minden versenyzőről tároljuk az azonosítóját (<code>id</code>), a nevét (<code>name</code>) és az időbüntetéseiket (<code>penalties</code>). A <code>penalties</code> tömbben minden büntetésről tároljuk a kezdetét a JavaScript belső dátumformátumában (<code>timestamp</code>, ezredmásodperc) és a büntetés hosszát (ezredmásodperc).</p>

<ul>
<li>a.  A <code>contestants</code> azonosítójú listában jelenítsd meg a versenyzőket listaelemekként az <code>index.html</code>-ben megadott formában!</li>
<li>b.  Minden versenyzőnél jelenítsd meg az oldal betöltésekor kiszámított hátralévő kumulatív időbüntetést. Ehhez minden időbüntetésnél meg kell nézni, hogy hány másodperc a büntetés vége és az aktuális idő közötti különbség, és a pozitív értékeket összegezni kell. Ha a kumulatív összeg nagyobb mint 0, akkor adjuk a listaelemhez a <code>penalty</code> stílusosztályt!</li>
<li>c.  Egy versenyzőre kattintva jelenítsük meg a hozzá tartozó részleteket. A kattintott versenyző id-ját a megfelelő data attribútumból lehet kiolvasni. A részletek a <code>contestant-editor</code> azonosítójú div-ben vannak, ami kezdetben rejtett. Jelenítsük meg, és aktualizáljuk a <code>h2</code> elem tartalmát a versenyző nevével!
</li>
<li>d.  A részletek panelen jelenítsük meg a kiválasztott versenyző büntetéseinek listáját az <code>index.html</code>-ben megadott formátumban (kezdet + hossz, folyamatjelző, hátralévő idő). A progress elem <code>max</code> attribútuma legyen a <code>duration</code>, a <code>value</code> attribútuma az aktuálisan hátralévő idő (amit a progress után szövegesen is megjelenítünk)!</li>
<li>e.  Legyen lehetőség új versenyzőt hozzáadni az "Add new contestant" gombra kattintva!</li>
