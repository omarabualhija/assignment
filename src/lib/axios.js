/**
 * @ Author: omar abu alhija
 
 * @ Modified by: Your name
 * @ Modified time: 2022-12-10 00:05:44
 * @ Description:
 */

import axios from 'axios';
import {joinObject} from '../util';
import objectToForm from '../util/objectToForm';
let getAxios = async (url, params) => {
  let _url = url;

  if (Object.keys(params).length > 0) {
    _url = _url + '?' + joinObject(params);
  }
  console.log('_url', _url);
  try {
    let res = await axios.get(_url);
    console;
    return res.data;
  } catch (err) {
    console.log('error getAxios', err);
  }
};

let postFormAxios = async (url, params) => {
  let _url = url;
  let _params = objectToForm(params);
  let res = axios.post(_url, _params);
};
let postAxios = async (url, params) => {
  let _url = url;
  let _params = params;
  let res = axios.post(_url, _params);
};

export default {
  getAxios,
  postFormAxios,
  postAxios,
};
