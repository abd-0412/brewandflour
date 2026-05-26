/*
  Brew & Flour - Menu Logic & Filter Engine
  Part of Safr Labs Performance Portfolio Piece
*/

const MENU_ITEMS = [
  // --- COFFEE (13 items) ---
  {
    id: "c1",
    name: "Espresso",
    price: 80,
    description: "Rich and intense double shot extracted under pressure from our signature dark roast.",
    category: "coffee",
    veg: true,
    vegan: true,
    gf: true,
    badges: ["vegan", "gf"]
  },
  {
    id: "c2",
    name: "Americano",
    price: 100,
    description: "Double espresso shots balanced perfectly with hot filtered water, rich crema intact.",
    category: "coffee",
    veg: true,
    vegan: true,
    gf: true,
    badges: ["vegan", "gf"]
  },
  {
    id: "c3",
    name: "Macchiato",
    price: 120,
    description: "Bold double shot of espresso marked with a single dollop of velvety steamed milk foam.",
    category: "coffee",
    veg: true,
    vegan: false,
    gf: true,
    badges: ["gf"]
  },
  {
    id: "c4",
    name: "Cortado",
    price: 130,
    description: "Double shot of espresso cut with an equal volume of silky warm milk. Perfectly balanced.",
    category: "coffee",
    veg: true,
    vegan: false,
    gf: true,
    badges: ["gf"]
  },
  {
    id: "c5",
    name: "Cappuccino",
    price: 150,
    description: "Espresso combined with luscious steamed milk and a deep, thick cushion of velvety foam.",
    category: "coffee",
    veg: true,
    vegan: false,
    gf: true,
    badges: ["gf"]
  },
  {
    id: "c6",
    name: "Café Latte",
    price: 160,
    description: "Espresso shot capped with steamed milk and a delicate, aesthetic microfoam topping.",
    category: "coffee",
    veg: true,
    vegan: false,
    gf: true,
    badges: ["gf"]
  },
  {
    id: "c7",
    name: "Flat White",
    price: 160,
    description: "Velvety smooth microfoam poured over double shots of espresso for an intense coffee finish.",
    category: "coffee",
    veg: true,
    vegan: false,
    gf: true,
    badges: ["gf"]
  },
  {
    id: "c8",
    name: "Caramel Latte",
    price: 180,
    description: "Rich espresso combined with decadent salted caramel syrup, steamed milk and drizzled gold sauce. Customer favourite for 3 years.",
    category: "coffee",
    veg: true,
    vegan: false,
    gf: true,
    badges: ["house-special", "gf"]
  },
  {
    id: "c9",
    name: "Vanilla Latte",
    price: 170,
    description: "Silky steamed milk and espresso infused with real premium Madagascar vanilla bean pod syrup.",
    category: "coffee",
    veg: true,
    vegan: false,
    gf: true,
    badges: ["gf"]
  },
  {
    id: "c10",
    name: "Mocha",
    price: 180,
    description: "Rich espresso paired with premium Belgian melted dark chocolate sauce and steamed milk layers.",
    category: "coffee",
    veg: true,
    vegan: false,
    gf: true,
    badges: ["gf"]
  },
  {
    id: "c11",
    name: "Cold Brew",
    price: 150,
    description: "Slow, 18-hour cold-water steeped single-origin beans resulting in an exceptionally smooth, sweet flavour.",
    category: "coffee",
    veg: true,
    vegan: true,
    gf: true,
    badges: ["house-special", "vegan", "gf"]
  },
  {
    id: "c12",
    name: "Iced Latte",
    price: 160,
    description: "Freshly pulled espresso shot and cold fresh milk poured over crystal ice cubes.",
    category: "coffee",
    veg: true,
    vegan: false,
    gf: true,
    badges: ["seasonal", "gf"]
  },
  {
    id: "c13",
    name: "Affogato",
    price: 140,
    description: "A rich scoop of premium vanilla bean ice cream drowned in a hot, sweet double shot of espresso.",
    category: "coffee",
    veg: true,
    vegan: false,
    gf: true,
    badges: ["gf"]
  },

  // --- TEA & OTHER (6 items) ---
  {
    id: "t1",
    name: "Traditional Filter Coffee",
    price: 90,
    description: "Traditional Tamil Nadu chicory coffee brewed in a brass filter, served frothy with boiling milk.",
    category: "tea",
    veg: true,
    vegan: false,
    gf: true,
    badges: ["gf"]
  },
  {
    id: "t2",
    name: "Masala Chai",
    price: 110,
    description: "Aromatic Assam black tea leaf milk brew boiled with fresh ginger, cardamom, clove, and pepper spice.",
    category: "tea",
    veg: true,
    vegan: false,
    gf: true,
    badges: ["gf"]
  },
  {
    id: "t3",
    name: "Matcha Latte",
    price: 190,
    description: "Stone-ground ceremonial grade Japanese matcha whisked with warm, creamy, plant-based oat milk.",
    category: "tea",
    veg: true,
    vegan: true,
    gf: true,
    badges: ["vegan", "gf"]
  },
  {
    id: "t4",
    name: "English Breakfast Tea",
    price: 110,
    description: "Robust, full-bodied black tea breakfast blend served hot with a slice of fresh lemon or milk.",
    category: "tea",
    veg: true,
    vegan: true,
    gf: true,
    badges: ["vegan", "gf"]
  },
  {
    id: "t5",
    name: "Organic Chamomile",
    price: 130,
    description: "Precious caffeine-free whole German chamomile flowers yielding a calm cup with gentle apple notes.",
    category: "tea",
    veg: true,
    vegan: true,
    gf: true,
    badges: ["vegan", "gf"]
  },
  {
    id: "t6",
    name: "Hot Chocolate",
    price: 180,
    description: "Thick velvety hot drink made from authentic melted Belgian cocoa, organic cane sugar and steamed milk.",
    category: "tea",
    veg: true,
    vegan: false,
    gf: true,
    badges: ["gf"]
  },

  // --- BAKERY SAVORY (11 items) ---
  {
    id: "bs1",
    name: "Butter Croissant",
    price: 120,
    description: "Flaky, golden-brown crescent roll made with pure Normandy butter, laminated painstakingly over three days.",
    category: "savory",
    veg: true,
    vegan: false,
    gf: false,
    badges: ["fresh-baked"]
  },
  {
    id: "bs2",
    name: "Cheese Croissant",
    price: 140,
    description: "Laminated flaky croissant baked golden brown and filled with savory mature cheddar and Gruyère.",
    category: "savory",
    veg: true,
    vegan: false,
    gf: false,
    badges: ["fresh-baked"]
  },
  {
    id: "bs3",
    name: "Pain au Chocolat",
    price: 130,
    description: "Flaky puff rolls made with buttery croissant pastry folded gently around double dark chocolate batons.",
    category: "savory",
    veg: true,
    vegan: false,
    gf: false,
    badges: ["fresh-baked"]
  },
  {
    id: "bs4",
    name: "Chicken Puff",
    price: 110,
    description: "Crispy flaky local puff shell enclosing roasted shredded chicken tossed in local Kovai spices.",
    category: "savory",
    veg: false,
    vegan: false,
    gf: false,
    badges: ["fresh-baked"]
  },
  {
    id: "bs5",
    name: "Vegetable Puff",
    price: 90,
    description: "Flaky pastry containing a spiced mixture of boiled green peas, potato, and local dry spices.",
    category: "savory",
    veg: true,
    vegan: false,
    gf: false,
    badges: ["fresh-baked"]
  },
  {
    id: "bs6",
    name: "Spinach & Feta Turnover",
    price: 135,
    description: "Golden flaky turnover envelope encasing creamed local spinach, dill leaves, and traditional crumbled feta.",
    category: "savory",
    veg: true,
    vegan: false,
    gf: false,
    badges: ["fresh-baked"]
  },
  {
    id: "bs7",
    name: "Paneer Tikka Calzone",
    price: 150,
    description: "Yeast bread fold baked with generous filling of tandoori paneer tikka, spicy bell peppers, and cheese.",
    category: "savory",
    veg: true,
    vegan: false,
    gf: false,
    badges: ["fresh-baked"]
  },
  {
    id: "bs8",
    name: "Egg & Pepper Turnover",
    price: 110,
    description: "Buttery puff sheet filled with sliced hard-boiled egg masala tossed with freshly ground black pepper.",
    category: "savory",
    veg: false,
    vegan: false,
    gf: false,
    badges: ["fresh-baked"]
  },
  {
    id: "bs9",
    name: "Premium Samosa Duo",
    price: 80,
    description: "Crispy pyramids stuffed with a spiced mixture of roasted potatoes, cumin, and ginger slices.",
    category: "savory",
    veg: true,
    vegan: true,
    gf: false,
    badges: ["fresh-baked", "vegan"]
  },
  {
    id: "bs10",
    name: "Cheesy Garlic Baguette",
    price: 140,
    description: "Thick crusty baguette halves loaded with minced aromatic garlic herb butter and double melted mozzarella.",
    category: "savory",
    veg: true,
    vegan: false,
    gf: false,
    badges: ["fresh-baked"]
  },
  {
    id: "bs11",
    name: "Peri Peri Fries",
    price: 130,
    description: "Crispy hand-cut potato wedges tossed in hot, zesty peri-peri spice dust. Baked, not fried.",
    category: "savory",
    veg: true,
    vegan: true,
    gf: true,
    badges: ["seasonal", "vegan", "gf"]
  },

  // --- BAKERY SWEET (12 items) ---
  {
    id: "sw1",
    name: "Almond Croissant",
    price: 160,
    description: "Laminated croissant twice-baked, filled with rich almond frangipane, topped with sliced almonds. Baked fresh every morning.",
    category: "sweet",
    veg: true,
    vegan: false,
    gf: false,
    badges: ["fresh-baked", "house-special"]
  },
  {
    id: "sw2",
    name: "Cinnamon Roll",
    price: 130,
    description: "Leavened rolled dough swirled with rich brown sweet sugar, organic cinnamon dust, finished with warm vanilla glaze.",
    category: "sweet",
    veg: true,
    vegan: false,
    gf: false,
    badges: ["fresh-baked"]
  },
  {
    id: "sw3",
    name: "Fudgy Chocolate Brownie",
    price: 120,
    description: "Decadently dense and fudgy dark chocolate cake square baked with organic local cocoa. Gluten free flour base.",
    category: "sweet",
    veg: true,
    vegan: false,
    gf: true,
    badges: ["fresh-baked", "gf"]
  },
  {
    id: "sw4",
    name: "Chocolate Chip Cookie",
    price: 80,
    description: "Oversized, soft-center vanilla cookie studded heavily with Belgian 54% dark chocolate chips.",
    category: "sweet",
    veg: true,
    vegan: false,
    gf: false,
    badges: ["fresh-baked"]
  },
  {
    id: "sw5",
    name: "Oatmeal Raisin Cookie",
    price: 80,
    description: "Wholesome toasted rolled oat giant cookies loaded with organic sweet raisins and ground spices.",
    category: "sweet",
    veg: true,
    vegan: false,
    gf: false,
    badges: ["fresh-baked"]
  },
  {
    id: "sw6",
    name: "Blueberry Crumb Muffin",
    price: 120,
    description: "Tender bakery muffin loaded with organic wild hill blueberries and covered in a crisp brown streusel topping.",
    category: "sweet",
    veg: true,
    vegan: false,
    gf: false,
    badges: ["fresh-baked"]
  },
  {
    id: "sw7",
    name: "Banana Walnut Cake Slice",
    price: 110,
    description: "Fragrant sweet bread baked with tree-ripened local bananas, aromatic spices, and lots of chopped walnut halves.",
    category: "sweet",
    veg: true,
    vegan: false,
    gf: false,
    badges: ["fresh-baked"]
  },
  {
    id: "sw8",
    name: "New York Classic Cheesecake",
    price: 190,
    description: "Velvety, rich baked cream cheese wedge on a buttery digestive biscuit crumb base.",
    category: "sweet",
    veg: true,
    vegan: false,
    gf: false,
    badges: []
  },
  {
    id: "sw9",
    name: "Red Velvet Cake Slice",
    price: 180,
    description: "Vibrant deep-red sponge cocoa cake slice sandwiched elegantly with frosted tang of real premium cream cheese.",
    category: "sweet",
    veg: true,
    vegan: false,
    gf: false,
    badges: []
  },
  {
    id: "sw10",
    name: "Lemon Drizzle Sponge",
    price: 130,
    description: "Zesty lemon visual sponge cake soaked in fresh lemon juice sugar syrup glaze for a sweet damp treat.",
    category: "sweet",
    veg: true,
    vegan: false,
    gf: false,
    badges: ["fresh-baked"]
  },
  {
    id: "sw11",
    name: "Salted Caramel Tart",
    price: 140,
    description: "Shortbread tart shell filled with gooey house-made buttered caramel and covered with dark chocolate ganache shell.",
    category: "sweet",
    veg: true,
    vegan: false,
    gf: false,
    badges: ["fresh-baked"]
  },
  {
    id: "sw12",
    name: "Vegan Chocolate Cake",
    price: 160,
    description: "Incredibly moist plant-based cocoa cake frosted with a shiny vegan chocolate avocado ganache cream.",
    category: "sweet",
    veg: true,
    vegan: true,
    gf: false,
    badges: ["vegan"]
  },

  // --- ALL-DAY BREAKFAST (6 items) ---
  {
    id: "b1",
    name: "Avocado Toast",
    price: 210,
    description: "Creamy mashed Hass avocado, pickled heritage radish slides, microgreens and red chili flakes on our hand-kneaded sourdough toast.",
    category: "breakfast",
    veg: true,
    vegan: true,
    gf: false,
    badges: ["house-special", "vegan"]
  },
  {
    id: "b2",
    name: "Brioche French Toast",
    price: 190,
    description: "Thick hand-sliced sweet brioche soaked in rich egg vanilla custard, griddled golden and finished with organic maple syrup.",
    category: "breakfast",
    veg: false,
    vegan: false,
    gf: false,
    badges: []
  },
  {
    id: "b3",
    name: "Pancakes with Berries",
    price: 180,
    description: "Fluffy griddle cakes stacked hot, covered with wild mountain berry compote stew and whipped double cream.",
    category: "breakfast",
    veg: true,
    vegan: false,
    gf: false,
    badges: ["seasonal"]
  },
  {
    id: "b4",
    name: "Classic Scrambled Eggs",
    price: 150,
    description: "Three farm-fresh organic eggs slow scrambled with French butter till velvety cream, set on thick buttered sourdough toast.",
    category: "breakfast",
    veg: false,
    vegan: false,
    gf: false,
    badges: []
  },
  {
    id: "b5",
    name: "Tamil Nadu Spanish Omelette",
    price: 160,
    description: "Thick skillet omelette with diced potato slices, red onions, coriander leaves and hot local small green chili peppers.",
    category: "breakfast",
    veg: false,
    vegan: false,
    gf: true,
    badges: ["gf"]
  },
  {
    id: "b6",
    name: "High-Protein Oats Bowl",
    price: 170,
    description: "Creamy oats boiled in almond milk topped with house maple clusters, fresh banana coins and active chia seeds.",
    category: "breakfast",
    veg: true,
    vegan: true,
    gf: true,
    badges: ["vegan", "gf"]
  },

  // --- MEALS (9 items) ---
  {
    id: "m1",
    name: "Alfredo Fettuccine Pasta",
    price: 280,
    description: "True rich, silky dairy sauce cream of fine butter, parmesan cheese, sautéed wild garlic buttons, with sliced herb bread.",
    category: "meals",
    veg: true,
    vegan: false,
    gf: false,
    badges: ["house-special"]
  },
  {
    id: "m2",
    name: "Arrabiata Penne Pasta",
    price: 240,
    description: "Fiery rich spicy San Marzano tomato sauce, fresh sliced garlic slivers, olive oil, and hot crushed chili flakes.",
    category: "meals",
    veg: true,
    vegan: true,
    gf: false,
    badges: ["vegan"]
  },
  {
    id: "m3",
    name: "Basil Pesto Penne",
    price: 260,
    description: "Al dente penne pasta tossed in a fragrant, rich emulsion of fresh sweet basil, olive oil, toasted pine nut kernels and parmesan.",
    category: "meals",
    veg: true,
    vegan: false,
    gf: false,
    badges: []
  },
  {
    id: "m4",
    name: "Classic Garden Veggie Burger",
    price: 220,
    description: "Handcrafted oven-baked sweet potato and lentil patty, crisp butter lettuce leaves, tomato wheel, sharp cheddar on brioche.",
    category: "meals",
    veg: true,
    vegan: false,
    gf: false,
    badges: []
  },
  {
    id: "m5",
    name: "Sourdough Triple Cheese Sandwich",
    price: 190,
    description: "Toasted pan cheddar, gouda, and fresh mozzarella melted to liquid gold between our robust artisanal sourdough breads.",
    category: "meals",
    veg: true,
    vegan: false,
    gf: false,
    badges: []
  },
  {
    id: "m6",
    name: "Mediterranean Quinoa Salad",
    price: 240,
    description: "Creamy organic white quinoa beads tossed with crispy cucumbers, plum sweet tomatoes, pitted black olives, and real Greek feta.",
    category: "meals",
    veg: true,
    vegan: false,
    gf: true,
    badges: ["gf"]
  },
  {
    id: "m7",
    name: "Rosemary Grilled Chicken Sandwich",
    price: 230,
    description: "Succulent free-range chicken breast grilled with fresh rosemary leaf, crunchy garden gem lettuce, light house garlic mayo on crisp baguette.",
    category: "meals",
    veg: false,
    vegan: false,
    gf: false,
    badges: []
  },
  {
    id: "m8",
    name: "Chicken Alfredo Fettuccine",
    price: 310,
    description: "Premium rich creamy butter pasta tossed with strips of tender grilled breast bird fillets and sliced garlic button mushrooms.",
    category: "meals",
    veg: false,
    vegan: false,
    gf: false,
    badges: []
  },
  {
    id: "m9",
    name: "Spicy Peri Peri Paneer Wrap",
    price: 215,
    description: "Grilled cubes of fresh organic cottage paneer tossed in zesty peri-peri, crunchy cucumber shreds and onions in whole wheat tortilla wrap.",
    category: "meals",
    veg: true,
    vegan: false,
    gf: false,
    badges: []
  }
];// Fallback images matching search tags
const fallbackCoffeeImage = "./assets/generated/signature_coffee_1779784434526.png";
const fallbackTeaImage = "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop";
const fallbackSavoryImage = "./assets/generated/bakery_hero_1779784389635.png";
const fallbackSweetImage = "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop";
const fallbackBreakfastImage = "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop";
const fallbackMealsImage = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop";

