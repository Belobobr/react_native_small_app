import {POP_ROUTE, PUSH_ROUTE} from './../constants/actionTypes'

export function push(route) {
    return {
        type: PUSH_ROUTE,
        route
    }
}

export function pop() {
    return {
        type: POP_ROUTE
    }
}