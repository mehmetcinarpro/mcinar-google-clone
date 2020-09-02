import { ApplicationState } from "./StateProvider";

export enum ActionType {
    SET_SEARCH_TERM = 'SET_SEARCH_TERM'
}

export type Action = { type: ActionType.SET_SEARCH_TERM, term: string };

export const reducer = (state: ApplicationState, action: Action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.SET_SEARCH_TERM:
            return { ...state, term: action.term };
        default:
            return state;
    }
};

export default reducer;