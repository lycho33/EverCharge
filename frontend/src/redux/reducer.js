const initialState = {
    all: [],
    user: {},
    errors: []
}

export function reducer(state=initialState, action){
    switch(action.type){
        case 'CREATING_OR_GETTING_USER':
            return {...state, errors: []}
        default:
            return {...state}
    }
}