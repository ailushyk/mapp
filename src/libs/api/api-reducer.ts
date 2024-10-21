import { ApiRequestParams, ApiState } from '@/types.ts'

export enum ApiActions {
  'FetchStart' = 'FetchStart',
  'FetchSuccess' = 'FetchSuccess',
  'Error' = 'Error',
  'EndOfData' = 'EndOfData',
  'Restart' = 'Restart',
}

export type Action<T, Q> =
  | {
      type: ApiActions.FetchSuccess
      payload: T
    }
  | {
      type: ApiActions.FetchStart
      payload: Q
    }
  | {
      type: ApiActions.EndOfData | ApiActions.Restart
    }

//   | {
//   type: Actions.Error
//   payload: {
//     payload: { message: string }
//   }
// }

export const apiReducer = <T, Q extends ApiRequestParams>(
  state: ApiState<T, Q>,
  action: Action<T, Q>,
) => {
  switch (action.type) {
    case ApiActions.FetchStart:
      return {
        ...state,
        isPending: true,
      }
    case ApiActions.FetchSuccess:
      return {
        ...state,
        data: action.payload,
        isPending: false,
      }
    case ApiActions.EndOfData:
      return {
        ...state,
        isPending: false,
        endOfData: true,
      }
    default:
      return state
  }
}
