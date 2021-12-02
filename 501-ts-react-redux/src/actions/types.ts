import { FetchTodosAction, ClearTodosAction } from "./todos";

// export const FETCHTODOS = 'fechTodos' is now 'enum'

export enum ActionTypes {
  fetchTodos = 1,
  clearTodos = 2,
}

export type Action = FetchTodosAction | ClearTodosAction;
