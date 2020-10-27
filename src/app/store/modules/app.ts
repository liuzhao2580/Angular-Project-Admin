import { Action, createSelector, createFeatureSelector} from '@ngrx/store'
const state = {
    aside_status: false
}

class AsideChange implements Action {
    readonly type = 'Aside-Change'
}
const action = {
    AsideChange
}

const reducer = (stateModule=state, actionModule=action) =>{
    actionModule
}

export default {
    state,
    action,
    reducer
}
