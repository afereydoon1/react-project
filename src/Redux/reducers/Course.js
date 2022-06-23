export const CourseReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_COURSE":
            return {...action.payload};
        default:
            return state;
    }
}