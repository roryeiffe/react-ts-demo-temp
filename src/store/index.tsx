import { configureStore } from "@reduxjs/toolkit";
import {Action} from '../types/types';

export const initialState = {
    players: [
        {
            id: 'id',
            name: 'Rory',
            email: 'r@gmail.com',
            score: 0,
            numWins: 0
        }
    ]
}

const playerReducer:any = (state = initialState, action:Action) => {
    switch(action.type) {
        // pass in a new player object and add it to the array of players:
        case 'ADD':
            console.log('ADD');
            return {
                ...state, 
                players: [...state.players, action.payload]
            }
        default:
            return state;
    }

}

const store = configureStore({reducer: playerReducer});

export default store;