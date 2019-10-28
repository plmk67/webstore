import { createReducer } from "../../common/util/reducerUtil";

const initialState = [
  {
    product_sku: "SKU 001",
    product_name: "Deadstock Koh-I-Noor Rapidomatic Pencil",
    product_price: 20.0,
    product_description:
      "The vintage 90s Koh-I-Noor Rapidomatic mechanical pencils were an industry standard instrument used by design students, drafters, and engineers. Known for its balance and simple aesthetic, these deadstock Rapidomatic pencils feature a diamond-cut grip area, lead degree indicator and a red hexagonal body.",
    bulletpoint: [
      "Model Number: 5633",
      "Lead Diameter: 0.3mm",
      "Deadstock, Brand new in original package"
    ],
    product_image: [
      "https://firebasestorage.googleapis.com/v0/b/webstore-3722d.appspot.com/o/Pen-01.jpg?alt=media&token=942ee80e-caa3-4d15-a17f-4e4af618966d",
      "https://firebasestorage.googleapis.com/v0/b/webstore-3722d.appspot.com/o/Pen-02.jpg?alt=media&token=da1e4d4b-728b-4cdd-ae0b-0d080703b729",
      "https://firebasestorage.googleapis.com/v0/b/webstore-3722d.appspot.com/o/Pen-03.jpg?alt=media&token=9578cdf9-f994-498a-8f4c-c5354266fadf"
    ]
  },
  {
    product_sku: "SKU 002",
    product_name: "Deadstock Swedish Military Leather Belt",
    product_price: 100.0,
    product_description:
      "Deadstock Swedish Miltary Belt made from Post World War II era. Featuring natural tan leather with simple Swedish military stamp logo, this durable military belt will soften and age (patina) beautifully as you wear it with care. An essential belt with history that will serve you for years.",
    bulletpoint: [
      "Natural tan leather",
      "Solid brass hardware",
      '110 fits 28"- 34" inch waist',
      '120 fits 30 - 36" inch waist',
      "Due to the age of the product, some items may have blemishes and oxidization on surface"
    ],
    product_image: [
      "https://firebasestorage.googleapis.com/v0/b/webstore-3722d.appspot.com/o/belt-01.jpg?alt=media&token=69ac81a1-3b86-488a-868d-7269d86b09f4", 
      "https://firebasestorage.googleapis.com/v0/b/webstore-3722d.appspot.com/o/belt-02.jpg?alt=media&token=98c9f81d-dedc-443b-bec8-bf47f078ff12",
      "https://firebasestorage.googleapis.com/v0/b/webstore-3722d.appspot.com/o/belt-03.jpg?alt=media&token=6c1ebf37-3b79-41e6-b4d1-e51061cb5d72"
    ]
  },
  {
    product_sku: "SKU 003",
    product_name: "Oatmeal Melange Socks",
    product_price: 12.0,
    product_description:
      "Featuring a unique slubby texture from cotton and nylon blend, we have found the perfect thickness that is comfortable for all seasons. Our Oatmeal Melange Socks are designed for everyday use and will withstand many cycles of washing and drying.",
    bulletpoint: [
      "Cotton / Nylon blend",
      "Elastic ribbed",
      "One size (US 6-10)"
    ],
    product_image: [
      "https://firebasestorage.googleapis.com/v0/b/webstore-3722d.appspot.com/o/Sock-01.jpg?alt=media&token=a90f0355-cd2e-4ed1-955f-c99ae15ce62f",
      "https://firebasestorage.googleapis.com/v0/b/webstore-3722d.appspot.com/o/Sock-02.jpg?alt=media&token=df7d40cb-c483-4d61-9e9d-bd3e59c29162"
    ]
  }
];

export default createReducer(initialState, {});
