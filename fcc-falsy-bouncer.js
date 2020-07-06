/*
Basic Algorithm Scripting: Falsy Bouncer

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
  return arr.filter(Boolean);
}

const result = bouncer([7, "ate", "", false, 9]);

console.log(result);
