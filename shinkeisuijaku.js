var $card1 = 0; var $card1id;
var $card2 = 0; var $card2id;
var $clickcnt = 0;
var $timer;

var $cardinfo = [];
$cardinfo[0] = []; $cardinfo[1] = []; $cardinfo[2] = []; $cardinfo[3] = [];
$cardinfo[0][0] = 'z01.png'; $cardinfo[0][1] = 0;
$cardinfo[1][0] = 'c01.png'; $cardinfo[1][1] = 1;
$cardinfo[2][0] = 'c02.png'; $cardinfo[2][1] = 2;
$cardinfo[3][0] = 'c02.png'; $cardinfo[3][1] = 2;

function cardset(n){
 if($clickcnt != 3){
  $(document.getElementById(n.id)).attr("src", $cardinfo[n.id][0]);
  cardnumset($cardinfo[n.id][1], n.id);
  $clickcnt++;

  if($card1 != 0 && $card2 != 0){
   $timer = setInterval(result, 1000);
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
 var $result;

 if($card1 == $card2){
  $result = confirm('成功');
 }else{
  $result = confirm('失敗');
  if($result){
   cardreturn();
  }
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
 $("#ura1 > img").attr("src", $cardinfo[0][0]);
 $("#ura2 > img").attr("src", $cardinfo[0][0]);
 $("#ura3 > img").attr("src", $cardinfo[0][0]);
 $card1 = 0; $card2 = 0; $clickcnt = 0;
}
