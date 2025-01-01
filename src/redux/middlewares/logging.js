export const logging = store => next => action => {
    if (!action.type.startsWith('@@') && !action.type.startsWith('HMR')) {
        console.log('Action: ', action);
    }
    return next(action);
};