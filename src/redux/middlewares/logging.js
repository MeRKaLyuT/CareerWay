export const logging = store => next => action => {
    if (!action.type.startWith('@@') && !action.type.startWith('HMR')) {
        console.log('Action: ', action);
    }
    return next(action);
}