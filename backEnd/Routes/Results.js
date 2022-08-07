const ResultData = {
  results: [
    {
      name: 'Pizza',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/21/46/american-1239081_960_720.jpg',
      subItemsData: {
        name: 'Tasty Pizzas',
        subItems: [
          {
            name: 'Tomato Basil Italian Pizza',
            image: 'https://res.cloudinary.com/...pizza-1_trloij.jpg',
            price: '450',
            description: 'Dressed with oil, the origanum and garlic cloves',
          },
          {
            name: 'Bombay Pizza',
            image: 'image-url',
            price: '550',
            description:
              'Spicy tomato sauce with Italian herbs, mushrooms,onion, cottage cheese, coriander anmozzarella',
          },
          {
            name: 'Sicilia Pizza',
            image: 'image-url',
            price: '450',
            description:
              'A thick base pizza with fresh tomato sauce,mushrooms, garlic, pickled onions',
          },
        ],
      },
    },
    {
      name: 'Burger',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/08/abstract-1238262_960_720.jpg',
      subItemsData: {
        name: 'Crispy Burgers',
        subItems: [
          {
            name: 'Fried Chicken Burger',
            image: 'image-url',
            price: '450',
            description: 'Old School Chicken Burger',
          },
          {
            name: 'Paneer Tikka Burger',
            image: 'image-url',
            price: '450',
            description: 'Spicy Paneer, Onion, Tomato, Mozerella Cheese',
          },
          {
            name: 'Chicken Classic Cheese Burger',
            image: 'image-url',
            price: '550',
            description: 'Aged cheddar, sweet pickle, tomato, red onion',
          },
        ],
      },
    },
  ],
};

module.exports = ResultData;
