import { collection, getDocs, query, where, getDoc, doc, addDoc, writeBatch} from "firebase/firestore";
import {db} from "./config.js";

const ITEMS = [
    {
      title: "Pantalon Estampado",
      category: "new",
      price: 250000,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
      img: "https://www.albertina-shop.com/cdn/shop/products/AL3093_1024x1024.jpg?v=1682020722",
      stock: 10,
    },
    {
      title: "Vestido Estampado 1",
      category: "new",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 300000,
      img: "https://www.albertina-shop.com/cdn/shop/products/AL1867_1024x1024.jpg?v=1676918015",
      stock: 5,
    },
    {
      title: "Vestido Estampado 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      category: "sale",
      price: 150000,
      stock: 5,
      img: "https://www.albertina-shop.com/cdn/shop/products/AL1327_1024x1024.jpg?v=1676640699",
    },
    {
      title: "Vestido Estampado 3",
      category: "sale",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 150000,
      img: "https://www.albertina-shop.com/cdn/shop/products/AL2363_1024x1024.jpg?v=1680703429",
      stock: 6,
    },
    {
      title: "Blusa",
      category: "new",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 170000,
      img: "https://www.albertina-shop.com/cdn/shop/products/AL1782_1024x1024.jpg?v=1680535341",
      stock: 0,
    },
    {
      title: "Jogger Estampado",
      category: "sale",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 150000,
      img: "https://www.albertina-shop.com/cdn/shop/products/ALB2046_large.jpg?v=1680036533",
      stock: 6,
    },
    {
      title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      category:"men",
      price:600000,
      description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      img:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      stock: 10
   },
   {
      title:"Mens Casual Premium Slim Fit T-Shirts ",
      price:140000,
      description:"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category:"men",
      img:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      stock: 10
   },
   {
      title:"Mens Cotton Jacket",
      price:420000,
      description:"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category:"men",
      img:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      stock: 10
    },
   {
      title:"Mens Casual Slim Fit",
      price:112000,
      description:"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category:"men",
      img:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      stock: 10
   },
   {
      title:"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price:3000000,
      description:"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category:"jewelery",
      img:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      stock: 10
   },
   {
      title:"Solid Gold Petite Micropave ",
      price:1000000,
      description:"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category:"jewelery",
      img:"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      stock: 10
   },
   {
      title:"White Gold Plated Princess",
      price:70000,
      description:"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category:"jewelery",
      img:"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      stock:10
   },
   {
      title:"Pierced Owl Rose Gold Plated Stainless Steel Double",
      price:80000,
      description:"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category:"jewelery",
      img:"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      stock: 10
   },
   {
      title:"WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price:448000,
      description:"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category:"electronics",
      img:"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      stock: 10
   },
   {
      title:"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price:700000,
      description:"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category:"electronics",
      img:"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      stock: 5
   },
   {
      title:"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      price:700000,
      description:"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      category:"electronics",
      img:"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      stock: 10
   },
   {
      title:"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price:798000,
      description:"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category:"electronics",
      img:"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      stock: 11
   },
   {
      title:"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      price:4100000,
      description:"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      category:"electronics",
      img:"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      stock: 20
   },
   {
      title:"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      price:7000000,
      description:"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      category:"electronics",
      img:"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      stock: 14
   },
   {
      title:"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price:400000,
      description:"Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      category:"women",
      img:"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      stock: 13
   },
   {
      title:"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price:210000,
      description:"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      category:"women",
      img:"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      stock:15
   },
   {
      title:"Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price:280000,
      description:"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      category:"women",
      img:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      stock: 20
   },
   {
      title:"MBJ Women's Solid Short Sleeve Boat Neck V ",
      price:70000,
      description:"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category:"women",
      img:"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      stock: 14
   },
   {
      title:"Opna Women's Short Sleeve Moisture",
      price:56000,
      description:"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      category:"women",
      img:"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      stock: 17
   },
   {
      title:"DANVOUY Womens T Shirt Casual Cotton Short",
      price:91000,
      description:"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      category:"women",
      img:"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      stock: 14
   }
  ];
  
const clotheRef = collection(db,"Items");

  export const getItems = async (category) => {
   /* const _items = id ? ITEMS.filter((item) => item.category.toLowerCase() === id): ITEMS ;
    return new Promise((res) => {
      setTimeout(() => {
        res(_items);
      }, 2000);
    });*/
const q = category 
? query(clotheRef, where('category', '==', category)): clotheRef;

    let clothes = [];
    const querRySnapshot = await getDocs(q);
    querRySnapshot.forEach((doc) => {
      clothes = [...clothes, {...doc.data() , id: doc.id}];
    });

    return clothes;
  };
  
  export const getItem = async (id) => {
    const document = doc(db, "Items", id);
    const docSnap = await getDoc(document);
    if (docSnap.exists()) return {id: docSnap.id, ...docSnap.data() }
    return null;
  }

  export const cargarData = async () => {
      ITEMS.forEach(async (item) => {
        await addDoc (clotheRef,item);
      })    
  }

  //ACTUALIZAR
export const updateItem = async (id, item) => {
  const newBook = await updateDoc(doc(db, "Items", id), item);
  return;
};
//ELIMINAR
export const deleteItem = async (id) => {
  return await deleteDoc(doc(db, "Items", id));
};

//OPERACION EN LOTE
export const updateManyItems = async ( items ) => {
  const batch = writeBatch(db);
  
  items.forEach(({id, cantidad})=>{ 
    batch.update(doc(db, "Items", id), {
      stock: increment(-cantidad)
    })
  })

  batch.commit();
}