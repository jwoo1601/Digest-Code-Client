import { configureStore, getDefaultMiddleware, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { appReducer } from './reducers';

export default function configureAppStore(preloadedState) {
    const store = configureStore({
        reducer: appReducer,
        middleware: [...getDefaultMiddleware()],
        preloadedState,
        enhancers: []
    })

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer(appReducer));
    }

    return store;
}

const dialogs = {
    register: {
        visible: false,
    },
    login: {
        visible: false,
    }
}

const posts = [
    {
        id,
        title,
        body,
        author,
        resources,
    }
]

const comments = [
    
]

const initialState = {
    locale: 'en-US',
    dialogs,
    posts,
}