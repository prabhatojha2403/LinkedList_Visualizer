function Tree()
{
  this.root=null;
  this.inOrder=function(p,t)
  {
    if(p!=null)
    {
      this.inOrder(p.left,p);
      fill(255);
      noStroke();
      textAlign(CENTER);
      text(p.data,p.x,p.y);
    stroke(255);
    line(t.x,t.y,p.x,p.y);
    noFill();
    ellipse(p.x,p.y,20);


      this.inOrder(p.right,p);
    }
  }
  this.searchVal=function(val)
  {
    var p=this.root;
    var succ=0;
    while(p!=null)
    {
      if(p.data<val)
      {
        p=p.right;
      }
      else if(p.data>val)
      {
        p=p.left;
      }
      else
      {
        return p;
      }
    }
        console.log("Element not found!");


  }
  this.insertAvl=function(p,data)
  {
      if(p==null)
      {
          var temp=new Node(data);
          return temp;
      }
      if(data<p.data)
      {
          p.left=insertAvl(p.left,data);
      }
      else if(data>p.data)
      {
          p.right=insertAvl(p.right,data);
      }
      p.height=NodeHeight(p);

      if(BalanceFactor(p)==2&&BalanceFactor(p.left)==1)
            return LLRotation(p);
      if(BalanceFactor(p)==2&&BalanceFactor(p.left)==-1)
            return LRRotation(p);
      if(BalanceFactor(p)==-2&&BalanceFactor(p.right)==-1)
          return RRRotation(p);
      if(BalanceFactor(p)==-2&&BalanceFactor(p.right)==1)
          return RLRotation(p);
      return p;

  }


function Node(val,x,y)
{
  this.left=null;
  this.right=null;
  this.data=val;
  this.height=1;
  this.x=x;
  this.y=y;
  this.BalanceFactor=function (p)
  {
      var hl=0,hr=0;
      hl=p&&p.left?p.left.height:0;
      hr=p&&p.right?p.right.height:0;
      return hl-hr;
  }
  this.NodeHeight=function (p)
  {
      var hl,hr;
      hl=p&&p.left?p.left.height:0;
      hr=p&&p.right?p.right.height:0;
      return hl>hr?(hl+1):(hr+1);
  }
  this.LLRotation=function (p)
  {  var pl;
    var plr;
      pl=p.left;
     plr=pl.right;
      pl.right=p;
      p.left=plr;
      if(this.root==p)
      {
          this.root=pl;
      }
      p.height=NodeHeight(p);
      pl.height=NodeHeight(pl);
      return pl;
  }
 this.LRRotation=function (p)
  {
      var  pl=p.left;
      var plr=pl.right;
      pl.right=plr.left;
      plr.left=pl;
      p.left=plr;
      p.left=plr.right;
      plr.right=p;
      if(this.root==p)
      {
        this.root=plr;
      }
      p.height=NodeHeight(p);
      plr.height=NodeHeight(plr);
      pl.height=NodeHeight(pl);
      return plr;
  }
  this.RRRotation=function(p)
  {
      var pr=p.right;
      p.right=pr.left;
      pr.left=p;
      if(this.root==p)
      {
          this.root=pr;
      }
      p.height=NodeHeight(p);
      pr.height=NodeHeight(pr);
      return pr;
  }
  this.RLRotation=function RLRotation(p)
  {
      var pr=p.right;
      var prl=pr.left;
      pr.left=prl.right;
      prl.right=pr;
      p.right=prl.left;
      prl.left=p;
      if(this.root==p)
      {
          this.root=prl;
      }
      p.height=NodeHeight(p);
      prl.height=NodeHeight(prl);
      pr.height=NodeHeight(pr);
      return prl;
  }
}













function setup()
{
  createCanvas(window.outerWidth,window.outerHeight);
  background(51);
  var myTree1=new Tree();
  myTree1.root=myTree1.insertAvl(this.root,20);
  myTree1.insertAvl(this.root,10);
  myTree1.insertAvl(this.root,5);
  /*myTree1.insert(50);
  myTree1.insert(70);
  myTree1.insert(5);

  myTree1.insert(2);
  myTree1.insert(300);
  myTree1.insert(500);
  myTree1.insert(7);
  myTree1.insert(15);

  myTree1.insert(222);*/
  myTree1.inOrder(myTree1.root,myTree1.root);
}
}