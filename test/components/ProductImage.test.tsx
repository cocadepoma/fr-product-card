import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/data';

describe('ProductTitle', () => {
  test('should render with the custom image', () => {
    const wrapper = renderer.create(<ProductImage image="https://my-custom-image.png" className="my-custom-class" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with the image of the product', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {() => (
          <ProductImage />
        )}
      </ProductCard>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
