export type Dish = {
  name: string
  description: string
  price?: string
}

export type MenuCategory = {
  id: string
  label: string
  dishes: Dish[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    label: "Starters",
    dishes: [
      {
        name: "Suya Croquettes",
        description: "Spiced beef, chilli aioli, crispy plantain crumb",
      },
      {
        name: "Pepper Prawns",
        description: "Tiger prawns, smoky pepper sauce, herb oil",
      },
      {
        name: "Smoked Chicken Bites",
        description: "Jerk-marinated, honey glaze, toasted sesame",
      },
    ],
  },
  {
    id: "mains",
    label: "Main Courses",
    dishes: [
      {
        name: "Slow-Cooked Beef Short Rib",
        description: "Bone marrow butter, charred greens, red wine jus",
      },
      {
        name: "Jollof Rice with Grilled Chicken",
        description: "Smoky party-style jollof, whole roasted chicken, shito",
      },
      {
        name: "Seafood Pasta",
        description: "Prawns, mussels, cherry tomatoes, chilli cream sauce",
      },
      {
        name: "Grilled Fish with Herb Butter",
        description: "Whole sea bream, lemon herb butter, seasonal greens",
      },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    dishes: [
      {
        name: "Truffle-Style Plantain",
        description: "Caramelized dodo, truffle oil, parmesan",
      },
      {
        name: "Creamy Mashed Potatoes",
        description: "Butter-roasted garlic, sea salt, chives",
      },
      {
        name: "Seasonal Vegetables",
        description: "Lightly sautéed, olive oil, fresh herbs",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    dishes: [
      {
        name: "Chocolate Fondant",
        description: "Dark chocolate, molten centre, vanilla bean ice cream",
      },
      {
        name: "Caramel Cheesecake",
        description: "Baked New York-style, salted caramel, crushed biscuit",
      },
      {
        name: "Coconut Panna Cotta",
        description: "Set coconut cream, passion fruit coulis, toasted coconut",
      },
    ],
  },
]