﻿var $card1 = 0; var $card1id;
var $card2 = 0; var $card2id;
var $HP1 = 100; var $HP2 = 100;
var $MP1 = 0; var $MP2 = 0;
var $player = 1;
var $clickcnt = 0;
var $timer; var $limit; var $count;
var $cardmax = 26;


var $cardinfo = [];
$cardinfo[0] = [];$cardinfo[1] = []; $cardinfo[2] = [];
$cardinfo[3] = [];$cardinfo[4] = []; $cardinfo[5] = [];
$cardinfo[6] = [];$cardinfo[7] = []; $cardinfo[8] = [];
$cardinfo[9] = [];$cardinfo[10] = []; $cardinfo[11] = [];
$cardinfo[12] = [];$cardinfo[13] = []; $cardinfo[14] = [];
$cardinfo[15] = [];$cardinfo[16] = []; $cardinfo[17] = [];
$cardinfo[18] = [];$cardinfo[19] = []; $cardinfo[20] = [];
$cardinfo[21] = [];$cardinfo[22] = []; $cardinfo[23] = [];
$cardinfo[24] = [];$cardinfo[25] = []; $cardinfo[26] = [];

$cardinfo[0][0] = 'z01.png'; $cardinfo[0][1] = 0;
$cardinfo[1][0] = 'c01.png'; $cardinfo[1][1] = 1;
$cardinfo[2][0] = 'c01.png'; $cardinfo[2][1] = 1;
$cardinfo[3][0] = 'c02.png'; $cardinfo[3][1] = 2;
$cardinfo[4][0] = 'c02.png'; $cardinfo[4][1] = 2;
$cardinfo[5][0] = 'c03.png'; $cardinfo[5][1] = 3;
$cardinfo[6][0] = 'c03.png'; $cardinfo[6][1] = 3;
$cardinfo[7][0] = 'c04.png'; $cardinfo[7][1] = 4
$cardinfo[8][0] = 'c04.png'; $cardinfo[8][1] = 4;
$cardinfo[9][0] = 'c05.png'; $cardinfo[9][1] = 5;
$cardinfo[10][0] = 'c05.png'; $cardinfo[10][1] = 5;
$cardinfo[11][0] = 'c06.png'; $cardinfo[11][1] = 6;
$cardinfo[12][0] = 'c06.png'; $cardinfo[12][1] = 6;
$cardinfo[13][0] = 'c07.png'; $cardinfo[13][1] = 7;
$cardinfo[14][0] = 'c07.png'; $cardinfo[14][1] = 7;
$cardinfo[15][0] = 'c08.png'; $cardinfo[15][1] = 8;
$cardinfo[16][0] = 'c08.png'; $cardinfo[16][1] = 8;
$cardinfo[17][0] = 'c09.png'; $cardinfo[17][1] = 9;
$cardinfo[18][0] = 'c09.png'; $cardinfo[18][1] = 9;
$cardinfo[19][0] = 'c10.png'; $cardinfo[19][1] = 10;
$cardinfo[20][0] = 'c10.png'; $cardinfo[20][1] = 10;
$cardinfo[21][0] = 'c11.png'; $cardinfo[21][1] = 11;
$cardinfo[22][0] = 'c11.png'; $cardinfo[22][1] = 11;
$cardinfo[23][0] = 'c12.png'; $cardinfo[23][1] = 12;
$cardinfo[24][0] = 'c12.png'; $cardinfo[24][1] = 12;
$cardinfo[25][0] = 'c13.png'; $cardinfo[25][1] = 13;
$cardinfo[26][0] = 'c13.png'; $cardinfo[26][1] = 13;

var $setcard = [];
$setcard[0] = [];$setcard[1] = []; $setcard[2] = [];
$setcard[3] = [];$setcard[4] = []; $setcard[5] = [];
$setcard[6] = [];$setcard[7] = []; $setcard[8] = [];
$setcard[9] = [];$setcard[10] = []; $setcard[11] = [];
$setcard[12] = [];$setcard[13] = []; $setcard[14] = [];
$setcard[15] = [];$setcard[16] = []; $setcard[17] = [];
$setcard[18] = [];$setcard[19] = []; $setcard[20] = [];
$setcard[21] = [];$setcard[22] = []; $setcard[23] = [];
$setcard[24] = [];$setcard[25] = []; $setcard[26] = [];
$setcard[0][0] = 'z01.png'; $setcard[0][1] = 0;

