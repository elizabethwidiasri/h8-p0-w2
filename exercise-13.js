function xo(str) {
    var x = 0;
    var o = 0;
    var i = 0;

    while(i<str.length){
        if(str[i] === 'x') {
            x = x + 1;
        } else if (str[i] === 'o') {
            o = o + 1;
        } else {
            x = x 
            o = o
            
        }
        i++;
    }

  
    if (x === o) {
        return true
    } else {
        return false
    }
    
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true