const MENU_IMAGES_MAP = {
  // Coffee (13 items)
  "c1": "./assets/generated/coffee_hero_1779784374463.png", // Espresso
  "c2": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop", // Americano
  "c3": "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=600&auto=format&fit=crop", // Macchiato
  "c4": "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=600&auto=format&fit=crop", // Cortado
  "c5": "./assets/generated/cappuccino_premium.png", // Cappuccino
  "c6": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop", // Café Latte
  "c7": "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop", // Flat White
  "c8": "./assets/generated/signature_coffee_1779784434526.png", // Caramel Latte
  "c9": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&auto=format&fit=crop", // Vanilla Latte
  "c10": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop", // Mocha
  "c11": "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=600&auto=format&fit=crop", // Cold Brew
  "c12": "./assets/generated/iced_latte_premium.png", // Iced Latte
  "c13": "./assets/generated/affogato_premium.png", // Affogato

  // Tea & Other (6 items)
  "t1": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=600&auto=format&fit=crop", // Traditional Filter Coffee (Brass dabar container setting)
  "t2": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop", // Masala Chai
  "t3": "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=600&auto=format&fit=crop", // Matcha Latte
  "t4": "https://images.unsplash.com/photo-1545642637-293679bc42fa?q=80&w=600&auto=format&fit=crop", // English Breakfast Tea
  "t5": "https://images.unsplash.com/photo-1597843798160-02ab0544525d?q=80&w=600&auto=format&fit=crop", // Organic Chamomile
  "t6": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&auto=format&fit=crop", // Hot Chocolate

  // Bakery Savory (11 items)
  "bs1": "./assets/generated/bakery_hero_1779784389635.png", // Butter Croissant
  "bs2": "https://images.unsplash.com/photo-1623334500530-b22026410ce9?q=80&w=600&auto=format&fit=crop", // Cheese Croissant
  "bs3": "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=600&auto=format&fit=crop", // Pain au Chocolat
  "bs4": "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop", // Chicken Puff
  "bs5": "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=600&auto=format&fit=crop", // Vegetable Puff
  "bs6": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=600&auto=format&fit=crop", // Spinach & Feta Turnover
  "bs7": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop", // Paneer Tikka Calzone
  "bs8": "https://images.unsplash.com/photo-1582234372982-fdfca90ecf8a?q=80&w=600&auto=format&fit=crop", // Egg & Pepper Turnover
  "bs9": "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=600&auto=format&fit=crop", // Premium Samosa Duo
  "bs10": "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=600&auto=format&fit=crop", // Cheesy Garlic Baguette
  "bs11": "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=600&auto=format&fit=crop", // Peri Peri Fries

  // Bakery Sweet (12 items)
  "sw1": "https://images.unsplash.com/photo-1599387737286-255b85d38eed?q=80&w=600&auto=format&fit=crop", // Almond Croissant
  "sw2": "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop", // Cinnamon Roll
  "sw3": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop", // Fudgy Chocolate Brownie
  "sw4": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop", // Chocolate Chip Cookie
  "sw5": "https://images.unsplash.com/photo-1558961313-e1242e762947?q=80&w=600&auto=format&fit=crop", // Oatmeal Raisin Cookie
  "sw6": "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=600&auto=format&fit=crop", // Blueberry Crumb Muffin
  "sw7": "https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=600&auto=format&fit=crop", // Banana Walnut Cake Slice
  "sw8": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600&auto=format&fit=crop", // New York Classic Cheesecake
  "sw9": "https://images.unsplash.com/photo-1616260841585-13c5e8b0b979?q=80&w=600&auto=format&fit=crop", // Red Velvet Cake Slice
  "sw10": "https://images.unsplash.com/photo-1519869325930-281384155149?q=80&w=600&auto=format&fit=crop", // Lemon Drizzle Sponge
  "sw11": "https://images.unsplash.com/photo-1519915028121-75225929a075?q=80&w=600&auto=format&fit=crop", // Salted Caramel Tart
  "sw12": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop", // Vegan Chocolate Cake

  // All-Day Breakfast (6 items)
  "b1": "./assets/generated/signature_meal_1779784452729.png", // Avocado Toast
  "b2": "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=600&auto=format&fit=crop", // Brioche French Toast
  "b3": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=600&auto=format&fit=crop", // Pancakes with Berries
  "b4": "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop", // Classic Scrambled Eggs
  "b5": "https://images.unsplash.com/photo-1510629900089-cf5e42436b69?q=80&w=600&auto=format&fit=crop", // Tamil Nadu Spanish Omelette
  "b6": "https://images.unsplash.com/photo-1517856497829-3047e3fffae1?q=80&w=600&auto=format&fit=crop", // High-Protein Oats Bowl

  // Meals (9 items)
  "m1": "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=600&auto=format&fit=crop", // Alfredo Fettuccine Pasta
  "m2": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop", // Arrabiata Penne Pasta
  "m3": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=600&auto=format&fit=crop", // Basil Pesto Penne
  "m4": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=600&auto=format&fit=crop", // Classic Garden Veggie Burger
  "m5": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop", // Sourdough Triple Cheese Sandwich
  "m6": "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop", // Mediterranean Quinoa Salad
  "m7": "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=600&auto=format&fit=crop", // Rosemary Grilled Chicken Sandwich
  "m8": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=600&auto=format&fit=crop", // Chicken Alfredo Fettuccine
  "m9": "https://images.unsplash.com/photo-1628190048530-3626966a83b8?q=80&w=600&auto=format&fit=crop"  // Spicy Peri Peri Paneer Wrap
};

