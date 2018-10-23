import { Action } from '@ngrx/store';
import { ViewUserModel } from 'src/app/models/user.model';

export const SEND_VALUE_FROM_INPUT_TO_SERVICE = '[USER] Send data from input to service';
export const LOAD_USER = '[USER] Load user';

export class SendUserValueAction implements Action {
  readonly type: string = SEND_VALUE_FROM_INPUT_TO_SERVICE;
  constructor(public payload: string) { }
}

export class LoadUserAction implements Action {
  readonly type: string = LOAD_USER;
  constructor(public payload: ViewUserModel) { }
}

export type Types = SendUserValueAction | LoadUserAction;
