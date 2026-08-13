export const menuCategories = [
    {
        id: "all",
        label: "All Drinks",
    },
    {
        id: "fruit-tea",
        label: "Fresh Fruit Tea",
    },
    {
        id: "milk-tea",
        label: "Milk Tea",
    },
    {
        id: "ice-cream",
        label: "Ice Cream Series",
    },
    {
        id: "milkshake",
        label: "Milkshake Series",
    },
    {
        id: "mango",
        label: "Mango Series",
    },
    {
        id: "add-ons",
        label: "Add Ons",
    },
];

export const menuItems = [
    // =========================
    // FRESH FRUIT TEA
    // =========================

    {
        id: 1,
        name: "Fresh Lemonade",
        description:
            "Freshly squeezed lemon with a refreshing citrusy taste, served ice cold.",
        category: "fruit-tea",
        categoryLabel: "Fresh Fruit Tea",
        price: 120,
        rating: 4.9,
        image: "/images/menu/fresh-lemonade.png",
        badge: "Refreshing",
        featured: false,
    },
    {
        id: 2,
        name: "Jasmine Green Tea",
        description:
            "Light green tea with delicate jasmine notes for a refreshing floral sip.",
        category: "fruit-tea",
        categoryLabel: "Fresh Fruit Tea",
        price: 120,
        rating: 4.9,
        image: "/images/menu/jasmine-green-tea.png",
        badge: "Refreshing",
        featured: true,
    },
    {
        id: 3,
        name: "Lemon Green Tea",
        description:
            "Refreshing green tea blended with zesty lemon for a bright citrus finish.",
        category: "fruit-tea",
        categoryLabel: "Fresh Fruit Tea",
        price: 120,
        rating: 4.8,
        image: "/images/menu/lemon-green-tea.png",
        badge: "Fresh",
        featured: false,
    },
    {
        id: 4,
        name: "Lemon Black Tea",
        description:
            "Bold black tea balanced with fresh lemon for a refreshing citrus twist.",
        category: "fruit-tea",
        categoryLabel: "Fresh Fruit Tea",
        price: 120,
        rating: 4.8,
        image: "/images/menu/lemon-black-tea.png",
        badge: "Fresh",
        featured: false,
    },
    {
        id: 5,
        name: "Blueberry Boba Tea",
        description:
            "Fruity blueberry tea paired with chewy boba pearls for a refreshing treat.",
        category: "fruit-tea",
        categoryLabel: "Fresh Fruit Tea",
        price: 150,
        rating: 4.9,
        image: "/images/menu/blueberry-boba-tea.png",
        badge: "Popular",
        featured: false,
    },
    {
        id: 6,
        name: "Strawberry Lemon Tea",
        description:
            "Sweet strawberry and zesty lemon blended into a refreshing fruit tea.",
        category: "fruit-tea",
        categoryLabel: "Fresh Fruit Tea",
        price: 150,
        rating: 4.8,
        image: "/images/menu/strawberry-lemon-tea.png",
        badge: "Fresh",
        featured: false,
    },
    {
        id: 7,
        name: "Lychee Jasmine Tea",
        description:
            "Fragrant jasmine tea with sweet lychee flavour for a refreshing floral drink.",
        category: "fruit-tea",
        categoryLabel: "Fresh Fruit Tea",
        price: 150,
        rating: 4.8,
        image: "/images/menu/lychee-jasmine-tea.png",
        badge: "Refreshing",
        featured: false,
    },
    {
        id: 8,
        name: "Grape Boba Tea",
        description:
            "Sweet grape-flavoured tea with chewy boba pearls for a fruity, refreshing sip.",
        category: "fruit-tea",
        categoryLabel: "Fresh Fruit Tea",
        price: 150,
        rating: 4.8,
        image: "/images/menu/grape-boba-tea.png",
        badge: "Popular",
        featured: false,
    },

    // =========================
    // MILK TEA
    // =========================

    {
        id: 9,
        name: "Original Milk Tea",
        description:
            "Smooth and creamy classic milk tea with a rich, comforting flavour.",
        category: "milk-tea",
        categoryLabel: "Milk Tea",
        price: 180,
        rating: 4.8,
        image: "/images/menu/original-milk-tea.png",
        badge: "Classic",
        featured: false,
    },
    {
        id: 10,
        name: "Boba Milk Tea",
        description:
            "Creamy milk tea topped with chewy tapioca boba pearls for a classic boba experience.",
        category: "milk-tea",
        categoryLabel: "Milk Tea",
        price: 180,
        rating: 4.9,
        image: "/images/menu/boba-milk-tea.png",
        badge: "Bestseller",
        featured: true,
    },
    {
        id: 11,
        name: "Brown/Black Sugar Boba Milk Tea",
        description:
            "Creamy milk tea with rich caramelized brown sugar and chewy boba pearls.",
        category: "milk-tea",
        categoryLabel: "Milk Tea",
        price: 180,
        rating: 4.9,
        image: "/images/menu/brown-black-sugar-boba-milk-tea.png",
        badge: "Popular",
        featured: true,
    },
    {
        id: 12,
        name: "Jasmine Milk Tea",
        description:
            "Smooth and creamy milk tea infused with fragrant jasmine for a floral finish.",
        category: "milk-tea",
        categoryLabel: "Milk Tea",
        price: 180,
        rating: 4.8,
        image: "/images/menu/jasmine-milk-tea.png",
        badge: "Floral",
        featured: false,
    },
    {
        id: 13,
        name: "Lychee Jasmine Milk Tea",
        description:
            "Creamy milk tea blended with fragrant jasmine and sweet lychee flavour.",
        category: "milk-tea",
        categoryLabel: "Milk Tea",
        price: 180,
        rating: 4.8,
        image: "/images/menu/lychee-jasmine-milk-tea.png",
        badge: "Popular",
        featured: false,
    },

    // =========================
    // ICE CREAM SERIES
    // =========================

    {
        id: 14,
        name: "Ice Cream",
        description:
            "Creamy softy ice cream served chilled for a smooth and classic sweet treat.",
        category: "ice-cream",
        categoryLabel: "Ice Cream Series",
        price: 50,
        rating: 4.7,
        image: "/images/menu/ice-cream.png",
        badge: "Classic",
        featured: false,
    },
    {
        id: 15,
        name: "Chocolate Ice Cream",
        description:
            "Rich chocolate softy with a smooth, creamy texture and indulgent cocoa flavour.",
        category: "ice-cream",
        categoryLabel: "Ice Cream Series",
        price: 50,
        rating: 4.8,
        image: "/images/menu/chocolate-ice-cream.png",
        badge: "Popular",
        featured: true,
    },
    {
        id: 16,
        name: "Mix Choco Vanilla Ice Cream",
        description:
            "A delicious swirl of creamy vanilla and rich chocolate softy.",
        category: "ice-cream",
        categoryLabel: "Ice Cream Series",
        price: 50,
        rating: 4.8,
        image: "/images/menu/mix-choco-vanilla-ice-cream.png",
        badge: "Classic",
        featured: false,
    },
    {
        id: 17,
        name: "Chocolate Biscuit Sundae",
        description:
            "Creamy softy topped with rich chocolate and crunchy biscuit pieces.",
        category: "ice-cream",
        categoryLabel: "Ice Cream Series",
        price: 120,
        rating: 4.8,
        image: "/images/menu/chocolate-biscuit-sundae.png",
        badge: "Treat",
        featured: false,
    },
    {
        id: 18,
        name: "Strawberry Sundae",
        description:
            "Creamy softy topped with sweet strawberry flavour for a fruity treat.",
        category: "ice-cream",
        categoryLabel: "Ice Cream Series",
        price: 120,
        rating: 4.8,
        image: "/images/menu/strawberry-sundae.png",
        badge: "Popular",
        featured: false,
    },

    // =========================
    // MILKSHAKE SERIES
    // =========================

    {
        id: 19,
        name: "Blueberry Sundae",
        description:
            "Creamy blueberry dessert with a rich fruity flavour and smooth texture.",
        category: "milkshake",
        categoryLabel: "Milkshake Series",
        price: 220,
        rating: 4.8,
        image: "/images/menu/blueberry-sundae.png",
        badge: "Popular",
        featured: false,
    },
    {
        id: 20,
        name: "Brown/Black Sugar Boba Sundae",
        description:
            "Creamy softy topped with caramelized brown sugar and chewy boba pearls.",
        category: "milkshake",
        categoryLabel: "Milkshake Series",
        price: 220,
        rating: 4.9,
        image: "/images/menu/brown-black-sugar-boba-sundae.png",
        badge: "Popular",
        featured: false,
    },
    {
        id: 21,
        name: "Blueberry Chocolate Sundae",
        description:
            "A rich combination of fruity blueberry and indulgent chocolate in every bite.",
        category: "milkshake",
        categoryLabel: "Milkshake Series",
        price: 220,
        rating: 4.9,
        image: "/images/menu/blueberry-chocolate-sundae.png",
        badge: "Must Try",
        featured: true,
    },
    {
        id: 22,
        name: "Chocolate Oreo Sundae",
        description:
            "Chocolate sundae loaded with crunchy Oreo pieces.",
        category: "milkshake",
        categoryLabel: "Milkshake Series",
        price: 220,
        rating: 4.9,
        image: "/images/menu/chocolate-oreo-sundae.png",
        badge: "Popular",
        featured: false,
    },
    {
        id: 23,
        name: "Strawberry Oreo Milkshake",
        description:
            "Creamy strawberry milkshake blended with crunchy Oreo cookies for a delicious treat.",
        category: "milkshake",
        categoryLabel: "Milkshake Series",
        price: 220,
        rating: 4.8,
        image: "/images/menu/strawberry-oreo-milkshake.png",
        badge: "Popular",
        featured: false,
    },
    {
        id: 24,
        name: "Strawberry Milkshake",
        description:
            "Thick and creamy strawberry milkshake packed with sweet fruity flavour.",
        category: "milkshake",
        categoryLabel: "Milkshake Series",
        price: 220,
        rating: 4.8,
        image: "/images/menu/strawberry-milkshake.png",
        badge: "Classic",
        featured: false,
    },
    {
        id: 25,
        name: "Blueberry Milkshake",
        description:
            "Smooth and creamy blueberry milkshake with rich fruity flavour.",
        category: "milkshake",
        categoryLabel: "Milkshake Series",
        price: 220,
        rating: 4.8,
        image: "/images/menu/blueberry-milkshake.png",
        badge: "Popular",
        featured: false,
    },
    {
        id: 26,
        name: "Chocolate Oreo Milkshake",
        description:
            "Rich chocolate milkshake blended with crunchy Oreo cookies for an indulgent treat.",
        category: "milkshake",
        categoryLabel: "Milkshake Series",
        price: 220,
        rating: 4.9,
        image: "/images/menu/chocolate-oreo-milkshake.png",
        badge: "Bestseller",
        featured: true,
    },
    {
        id: 27,
        name: "Chocolate Milkshake",
        description:
            "Thick and creamy chocolate milkshake made for rich, chocolatey cravings.",
        category: "milkshake",
        categoryLabel: "Milkshake Series",
        price: 220,
        rating: 4.8,
        image: "/images/menu/chocolate-milkshake.png",
        badge: "Classic",
        featured: false,
    },
    {
        id: 28,
        name: "Almond Milkshake",
        description:
            "Smooth and creamy almond milkshake with a rich, nutty flavour.",
        category: "milkshake",
        categoryLabel: "Milkshake Series",
        price: 220,
        rating: 4.8,
        image: "/images/menu/almond-milkshake.png",
        badge: "Rich",
        featured: false,
    },

    // =========================
    // MANGO SERIES
    // =========================

    {
        id: 29,
        name: "Mango Pomelo Sago",
        description:
            "Tropical mango dessert with sweet mango, refreshing pomelo and chewy sago pearls.",
        category: "mango",
        categoryLabel: "Mango Series",
        price: 250,
        rating: 4.9,
        image: "/images/menu/mango-pomelo-sago.png",
        badge: "Hero Product",
        featured: true,
    },
    {
        id: 30,
        name: "Strawberry Mango Lemon Tea",
        description:
            "Refreshing fruit tea combining sweet strawberry, tropical mango and zesty lemon.",
        category: "mango",
        categoryLabel: "Mango Series",
        price: 250,
        rating: 4.8,
        image: "/images/menu/strawberry-mango-lemon-tea.png",
        badge: "Seasonal",
        featured: false,
    },
    {
        id: 31,
        name: "Mango Sundae",
        description:
            "Creamy mango dessert topped with sweet, tropical mango flavour.",
        category: "mango",
        categoryLabel: "Mango Series",
        price: 250,
        rating: 4.8,
        image: "/images/menu/mango-sundae.png",
        badge: "Seasonal",
        featured: false,
    },

    // =========================
    // ADD ONS
    // =========================

    {
        id: 32,
        name: "Boba",
        description:
            "Classic chewy tapioca pearls, perfect for adding to your favourite drink or dessert.",
        category: "add-ons",
        categoryLabel: "Add Ons",
        price: 25,
        rating: 4.8,
        image: "/images/menu/boba.png",
        badge: "Add On",
        featured: false,
    },
    {
        id: 33,
        name: "Jelly",
        description:
            "Soft and fruity jelly topping for an extra burst of texture and flavour.",
        category: "add-ons",
        categoryLabel: "Add Ons",
        price: 25,
        rating: 4.7,
        image: "/images/menu/jelly.png",
        badge: "Add On",
        featured: false,
    },
    {
        id: 34,
        name: "Boba + Jelly",
        description:
            "The perfect combination of chewy boba pearls and fruity jelly in one topping.",
        category: "add-ons",
        categoryLabel: "Add Ons",
        price: 50,
        rating: 4.8,
        image: "/images/menu/boba-jelly.png",
        badge: "Add On",
        featured: false,
    },
];