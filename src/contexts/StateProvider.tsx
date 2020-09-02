import React, { createContext, useReducer, useContext } from 'react';
import { reducer, Action } from './reducer';

export interface ApplicationState {
    term: string;
}

export const InitialState: ApplicationState = {
    term: ""
}

export interface IStateContext {
    state: ApplicationState;
    dispatch: React.Dispatch<Action>;
}

const StateContext = createContext({} as IStateContext);

export const StateProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, InitialState);
    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateValue = () => useContext(StateContext);
