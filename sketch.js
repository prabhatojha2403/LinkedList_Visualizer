var count = 0;
var xCoordp = 42;
var yCoordp = 25;
var x = 100;
var y = 200;
var arr = [];
var ll1 = new LinkedLists();
var arlength = 0;
var rectp = new rectangle(76, 125);
var status = 0;
//var arRect = new arRectangle(x, y);

function rectangle(x, y) {
  this.width = 72;
  this.height = 50;
  this.x = x;
  this.y = y;
  this.xLineBeg = this.x + (2 / 3 * this.width);
  this.yLineEnd = this.y + this.height;
  this.ellipseBeg = this.x + (this.width - (1 / 6 * (this.width)));
}

function arRectangle(x, y) {
  this.x = x;
  this.y = y;
  this.width = 50;
  this.height = 50;
  this.length = 0;


}


function LinkedLists() {
  this.head = null;
  this.xStart = 66;
  this.yStart = 50;
  //this.dispCounter=0;
  //this.yIncrement=0;
  this.insert = function(data) {


    if (this.head == null) {

      let temp = new Node(data, this.xStart, this.yStart);
      this.head = temp;
      strokeWeight(3);
      stroke(100, 100, 0);
      fill(255);
      rect(rectp.x, rectp.y, rectp.width, rectp.height);
      line(rectp.xLineBeg,rectp.y,rectp.xLineBeg,rectp.y+rectp.height);
      line(66, 50, rectp.x, rectp.y + (rectp.height / 2));
      line(rectp.x + rectp.width, rectp.y, rectp.x + (2 / 3 * rectp.width), rectp.y + rectp.height);
      fill(255);
      strokeWeight(1);
      textAlign(CENTER);
      fill(0);
      textSize(20);
      text(temp.data, rectp.x + 24, rectp.y + 25);
      strokeWeight(3);
    } else {
      var p = this.head;
      //let pos=30;
      while (p.next != null) {
        p = p.next;
      }
      let temp = new Node(data, p.x + (rectp.width) + 30, p.y);
      p.next = temp;


      strokeWeight(3);
      stroke(100, 100, 0);
      fill(255);
      rect(rectp.x + ((rectp.width + 30) * count), rectp.y, rectp.width, rectp.height);
    
     
     // line(rectp.xLineBeg + ((rectp.width + 30) * count), rectp.y, rectp.xLineBeg + ((rectp.width + 30) * count), rectp.yLineEnd);
      
      line(rectp.xLineBeg + ((rectp.width + 30) * count), rectp.y, rectp.xLineBeg + ((rectp.width + 30) * count), rectp.yLineEnd);
    
      ellipse(p.x + 36, p.y, 4);
      line(p.x + 2 / 3 * (rectp.width) - 1 / 6 * (rectp.width), p.y, rectp.x + ((rectp.width + 30) * count), rectp.y + (rectp.height / 2));
      line(rectp.x + rectp.width + ((rectp.width + 30) * count), rectp.y, rectp.x + (2 / 3 * rectp.width) + ((rectp.width) + 30) * count, rectp.y + rectp.height);
      fill(255);
      strokeWeight(1);
      textAlign(CENTER);
      fill(0);
      textSize(20);
      text(temp.data, rectp.x + 24 + ((rectp.width + 30) * count), p.y + 100);
      strokeWeight(3);
    }
    count++;

  }

  this.dispWhileInsert = function(z) {
    if (z == -1) {
      ll1.disp();
    }
    let p = this.head;
    let xCoord = 42;
    let yCoord = 25;
    while (p.next != null) {
      let rectang = new rectangle(xCoord, yCoord);
      //delay(1000);
      //  background(0);
      //  stroke(255);
      strokeWeight(3);
      stroke(100, 100, 0);
      fill(255);
      rect(xCoord, rectang.y, rectang.width, rectang.height);
      line(rectang.xLineBeg, rectang.y, rectang.xLineBeg, rectang.yLineEnd);
      fill(255);
      strokeWeight(1);
      textAlign(CENTER);
      fill(0);
      textSize(20);
      text(p.data, p.x, p.y);
      strokeWeight(3);
      xCoord = xCoord + rectang.width + 30;
      if (p != null && p.next.next != null) {
        ellipse(rectang.ellipseBeg, rectang.y + (rectang.height / 2), 4);
        line(rectang.ellipseBeg, rectang.y + (rectang.height / 2), xCoord, rectang.y + (rectang.height / 2));
      } else if (p.next.next == null) {
        fill(255, 0, 0, 100);
        rect(xCoord - (rectang.width + 30), rectang.y, rectang.width, rectang.height);
        line(rectang.xLineBeg, rectang.y, rectang.xLineBeg, rectang.yLineEnd);
      }
      p = p.next;
      //  background(0);
      //  xCoord = xCoord + rectang.width + 30;

    }
    //background(0);
    //  stroke(255);

  }
  this.disp = function() {
    console.log(this.head);
    let p = this.head;
    let xCoordp = 42;
    let yCoordp = 25;
    while (p != null) {
      let rectang = new rectangle(xCoordp, yCoordp);
      //delay(1000);
      strokeWeight(3);
      stroke(100, 100, 0);
      fill(255);
      rect(xCoordp, rectang.y, rectang.width, rectang.height);
      line(rectang.xLineBeg, rectang.y, rectang.xLineBeg, rectang.yLineEnd);
      fill(255);
      strokeWeight(1);
      textAlign(CENTER);
      fill(0);
      textSize(20);
      text(p.data, p.x, p.y);
      strokeWeight(3);
      xCoordp = xCoordp + rectang.width + 30;
      if (p != null && p.next != null) {
        ellipse(rectang.ellipseBeg, rectang.y + (rectang.height / 2), 4);
        line(rectang.ellipseBeg, rectang.y + (rectang.height / 2), xCoordp, rectang.y + (rectang.height / 2));
      } else if (p.next == null) {
        line(rectang.x + rectang.width, rectang.y, rectang.xLineBeg, rectang.y + rectang.height);
      }
      p = p.next;

    }
  }
  this.dispNodeByNode = function(p,col) {
    //let p = this.head;
    //xCoordp = 42;
    //yCoordp = 25;
    console.log(xCoordp);
    let rectang = new rectangle(xCoordp, yCoordp);
    //delay(1000);
    strokeWeight(3);
    stroke(100, 100, 0);
    fill(col);
    rect(xCoordp, rectang.y, rectang.width, rectang.height);
    line(rectang.xLineBeg, rectang.y, rectang.xLineBeg, rectang.yLineEnd);
    fill(255);
    strokeWeight(1);
    textAlign(CENTER);
    fill(0);
    textSize(20);
    text(p.data, p.x, p.y);
    strokeWeight(3);
    xCoordp = xCoordp + rectang.width + 30;
    if (p != null && p.next != null) {
      ellipse(rectang.ellipseBeg, rectang.y + (rectang.height / 2), 4);
      line(rectang.ellipseBeg, rectang.y + (rectang.height / 2), xCoordp, rectang.y + (rectang.height / 2));
    } else if (p.next == null) {
      line(rectang.x + rectang.width, rectang.y, rectang.xLineBeg, rectang.y + rectang.height);
    }
    //  p = p.next;

  }




  this.reverse = function() {
    let p = this.head;
    let t = null;
    let temp;
    while (p != null) {
      temp = p;
      p = p.next;
      temp.next = t;
      t = temp;
    }
    this.head = t;
    return this.head;
  }
  this.reverseNodeValDisp = function(p, i, count) {
    //background(0);
    //let arr = [];
    //let i = 0;
    //let p = this.head;

    console.log(xCoordp);
    strokeWeight(3);
    stroke(100, 100, 0);
    var arRect = new arRectangle(x, y);
    if (count == 0)
      fill(255);
    else
      fill(100);
    rect(arRect.x, arRect.y, arRect.width, arRect.height);
    textAlign(CENTER);
    if (count == 0)
      arr[i] = p.data;
    if (count == 0) {
      text(arr[i], arRect.x + (arRect.width / 2), arRect.y + (arRect.height / 2));
      x = x + arRect.width;
    } else {
      x = x - arRect.width;
    }
    arlength++;


    //p = p.next;
    //i++;


    /*let tempo = this.head;
    while (tempo != null) {
      i--;
      tempo.data = arr[i];
      tempo = tempo.next;
    }*/

  }
  this.reverseArr = function(i) {
    let p = this.head;
    while (p != null) {
      i--;
      p.data = arr[i];
      //i--;
      p = p.next;
    }
    //arr=[];
    return this.head;
  }
  this.insertAtBeg = function(data) {

    var rectpp = new rectangle(30, 150);
    var temp = new Node(data, 66, 50);
    var p = this.head;

    while (p != null) {
      p.x = p.x + (rectpp.width) + 30;
      p = p.next;
    }

    temp.next = this.head;
    console.log(this.head);
    this.head = temp;
    p = this.head.next;
    background(0);
    stroke(100, 100, 0);
    strokeWeight(3);
    fill(255, 0, 210, 200);
    rect(rectpp.x, rectpp.y, rectpp.width, rectpp.height);
    line(rectpp.xLineBeg, rectpp.y, rectpp.xLineBeg, rectpp.yLineEnd);


    //let i=1;
    //  background(0);
    ll1.disp();
    fill(0);
    stroke(0);
    rect(42, 25, rectpp.width, rectpp.height);
    strokeWeight(3);
    stroke(100, 100, 0);
    //line(rectpp.x+rectpp.width,rectpp.y+(rectpp.height/2),this.head.next.x,this.head.next.y+(rectpp.height/2));
    strokeWeight(1);
    textAlign(CENTER);
    fill(0);
    textSize(20);
    text(this.head.data, rectpp.x + 24, rectpp.y + 25);
    setTimeout(function() {
      ll1.disp();
      fill(0);
      stroke(0);
      //line(rectpp.x+rectpp.width,rectpp.y+(rectpp.height/2),this.head.next.x,this.head.next.y+(rectpp.height/2));
      if(count!=0){
      rect(rectpp.x, rectpp.y, rectpp.width, rectpp.height);
      line(rectpp.xLineBeg, rectpp.y, rectpp.xLineBeg, rectpp.yLineEnd);}
      //line(this.head.next.x,this.head.next.y+(this.height),rectpp.x+rectpp.width,rectpp.y+(rectpp.height/2));

      //  line(rectpp.x+rectpp.width,rectpp.y+(rectpp.height/2),this.head.next.x,this.head.next.y+(rectpp.height/2));
    }, 1500);



    //line(rectpp.x+rectpp.width,rectpp.y+(rectpp.height/2),this.head.next.x,this.head.next.y+(rectpp.height/2));
    // /ll1.disp();
    p = p.next;

    //i++;
if(this.head!=null)
      rectp.x = rectp.x + (rectp.width + 30) * 1;
      rectp.xLineBeg = rectp.xLineBeg + ((rectp.width + 30) * 1);

    //count++;

  }


  }


  function Node(data, x, y) {
    this.data = data;
    this.next = null;
    this.x = x;
    this.y = y;
  }

  var ll1 = new LinkedLists();
  var z = 0;
  var cnv;

  function centerCanvas() {
    var xCnv = (windowWidth - width) / 2;
    var yCnv = (windowHeight - height) / 2;
    cnv.position(xCnv, yCnv);
  }


  function windowResized() {
    centerCanvas();
  }

  function setup() {
    cnv = createCanvas(800, 600);
    centerCanvas();
    background(0);
    stroke(255);
    frameRate(1);
    var button = createButton("Reverse");
    button.mousePressed(reverseMouse);
    var button1 = createButton("display");
    button1.mousePressed(display);
    var button2 = createButton("Insert At End");
    button2.mousePressed(drawp);
    var button3 = createButton("Insert At Beg");
    button3.mousePressed(insertAtBeg);
    var button4 = createButton("Try Once More");
    button4.mousePressed(tryAgain);
    var button5 = createButton("Check If Sorted!");
    button5.mousePressed(checkSorted);
  }

