import {constant} from '../Constants/constant';
import {IUser} from '../types/userType';

export let userLoginAction = payload => {
  console.log('payload userLoginAction', payload);
  return {
    type: constant.USER_LOGIN,
    payload,
  };
};
