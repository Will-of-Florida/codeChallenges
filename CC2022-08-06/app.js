// Gordon Ramsay shouts. He shouts and swears. 

// You will be given a string of four words. Your job is to turn them
//  in to Gordon language.

// Rules:
// Obviously the words should be Caps, 
// Every word should end with '!!!!', 
// Any letter 'a' or 'A' should become '@', 
// Any other vowel should become '*'.

function gordon(a){
    let ramsayTalk = a.toUpperCase().replace(/\w+/g, '$&!!!!').replace(/A/g, '@').replace(/[IEOU]/g, '*')
    return ramsayTalk
  }

