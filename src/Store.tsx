import React from "react";


interface IState {
  communities: Array<any>
  homes: Array<any>
  

}
interface IAction {
  type: string
  payload: any
}
const initialState: IState = {
  communities: [],
  homes: []
}
export const Store = React.createContext<IState | any>(initialState)


function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case 'FETCH_DATA':
    return { ...state, communities: action.payload }
    case 'FETCH_HOME_DATA':
    return { ...state, homes: action.payload }
    default:
      return state
  }
}


export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>;

}