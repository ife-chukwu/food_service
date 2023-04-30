import { AiFillHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

const searchDataBase = [
  {
    id: "1",
    name: "Hawaiian Pizza",
    type: "pizza",
    description:
      "Our Hawaiian pizza is made with juicy pineapple chunks, crispy bacon, and savory ham. A delicious tropical twist on a classic pizza.",
    extraInfo:
      "Hawaiian Pizza: This pizza usually contains ham, pineapple, and cheese on a tomato sauce base. It is typically high in calories, saturated fat, and sodium.",
    imageUrl:
      "https://media.istockphoto.com/id/1144856949/photo/pepperoni-pizza-with-mozzarella-cheese-salami-pepper-spices-and-fresh-spinach-italian-pizza.jpg?s=612x612&w=0&k=20&c=uJDI0uBinkgXl_VwLQDyiwNWfGRFguyzRuaGO8iF5qY=",
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
    price: 9.2,
  },
  {
    id: "2",
    name: "Mango Tango Smoothie",
    type: "drink",
    description:
      "Our Mango Tango smoothie is made with fresh mangoes, bananas, and yogurt. A refreshing and healthy drink for any time of day.",
    extraInfo:
      "Mango Tango Smoothie: This smoothie is typically made with mango, banana, yogurt, and/or milk. It is generally a good source of vitamins and minerals, but may also contain added sugars if sweetened.",
    imageUrl:
      "https://media.istockphoto.com/id/175252833/photo/mango-and-pineapple-smoothie.jpg?s=612x612&w=0&k=20&c=Hca2ikIlmECFm5C4t8x7cK4WQefr8l-t1gS89u2IrK4=",
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
    price: 5.2,
  },
  {
    id: "3",
    name: "Classic Burger",
    type: "burger",
    description:
      "Our classic burger is made with a juicy beef patty, topped with lettuce, tomato, onion, and pickles. Served on a soft sesame seed bun.",
    extraInfo:
      "Classic Burger: A classic burger typically includes a beef patty, lettuce, tomato, onion, pickles, and condiments such as ketchup or mayonnaise. It is typically high in calories, fat, and sodium.",
    imageUrl:
      "https://images.unsplash.com/photo-1535569807835-01fd773379ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Q2xhc3NpYyUyMEJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
    price: 10.2,
  },
  {
    id: "4",
    name: "Pepperoni Pizza",
    type: "pizza",
    description:
      "Our Pepperoni pizza is made with spicy pepperoni slices, fresh tomato sauce, and mozzarella cheese. A classic favorite that never goes out of style.",
    extraInfo:
      "Pepperoni Pizza: This pizza usually contains pepperoni, cheese, and tomato sauce. It is typically high in calories, saturated fat, and sodium.",
    imageUrl:
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8UGVwcGVyb25pJTIwUGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
    price: 15.2,
  },
  {
    id: "5",
    name: "Strawberry Lemonade",
    type: "drink",
    description:
      "Our Strawberry Lemonade is made with freshly squeezed lemon juice and sweet strawberries. A perfect balance of tart and sweet flavors.",
    extraInfo:
      "Strawberry Lemonade: This beverage is typically made with lemon juice, water, sugar, and fresh or frozen strawberries. It may also contain added sugars or sweeteners.",
    imageUrl:
      "https://images.unsplash.com/photo-1573500883698-e3ef47a95feb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8U3RyYXdiZXJyeSUyMExlbW9uYWRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
    price: 7.2,
  },
  {
    id: "6",
    name: "Spicy Chicken Burger",
    type: "burger",
    description:
      "Our spicy chicken burger is made with a crispy chicken patty, topped with lettuce, tomato, and spicy mayo. Served on a soft sesame seed bun.",
    extraInfo:
      "Spicy Chicken Burger: This burger usually includes a chicken patty seasoned with spices, lettuce, tomato, onion, and condiments. It is typically high in calories and sodium, depending on the preparation method and ingredients used.",
    imageUrl:
      "https://media.istockphoto.com/id/1394794108/photo/sweet-and-sour-crispy-fried-chicken-burger-with-kimchi.jpg?s=612x612&w=0&k=20&c=Kti39_KZP5Fzpw3dqN_zCTZ5G4ljBOvcWjmQb4hCvLc=",
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
    price: 9.2,
  },
  {
    id: "7",
    name: "Vegetable Pizza",
    type: "pizza",
    description:
      "Our Vegetable pizza is loaded with fresh vegetables, including bell peppers, onions, mushrooms, and olives. A delicious and healthy pizza option.",
    extraInfo:
      "Vegetable Pizza: This pizza usually includes a variety of vegetables such as bell peppers, onions, mushrooms, and olives on a tomato sauce and cheese base. It can be a good source of vitamins and minerals, but may also be high in sodium and calories depending on the toppings and crust.",
    imageUrl:
      "https://media.istockphoto.com/id/1151447052/photo/tasty-supreme-pizza-with-olives-peppers-onions-and-sausage.jpg?s=612x612&w=0&k=20&c=6m17pHx7VmeR2jCYmgbVCMTUgejpzFsB4Sx654fPBnM=",
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
    price: 8.2,
  },
  {
    id: "8",
    name: "Blueberry Smoothie",
    type: "drink",
    description:
      "Our Blueberry smoothie is made with fresh blueberries, bananas, and yogurt. A tasty and nutritious way to start your day.",
    extraInfo:
      "Blueberry Smoothie: This smoothie typically includes blueberries, banana, yogurt, and/or milk. It is generally a good source of vitamins and minerals, but may also contain added sugars if sweetened.",
    imageUrl:
      "https://media.istockphoto.com/id/1355866215/photo/moon-milk-pink-matcha-with-rose-petals-transparent-cup-with-trendy-vegan-whipped-tea-on-white.jpg?s=612x612&w=0&k=20&c=Hx3TPMhtRu1LxmqvyZKwlUBIcb1LhHwwpCiIO_YI3q8=",
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
    price: 12.2,
  },
  {
    id: "9",
    name: "BBQ Burger",
    type: "burger",
    description:
      "Our BBQ burger is made with a juicy beef patty, topped with crispy onion rings and smoky BBQ sauce. Served on a soft sesame seed bun.",
    extraInfo:
      "BBQ Burger: This burger typically includes a beef patty with BBQ sauce, bacon, cheese, lettuce, and tomato. It is typically high in calories, fat, and sodium.",
    imageUrl:
      "https://media.istockphoto.com/id/642884888/photo/home-made-hamburger-with-lettuce-and-cheese.jpg?s=612x612&w=0&k=20&c=HsQ3rKPT5VFKeyJIU4uVDb9LAAN6JYlZNi6fUvQcv50=",
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
    price: 9.2,
  },
  {
    id: "10",
    name: "Meat Lovers Pizza",
    type: "pizza",
    description:
      "Our Meat Lovers pizza is loaded with savory meats, including pepperoni, sausage, bacon, and ham. A meaty delight for any pizza lover.",
    extraInfo:
      "Meat Lovers Pizza: This pizza usually contains various meats such as sausage, pepperoni, ham, and bacon on a tomato sauce and cheese base. It is typically high in calories, saturated fat, and sodium.",
    imageUrl:
      "https://media.istockphoto.com/id/837568064/photo/hot-true-italian-pizza-pepperoni-pizza-on-board-on-white-wooden-table-with-decoration-copy.jpg?s=612x612&w=0&k=20&c=Yoguiracu9DA01ikte9H9HtCJDgKoAozOV2k91UHhK4=",
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
    price: 9.5,
  },
  {
    id: "11",
    name: "Margherita pizza",
    img: "https://media.istockphoto.com/id/516247125/photo/prosciutto-and-arugula-pizza.jpg?s=612x612&w=0&k=20&c=6MXT4MQ-4G_t7sG3L-JmHOs2xAQPsCYJGjW2r7Au6Yo=",
    description:
      "A classic pizza that originated in Naples, Italy. It's made with simple ingredients, including tomato sauce.",
    oder: "add to cart",
    price: 8.2,
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
  },
  {
    id: "12",
    name: "Pepperoni pizza",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8UGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

    description:
      "A popular type of pizza in the United States, pepperoni pizza features tomato sauce, mozzarella cheese, and slices .",
    oder: "add to cart",
    price: 14.2,
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
  },
  {
    id: "13",
    name: "Hawaiian pizza",

    img: "https://media.istockphoto.com/id/1349383878/photo/hawaiian-pizza-with-ham-and-pineapple.jpg?s=612x612&w=0&k=20&c=P7rJNWhe1utWDDXUa4ZyZdnl4C5he8jfWD-dKf_hefI=",
    description:
      "This controversial pizza variety features tomato sauce, mozzarella cheese, ham, and pineapple. ",
    oder: "add to cart",
    price: 11.2,
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
  },
  {
    id: "14",
    name: "Chicago-style deep dish pizza",

    img: "https://media.istockphoto.com/id/1365238572/photo/slice-of-melted-cheese-pizza.jpg?s=612x612&w=0&k=20&c=7l2MxoRHyMFTC8TBz_LQ1RmtTiN8cRPsM356ds0H9-8=",
    description:
      "This pizza variety is famous for its thick, buttery crust and towering layers of toppings. ",
    oder: "add to cart",
    price: 7.2,
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
  },
  {
    id: "15",
    name: "Neapolitan pizza",

    img: "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8TmVhcG9saXRhbiUyMHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Similar to Margherita pizza, Neapolitan pizza is a traditional pizza that originated in Naples. ",
    oder: "add to cart",
    price: 9.2,
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
  },
  {
    id: "16",
    name: "Meat lovers pizza",

    img: "https://media.istockphoto.com/id/1095961692/photo/close-up-italian-pizza-about-cheese-it-stick-selective-focus.jpg?s=612x612&w=0&k=20&c=8C0kYgoTt026xam3qgOjakBkWg1H_y_V8hjP_PX7fDo=",
    description:
      "As the name suggests, this pizza is for meat lovers. It's loaded with toppings like pepperoni, sausage, bacon, and ham. ",
    oder: "add to cart",
    price: 34.2,
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
  },
  {
    id: "17",
    name: "Veggie pizza",

    img: "https://media.istockphoto.com/id/808514338/photo/supreme-pizza.jpg?s=612x612&w=0&k=20&c=DgZqg0nuvzKxo3wk46QoV3cPNKgRfkty0LHqtjx0ubI=",
    description:
      "For those who prefer a vegetarian option, veggie pizza is a popular choice. ",
    oder: "add to cart",
    price: 12.2,
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
  },
  {
    id: "18",
    name: "Veggie tomato pizza",

    img: "https://media.istockphoto.com/id/155150740/photo/pizza-margherita.jpg?s=612x612&w=0&k=20&c=sOTL7RlChJQj_MNWutVqRBYDOrxVAlcn-nTryQCF1bc=",
    description:
      "This pizza variety is famous for its thick, buttery crust and towering layers of toppings. ",
    oder: "add to cart",
    price: 5.6,
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
  },
  {
    id: "19",
    name: "Classy Burger",
    image:
      "https://media.istockphoto.com/id/610747100/photo/tasty-grilled-burger-with-lettuce-and-mayonnaise-rustic-wooden-table.jpg?b=1&s=170667a&w=0&k=20&c=1unW2L-hE4NW-kgsIkBL-fS6zY_SlvwlWhb7qao8QW8=",
    description:
      "A juicy beef patty with lettuce, tomato, and pickles on a sesame seed bun.",
    price: 9.99,
    recipe: "https://www.allrecipes.com/recipe/214894/classic-burger/",
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
  },
  {
    id: "20",
    name: "Bacon Cheeseburger",
    image:
      "https://media.istockphoto.com/id/1398630614/photo/bacon-cheeseburger-on-a-toasted-bun.jpg?b=1&s=170667a&w=0&k=20&c=Aq7Dg29n3DDE3gqgT2cWSh9LYxZnr-8SFu0crRQxArA=",
    description:
      "A classic burger with crispy bacon and melted cheddar cheese.",
    price: 11.99,
    recipe: "https://www.allrecipes.com/recipe/219077/bacon-cheeseburgers/",
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
  },
  {
    id: "21",
    name: "Mushroom Swiss Burger",
    image:
      "https://media.istockphoto.com/id/500549324/photo/mushroom-swiss-burger.jpg?b=1&s=170667a&w=0&k=20&c=gR59AAzRzOkwSDxLL3RCTDeS-PLx0NuzY8evchln2Zk=",
    description:
      "A savory burger with sautéed mushrooms and melted Swiss cheese.",
    price: 12.99,
    recipe: "https://www.allrecipes.com/recipe/220533/mushroom-swiss-burgers/",
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
  },
  {
    id: "22",
    name: "BBQ Burger",
    image:
      "https://media.istockphoto.com/id/468676382/photo/delicious-hamburger-with-fire-flames.jpg?b=1&s=170667a&w=0&k=20&c=LZBt4ePLbKc2PhpGkyCaItw0xeBjk5mCTu9aWi5Eg2k=",
    description:
      "A smoky burger topped with crispy onion rings and tangy BBQ sauce.",
    price: 10.99,
    recipe: "https://www.allrecipes.com/recipe/220977/bbq-burgers/",
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
  },
  {
    id: "23",
    name: "Guacamole Burger",
    image:
      "https://media.istockphoto.com/id/181142991/photo/the-guacamole-bacon-burger.jpg?b=1&s=170667a&w=0&k=20&c=D4pMzyQeNo0g9EqrlK58Tu2JFOJZA2zlSMwuzFvsheg=",
    description: "A fresh burger with homemade guacamole and salsa.",
    price: 13.99,
    recipe: "https://www.allrecipes.com/recipe/14231/guacamole-burger/",
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
  },
  {
    id: "24",
    name: "Spicy Jalapeño Burger",
    image:
      "https://media.istockphoto.com/id/1423188087/photo/cheesy-beef-taco-pie.jpg?b=1&s=170667a&w=0&k=20&c=sjK766MndVB4owOxgtXuKR2iUJP8gQVy8prWT9a1LJw=",
    description: "A fiery burger with jalapeño peppers and spicy mayo.",
    price: 11.99,
    recipe: "https://www.allrecipes.com/recipe/256335/spicy-jalapeno-burgers/",
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
  },
  {
    id: "25",
    name: "Veggie Burger",
    image:
      "https://media.istockphoto.com/id/1412706588/photo/hamburger-on-a-handmade-cutting-board-dark-mood-background.jpg?b=1&s=170667a&w=0&k=20&c=Q8NXnNOFd6gHpCleeES2PlKsZqe0-2W7d6RzuNSmsFQ=",
    description: "A plant-based burger with a homemade black bean patty.",
    price: 9.99,
    recipe:
      "https://www.allrecipes.com/recipe/220281/homemade-black-bean-veggie-burgers/",
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
  },
  {
    id: "26",
    name: "Double Cheeseburger",
    image:
      "https://media.istockphoto.com/id/468164481/photo/traditional-homestyle-burger.jpg?b=1&s=170667a&w=0&k=20&c=P7AH_f1KFPpxKZTctfZmY8FX4etxzFI93LvTYoMJWv8=",
    description: "A burger with two juicy beef patties and melted cheese.",
    price: 13.99,
    recipe: "https://www.allrecipes.com/recipe/219288/double-cheeseburgers/",
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
  },
  {
    id: "27",
    name: "Fried Egg Burger",
    image:
      "https://media.istockphoto.com/id/1312261302/photo/ham-bacon-egg-burger.jpg?b=1&s=170667a&w=0&k=20&c=QJ9XeUnqE0Zf0obWXnN1UtLGWRHpLEkxLiP4sQY61GA=",
    description: "A hearty burger with a sunny-side-up egg and bacon.",
    price: 12.99,
    recipe: "https://www.allrecipes.com/recipe/268114/fried-egg-burgers/",
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
  },
  {
    id: "28",
    name: "Pulled Pork Burger",
    image:
      "https://media.istockphoto.com/id/526283108/photo/homemade-vegan-pulled-jackfruit-bbq-sandwich.jpg?s=612x612&w=0&k=20&c=34PVpg8X_pMr1JpUDMgvvOb8jPTu7h0jH7Qbl6PhQRM=",
    description: "A hearty burger with a sunny-side-up egg and bacon.",
    price: 10.99,
    recipe: "https://www.allrecipes.com/recipe/268114/fried-egg-burgers/",
    icon1: <BsFillCartFill />,
    icon2: <AiFillHeart />,
  },
];

export default searchDataBase;
