export type Product = {
    _id: string;
    title: string;
    price: number;
    priceWithoutDiscount?: number;
    image: {
      asset: {
        url: string;
      };
    };
  };