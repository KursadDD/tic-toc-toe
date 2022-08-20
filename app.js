let cellsTable = document.querySelectorAll(".cell-item");
let player = document.getElementById("player");
let control = "X";
let toast = document.getElementById("toast");
let popup = document.getElementById("popup");
let popupText = document.getElementById("popup-text");
let newGame = document.getElementById("newGame");

startGame();
//başlangıçta tüm hücrelere tıklama olayı veren fonksiyon
function startGame() {
  player.innerHTML = `${control} ' sırası`;
  cellsTable.forEach((cell) =>
    cell.addEventListener("click", () => chooseArea(cell))
  );
}

//seçilen alana X veya O yazarak sırayı değiştiren fonlsiyon
function chooseArea(selectCell) {
  if (selectCell.textContent == "") {
    selectCell.textContent = control;
  } else {
    selectCell.style.color = "red";
    toast.style.display = "inline";
    setTimeout(changeColor, 2000);
    function changeColor() {
      selectCell.style.color = "black";
      toast.style.display = "none";
    }
    return;
  }
  if (control === "X") {
    control = "O";
    player.innerHTML = `${control} ' sırası`;
  } else {
    control = "X";
    player.innerHTML = `${control} ' sırası`;
  }
  winControl();
}

//oyun bittiğinde başlat başlatmak için ayarları sıfırlayan fonksiyon
newGame.addEventListener("click", () => newGameStart());

function newGameStart() {
  control = "X";
  player.innerHTML = `${control} ' sırası`;
  cellsTable.forEach((cell) => (cell.textContent = ""));
  popup.style.display = "none";
  player.style.display = "block";
  cellsTable.forEach((cell) => (cell.style.pointerEvents = "auto"));
  chooseArea();
}

//kazanan kontrolü yapan fonksiyonları çalıştıran fonksiyon
function winControl() {
  winRowsControl();
  winColumnsControl();
  winCrossControl();
}

//beraberlik kontrolü yapan fonksiyon
function tieControl() {
  let count = 0;
  for (var i = 0; i < 9; i++) {
    if (cellsTable[i].textContent != "") {
      count++;
      if (count == 9) {
        popupText.innerHTML = `BERABERLİK`;
        cellsTable.forEach((cell) => (cell.style.pointerEvents = "none"));
        popup.style.display = "block";
        player.style.display = "none";
        return;
      }
    }
  }
  count = 0;
}

//kazananı ekrana yazan fonksiyon
function whoWin(winGamer) {
  popupText.innerHTML = `${cellsTable[winGamer].textContent} ' KAZANDI`;
  cellsTable.forEach((cell) => (cell.style.pointerEvents = "none"));
  popup.style.display = "block";
  player.style.display = "none";
}

//satırlarda kazanan kontrolü yapan fonksiyon
function winRowsControl() {
  if (
    cellsTable[0].textContent == cellsTable[1].textContent &&
    cellsTable[0].textContent == cellsTable[2].textContent &&
    cellsTable[0].textContent != ""
  ) {
    whoWin(0);
    return;
  }
  if (
    cellsTable[3].textContent == cellsTable[4].textContent &&
    cellsTable[3].textContent == cellsTable[5].textContent &&
    cellsTable[3].textContent != ""
  ) {
    whoWin(3);
    return;
  }
  if (
    cellsTable[6].textContent == cellsTable[7].textContent &&
    cellsTable[6].textContent == cellsTable[8].textContent &&
    cellsTable[6].textContent != ""
  ) {
    whoWin(6);
    return;
  }
  tieControl();
}
//kolonlarda kazanan kontrolü yapan fonksiyon
function winColumnsControl() {
  if (
    cellsTable[0].textContent == cellsTable[3].textContent &&
    cellsTable[0].textContent == cellsTable[6].textContent &&
    cellsTable[0].textContent != ""
  ) {
    whoWin(0);
    return;
  }
  if (
    cellsTable[1].textContent == cellsTable[4].textContent &&
    cellsTable[1].textContent == cellsTable[7].textContent &&
    cellsTable[1].textContent != ""
  ) {
    whoWin(1);
    return;
  }
  if (
    cellsTable[2].textContent == cellsTable[5].textContent &&
    cellsTable[2].textContent == cellsTable[8].textContent &&
    cellsTable[2].textContent != ""
  ) {
    whoWin(2);
    return;
  }
  tieControl();
}

//köşegenlerde kazanan kontrolü yapan fonksiyon
function winCrossControl() {
  if (
    cellsTable[0].textContent == cellsTable[4].textContent &&
    cellsTable[0].textContent == cellsTable[8].textContent &&
    cellsTable[0].textContent != ""
  ) {
    whoWin(0);
    return;
  }
  if (
    cellsTable[2].textContent == cellsTable[4].textContent &&
    cellsTable[2].textContent == cellsTable[6].textContent &&
    cellsTable[2].textContent != ""
  ) {
    whoWin(2);
    return;
  }
  tieControl();
}
