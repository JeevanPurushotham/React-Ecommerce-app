import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'bootstrap/dist/css/bootstrap.css';
// import { Pagination } from "./pagination/Pagination";
// import { Posts } from "./pagination/Posts";

const Products = () => {
  const [data, setData] = useState([]);

  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postPerPage, setPostPerPage] = useState(4);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        // console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  //Get Current post
  // const indexOfLastPost = currentPage * postPerPage;
  // const indexOfFirstPost = indexOfLastPost - postPerPage;
  // const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);

  const Loading = () => {
    return (
      <>
      <div display="flex">
        <div className="col-md-3">
          <Skeleton height={350}></Skeleton>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}></Skeleton>
        </div>

        <div className="col-md-3">
          <Skeleton height={350}></Skeleton>
        </div>

        <div className="col-md-3">
          <Skeleton height={350}></Skeleton>
        </div>
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <div
            className="btn btn-outline-primary me-2 "
            onClick={() => {
              setFilter(data);
            }}
          >
            All
          </div>
          <div
            className="btn btn-outline-primary me-2"
            onClick={() => {
              filterProduct("men's clothing");
            }}
          >
            Men's Clothing
          </div>
          <div
            className="btn btn-outline-primary me-2"
            onClick={() => {
              filterProduct("women's clothing");
            }}
          >
            women's Clothing
          </div>
          <div
            className="btn btn-outline-primary me-2"
            onClick={() => {
              filterProduct("jewelery");
            }}
          >
            Jewelery{" "}
          </div>
          <div
            className="btn btn-outline-primary me-2"
            onClick={() => {
              filterProduct("electronics");
            }}
          >
            Electronic
          </div>
        </div>
        {filter.map((currentPage) => {
          return (
            <>
              {/* <span class="border border-primary"></span> */}
              <div className="col-md-3 md-4">
                <div
                  className="card h-100 text-center p-4"
                  key={currentPage.id}
                >
                  <img
                    src={currentPage.image}
                    className="card-img-top"
                    alt={currentPage.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {currentPage.title.substring(0, 12)}...
                    </h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted"></h6> */}
                    <p className="card-text lead fw-bold">
                      ${currentPage.price}
                    </p>
                    <NavLink
                      to={`/product/${currentPage.id}`}
                      class="btn btn-outline-dark me-2"
                    >
                      Details
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProduct />}
            {/* <Posts posts={currentPost} loading={loading}> </Posts> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
