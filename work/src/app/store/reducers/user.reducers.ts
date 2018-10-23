import * as UserActions from '../actions/user.actions';
import { UserState } from '../state/user.state';

const INITIAL_STATE: UserState = {
  userState: null,
};

function sendUserValueToService (state, userInputValue) {
  state.inputValue = userInputValue;
  return state;
}

function loadUser(state: UserState, payload) {
  state.userState = payload;
  return state;
}

export function userReducer(state: UserState = INITIAL_STATE, action: UserActions.Types) {
  switch (action.type) {
    case UserActions.SEND_VALUE_FROM_INPUT_TO_SERVICE:
      return sendUserValueToService(state, action.payload);
     case UserActions.LOAD_USER:
      return loadUser(state, action.payload);
    default:
      return state;
  }
}
