function sumSequence(n) {
  if (n === 0) return "0.00";
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / (2 ** i);
  }
  return sum.toFixed(2);
}

function mergeArrays(...arrays) {
  return arrays.reduce((acc, arr) => acc.concat(arr), []);
}

function isPalindrome(str) {
  const counts = {};
  for (let ch of str) {
    counts[ch] = (counts[ch] || 0) + 1;
  }
  let odd = 0;
  for (let k in counts) {
    if (counts[k] % 2 !== 0) odd++;
  }
  return odd <= 1;
}

function countLetters(str) {
  if (!str) return {};
  const res = {};
  for (let ch of str.replace(/\s+/g, "")) {
    res[ch] = (res[ch] || 0) + 1;
  }
  return res;
}

function divideArrays(arr, size) {
  if (size <= 0) return [];
  const out = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

function encrypt(str, n) {
  if (n <= 0) return str;
  let res = "";
  const shift = n % 26;
  for (let ch of str) {
    const code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      const shifted = (code - 65 - shift + 26) % 26;
      res += String.fromCharCode(shifted + 65);
    } else {
      res += ch;
    }
  }
  return res;
}

if (typeof window !== "undefined") {
  window.sumSequence = sumSequence;
  window.mergeArrays = mergeArrays;
  window.isPalindrome = isPalindrome;
  window.countLetters = countLetters;
  window.divideArrays = divideArrays;
  window.encrypt = encrypt;
}