window.onload = function shuffle(){
 var $arr = [];

 for(var i = 0; i < 26; i++){
  $arr[i] = i + 1;
 }

 $a = $arr.length;
 while($a){
  var j = Math.floor(Math.random() * $a);
  var t = $arr[--$a];
  $arr[$a] = $arr[j];
  $arr[j] = t;
 }

 for(var i = 1; i < $cardmax + 1; i++){
  $setcard[i][0] = $cardinfo[$arr[i - 1]][0];
  $setcard[i][1] = $cardinfo[$arr[i - 1]][1];
 }
 displayscore();
 resettimelimit();
}

function displayscore(){
 document.getElementById("player1").innerHTML = "1P HP:" + $HP1 + " MP:" + $MP1;
 document.getElementById("player2").innerHTML = "2P HP:" + $HP2 + " MP:" + $MP2;
}

function timelimit(){
 $count--;
 document.getElementById("time").innerHTML = $count;
 if($count == 0){

  if($clickcnt==1){
    $(document.getElementById($card1id)).attr("src", $cardinfo[0][0]);
   $clickcnt =0;
   $card1 = 0;
	}

  alert("タイムオーバー");
  changeplayer();
  resettimelimit();
 }
}

function resettimelimit(){
 clearInterval($limit);
 $count = 10;
 $limit = setInterval(timelimit, 1000);
 document.getElementById("time").innerHTML = $count;
}

function cardset(n){
 if($clickcnt != $cardmax){
  if($(document.getElementById(n.id)).attr("src") == $cardinfo[0][0]){
   $(document.getElementById(n.id)).attr("src", $setcard[n.id][0]);
   cardnumset($setcard[n.id][1], n.id);
   $clickcnt++;

   if($card1 != 0 && $card2 != 0){
    $timer = setInterval(result, 100);
   }
  }
 }
}

function cardnumset(n, id){
 if($card1 == 0) {
  $card1 = n;
  $card1id = id;
 }else{
  $card2 = n;
  $card2id = id;
 }
}

function result(){
 if($card1 == $card2){
  calcscore($card1);
  window.alert('成功');
 }else{
  changeplayer();
  window.alert('失敗');
  cardreturn();
 }
 displayscore();
 resettimelimit();

 clearInterval($timer);
 $card1 = 0; $card2 = 0;
 if($clickcnt == $cardmax){
  finalresult();
 }
}

function calcscore(n){
 if($player == 1){
  $HP2 -= 10;
  $MP1 += n;
  if($MP1 > 100){
   $MP1 = 100;
  }
 }else{
  $HP1 -= 10;
  $MP2 += n;
  if($MP2 > 100){
   $MP2 = 100;
  }
 }
 if($HP1 == 0 || $HP2 == 0){
  $clickcnt = $cardmax;
  displayscore();
  clearInterval($timer);
  finalresult();
 }
}

function changeplayer(){
 document.getElementById("player" + $player).className = "passive";
 if($player == 1){
  $player = 2;
 }else{
  $player = 1;
 }
 document.getElementById("player" + $player).className = "active";
}

function cardreturn(){
 $(document.getElementById($card1id)).attr("src", $cardinfo[0][0]);
 $(document.getElementById($card2id)).attr("src", $cardinfo[0][0]);
 $clickcnt -= 2;
}

function finalresult(){
 if($HP1 == 0 && $HP2 == 0){
  document.getElementById("result").innerHTML = "引き分け";
 }else if($HP1 > $HP2){
  document.getElementById("result").innerHTML = "1Pの勝ち";
 }else{
  document.getElementById("result").innerHTML = "2Pの勝ち";
 }
 clearInterval($limit);
}

function reset(){
 for(var i = 1; i <= $cardmax; i++){
  $(document.getElementById(i)).attr("src", $cardinfo[0][0]);
 }
 $card1 = 0; $card2 = 0; $clickcnt = 0; $HP1 = 100; $HP2 = 100; $MP1 = 0; $MP2 = 0; $player = 2;
 changeplayer();
 displayscore();
 resettimelimit();
 document.getElementById("result").innerHTML = "";
}


function update() {
gameTimer = setTimeout(update, 50);
var lifeBar1 = document.getElementById('lifeBar1');
lifeBar1.value=$HP1;
   
var lifeBar2 = document.getElementById('lifeBar2');
lifeBar2.value=$HP2;

}

update();

