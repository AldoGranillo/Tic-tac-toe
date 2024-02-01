let jugadorUno = true;
let cells = document.getElementsByClassName("celda");

for (let i = 0; i < cells.length; i++) {
   cells[i].addEventListener("click", movimientos);
}

function movimientos(e) {
   let cellValue = e.target.innerHTML;
   if (!cellValue.length) {
      e.target.innerHTML = jugadorUno ? "x" : "o";
      jugadorUno = !jugadorUno;
      validarCledas(0, 1, 2);
      validarCledas(3, 4, 5);
      validarCledas(6, 7, 8);
      validarCledas(0, 3, 6);
      validarCledas(1, 4, 7);
      validarCledas(2, 5, 8);
      validarCledas(0, 4, 8);
      validarCledas(6, 4, 2);
   }
}

function validarCledas(c1, c2, c3) {
   if (
      cells[c1].innerHTML.length &&
      cells[c1].innerHTML == cells[c2].innerHTML &&
      cells[c2].innerHTML == cells[c3].innerHTML
   ) {
      mostrarGanador(cells[c1].innerHTML);
      reset();
   } else if (empate()) {
      reset();
   }
}

function mostrarGanador(player) {
   document.querySelector("#resultados").innerHTML = player + " win";
}

function empate() {
   let empate = true;
   for (let cell of cells) {
      if (!cell.innerHTML.length) {
         empate = false;
         break;
      }
   }
   if (empate) {
      reset();
      document.querySelector("#resultados").innerHTML = "Es un empate";
   }
}

function reset() {
   for (let cell of cells) {
       cell.innerHTML = "";
   }
   jugadorUno = true;
   setTimeout(function() {
       document.querySelector("#resultados").innerHTML = "";
   }, 1000);
}
