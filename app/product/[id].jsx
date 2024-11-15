import React from 'react';


const ProductPage = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <h2>Страница продукта ID: {id}</h2>
      {/* Ваш контент страницы продукта */}
      <p>Информация о продукте с ID {id}...</p>
    </div>
  );
};

export default ProductPage;