class Ground{
    constructor(x,y,width,height){
      var options ={ isStatic: true}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(World,this.body);
      this.width = width;
      this.height = height;
      this.x=x;
      this.y=y;
    }
    show()
    {
        rectMode(CENTER);
        rect(this.x,this.y,this.width, this.height);
    }
  
  
  }
  