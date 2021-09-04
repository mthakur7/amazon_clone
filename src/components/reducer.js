export const initialState = {
    basket: [],
    user: null,
    products: [],
  };
  
  // Selector it sums up the items and returs total amount
  export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);// to get the total price, intial amount is 0
  
    //reducer listens for actions
  const reducer = (state, action) => {
  
    switch (action.type) {
      case "ADD_TO_BASKET"://case to add basket
        return {
          ...state,
          basket: [...state.basket, action.item],//add an item to basket
        };

        case 'EMPTY_BASKET':
          return {
            ...state,
            basket: []
          }
        
        case "REMOVE_FROM_BASKET"://case to temove items
        //since same items have same id, so we are using index to remove items
          const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
          );
          let newBasket = [...state.basket];//creating a newBasket array which contains all the elements of basket
    
          if (index >= 0) {
            newBasket.splice(index, 1);//removing the item which have this index
    
          } else {
            console.warn(
              `Cant remove product (id: ${action.id}) as its not in basket!`
            )
          }
    
          return {
            ...state,
            basket: newBasket
          }  
{/*for user during signin/signout*/}
          case "SET_USER":
            return {
              ...state,
              user: action.user
            }

            case "SET_PRODUCTS":
              return {
                ...state,
                products: action.products,
              };
           

      default:
        return state;
    }
  };
  
  export default reducer;