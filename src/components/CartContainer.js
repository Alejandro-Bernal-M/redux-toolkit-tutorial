import { openModal } from "../features/modal/modalSlice";
import CardItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";


const CartContainer = () => {
  const dispatch = useDispatch();
 const { cartItems, total, amount } = useSelector((state) => state.cart);

 if(amount < 1){
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
        <h4 className="empty-cart">Your cart is currently empty</h4>
      </header>
    </section>
  )
 }
  return(
    <section className="cart">
       <header>
        <h2>Your Bag</h2>
        </header>
        <div>
          {cartItems.map((item) => {
            return <CardItem key={item.id} {...item} />
          })}
        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>total <span>${total.toFixed(2)}</span></h4>
          </div>
          <button className="btn clear-btn" onClick={() => dispatch(openModal())}>Clear cart</button>
        </footer>
    </section>

  )
}

export default CartContainer