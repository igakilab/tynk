var $card1 = 0; var $card1id;
var $card2 = 0; var $card2id;
var $clickcnt = 0;
var $timer;
var $cardmax = 6;


var $cardinfo = [];
$cardinfo[0] = []; $cardinfo[1] = []; $cardinfo[2] = []; $cardinfo[3] = [];
$cardinfo[4] = []; $cardinfo[5] = []; $cardinfo[6] = [];
$cardinfo[0][0] = 'z01.png'; $cardinfo[0][1] = 0;
$cardinfo[1][0] = 'c01.png'; $cardinfo[1][1] = 1;
$cardinfo[2][0] = 'c01.png'; $cardinfo[2][1] = 1;
$cardinfo[3][0] = 'c02.png'; $cardinfo[3][1] = 2;
$cardinfo[4][0] = 'c02.png'; $cardinfo[4][1] = 2;
$cardinfo[5][0] = 'c03.png'; $cardinfo[5][1] = 3;
$cardinfo[6][0] = 'c03.png'; $cardinfo[6][1] = 3;

var $setcard = [];
$setcard[0] = []; $setcard[1] = []; $setcard[2] = []; $setcard[3] = [];
$setcard[4] = []; $setcard[5] = []; $setcard[6] = [];
$setcard[0][0] = 'z01.png'; $setcard[0][1] = 0;

window.onload = function shuffle(){
 var $arr = [1, 2, 3, 4, 5, 6];
 var $a = $arr.length;

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
  window.alert('成功');
 }else{
  window.alert('失敗');
  cardreturn();
 }

 clearInterval($timer);
 $card1 = 0; $card2 = 0;
}

function cardreturn(){
 $(document.getElementById($card1id)).attr("src", $cardinfo[0][0]);
 $(document.getElementById($card2id)).attr("src", $cardinfo[0][0]);
 $clickcnt -= 2;
}

function reset(){
 for(var i = 1; i <= 6; i++){
  $(document.getElementById(i)).attr("src", $cardinfo[0][0]);
 }
 $card1 = 0; $card2 = 0; $clickcnt = 0;
}
