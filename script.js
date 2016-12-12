/****************************************
  CSS Random Colors by MasihTak
  Under  MIT license
*****************************************/

// Generate random color
function randomColor() {
  return Math.floor(Math.random() * 256 )
}

//RGB
function rgbaColors(red, green, blue) {
  return 'rgba(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ',' + a + ')';
}

//RGBA
function rgbaColors(red, green, blue, a) {
  a = Math.random().toFixed(1); //initialize alpha value with 1 decimal number
  // fix isuuse cause alpha number set to 0
  if(a == 0.0) {
    a = 0.1;
  }
  return 'rgba(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ',' + a + ')';
}
