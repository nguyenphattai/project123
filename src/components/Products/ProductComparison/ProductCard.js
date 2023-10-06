import { Item, Button } from "semantic-ui-react";

function ProductCard({ product, addToCompare, removeFromCompare, selected }) {
  return (
    <Item key={product.name}>
      <Item.Image size="large" src={product.img} />
      <Item.Content verticalAlign="middle">
        <Item.Header>{product.name}</Item.Header>
        <Item.Description>Price: ${product.price}</Item.Description>
        <Item.Extra>
          {selected && selected.includes(product) ? (
            <Button color="red" onClick={() => removeFromCompare(product)}>
              Remove
            </Button>
          ) : (
            <Button color="blue" onClick={() => addToCompare(product)}>
              Compare
            </Button>
          )}
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}

export default ProductCard;
