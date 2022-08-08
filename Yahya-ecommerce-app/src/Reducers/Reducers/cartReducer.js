let initState = [];


const cartReducer = (state = initState, action) => {

    switch (action.type) {
        case "ADD":

            //   const temp =  state.map(item=> item === action.payload.id)
            console.log([...state, action.payload])
            // console.log("ADD"+  state)
            // ZZ
            return [
                ...state, action.payload
                // {
                // id: action.payload.id,
                // title :action.payload.title,
                // image : action.payload.image,
                // price : action.payload.price,
                // // count : state.count + 1,
                // }

            ];




        case "REMOVE":

            const deletedId = state.filter((item) => item.id !== action.payload);
            console.log("remove" + state)
            console.log("removeDD" + deletedId)

            return [
                ...deletedId
            ];


        default:
            return state;

    }
}
export default cartReducer;