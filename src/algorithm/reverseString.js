// Inversez la chaîne fournie et renvoyez la chaîne inversée
// Par exemple, "hello" devrait devenir "olleh"

function reverseString(str) {
    const strRev =  str.split('').reverse().join(''); 
    return strRev;
  }
  
  reverseString("hello");