const formatPrice = (price: number) => {
  return price.toString().replace('.', ',');
};

export default formatPrice;
