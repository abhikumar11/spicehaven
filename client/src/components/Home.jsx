import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../redux/action/productAction';
import Product from './Product';

const Home = () => {
  const { productList, loading, error } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
   <div className="px-6 py-10 bg-gray-50 min-h-screen">
  <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
    Order Our Best Food Options 🍔🍕🥗
  </h1>

  {loading && (
    <p className="text-center text-gray-600 animate-pulse">Loading products...</p>
  )}
  {error && <p className="text-center text-red-500 font-medium">{error}</p>}

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {productList?.map((pro) => (
      <Product key={pro.id || pro._id} product={pro} />
    ))}
  </div>
</div>

  );
};

export default Home;
