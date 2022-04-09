import * as React from 'react';
// import renderer, { act } from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product } from '../data/data';
import { render, fireEvent, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom';

describe('ProductTitle', () => {
  test('should render the card correctly', () => {
    const { container } = render(
      <ProductCard product={product}>
        {
          () => (
            <h1>Product Card</h1>
          )
        }
      </ProductCard>
    );
    expect(container).toMatchSnapshot();
  });

  test('should increase the count by 1', () => {
    const { container } = render(
      <ProductCard product={product}>
        {
          ({ increaseBy, counter }) => (
            <>
              <h1>Product Card</h1>
              <p>{counter}</p>
              <button onClick={() => increaseBy(1)}>Increase by 1</button>
            </>
          )
        }
      </ProductCard>
    );
    expect(container).toMatchSnapshot();

    expect(screen.getByText('0')).toBeInTheDocument();

    act(() => {
      fireEvent.click(screen.getByText('Increase by 1'));
    });

    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
