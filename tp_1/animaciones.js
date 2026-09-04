function animaciones(){

if (krAct === 1){
  let img = idle[currentI];
    image(img, x, y, img.width * 2.5, img.height * 2.5);
    currentI = (currentI + 1) % idle.length;
    x--;
    imgX2 += 0.5;
    imgX3++;
    imgX4 += 2;
    
   if (x <= 10) {
     krAct = 2;
     currentR = 0;
     sfxDash.play();
    }
    
  }
  
  if (krAct === 2){
  let img = run[currentR];
    image(img, x, y, img.width * 2.5, img.height * 2.5);
    currentR = (currentR + 1) % run.length; 
    x += 7;
    imgX2 -= 0.5;
    imgX3 -= 2;
    imgX4 -= 4;
    imgX5 -= 4;
    
    if(x >= 70){
      x = 70;
      imgX1 -= 0.5;
      imgX2--;
      imgX3 -= 4;
      imgX4 -= 7;
      imgX5 -= 7;
    }
    
    if(imgX4 <= -width * 1.7){
      krAct = 3;
      currentJ = 0;
      sfxJump.play();
    }
  }
    if (krAct === 3){
    let img = jump[currentJ];
      image(img, x, y, img.width * 2.5, img.height * 2.5);
      
      if (currentJ < jump.length - 1) {
      currentJ++;
       }
       
       
       y -= 6;
       x += 5;
       imgX1 -= 1;
       imgX2 -= 2;
       imgX3 -= 8;
       imgX4 -= 14;
       imgX5 -= 14;
       
       imgY += 7;
       imgY1 += 7;
       imgY2 += 7;
       imgY3 += 7;
       imgY4 += 7;
       imgY5 += 7;
    
    if(y <= 200){
     y = 200;
     krAct = 4;
     currentF = 0;
    }
   }
    
    if(krAct === 4){
    let img = fall[currentF];
    image(img, x, y, img.width * 2.5, img.height * 2.5);
    currentF = (currentF + 1) % fall.length; 
    x += 5;
     if(y >=200){
       y +=8;
       
       imgY -= 9;
       imgY1 -= 9;
       imgY2 -= 9;
       imgY3 -= 9;
       imgY4 -= 9;
       imgY5 -= 9;
    
       imgX1 -= 0.5;
       imgX2--;
       imgX3 -= 4;
       imgX4 -= 7;
       imgX5 -= 7;
       
       if(y >= 290){
       y = 290;
       krAct = 5;
     
       imgY = -600;
       imgY1 = 285;
       imgY2 = 250;
       imgY3 = 360;
       imgY4 = 400;
       imgY5 = 400; 
       }
     }
    }
    
    if(krAct === 5){
      let img = run[currentR];
    image(img, x, y, img.width * 2.5, img.height * 2.5);
    currentR = (currentR + 1) % run.length; 
    x += 15;
    
    if(x <= 1200){
      imgX2 -= 0.5;
      imgX3 -= 2;
      imgX4 -= 4;
      imgX5 -= 4;
     }
    }
}
