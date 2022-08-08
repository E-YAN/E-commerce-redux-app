const initState = {
  cart: [],

  counter: 0,
};

const cartReducer = (state = initState, action) => {

  let counter = 0;
  switch (action.type) {

    //   case "ADD":

    //       console.log(state)
    //       state.cart?.map(item => !action.payload.id.includes(item.id) && (
    //       state.cart.push(action.payload),
    //       state.counter = state.counter + 1))
    // return{ state };



    case "ADD":
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state : state.cart.push(action.payload),

      };


    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }
    //   state.cart.filter((item) => item.id !== action.payload);
    //   state.counter = state.counter - 1
    //   return {state };
    // },

    //     case "REMOVE":
    //         {
    //             insideCart.map(item){

    //             }
    //         if (action.payload) tempShopping.push(action.payload)
    //         console.log(tempShopping)
    //         return {
    //             ...state,
    //             insideCart: tempShopping,
    //             counter: state.counter -1,

    //         };


    //     tempRemove = [...state.removeFromCart];
    //     if (action.payload) tempRemove.push(action.payload)
    //     return {
    //         ...state,
    //         removeFromCart: tempRemove,
    //         counter: state.counter - 1,
    //    // state.filter((item) => item.id !== action.payload),
    //     counter: state.counter - 1,
    //-----------------
    // tempShopping = [...state.insideCart];
    // tempShopping.splice(action.payload, 1);
    // return{
    //     ...state,
    //     insideCart: tempShopping ,
    //     counter: state.counter - 1,

    // };
    // -------------
    // tempShopping =[...state.insideCart];
    // tempShopping.filter(tempShopping!=action.payload)
    // return{
    //     ...state,
    //     insideCart: tempShopping,
    //     counter: state.counter - 1,




    default:
      return state;

  }
  console.log("counter");
}
export default cartReducer;