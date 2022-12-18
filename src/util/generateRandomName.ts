/**
 * @ Author:  omar abu alhija
 
 * @ Description:to genrate random name
 */

let randomeName = (length: number = 8): string => {
  let alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let arr: string[] = [];
  for (let i = 0; i <= length; i++) {
    let idx: number = +(Math.random() * 51).toFixed(0);
    arr.push(alphabet[idx]);
  }
  return arr.join();
};

export default randomeName;
