import {constant} from '../Constants/constant';

let initState = {
  user: {
    email: '',
    password: '',
  },
};

export const userReducer = (state = initState, action) => {
  let {type, payload} = action;
  console.log('type userReducer', type);
  console.log('payload userReducer', payload);
  switch (type) {
    case constant.USER_LOGIN:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};
