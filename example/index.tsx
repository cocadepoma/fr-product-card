import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../.';

export const product = {
  id: '1',
  title: 'Cofee Mug 1',
  // image: './coffee-mug.png'
};

const App = () => {
  return (
    <ProductCard
      product={product}
      initialValues={{
        count: 4,
        // maxCount: 10
      }}
    >
      {({ reset, increaseBy, isMaxCountReached, counter, maxCount }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
