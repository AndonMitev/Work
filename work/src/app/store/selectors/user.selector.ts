import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const FEATURE_SELECTOR = createFeatureSelector<AppState>('Users');

export const USER_STATE_SELECTOR = createSelector(FEATURE_SELECTOR, (state) => state.userData.userState);

