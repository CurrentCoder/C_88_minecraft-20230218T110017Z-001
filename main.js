var canvas = new fabric.Canvas('mycanvas');

player_x = 10;
player_y = 10;

block_image_Width = 30;
block_image_Height = 30;

var player_Object ="";
var block_image_Object ="";

function player_Update () 
{
    fabric.Image.fromURL("player.png", function(Img)
    {
        player_Object = Img;

        player_Object.scaleToWidth(150);
        player_Object.scaleToHeight(140);
        player_Object.set({
        top:player_y,
        left:player_x
        })

        canvas.add(player_Object);
    });

}


function new_image(get_image) 
{
      fabric.Image.fromURL(get_image, function(Img)  
      {
        block_image_Object = Img;

        block_image_Object.scaleToWidth(block_image_Width);
        block_image_Object.scaleToHeight(block_image_Height);
        block_image_Object.set({
             top:player_y,
            left:player_x
        });

        canvas.add(block_image_Object);
      });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) 
{
   keyPressed = e.keyCode;
   console.log(keyPressed);
   if(e.shiftkey == true && keyPressed == '80')
   {
     console.log("if p and shift pressed togather");
     block_image_Width = block_image_Width + 10;
     block_image_Height = block_image_Height + 10;
     document.getElementById("current_width").innnerHTML = block_image_Width;
     document.getElementById("current_height").innerHTML = block_image_Height;
   }

   if(e.shiftkey && keyPressed == '77')
   {
    console.log("if m and shift pressed togather");
    block_image_Width = block_image_Width - 10;
    block_image_Height = block_image_Height -10;
    document.getElementById("current_width").innerHTML = block_image_Width;
    document.getElementById("current_height").innerHTML = block_image_Height;
   }

   if(keyPressed == '38')
   {
      up();
      console.log("up");
   }

  if(keyPressed == '40')
  {
    down();
    console.log("down");
  }

  if(keyPressed == '37')
  {
    left();
    console.log("left");
  }

  if(keyPressed == '39');
  {
    right();
    console.log("right");
  }

  if(keyPressed == '87');
  {
    new_image("wall.jpg");
    console.log("w");
  }

  if(keyPressed == '71');
  {
    new_image("ground.png");
    console.log("g");
  }

  if(keyPressed == '76');
  {
    new_image("light_green.png");
    console.log("l");
  }

  if(keyPressed == '84');
  {
    new_image("trunk.jpg");
    console.log("t");
  }

  if(keyPressed == '82');
  {
    new_image("roof.jpg");
    console.log("r");
  }

  if(keyPressed == '89');
  {
    new_image("yellow_wall.png");
    console.log("y");
  }

  if(keyPressed == '68');
  {
    new_image("dark_green.png");
    console.log("d");
  }

  if(keyPressed == '85');
  {
    new_image("different.png");
    console.log("u");
  }

  if(keyPressed == '87');
  {
    new_image("cloud.jpg");
    console.log("c");
  }
}

function up() {
   if(player_y >= 0)
   {
    player_y = player_y - block_image_Height ;
    console.log("block_image_Height ="+ block_image_Height);
    console.log("When up arrow is pressed , X ="+ player_x + " , y ="+ player_y);
    canvas.remove(player_Object);
    player_Update();
   }
}

function down() {
  if(player_y <=500)
  {
    player_y = player_y + block_image_Height;
    console.log("block_image_Height ="+ block_image_Height);
    console.log("When down arrow is pressed , X ="+ player_x +" , y ="+ player_y);
    canvas.remove(player_Object);
    player_Update();
  }
}

function left() {
  if(player_x >0) 
  {
    player_x = player_x + block_image_Width ;
    console.log("block_image_Width"+ block_image_Width);
    console.log("When left arrow is pressed , X ="+ player_x +" , y ="+ player_y);
    canvas.remove(player_Object);
    player_Update();
  }
}

function right() {
  if(player_x <=850) 
  {
    player_x = player_x + block_image_Width;
    console.log("block_image_Width"+ block_image_Width);
    console.log("When right arrow is pressed , X ="+ player_x +" , y ="+ player_y);
    player_Update();
  }
  
}