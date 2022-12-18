/**
 * @ Author:  omar abu alhija
 
 * @ Description: To solve the image cache problem, call the function at the end of each image. Example
 *   source= {{uri:"www.google.com/img.png?cachImage()"}}
 */

const cachImage = (): string => {
  let date = new Date();
  let day: string = date.getDate().toString();
  let month: string = (date.getMonth() + 1).toString();
  let year: string = date.getFullYear().toString();
  let houres: string = date.getHours().toString();
  let res = year + month + day + houres;
  return res;
};
export default cachImage;
