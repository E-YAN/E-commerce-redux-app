export const addToCart = (id) => {

  return {
    type: "ADD",
    payload: id
    // {
    //   id:product.id,
    //   title:product.title,
    //   image:product.image,
    //   price:product.price,
    //   // count : 0
    // }
  };
};



export const removeProduct = (id) => {
  console.log("removeId" + id)
  return {
    type: "REMOVE",
    payload: id
  };
};

