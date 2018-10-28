var $card1 = 0; var $card1id;
var $card2 = 0; var $card2id;
var $HP1 = 100; var $HP2 = 100;
var $MP1 = 30; var $MP2 = 30;
var $ex1 = 0; var $ex2 = 0;
var $player = 1;
var $clickcnt = 0;
var $timer; var $limit; var $count;
var $cardmax = 26;
var $clickmai= 0;
var option1 = {
    title: "タイムオーバー！！",
    icon: "error",
    timer: "1000",
    buttons: false
  }
var option2 = {
    title: "MP不足です!!",
    icon: "error",
    timer: "1000",
    buttons: false
  }


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
 var urlparams = new URLSearchParams(window.location.search);

 $ex1 = urlparams.get('p1');
 $ex2 = urlparams.get('p2');

 $(document.getElementById("chara1")).attr("src", "キャラ絵/chara" + $ex1 + ".png");
 $(document.getElementById("chara2")).attr("src", "キャラ絵/chara" + $ex2 + ".png");

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
 document.getElementById("HP1").innerHTML = "HP:" + $HP1;
 document.getElementById("MP1").innerHTML = "MP:" + $MP1;
 document.getElementById("HP2").innerHTML = "HP:" + $HP2;
 document.getElementById("MP2").innerHTML = "MP:" + $MP2;
}

function timelimit(){
 $count--;
 document.getElementById("time").innerHTML = $count;
 if($count == 0){

  if($clickcnt % 2 == 1){
    $(document.getElementById($card1id)).attr("src", $cardinfo[0][0]);
   $clickcnt =0;
   $card1 = 0;
   $clickmai =0;
	}

  swal(option1);
  changeplayer();
  resettimelimit();
 }
}

function resettimelimit(){
 clearInterval($limit);
 $count = 20;
 $limit = setInterval(timelimit, 1000);
 document.getElementById("time").innerHTML = $count;
}

function cardset(n){
 if($clickmai < 2){
 if($clickcnt != $cardmax){
  if($(document.getElementById(n.id)).attr("src") == $cardinfo[0][0]){
   $(document.getElementById(n.id)).attr("src", $setcard[n.id][0]);
   cardnumset($setcard[n.id][1], n.id);
   $clickcnt++;
   $clickmai++;

   if($card1 != 0 && $card2 != 0){
    $timer = setInterval(result, 100);
   }
  }
 }
}
}

function cardnumset(n, id){
if($card1 == 0) {
  cliksound();
  $card1 = n;
  $card1id = id;
 }else{
  cliksound();
  $card2 = n;
  $card2id = id;
 }

}

function result(){
 if($card1 == $card2){
  calcscore($card1);
  resultsound();
  clickgen();
 }else{
  changeplayer();
  resultsound();
  setTimeout("cardreturn()",500);
  setTimeout("clickgen()",500);
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

function excalc(){

 if($player == 1){
  if($MP1 >= 30){
  exsound();
   if($ex1 == "1"){
    $HP2 -= 40;
   }else if($ex1 == "2"){
    $HP1 += 40;
   }else if($ex1 == "3"){
    $HP1 += 20; $HP2 -= 20;
   }
   $MP1 -= 30;
  }else{
   swal(option2);
  }
 }else{
  if($MP2 >= 30){
   exsound();
   if($ex2 == "1"){
    $HP1 -= 40;
   }else if($ex2 == "2"){
    $HP2 += 40;
   }else if($ex2 == "3"){
    $HP2 += 20; $HP1 -= 20;
   }
   $MP2 -= 30;
  }else{
   swal(option2);
  }
 }
 if($HP1 < 0){
  $HP1 = 0;
  finalresult();
 }else if($HP2 < 0){
  $HP2 = 0;
  finalresult();
 }
 displayscore();
}

function changeplayer(){
 document.getElementById("player" + $player).className = "player-passive";
 document.getElementById("HP" + $player).className = "passive";
 document.getElementById("MP" + $player).className = "passive";
 if($player == 1){
  $player = 2;
 }else{
  $player = 1;
 }
 document.getElementById("player" + $player).className = "player-active";
 document.getElementById("HP" + $player).className = "active";
 document.getElementById("MP" + $player).className = "active";
}

function cardreturn(){
 $(document.getElementById($card1id)).attr("src", $cardinfo[0][0]);
 $(document.getElementById($card2id)).attr("src", $cardinfo[0][0]);
 $clickcnt -= 2;
}

function finalresult(){
 if($HP1 == 0 && $HP2 == 0){
  document.getElementById("result1").innerHTML = "引き分け";
  document.getElementById("result2").innerHTML = "引き分け";
 }else if($HP1 > $HP2){
  document.getElementById("result1").innerHTML = "勝ち";
  document.getElementById("result2").innerHTML = "負け";
 }else{
  document.getElementById("result1").innerHTML = "負け";
  document.getElementById("result2").innerHTML = "勝ち";
 }
 clearInterval($limit);
 for(var i = 1; i <= $cardmax; i++){
  $(document.getElementById(i)).attr("onclick", "");
 }
}

function reset(){
 for(var i = 1; i <= $cardmax; i++){
  $(document.getElementById(i)).attr("src", $cardinfo[0][0]);
  $(document.getElementById(i)).attr("onclick", "cardset(this);");
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

var MPBar1 = document.getElementById('MPBar1');
MPBar1.value=$MP1;

var MPBar2 = document.getElementById('MPBar2');
MPBar2.value=$MP2;

}

update();


function cliksound(){
document.getElementById('clik').currentTime = 0;
document.getElementById('clik').play();
}

function resultsound(){
if($card1 == $card2){
if($player == 1){
   if($ex1 == "1"){
   document.getElementById('true1').currentTime = 0;
   document.getElementById('true1').play();
   }else if($ex1 == "2"){
   document.getElementById('true2').currentTime = 0;
   document.getElementById('true2').play();
   }else if($ex1 == "3"){
   document.getElementById('true3').currentTime = 0;
   document.getElementById('true3').play();
  }
 }else{
   if($ex2 == "1"){
   document.getElementById('true1').currentTime = 0;
   document.getElementById('true1').play();
   }else if($ex2 == "2"){
   document.getElementById('true2').currentTime = 0;
   document.getElementById('true2').play();
   }else if($ex2 == "3"){
   document.getElementById('true3').currentTime = 0;
   document.getElementById('true3').play();
   }
  }
}

else{
document.getElementById('false').currentTime = 0;
document.getElementById('false').play();
}
}
function exsound(){
if($player == 1){
   if($ex1 == "1"){
   document.getElementById('ex1').play();
   }else if($ex1 == "2"){
    document.getElementById('ex2').play();
   }else if($ex1 == "3"){
    document.getElementById('ex3').play();
   }
 }else{
   if($ex2 == "1"){
    document.getElementById('ex1').play();
   }else if($ex2 == "2"){
    document.getElementById('ex2').play();
   }else if($ex2 == "3"){
    document.getElementById('ex3').play();
   }
 }
 }

function clickgen(){
$clickmai -= 2;
}
