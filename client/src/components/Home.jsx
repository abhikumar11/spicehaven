import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../redux/action/productAction';

const Home = () => {
  const { productList, loading, error } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>

      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {productList?.map((pro) => (
        <p key={pro.id || pro._id}>{pro.name}</p>
      ))}
    </div>
  );
};

export default Home;
