const ITEMS = [
    {
      id: 1,
      title: "Pantalon Estampado",
      category: "New",
      price: 250000,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
      img: "https://www.albertina-shop.com/cdn/shop/products/AL3093_1024x1024.jpg?v=1682020722",
      stock: 10,
    },
    {
      id: 2,
      title: "Vestido Estampado 1",
      category: "New",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 300000,
      img: "https://www.albertina-shop.com/cdn/shop/products/AL1867_1024x1024.jpg?v=1676918015",
      stock: 5,
    },
    {
      id: 3,
      title: "Vestido Estampado 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      category: "Sale",
      price: 150000,
      stock: 5,
      img: "https://www.albertina-shop.com/cdn/shop/products/AL1327_1024x1024.jpg?v=1676640699",
    },
    {
      id: 4,
      title: "Vestido Estampado 3",
      category: "Sale",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 150000,
      img: "https://www.albertina-shop.com/cdn/shop/products/AL2363_1024x1024.jpg?v=1680703429",
      stock: 6,
    },
    {
      id: 5,
      title: "Blusa",
      category: "New",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 170000,
      img: "https://www.albertina-shop.com/cdn/shop/products/AL1782_1024x1024.jpg?v=1680535341",
      stock: 0,
    },
    {
      id: 6,
      title: "Jogger Estampado",
      category: "Sale",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 150000,
      img: "https://www.albertina-shop.com/cdn/shop/products/ALB2046_large.jpg?v=1680036533",
      stock: 6,
    },
  ];
  
  export const getItems = (id) => {
    const _items = id ? ITEMS.filter((item) => item.category.toLowerCase() === id): ITEMS ;
    return new Promise((res) => {
      setTimeout(() => {
        res(_items);
      }, 2000);
    });
  };
  
  export const getItem = (id) => {
    const item = ITEMS.filter((item) => item.id === id)[0];
    return new Promise((res) => {
      setTimeout(() => {
        res(item);
      }, 2000);
    });
  }