/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
const dict={};
  const normalize = str => str.toLowerCase().replace(/\s/g, '');


  const Str1 = normalize(str1);
  const Str2 = normalize(str2);

  if (Str1.length !== Str2.length) return false;

for (const char of Str1){
    if(dict[char])
    {
      dict[char]++;
    }
  else {
    dict[char]=1;
  }
}
for(const char of Str2)
{
  if(dict[char]>0)
  {
    dict[char]--;
  }
  else{
    return false;
  }
}
return true;
} 

module.exports = isAnagram;
