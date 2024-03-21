let kiJon = 0;
// a metódusok a hívás sorrendjében következzenek!
export function palya_valasztas() {
    const JATEKTER = document.querySelector("article > div");
    JATEKTER.innerHTML = `<select name="palya" id="palya" form="jatek">
      <option value="3">3x3</option>
      <option value="5">5x5</option>
      </select>`;
}

export function jatekKezdese() {
    const FORM_ELEM = document.querySelector("form");
    const GOMB = document.querySelector("form > button");

    FORM_ELEM.addEventListener("submit", function (e) {
        e.preventDefault();
        const FORM_DATA = new FormData(FORM_ELEM);
        const OBJ = Object.fromEntries(FORM_DATA);
        if (OBJ.j1 === "" || OBJ.j2 === "") {
            alert("Válassz nevet!");
        } else {
            if (GOMB.id === "letrehoz") {
                console.log(OBJ);
                letrehoz(OBJ.palya, OBJ); //itt nem kell külön a palya-t átadni, hiszen az is az OBJ része. De ezt nem vittem végig.
                gombKicserel();
            } else {
                location.reload(); // e helyett jobb, ha van egy init() függvény, ami alaphelyzetbe állít minden változót!
            }
        }
    });
}

function letrehoz(meret, formObj) {
    const JATEKTER = document.querySelector("article > div");
    JATEKTER.classList.remove("valaszto");
    JATEKTER.classList.add(`jatekter${meret}`);
    JATEKTER.innerHTML = jatekterOsszeAllit(meret);
    const JATEKLISTA = jatekListaFeltolt(meret);
    jatekMenet(meret, JATEKLISTA, formObj);
}
function jatekterOsszeAllit(meret) {
    let txt = "";
    for (let index = 0; index < meret * meret; index++) {
        txt += "<div class='kocka'><p></p></div>";
    }
    return txt;
}

function jatekListaFeltolt(meret) {
    const LISTA = [];
    for (let index = 0; index < meret * meret; index++) {
        LISTA[index] = " ";
    }
    return LISTA;
}
const JELEK = ["O", "X"];
function jatekMenet(meret, lista, formObj) {
    const KOCKA_ELEM = document.querySelectorAll(".kocka");

    let vege = false;
    lepesekAllapot(formObj);
    for (let index = 0; index < KOCKA_ELEM.length; index++) {
        KOCKA_ELEM[index].addEventListener("click", function () {
            if (lista[index] === " ") {
                /*  if (kiJon % 2 === 0) { // mi lenne, ha a jeleket egy tömbben tárolnánk: JELEK=["O","X"] és akkor még az elágazás sem kell. 
                    kijonBeiras("O", lista, index);
                } else {
                    kijonBeiras("X", lista, index);
                } */
                kijonBeiras(JELEK[kiJon % 2], lista, index);
                kiJon++;
                if (ellenoriz(meret, lista)) {
                    vege = true;
                    console.log(KOCKA_ELEM[0]);
                    nyertAllapot(KOCKA_ELEM, formObj.palya);
                }
                lepesekAllapot(formObj, vege, KOCKA_ELEM.length);
            }
        });
    }
}
function kijonBeiras(kovjatekos, lista, index) {
    const KOCKA_P_ELEM = document.querySelectorAll(".kocka > p");
    KOCKA_P_ELEM[
        index
    ].innerHTML += `<span class="jatek_elem">${kovjatekos}</span>`;
    lista[index] = kovjatekos;
}

function nyertAllapot(jelenlegi, palya) {
    const JATEKTER = document.querySelector(`.jatekter${palya}`);
    let txt = "";
    for (let index = 0; index < jelenlegi.length; index++) {
        txt += `<div class="kocka">${jelenlegi[index].innerHTML}</div>`;
    }
    JATEKTER.innerHTML = txt;
}

function lepesekAllapot(obj, vege, dontetlen) {
    const LEPESEK_ELEM = document.querySelector("aside");
    if (kiJon !== dontetlen) {
        if (kiJon % 2 === 0) {
            kovetkezoAllapotKiirasa(vege, obj.j1, obj.j2); //itt is át lehetne írni a JELEK lista alapján, és akkor nem kell elágazás
        } else {
            kovetkezoAllapotKiirasa(vege, obj.j2, obj.j1);
        }
    } else {
        LEPESEK_ELEM.innerHTML += `<p class="nyero">Döntetlen!</p>`;
    }
}
function kovetkezoAllapotKiirasa(vege, o, x) {
    const LEPESEK_ELEM = document.querySelector("aside");
    if (vege) {
        LEPESEK_ELEM.innerHTML += `<p class="nyero">${x}nyert!</p>`;
    } else {
        LEPESEK_ELEM.innerHTML += `<p>${
            kiJon + 1
        }. lépés: ${o} következik.</p>`;
    }
}

function gombKicserel() {
    const GOMB = document.querySelector("form > button");
    GOMB.id = "uj";
    GOMB.innerHTML = "Új játék!";
}

function ellenoriz(meret, lista) {
    let allapot = vizszintes_ell(meret, lista);
    allapot += fuggoleges_ell(meret, lista);
    allapot += atlo_ell(meret, lista);
    //const ALLAPOT_TOMB = allapot.split("@");//ez igazából nem kell, mert a sztringben is meg tudjuk keresni egy karaktersorozatot.
    //   console.log(allapot);
    //console.log(ALLAPOT_TOMB);
    const oJel = nyeroStringOsszeallit("O", meret);
    const xJel = nyeroStringOsszeallit("X", meret);
    if (allapot.indexOf(oJel) >= 0 || allapot.indexOf(xJel) >= 0) {
        return true;
    }
    return false; //hiba, hogy nem volt return false!
}
function nyeroStringOsszeallit(jel, meret) {
    let str = "";
    for (let index = 0; index < meret; index++) {
        str += jel;
    }
    return str;
}

function vizszintes_ell(meret, lista) {
    /* EZEK NAGYON JÓK! */
    let szoveg = "";
    for (let index = 1; index <= lista.length; index++) {
        szoveg += lista[index - 1];
        if (index % meret === 0) {
            szoveg += "@";
        }
    }
    return szoveg;
}

function fuggoleges_ell(meret, lista) {
    /* EZEK NAGYON JÓK! */
    let szoveg = "";
    for (let index = 0; index < meret; index++) {
        for (let j = 0; j < meret * meret; j += parseInt(meret)) {
            szoveg += lista[index + j];
        }
        szoveg += "@";
    }
    return szoveg;
}

function atlo_ell(meret, lista) {
    /* EZEK NAGYON JÓK! */
    let szoveg = "";
    //   console.log(meret);
    // bal felső -> jobb alsó átló
    for (let index = 0; index < lista.length; index += parseInt(meret) + 1) {
        szoveg += lista[index];
    }
    //jobb felső -> bal alsó átló
    szoveg += "@";
    for (
        let index = meret - 1;
        index <= lista.length - parseInt(meret);
        index += parseInt(meret) - 1
    ) {
        szoveg += lista[index];
    }

    return szoveg;
}
