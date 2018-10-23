import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/store/state/user.state';
import { SendUserValueAction } from 'src/app/store/actions/user.actions';
import { map } from 'rxjs/operators';
import { USER_STATE_SELECTOR } from '../../store/selectors/user.selector';
import { ViewUserModel } from 'src/app/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-user-input',
  templateUrl: './get-user-input.component.html',
  styleUrls: ['./get-user-input.component.css']
})
export class GetUserInputComponent implements OnInit {
  public userInputForm: FormGroup;
  public userData$: Observable<ViewUserModel>;
  constructor(private fb: FormBuilder, private store: Store<UserState>) { }

  public ngOnInit(): void {
    this.initializeUserForm();
  }

  public initializeUserForm(): void {
    this.userInputForm = this.fb.group({
      login: ['']
    });
  }

  public submitUserForm(): void {
    const USERNAME = this.userInputForm.value.login;
    this.store.dispatch(new SendUserValueAction(USERNAME));
    this.userData$ = this.store.pipe(
      map(USER_STATE_SELECTOR)
    );
  }
}
