import { Flex } from "./Styled";

export const ProductCard = ({ title, id, brand, image, price, category }) => {
  return (
    <>
      <Flex data-testid="single-product-item" key={id}>
        {/* display item info here  */}
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <h2>{brand}</h2>
        <p>Price:{price}</p>
      </Flex>
    </>
  );
};