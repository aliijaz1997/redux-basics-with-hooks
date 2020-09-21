One thing to remember that if we need to make action.type more reliable that
we have to create another component. In which 3 functions would be 
form which will be returning acton.type. Now instead of string action.type would be just 3 functions.

export const INCREMENT = "INCREMENT";
export const increment = ()=>{
    return {
        type: INCREMENT
    }
}