function delay2(p,i,t){
  setTimeout(function()
{
  if(i==1)
  {
    stroke(255);
    strokeWeight(3);
    textAlign(CENTER);
    text("Here the light colour indicates the tailing pointer ",300,400)
    text("The dark colour indicates the pointer used for traversal ",300,500)
  }
  if(i%2==0)
  {
  ll1.dispNodeByNode(p,'#fabea7');
}
  else
  {
  ll1.dispNodeByNode(p,"#fbe2e5");
  }
  if(t.data<=p.data)
  { 
   
    text(t.data+"<"+p.data,(100+(i*100)),300);
    
    //return status;
  }
  else
  {
    text("Not Sorted!",100+(i*100),300);
    status=-1;
    //return status;
  }
},1000*i);
}

function checkSorted(){
  ll1.disp();
  background(0);
  var i=1;

  var p=ll1.head;
  var t=null;

  while(p!=null)
  {

    delay2(p,i,t,status);

    /*if(status==-1){
      break;
    }*/
    i++;
    t=p;
  p=p.next;

    /*if(t.data<=p.data)
    {
      text(t.data+"<"+p.data,300,300);
    }
    else
    {
      text("Not Sorted!",300,300);
      break;
    }*/

  }
}




  function tryAgain() {
    background(0);
    ll1.head = null;
    console.log(ll1.head);
    rectp.x = 76;
    rectp.y = 125;
    //rectp.xLineBeg = rectp.xLineBeg - ((rectp.width + 30) * 1);
    count = 1;
  }

  function insertAtBeg() {
    var m;
    m = prompt("enter the element");
    ll1.insertAtBeg(m);
  }

  function drawp() {
    background(0);
    var z = 0;
    //stroke(255);
    //  ll1.disp();
    //var i;
    //z=prompt("Enter element to add!");



    //  ll1.dispWhileInsert();

    if (z != -1) {
      z = prompt("enter the element");
      if (z != -1)
        ll1.insert(z);
      ll1.dispWhileInsert(z);
    }




    /*if(mousePressed()){
      background(0);
    }*/


    ////  var ll1 = new LinkedLists();
    //var no = Math.floor(Math.random() * 10);
    /*for (let i = 0; i < no; i++) {
      ll1.insert(Math.floor(Math.random() * 10));
    }*/

  }


  var countp = 0;

  function delay(p, k, i, count) {
    setTimeout(function() {
      // Add tasks to do

      ll1.dispNodeByNode(p,255);

      ll1.reverseNodeValDisp(p, i, count);
      //i++;
    }, 1000 * k);
  }
  //var pt = ll1.head;
  //var countp=0;
  function reverseMouse() {
    //ll1.disp();
    //let p = ll1.head;
    var j;
    xCoordp = 42;
    yCoordp = 25;
    var i = 0;
    var k = 1;

    var pt = ll1.head;

    //background(0);
    //  var count=0;

    //ll1.dispNodeByNode(ll1.head);
    /*if(countp==0)
       background(0);*/

    //p=p.next;

    while (pt != null) {

      console.log(pt);

      delay(pt, k, i, countp);
      //p=p.next;
      i++;
      k++;
      pt = pt.next;
    }
    countp++;
    //ll1.reverseArr();
    //background(0);

    /*  x=100;
      y=200;*/
    /*let arR=new arRectangle(300,400);*/

    x = x - 50;
    setTimeout(function() {
      ll1.head = ll1.reverseArr(i);
    }, 1000 * k);


    //ll1.reverseNodeVal();
    //ll1.disp();

    noLoop();

  }

  function display() {
    console.log(ll1.head);
    arr = [];
    countp = 0;
    x = 100;
    y = 200;
    xCoordp=42;
    time=1;
    stack=[];
    stack2=[];
    background(0);
    //ll1.reverse();
    ll1.disp();
  }
  /*ll1.reverseNodeVal();
  ll1.disp();*/
  /*var ele=document.querySelector(".insert")
  ele.addeventListener("click",function()
  {
    console.log(ll1.head);
  });*/

  //console.log(ll1);
  //ll1.reverse();
  //  console.log(ll1);