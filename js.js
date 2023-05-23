//promenljive
// var niz = [];
//var brojevi=[];
var dobitak = document.getElementById("dobitak");
var uvecano = document.getElementById("broj_uvecano");
var brojevisu = document.getElementById("brojeviSu");
var brojevi = new Array();

//izbor
for (let i = 0; i < 6; i++) {
  var tabela = document.querySelector("table");
  var red = document.createElement("tr");
  for (let j = 1; j < 9; j++) {
    
    
    var celija = document.createElement("td");
    celija.innerHTML = `<label class="izbor" for="${
      i * 8 + j
    }"><input type="checkbox" value="${i * 8 + j}" id="${
      i * 8 + j
    }" class="checkbox"> <div class="okvirbroja"> ${i * 8 + j} </div> </label>`;
    red.appendChild(celija);
    tabela.appendChild(red);

    var checkbox = document.querySelectorAll(".checkbox");

    switch (j) {
      case 1:
        celija.classList.add("crveni");
        break;
      case 2:
        celija.classList.add("zeleni");
        break;
      case 3:
        celija.classList.add("plavi");
        break;
      case 4:
        celija.classList.add("ljubicasti");
        break;
      case 5:
        celija.classList.add("braon");
        break;
      case 6:
        celija.classList.add("zuti");
        break;
      case 7:
        celija.classList.add("narandzasti");
        break;
      case 8:
        celija.classList.add("crni");
        break;
      default:
        break;
    }
  }
}


//document.querySelector("button").addEventListener("click", kladiSe);
//document.querySelector("button").addEventListener("click", proveriDobitak);
document.querySelector("button").addEventListener("click", pokreniIzvlacenje);

function kladiSe() {
  var brojevi = new Array();
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      brojevi.push(parseInt(checkbox[i].value));
    }
  }
  for (let i = 0; i < brojevi.length; i++) {
    document.getElementById(
      "brojeviSu"
    ).innerHTML += `<img src="./img/${brojevi[i]}.png" alt="${brojevi[i]}" class="" style="scale:0.9">`;
  }
  return brojevi;
}

//izbor
var okvir = document.querySelectorAll(".okvirbroja");
checkbox.forEach((elem) => {
  elem.addEventListener("change", obelezi);
});
function obelezi() {
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      okvir[i].classList.add("izabrani");
    } else if (!checkbox[i].checked) {
      okvir[i].classList.remove("izabrani");
    }
  }
}


//izvuceni brojevi

function pokreniIzvlacenje(brojevi) {
  var ulog = document.getElementById("ulog").value;
 
  brojevi = kladiSe();
  var niz = [];
  var b = document.querySelectorAll("ul");
  let brojac = 0;
  let broj = 0;
  // while (brojac < 35) {
  //   var izvuceniBroj = Math.ceil(Math.random() * 48);

  //   if (niz.indexOf(izvuceniBroj) == -1) {
  //     niz.push(izvuceniBroj);

  //   }}
  //  var prekid=   setInterval(function() {
  //       brojac++;
  //       b[brojac-1].innerHTML = `<img src="./img/${izvuceniBroj}.png" alt="${izvuceniBroj}" style="scale:0.7" ${(brojac-1).id} `
  //       if (brojac>34){clearInterval(prekid)}
  //     },500)
  var izvlacenje = setInterval(function () {
    let izvuceniBroj = Math.ceil(Math.random() * 48);
    if (niz.indexOf(izvuceniBroj) == -1) {
      niz.push(izvuceniBroj);
      brojac++;
      b[
        brojac - 1
      ].innerHTML = `<img src="./img/${izvuceniBroj}.png" alt="${izvuceniBroj}" style="scale:0.9"> `;
      b[brojac - 1].style.animation = "animacija2 1.5s";
      if (brojevi.includes(izvuceniBroj)) {
        broj++;
        var slike = Array.from(brojevisu.children);
        var slika = slike.filter(
          (elem) => elem.getAttribute("alt") == izvuceniBroj
        );
        slika.forEach((elem) => elem.classList.add("grayscale"));
        if (broj == brojevi.length) {
          console.log(`dobitak na x ${b[brojac - 1].id}`);
          dobitak.innerHTML = `Vas dobitak je ${ulog * b[brojac - 1].id} RSD`;
        }
      }
      uvecano.innerHTML = `<img src="img/${izvuceniBroj}.png" alt="${izvuceniBroj}"></img>`;
      uvecano.style.animation = "animacija 1s infinite";
      if (brojac > 34) {
        clearInterval(izvlacenje);
        uvecano.style.animation = "none";
      }
    } else {
      uvecano.style.animation = "none";
    }
  }, 1000);
  return niz;
}

var strelice = document.getElementById("strelice")