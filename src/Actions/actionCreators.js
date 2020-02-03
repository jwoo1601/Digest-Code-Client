import { createAction } from '@reduxjs/toolkit';
import { CHANGE_LOCALE, SHOW_DIALOG, HIDE_DIALOG, TOGGLE_DIALOG } from './ActionTypes';

/**
 * changeLocale('ko-KR');
 */
const changeLocale = createAction(CHANGE_LOCALE);

/**
 * showDialog({ name: 'register' });
 */
const showDialog = createAction(SHOW_DIALOG);
const hideDialog = createAction(HIDE_DIALOG);
const toggleDialog = createAction(TOGGLE_DIALOG);