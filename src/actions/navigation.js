import {POP_ROUTE, PUSH_ROUTE, RESET_ROUTES} from './../constants/actionTypes'

export function pushRoute(route) {
    return {
        type: PUSH_ROUTE,
        route
    }
}

export function popRoute() {
    return {
        type: POP_ROUTE
    }
}

export function resetRoutes(routes, index) {
    return {
        type: RESET_ROUTES,
        routes,
        index,
    }
}