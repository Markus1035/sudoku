import {combineReducers} from 'redux';

import  { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import gameReducer from './game/game.reducer';

const persistConfig = {
    key:'root',
    storage,
    whitelist: ['game'],
}

const rootReducer = combineReducers({
    game: gameReducer,
})

export default persistReducer(persistConfig, rootReducer); 