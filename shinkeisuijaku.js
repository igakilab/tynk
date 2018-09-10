var $card1 = 0;
var $card2 = 0;
var $clickcnt = 0;

var $cardinfo = [];
$cardinfo[0] = []; $cardinfo[1] = []; $cardinfo[2] = []; $cardinfo[3] = [];
$cardinfo[0][0] = 'z01.png'; $cardinfo[0][1] = 0;
$cardinfo[1][0] = 'c01.png'; $cardinfo[1][1] = 1;
$cardinfo[2][0] = 'c02.png'; $cardinfo[2][1] = 2;
$cardinfo[3][0] = 'c02.png'; $cardinfo[3][1] = 2;

function cardset(n){
 if($clickcnt != 3){
  $(document.getElementById(n.id)).attr("src", $cardinfo[n.id][0]);
  cardnumset($cardinfo[n.id][1]);
  $clickcnt++;

  if($card1 != 0 && $card2 != 0){
   result();
  }
 }
}

function cardnumset(n){
 if($card1 == 0) {
  $card1 = n;
 }else{
  $card2 = n;
 }
}

function result(){
 if($card1 == $card2){
  alert('成功');
 }else{
  alert('失敗');
 }

 $card1 = 0; $card2 = 0;
}

function reset(){
 $("#ura1 > img").attr("src", "z01.png");
 $("#ura2 > img").attr("src", "z01.png");
 $("#ura3 > img").attr("src", "z01.png");
 $card1 = 0; $card2 = 0; $clickcnt = 0;
}
