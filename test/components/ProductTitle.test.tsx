import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product } from '../data/data';

describe('ProductTitle', () => {
  test('should render with the title', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom Product" className="custom-class" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with the name of the product', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>
        {() => (
          <ProductTitle />
        )}
      </ProductCard>
    );
    expect(wrapper).toMatchSnapshot();
  }
  );
});