function getCategoryImage(item) {
  // Return high quality Unsplash stock images precisely mapped for every single item
  if (MENU_IMAGES_MAP[item.id]) {
    return MENU_IMAGES_MAP[item.id];
  }

  // Soft fallback matching categories just in case
  if (item.category === "coffee") return fallbackCoffeeImage;
  if (item.category === "tea") return fallbackTeaImage;
  if (item.category === "savory") return fallbackSavoryImage;
  if (item.category === "sweet") return fallbackSweetImage;
  if (item.category === "breakfast") return fallbackBreakfastImage;
  return fallbackMealsImage;
}

// Global active wishlist state
let wishlist = JSON.parse(localStorage.getItem('brew_wishlist')) || [];

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMenu);
} else {
  initMenu();
}

function initMenu() {
  const menuGridElement = document.getElementById('menu-grid');
  if (!menuGridElement) return; // Only execute if on menu.html page

  const searchInput = document.getElementById('menu-search');
  const dietaryPills = document.querySelectorAll('.dietary-pill');
  const priceFilter = document.getElementById('menu-price-filter');
  const categoryTabs = document.querySelectorAll('.category-tab');
  const resultsCountText = document.getElementById('results-count');
  const clearFiltersBtn = document.getElementById('clear-all-filters');

  let currentCategory = "coffee"; // Default tab
  let activeDietaryFilters = []; // Veg, Vegan, Gluten-Free mutally inclusive
  let currentPriceRange = "all"; // all, low, mid, high

  // Set initial category tab count labels dynamically!
  categoryTabs.forEach(tab => {
    const categoryName = tab.getAttribute('data-category');
    if (categoryName) {
      const count = MENU_ITEMS.filter(it => it.category === categoryName).length;
      const label = tab.querySelector('.tab-count');
      if (label) {
        label.textContent = `(${count})`;
      }
    }
  });

  // Render on start
  render();

  // Search filter event listeners
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      render();
    });
  }

  // Dietary filter elements toggle click
  dietaryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const filterType = pill.getAttribute('data-filter');
      if (filterType === 'all') {
        activeDietaryFilters = [];
        dietaryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
      } else {
        // Toggle item
        const allPill = document.querySelector('.dietary-pill[data-filter="all"]');
        if (allPill) allPill.classList.remove('active');

        const index = activeDietaryFilters.indexOf(filterType);
        if (index > -1) {
          activeDietaryFilters.splice(index, 1);
          pill.classList.remove('active');
        } else {
          activeDietaryFilters.push(filterType);
          pill.classList.add('active');
        }

        if (activeDietaryFilters.length === 0 && allPill) {
          allPill.classList.add('active');
        }
      }
      render();
    });
  });

  // Price range drop down selector
  if (priceFilter) {
    priceFilter.addEventListener('change', (e) => {
      currentPriceRange = e.target.value;
      render();
    });
  }

  // Category Tab navigation buttons
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetCategory = tab.getAttribute('data-category');
      if (targetCategory && targetCategory !== currentCategory) {
        // Fade out transition
        menuGridElement.style.opacity = '0';
        categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        setTimeout(() => {
          currentCategory = targetCategory;
          render();
          menuGridElement.style.opacity = '1';
        }, 150);
      }
    });
  });

  // Clear filters click trigger
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (searchInput) searchInput.value = '';
      
      activeDietaryFilters = [];
      dietaryPills.forEach(p => p.classList.remove('active'));
      const allPill = document.querySelector('.dietary-pill[data-filter="all"]');
      if (allPill) allPill.classList.add('active');

      if (priceFilter) priceFilter.value = 'all';
      currentPriceRange = 'all';

      render();
    });
  }

  // Combined Render Engine
  function render() {
    // 1. Filter original 57 item set based on search, dietary pills, pricing, category
    let filteredList = MENU_ITEMS;

    // Filter by Tab category
    if (currentCategory) {
      filteredList = filteredList.filter(item => item.category === currentCategory);
    }

    // Filter by search letters
    if (searchInput) {
      const term = searchInput.value.toLowerCase().trim();
      if (term) {
        filteredList = filteredList.filter(item => 
          item.name.toLowerCase().includes(term) || 
          item.description.toLowerCase().includes(term)
        );
      }
    }

    // Filter by combined dietary types (e.g. Veg AND Vegan etc)
    if (activeDietaryFilters.length > 0) {
      filteredList = filteredList.filter(item => {
        return activeDietaryFilters.every(filter => {
          if (filter === 'veg') return item.veg === true;
          if (filter === 'vegan') return item.vegan === true;
          if (filter === 'gf') return item.gf === true;
          if (filter === 'favorites') return wishlist.includes(item.id);
          return true;
        });
      });
    }

    // Filter by price boundaries
    if (currentPriceRange && currentPriceRange !== 'all') {
      filteredList = filteredList.filter(item => {
        if (currentPriceRange === 'low') return item.price < 150;
        if (currentPriceRange === 'mid') return item.price >= 150 && item.price <= 250;
        if (currentPriceRange === 'high') return item.price > 250;
        return true;
      });
    }

    // Update Result count label
    if (resultsCountText) {
      resultsCountText.textContent = `Showing ${filteredList.length} items`;
    }

    // Clear grid and render cards
    menuGridElement.innerHTML = '';

    if (filteredList.length === 0) {
      menuGridElement.innerHTML = `
        <div class="no-results-box" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background-color: var(--milk-foam); border-radius: 8px;">
          <h3 style="margin-bottom: 8px;">Nothing found</h3>
          <p style="color: var(--charcoal); margin-bottom: 16px;">Try adjusting your filters or clearing search queries.</p>
          <a href="#" id="reset-inner-link" class="btn btn-secondary">Clear all filters</a>
        </div>
      `;
      const resetLink = document.getElementById('reset-inner-link');
      if (resetLink) {
        resetLink.addEventListener('click', (e) => {
          e.preventDefault();
          if (clearFiltersBtn) clearFiltersBtn.click();
        });
      }
      return;
    }

    filteredList.forEach(item => {
      const isFavorited = wishlist.includes(item.id);
      const card = document.createElement('div');
      card.className = "menu-card";
      card.setAttribute('data-aos', 'fade-up');
      
      // Build visual badges
      let badgesHTML = '';
      if (item.badges.includes('fresh-baked')) {
        badgesHTML += `<span class="badge badge-fresh">Freshly Baked</span>`;
      }
      if (item.badges.includes('house-special')) {
        badgesHTML += `<span class="badge badge-house">House Special</span>`;
      }
      if (item.badges.includes('seasonal')) {
        badgesHTML += `<span class="badge badge-seasonal">Seasonal</span>`;
      }
      if (item.badges.includes('vegan')) {
        badgesHTML += `<span class="badge badge-vegan">Vegan</span>`;
      }
      if (item.badges.includes('gf')) {
        badgesHTML += `<span class="badge badge-gf">Gluten Free</span>`;
      }

      card.innerHTML = `
        <div class="menu-card-image-wrap" style="position: relative; overflow: hidden; border-top-left-radius: 8px; border-top-right-radius: 8px; aspect-ratio: 3/2; background-color: var(--milk-foam);">
          <img src="${getCategoryImage(item)}" 
               alt="${item.name}" 
               referrerpolicy="no-referrer"
               loading="lazy"
               style="width: 100%; height: 100%; object-fit: cover; transition: var(--transition);">
          <button class="wishlist-btn" 
                  aria-label="${isFavorited ? 'Remove from Wishlist' : 'Add to Wishlist'}" 
                  data-id="${item.id}"
                  style="position: absolute; top: 12px; right: 12px; background: rgba(253, 248, 240, 0.9); border: none; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: var(--transition); box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <svg class="heart-icon ${isFavorited ? 'filled' : ''}" 
                 width="18" height="18" viewBox="0 0 24 24" 
                 fill="${isFavorited ? 'var(--berry-red)' : 'none'}" 
                 stroke="${isFavorited ? 'var(--berry-red)' : 'var(--coffee-dark)'}" 
                 stroke-width="2" 
                 style="transition: var(--transition);">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
          </button>
        </div>
        <div class="menu-card-body" style="padding: 20px; background-color: var(--pure-white); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; display: flex; flex-direction: column; justify-content: space-between; height: calc(100% - (2/3 * 100%));">
          <div>
            <div class="menu-card-badges" style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px;">
              ${badgesHTML}
            </div>
            <h3 style="font-family: var(--font-body); font-weight: 500; font-size: 18px; color: var(--coffee-dark); margin-bottom: 6px;">${item.name}</h3>
            <p style="font-size: 14px; line-height: 1.5; color: var(--charcoal); margin-bottom: 16px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; height: 42px;">${item.description}</p>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid rgba(0,0,0,0.05); padding-top: 14px;">
            <span style="font-family: var(--font-body); font-weight: 700; font-size: 18px; color: var(--coffee-medium);">₹${item.price}</span>
            <a href="./reserve.html" class="btn btn-secondary" style="min-width: auto; height: 36px; padding: 0 14px; font-size: 13px;">Reserve</a>
          </div>
        </div>
      `;

      menuGridElement.appendChild(card);
    });

    // Re-bind click event triggers to wishlist buttons inside cards after redraw
    initWishlistClick(render, activeDietaryFilters);
  }
}

function initWishlistClick(renderCallback, activeFilters) {
  const wishlistButtons = document.querySelectorAll('.wishlist-btn');
  wishlistButtons.forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const itemId = btn.getAttribute('data-id');
      const heartSvg = btn.querySelector('.heart-icon');
      
      const index = wishlist.indexOf(itemId);
      if (index > -1) {
        wishlist.splice(index, 1);
        heartSvg.setAttribute('fill', 'none');
        heartSvg.setAttribute('stroke', 'var(--coffee-dark)');
        heartSvg.classList.remove('filled');
        btn.setAttribute('aria-label', 'Add to Wishlist');
      } else {
        wishlist.push(itemId);
        heartSvg.setAttribute('fill', 'var(--berry-red)');
        heartSvg.setAttribute('stroke', 'var(--berry-red)');
        heartSvg.classList.add('filled');
        btn.setAttribute('aria-label', 'Remove from Wishlist');
      }

      // Persist to local storage across different view instances
      localStorage.setItem('brew_wishlist', JSON.stringify(wishlist));

      // If they are currently viewing only favorites, let's re-render so it updates in real-time!
      if (activeFilters && activeFilters.includes('favorites') && renderCallback) {
        renderCallback();
      }
    }
  });
}
