import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, tap } from 'rxjs/operators';
import { GetUserService } from 'src/app/services/get-user.service';
import { ViewUserModel } from 'src/app/models/user.model';
import { SEND_VALUE_FROM_INPUT_TO_SERVICE, SendUserValueAction, LoadUserAction } from '../actions/user.actions';


@Injectable()
export class UserEffects {
  constructor(private actions: Actions, private githubService: GetUserService) {}

  @Effect(  )
  getUser = this.actions.pipe(
    ofType<SendUserValueAction>(SEND_VALUE_FROM_INPUT_TO_SERVICE),
    switchMap(action =>
      this.githubService.fetchUserData(action.payload)
      .pipe(
        map((response: ViewUserModel) => new LoadUserAction(response)),
      ))
  );
}
