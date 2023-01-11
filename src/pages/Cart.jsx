import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCart, delCart} from "../redux/action";

const Cart = () => {
  var totalCart = 0;
  // const [amount, setAmount] = useState()
  const payment = useNavigate()
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  // dispatch(totalAmount(amount))
  const handleAdd = (item) => {
    dispatch(addCart(item));
    
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };
  const paymentMode = () => {
    payment('/pay')
  }
  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };
  const cartItems = (product) => {
    totalCart += product.qty * product.price;
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className="lead fw-bold">
                  {product.qty} X ${product.price} = $
                  {product.qty * product.price}
                </p>
                <button
                  className="btn btn-primary me-4"
                  onClick={() => handleDel(product)}
                  >
                  <i className="fa fa-minus">-</i>
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAdd(product)}
                  >
                  <i className="fa fa-plus">+</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className="col-md-8"></div>
        <div className="col-md-4">
          <div className="card card-body mt-2">
            <h4 className="">
              <span className="border border-light"></span>
              Grand Total :<span className="border border-light" >$ {Math.round(totalCart)}</span>
            </h4>
          </div>
        </div>
        <div className="container">
          <div className="row">
              <button className="btn btn-outline-primary mt-4 mb-3" onClick={paymentMode}>Buy Now...</button>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;