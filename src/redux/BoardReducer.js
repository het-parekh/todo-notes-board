import * as ActionTypes from './ActionTypes'

export const Boards = (state={boards:[],openedBoard:0},action) => {
    switch(action.type){
        case ActionTypes.FETCH_BOARDS:
            return {...state,boards:action.payload}
        case ActionTypes.ADD_BOARD:
            return {...state,boards:state.boards.concat(action.payload),openedBoard:action.payload.id}
        case ActionTypes.DELETE_BOARD:
            return {...state,openedBoard:action.payload[1],boards:state.boards.filter(board => board.id !== action.payload[0])}
        case ActionTypes.UPDATE_BOARD:
            return {...state,openedBoard:action.payload.id,boards:state.boards.map((board,board_id)=>{
                if(board.id === action.payload.id){
                    return action.payload
                }
                return board
            }) }
        case ActionTypes.SWITCH_BOARD:
            return{...state,openedBoard:action.payload}
        default:
            return state
    }
}