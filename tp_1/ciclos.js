function ciclosFor(){
 for (let i = 0; i < 9; i++){
   idle[i] = loadImage('data/idle_' + i + '.png'); 
   }
   
  for (let i = 0; i < 6; i++){
   run[i] = loadImage('data/run_' + i + '.png');
   }
   
  for (let i = 0; i < 5; i++){
   jump[i] = loadImage('data/jump_' + i + '.png');
   }
   
  for (let i = 0; i < 3; i++){
   fall[i] = loadImage('data/fall_' + i + '.png');
   } 
}
