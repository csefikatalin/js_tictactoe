#TicTacToe játék 

## Feladatspecifikáció

Készítsd el a 3x3-as amőba játékot a minta alapján!
A 9 elem 9 div legyen. Minden div-ben legyen egy p tag. 
Az elemekre kattintva a p tagbe kerüljön bele a O, vagy az X jel, attól függően, hogy ki következik. Amelyik elemre már kattintottak, arra már ne lehessen többé kattintani. 
Minden lépésben ellenőrizzük a győzelmet! Ha valaki győzött, ne lehessen többé kattintani az elemekre. Írja ki a győztes nevét. Döntetlen esetén is jelezze a program. 
Továbbfejlesztési lehetőség nxn es táblára és 5 egymás melletti elemre. 

## Feladat egy lehetséges megoldása

Kezdő alap JAvaScript ismereteket felhasználva készült a main ágon látható megoldás. 
Hogy van felépítve a program? 
Melyik metódusnak mi  a szerepe? Mi a véleményed róla programozóként? Jól szét van bontva metódusokra? Hogy lehetne még szétbontani? Mit lehet jól tesztelni és mit nem? 

# 1. feladat : refaktorizáljuk a kódot!

Bontd szét a kódot további függvényekre, eljárásokra oly módon, hogy minél jobban megfeleljen a tiszta kód elveinek: 

1. Egy metódus csak egy dolgot csináljon. 
2. Max 5-10 sorból álljon. 
3. A működési logika és a kiíró logika váljon szét. 
4. Beszédes metódusnevek, olvasható kód- egy metódusból nyugodtan hívhatunk másik metódust, ha úgy olvashatóbb lesz a kód.
5. A kiírás az jellemzően eljárás, a számítás, vagy a program állapotának előállítása függvény.
6. Inkább lokális változókat használjunk, csak azt adjuk át paraméterként, amire a másik metódusnak szüksége van. 


Egy lehetséges refaktorizáció látható a refaktorizalas1 branchen. 

### Gondold tovább! Te mit írnál még át? Hogy építenéd fel a programot? 

# 2. feladat : tesztelés

Mit tudunk fekete dobozos módszerrel tesztelni és mit fehér dobozos módszerrel? (Jelenlegi tudásunk szerint)

Tesztelés menete: 

4 fős csapatokban dolgozzatok! 

Egyvalaki forkolja le Dominik repóját és hívja meg a többieket collaborátornak!

Osszátok szét a feladatokat egymás között!

A felület tesztelés a word dokumentumban történik a tesztesetek megírásával.

Függvények tesztelése (unit tesztek)

Teszteljétek a 

jatekListaFeltolt(meret) 
vizszintes_ell(meret, lista)
fuggoleges_ell(meret, lista)
atlo_ell(meret, lista) 
metódusokat! Hozz létre tesztfüggvényeket ezek ellenőrzésére!
