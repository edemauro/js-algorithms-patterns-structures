/*

In combinations, order does NOT matter. {a,b} is the same as {b,a}
Another way: We can count from 0 to 2^N - 1 and look at the bit
representation.

n! / ( (n - c)! * c! )

*/

function comb(s) {
  combHelper("", s);
}

function combHelper(prefix, string) {
  // avoid printing the empty set
  if(prefix){
      console.log(prefix);
  }

  // for each character, print the combination using the letter as a prefix
  // and the combinations using the remaining characters after said character
  for(let i = 0; i < string.length; i++) {
    combHelper(prefix + string.charAt(i), string.substring(i + 1));
  }
}

comb('abc');