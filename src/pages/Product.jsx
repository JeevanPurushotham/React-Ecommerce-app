import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";

import ReactImageMagnify from "react-image-magnify";
import 'bootstrap/dist/css/bootstrap.css';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false)
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
    setActive(!active)
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);

      setProduct(await response.json());
      setLoading(false);
      
    };

    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const img1 = product.image;
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-3">
          {/* <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          /> */}
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: img1,
                src: img1,
                isFluidWidth: true,
              },
              largeImage: {
                src: img1,
                width: 1200,
                height: 1800,
              },
            }}
          />
          <p className="lead fw-bolder mt-3">
            Rating - ⭐{product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-8 fw-bold my-6">${product.price}</h3>
          <button className="btn  ms-1 px-1 py-1" onClick={() => addProduct(product)}
            style={{ backgroundColor: active ? "lightGreen" :"#1976d2",color:"white"}}>
            ADD TO CART
          </button>
          <NavLink to="/cart">
            <button className="btn ms-1 px-1 py-1" style={{ backgroundColor:"#1976d2",color:"white"}}>GO TO CART</button> 
          </NavLink>
        </div>
        {/* <div>
            <object
              data="https://www.youtube.com/embed/nfk6sCzRTbM?autoplay=1"
              width="560px"
              height="315px"
            ></object>
          </div> */}

        <div className="col-md-3" display="flex">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h6 className="display-12">{product.title}</h6>


          {/* <h5 className="dropdown">{Dropdown1()}</h5> */}
          <p className="product-description">{product.description}</p>

        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-2">
        <div className="row py-2">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
