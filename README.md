# fr-product-card

This is a test package to be deployed in NPM

### Deveser

## Example

```jsx
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from 'fr-product-card';
```

```jsx
export const product = {
  id: '1',
  title: 'Cofee Mug 1',
  image: './coffee-mug.png',
};
```

```jsx
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
```
