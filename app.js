const storyThemes = [
  {
    id: "oatmeal",
    title: "Oats & Oatmeal",
    kicker: "From Prairie field to breakfast bowl",
    icon: "🥣",
    character: { name: "Oatie", speech: "Tiny oat seeds become a warm bowl after farmers grow, harvest and roll them.", sheet: "food-friends.png", x: 0, y: 0 },
    region: "Canadian Prairies",
    connection: "Agriculture story",
    confidence: "High",
    colour: "#c98435",
    tags: ["canada", "farm"],
    count: 1,
    ingredients: ["Oats", "Milk", "Fruit topping", "Granola"],
    shellys: "Shelly's menu lists oatmeal with milk, fruit topping and granola topping.",
    grade: {
      1: "Oatmeal begins as tiny seeds. Farmers grow and harvest the oats. The oats are rolled, then cooked into a warm breakfast.",
      2: "Farmers plant oat seeds, harvest the grain, remove the hull and roll the oats. Canada grows many oats, including on the Prairies. Shelly's cooks them into oatmeal.",
      3: "Oatmeal is best taught as a grain and agriculture story, not as food belonging to one country. Canada is a major oat-growing nation, and Prairie production connects this breakfast directly to regional food systems."
    },
    fact: "The part of an oat plant that we eat is a grain — a seed from the plant.",
    question: "Which part of this breakfast started as a seed?",
    sensory: "Notice the oatmeal's texture. Is it smooth, thick, chewy or a mix?",
    sources: ["Agriculture and Agri-Food Canada", "Manitoba Agriculture"]
  },
  {
    id: "fruit",
    title: "Fruit & Vegetables",
    kicker: "Orchards, fields, vines and greenhouses",
    icon: "🍎",
    character: { name: "The Garden Crew", speech: "We grow on trees, vines, in fields and greenhouses. Can you spot which plant part you are eating?", sheet: "food-friends.png", x: 3, y: 1 },
    region: "Many growing regions",
    connection: "Food-system story",
    confidence: "High",
    colour: "#b1435d",
    tags: ["farm", "world"],
    count: 2,
    ingredients: ["Fresh mixed fruit", "Garden vegetables", "Fruit toppings"],
    shellys: "Shelly's menu lists a side of fresh mixed fruit, fruit toppings and a Garden Salad. The specific produce and supplier origins are not identified.",
    grade: {
      1: "Fruit and vegetables grow on plants. We eat many plant parts, including roots, leaves, fruits and seeds. Different plants grow in different places.",
      2: "Produce travels from a tree, vine, field or greenhouse to harvest, packing and distribution before it reaches a kitchen. The journey changes with the crop and season.",
      3: "Fruit and vegetables offer a useful lesson in plant biology, seasonality and distribution. Canadian growing seasons support some fresh crops, while storage, greenhouses and trade make others available during the school year."
    },
    fact: "Not every fruit grows on a tree — strawberries grow close to the ground and grapes grow on vines.",
    question: "What clues could help us guess how or where a fruit grew?",
    sensory: "Compare the colours, smells and textures of two pieces of fruit.",
    sources: ["General food knowledge", "Supplier origin needs verification"]
  },
  {
    id: "bannock",
    title: "Bannock & Indigenous Foodways",
    kicker: "A living Indigenous food story",
    icon: "🫓",
    character: { name: "Bibi Bannock", speech: "My flour story includes trade, adaptation and living First Nations and Métis foodways.", sheet: "food-friends.png", x: 1, y: 0 },
    region: "Indigenous Canada",
    connection: "First Nations & Métis foodways",
    confidence: "Nuanced",
    colour: "#9c493c",
    tags: ["indigenous", "canada", "farm"],
    count: 3,
    ingredients: ["Wheat flour", "Water or liquid", "Recipe-dependent ingredients"],
    shellys: "The menu specifically describes baked bannock in the breakfast box and bannock served with stew.",
    grade: {
      1: "Bannock is made and enjoyed today in many First Nations and Métis homes and communities. Shelly's serves baked bannock.",
      2: "Long before wheat flour was common, Indigenous peoples made breads and cakes from foods available on the land. Later, cooks adapted introduced flour into new recipes that became important in many communities.",
      3: "Flour bannock needs a careful colonial-history distinction. Indigenous peoples had diverse pre-contact bread traditions; wheat-flour bannock developed after introduced ingredients became available and is now part of living, contemporary First Nations and Métis foodways."
    },
    fact: "Bannock can be baked, fried or cooked over a fire. Shelly's school-menu version is baked.",
    question: "How do people adapt recipes when new ingredients become available?",
    sensory: "Notice the outside and inside. How are their textures different?",
    sources: ["Parks Canada — Bannock", "Indigenous sources required for any Nation-specific teaching"]
  },
  {
    id: "pancakes",
    title: "Pancakes & Waffles",
    kicker: "A cooking idea shared around the world",
    icon: "🥞",
    character: { name: "Pippa Pancake", speech: "Cooks around the world turn many kinds of grain batter into warm, flat cakes.", sheet: "story-friends-2.png", x: 0, y: 0 },
    region: "Many cultures",
    connection: "Global food tradition",
    confidence: "High",
    colour: "#d89a3b",
    tags: ["world", "farm"],
    count: 5,
    ingredients: ["Flour", "Milk or liquid", "Eggs in some versions", "Syrup or fruit topping"],
    shellys: "Shelly's menu has eggless pancakes and waffles as well as pancakes made with eggs. Some are served as breakfast sandwiches.",
    grade: {
      1: "Pancakes are made by cooking batter on a hot surface. People around the world make many kinds of pancakes.",
      2: "Pancake-like foods have been cooked in many places for a very long time. Cooks use different grains and ingredients to make their own versions.",
      3: "Pancake-like foods are an old, widely shared cooking form rather than the invention of one modern nation. Their ingredients can include wheat, corn, rice, buckwheat or potatoes, depending on place and tradition."
    },
    fact: "A similar cooking idea can taste very different when people use another grain or topping.",
    question: "How could two cultures use the same cooking idea but different ingredients?",
    sensory: "Is the surface soft, crisp or both? What changed when the batter met heat?",
    sources: ["Established culinary-history sources", "Exact early origin should remain cautiously worded"]
  },
  {
    id: "french-toast",
    title: "French Toast",
    kicker: "More than a French name",
    icon: "🍞",
    character: { name: "Toasty", speech: "Long ago, cooks rescued older bread by soaking it before cooking: less waste, a new meal!", sheet: "story-friends-2.png", x: 1, y: 0 },
    region: "Europe across centuries",
    connection: "Food-use and history story",
    confidence: "High",
    colour: "#c66042",
    tags: ["world", "farm"],
    count: 1,
    ingredients: ["Bread", "Milk", "Egg", "Sausage on Shelly's menu"],
    shellys: "Shelly's menu lists French Toast & Sausage.",
    grade: {
      1: "Bread can be dipped in milk and egg, then cooked. This turns older bread into a new meal.",
      2: "People were soaking and cooking bread long before the name French toast appeared. In France, pain perdu means ‘lost bread’ — bread saved from being wasted.",
      3: "Written versions of soaked, cooked bread reach back to Roman-era recipes. French pain perdu is one important branch of a much older idea: transforming bread with liquid, egg and heat instead of wasting it."
    },
    fact: "The French name pain perdu means ‘lost bread.’",
    question: "How can cooking help people use food wisely instead of wasting it?",
    sensory: "Compare the cooked outside with the soaked centre. What did heat change?",
    sources: ["Smithsonian — French toast history"]
  },
  {
    id: "breakfast-sandwich",
    title: "The Breakfast Sandwich",
    kicker: "Portable food, changing forms",
    icon: "🥪",
    character: { name: "Sunny Sandwich", speech: "Change my bread or filling and my food journey changes too.", sheet: "story-friends-2.png", x: 2, y: 0 },
    region: "Britain → North America",
    connection: "Migration and adaptation",
    confidence: "Supported",
    colour: "#5e8972",
    tags: ["world", "canada"],
    count: 7,
    ingredients: ["Bread, wrap, pancake, waffle or English muffin", "Egg in some listings", "Chicken/turkey sausage or bacon", "Cheese in some listings"],
    shellys: "Shelly's breakfast items use several portable forms: white bread, bannock, pancakes, waffles, wraps and English muffins. Components vary by listing.",
    grade: {
      1: "A breakfast sandwich puts breakfast foods inside bread or a wrap. Shelly's menu uses several different kinds of bread.",
      2: "Portable meals change with the bread and fillings available. The English muffin itself connects British muffin traditions with a popular form developed in New York.",
      3: "The breakfast sandwich is a contemporary meal format built from older bread, egg and meat traditions. It shows how convenience, migration and regional preferences shape what becomes a familiar breakfast."
    },
    fact: "The modern English muffin story connects an English baker, New York and breakfast tables across North America.",
    question: "How does changing the bread change the way a meal feels and tastes?",
    sensory: "Notice how the bread holds the filling. What makes a food easy to carry?",
    sources: ["Culinary-history references for the English muffin", "Shelly's supplied menu"]
  },
  {
    id: "frittata",
    title: "Eggs & Frittata",
    kicker: "An Italian egg-dish connection",
    icon: "🍳",
    character: { name: "Frankie Frittata", speech: "Eggs can hold a whole garden of colourful vegetables together.", sheet: "food-friends.png", x: 2, y: 1 },
    region: "Italy",
    connection: "Italian food tradition",
    confidence: "High",
    colour: "#739462",
    tags: ["world", "farm"],
    count: 4,
    ingredients: ["Eggs", "Spinach", "Peas", "Corn", "Carrots", "Celery", "Onion", "Cheese"],
    shellys: "Shelly's frittata contains eggs, spinach, peas, corn, carrots, celery, onion and cheese.",
    grade: {
      1: "A frittata is an egg dish from Italy. Shelly's version has eggs, cheese and many vegetables.",
      2: "A frittata is an Italian egg-based dish related to an omelette. Cooks can add vegetables, cheese and other ingredients.",
      3: "Frittata names an Italian approach to cooking eggs with other ingredients. Shelly's vegetable-rich version illustrates how a recognizable cooking method can support a contemporary school meal."
    },
    fact: "Shelly's frittata includes vegetables that grow as leaves, roots, seeds and bulbs.",
    question: "How many different plants can you find in one frittata?",
    sensory: "Look for different colours and textures. Which ingredients can you identify?",
    sources: ["Italian culinary reference", "Shelly's supplied menu"]
  },
  {
    id: "sandwiches",
    title: "Sandwiches, Wraps & Lunch Favourites",
    kicker: "Contemporary meals with many ingredient stories",
    icon: "🌯",
    character: { name: "Willa Wrap", speech: "Open my layers and you will find that every ingredient has its own journey.", sheet: "story-friends-2.png", x: 3, y: 0 },
    region: "Contemporary North America",
    connection: "Multiple influences",
    confidence: "High",
    colour: "#638a7d",
    tags: ["world", "canada"],
    count: 4,
    ingredients: ["Bread or wrap", "Tuna", "Chicken", "Cheese", "Vegetables", "Recipe-dependent fillings and sides"],
    shellys: "Shelly's menu lists Tuna Sandwich, Chicken Wrap, Grilled Cheese Sandwich, Sandwich, Chicken Fingers and Chicken Wings. Ingredients and sides vary; consult the approved menu.",
    grade: {
      1: "Sandwiches and wraps hold foods inside bread. Other lunch favourites serve a main food with a side. Each ingredient has its own journey.",
      2: "Putting fillings inside bread appears in many places. Modern sandwiches, wraps, chicken fingers and wings are familiar North American menu formats made from ingredients with different histories.",
      3: "These contemporary lunch formats are better understood through their component ingredients than by forcing one national origin. Breads, proteins, vegetables and seasonings each have distinct histories and food-system journeys."
    },
    fact: "A meal can keep the same shape while every ingredient inside it changes.",
    question: "Can the same ingredient appear in both a sandwich and a meal from another culture?",
    sensory: "Which layer is crunchy, soft, cool or chewy?",
    sources: ["General food knowledge", "Shelly's supplied menu"]
  },
  {
    id: "caesar",
    title: "Caesar Salad",
    kicker: "Italy + Mexico + North America",
    icon: "🥗",
    character: { name: "Cee-Cee Caesar", speech: "My story begins in 1920s Tijuana, not ancient Rome!", sheet: "food-friends.png", x: 3, y: 0 },
    region: "Tijuana, Mexico",
    connection: "Migration story",
    confidence: "Strongly supported",
    colour: "#517e62",
    tags: ["world", "farm"],
    count: 2,
    ingredients: ["Romaine lettuce", "Caesar dressing", "Parmesan", "Croutons"],
    shellys: "Shelly's version contains romaine lettuce, Caesar dressing, Parmesan cheese and croutons. The menu also lists a Chicken Caesar Wrap.",
    grade: {
      1: "Caesar salad was made in Tijuana, Mexico. It is named after a person, not Julius Caesar.",
      2: "Caesar salad is generally connected with Italian immigrant restaurant owner Caesar Cardini in Tijuana during the 1920s. Its story joins Italy, Mexico and North America.",
      3: "The generally accepted Caesar-salad account places its creation with Italian immigrant restaurateur Caesar Cardini in 1920s Tijuana. The dish is a compact lesson in migration, borderland restaurant culture and culinary exchange."
    },
    fact: "Caesar salad is named after restaurateur Caesar Cardini — not the Roman ruler.",
    question: "How can moving to a new place help create a new food?",
    sensory: "Compare crisp lettuce, crunchy croutons and the creamy dressing.",
    sources: ["Smithsonian — Caesar salad history"]
  },
  {
    id: "soups",
    title: "Soups & Stews",
    kicker: "One pot, thousands of food stories",
    icon: "🥘",
    character: { name: "Stewie", speech: "One pot can bring many small ingredients together into a warm, shared meal.", sheet: "story-friends-2.png", x: 0, y: 1 },
    region: "Around the world",
    connection: "Shared cooking idea",
    confidence: "High",
    colour: "#b3503c",
    tags: ["world", "farm"],
    count: 7,
    ingredients: ["Broth or liquid", "Vegetables", "Meat, beans, grains or noodles", "Herbs and seasonings"],
    shellys: "Shelly's menu lists tomato, vegetable, hamburger, chicken noodle, carrot and tomato alphabet soups, plus stew with bannock.",
    grade: {
      1: "Soup cooks foods together in liquid. People make many kinds of soup all around the world.",
      2: "Almost every culture has ways of cooking vegetables, grains, noodles, meat or beans in water or broth. Each soup reflects the ingredients and tastes available to its cooks.",
      3: "Soup and stew should not be forced into one national origin. They are widespread cooking technologies: heat and liquid transform available ingredients into nourishing, shareable meals in countless distinct traditions."
    },
    fact: "Soup can turn small amounts of many ingredients into one shared meal.",
    question: "What does today's soup share with soups from other places?",
    sensory: "Notice the broth and the solid ingredients separately. How do they work together?",
    sources: ["General food knowledge", "Shelly's supplied menu"]
  },
  {
    id: "potatoes",
    title: "The Potato Story",
    kicker: "From seed potato to school kitchen",
    icon: "🥔",
    character: { name: "Spud", speech: "I grow underground on a special stem called a tuber.", sheet: "story-friends-2.png", x: 1, y: 1 },
    region: "Manitoba farm connection",
    connection: "Agriculture story",
    confidence: "High",
    colour: "#9b713c",
    tags: ["farm", "canada"],
    count: 4,
    ingredients: ["Potatoes", "Preparation-dependent ingredients"],
    shellys: "Potatoes appear across Shelly's menu as fries, hash browns and in other sides or meals. Exact recipes remain those in the approved menu.",
    grade: {
      1: "Potatoes grow under the soil. Farmers harvest and store them. Cooks can bake, mash or cut them into many meals.",
      2: "A seed potato grows into a plant that forms new potatoes under the ground. After harvest and storage, potatoes can become many different foods.",
      3: "Potatoes connect crop biology, storage and processing. Manitoba has an established commercial potato sector, but Shelly's supplier origin is not confirmed, so the lesson says potatoes can be grown here — not that these potatoes were."
    },
    fact: "The part we eat grows underground on stems called tubers.",
    question: "How can one potato become foods with very different textures?",
    sensory: "Think about what baking, boiling or frying does to a potato's texture.",
    sources: ["Manitoba Agriculture — potato production", "Supplier origin needs verification"]
  },
  {
    id: "poutine",
    title: "Poutine",
    kicker: "A Québec food story",
    icon: "🍟",
    character: { name: "Tina Poutine", speech: "My Québec roots are clear, but several communities remember my beginning differently.", sheet: "food-friends.png", x: 2, y: 0 },
    region: "Québec, Canada",
    connection: "Québécois food culture",
    confidence: "Debated",
    colour: "#ad3c55",
    tags: ["canada", "farm"],
    count: 1,
    ingredients: ["Baked fries", "Gravy", "Cheese"],
    shellys: "Shelly's school-menu version is baked fries, gravy and cheese. The menu says cheese, not specifically cheese curds, so it is not described here as traditional Québec poutine.",
    grade: {
      1: "Poutine comes from Québec. It is known for potatoes, cheese and gravy. Shelly's version uses baked fries.",
      2: "Poutine developed in Québec in the 1950s. Traditional poutine is known for fries, cheese curds and hot gravy. Several places claim its invention, so the exact beginning is debated.",
      3: "Poutine emerged from mid-20th-century rural Québec fast-food culture and became a widely recognized Québécois and Canadian food symbol. Its regional origin is strong; its precise inventor and birthplace remain disputed."
    },
    fact: "Several Québec communities claim to be poutine's birthplace.",
    question: "Why might different places remember the beginning of the same dish differently?",
    sensory: "Notice what hot gravy does to the fries and cheese over time.",
    sources: ["Office québécois de la langue française", "Library and Archives Canada"]
  },
  {
    id: "burgers",
    title: "The Modern Burger",
    kicker: "A debated invention story",
    icon: "🍔",
    character: { name: "Bertie Burger", speech: "Many inventors claimed me, so historians compare clues instead of choosing too quickly.", sheet: "story-friends-2.png", x: 2, y: 1 },
    region: "Europe → United States",
    connection: "North American evolution",
    confidence: "Debated",
    colour: "#9a4a35",
    tags: ["world", "canada"],
    count: 3,
    ingredients: ["Bread bun", "Ground beef or chicken", "Cheese in some versions", "Recipe-dependent toppings"],
    shellys: "Shelly's lunch menu lists Chicken Burger, Cheeseburger and Crispy Chicken Burger, each with one side.",
    grade: {
      1: "A burger puts cooked meat or another filling inside a bun. The exact inventor is not known for sure.",
      2: "The hamburger story includes European ground-meat traditions and the development of a portable sandwich in the United States. Several places claim they invented it.",
      3: "The strongest interpretation traces the modern hamburger through Hamburg-style chopped beef traditions and their transformation into a portable sandwich in the United States. Competing invention claims make a single-inventor story unreliable."
    },
    fact: "A food can have a famous name even when historians do not know one exact inventor.",
    question: "What makes a meal portable, and why might that matter?",
    sensory: "Notice how the bun and filling create different textures in one bite.",
    sources: ["Smithsonian — hamburger history"]
  },
  {
    id: "pasta",
    title: "Pasta Across Cultures",
    kicker: "Shapes, sauces and changing recipes",
    icon: "🍝",
    character: { name: "Twirly", speech: "Shape, sauce and migration helped pasta stories change as they travelled.", sheet: "story-friends-2.png", x: 3, y: 1 },
    region: "Italy → North America",
    connection: "Migration and adaptation",
    confidence: "Supported",
    colour: "#c36f3d",
    tags: ["world", "farm"],
    count: 4,
    ingredients: ["Wheat-based pasta", "Tomato or cheese sauce", "Meat or vegetables depending on dish"],
    shellys: "Shelly's menu lists Spaghetti with Meat Sauce, Veggie Spaghetti with Garlic Toast, Mac & Cheese with Garlic Toast and Cheese Ravioli.",
    grade: {
      1: "Pasta is made from dough and comes in many shapes. Shelly's menu has noodles, macaroni and stuffed ravioli.",
      2: "Pasta traditions are strongly connected with Italy, but recipes changed as people and ingredients moved. Shape, filling and sauce can make each pasta dish different.",
      3: "Pasta offers a lesson in both tradition and adaptation. Italian forms and techniques travelled through migration, while North American ingredients, convenience foods and community traditions produced distinct contemporary dishes."
    },
    fact: "Ravioli carries its filling inside the pasta instead of putting everything on top.",
    question: "How can a pasta's shape change the way we eat it?",
    sensory: "Compare the pasta's texture with the sauce or filling around it.",
    sources: ["Established Italian food-history sources", "Shelly's supplied menu"]
  },
  {
    id: "alfredo",
    title: "Alfredo & Chicken Parmesan",
    kicker: "When recipes migrate",
    icon: "🧀",
    character: { name: "Alfie Alfredo", speech: "My early Roman version was pasta, butter and Parmesan. Recipes changed when I travelled.", sheet: "food-friends.png", x: 1, y: 1 },
    region: "Italy → North America",
    connection: "Italian and Italian-American stories",
    confidence: "Strongly supported",
    colour: "#806248",
    tags: ["world", "farm"],
    count: 2,
    ingredients: ["Pasta", "Chicken", "Cheese", "Sauce", "Garlic toast or vegetable pasta"],
    shellys: "Shelly's serves Chicken Alfredo with pasta and garlic toast, and Chicken Parmesan with veggie pasta.",
    grade: {
      1: "Recipes can change when they travel. Alfredo began as a simple pasta idea in Rome. Chicken Parmesan grew in Italian-American communities.",
      2: "The Roman Alfredo dish became known for pasta, butter and Parmesan. Creamier North American versions developed later. Chicken Parmesan is Italian-American, inspired by Italian parmigiana traditions.",
      3: "These two dishes make migration visible. Alfredo moved from an early-20th-century Roman butter-and-Parmesan preparation toward creamier North American forms; chicken Parmesan developed in the Italian diaspora rather than arriving unchanged from Italy."
    },
    fact: "The famous early Roman Alfredo preparation used pasta, butter and Parmesan — not a heavy cream sauce.",
    question: "When a recipe changes after migration, what parts of its earlier story remain?",
    sensory: "Notice how sauce clings to pasta. What makes a sauce feel creamy?",
    sources: ["Roma Capitale tourism — Alfredo history", "Italian-American culinary-history sources"]
  },
  {
    id: "taco-bowl",
    title: "The Taco Journey",
    kicker: "From Mexican traditions to a school bowl",
    icon: "🌮",
    character: { name: "Taco Tia", speech: "My flavours connect to Mexican taco traditions, while my bowl is a modern adaptation.", sheet: "food-friends.png", x: 0, y: 1 },
    region: "Mexico → North America",
    connection: "Contemporary adaptation",
    confidence: "Nuanced",
    colour: "#cf5b42",
    tags: ["world", "farm"],
    count: 1,
    ingredients: ["Seasoned beef", "Rice", "Lettuce", "Tomato", "Cheese", "Sour cream"],
    shellys: "Shelly's Taco Beef Bowl takes taco-inspired flavours and serves seasoned beef over rice with lettuce, tomato, cheese and sour cream.",
    grade: {
      1: "Tacos are connected with Mexico. Shelly's takes taco flavours and puts them in a bowl with rice, beef and vegetables.",
      2: "Tacos have a strong Mexican history, although their exact beginning is debated. As Mexican food travelled, cooks created many adaptations, including taco-style bowls.",
      3: "Shelly's Taco Beef Bowl should be described as a Mexican-inspired contemporary North American bowl, not as an unchanged traditional Mexican dish. It shows how flavour combinations persist while format and ingredients adapt."
    },
    fact: "A food can change shape — from a filled tortilla to a rice bowl — while keeping part of its flavour story.",
    question: "Which parts of the taco idea stayed, and which parts changed?",
    sensory: "Can you notice a contrast between warm and cool ingredients?",
    sources: ["Smithsonian — taco history", "Shelly's supplied menu"]
  }
];

const menuItems = [
  [1, "Oatmeal", "Eggless Breakfast", "oatmeal"],
  [2, "Side of Fruit", "Eggless Breakfast", "fruit"],
  [3, "Meat Breakfast Box", "Eggless Breakfast", "breakfast-sandwich"],
  [4, "Breakfast Bannock Meat Box", "Eggless Breakfast", "bannock"],
  [5, "Breakfast Sandwich", "Eggless Breakfast", "breakfast-sandwich"],
  [6, "Pancakes", "Eggless Breakfast", "pancakes"],
  [7, "Waffle Sandwich", "Eggless Breakfast", "pancakes"],
  [8, "Pancake Sandwich", "Eggless Breakfast", "pancakes"],
  [9, "English Muffin Breakfast Sandwich", "Eggless Breakfast", "breakfast-sandwich"],
  [10, "Breakfast Box", "Egg-Cellent Breakfast", "frittata"],
  [11, "Breakfast Bannock Box", "Egg-Cellent Breakfast", "bannock"],
  [12, "French Toast & Sausage", "Egg-Cellent Breakfast", "french-toast"],
  [13, "Pancakes (3)", "Egg-Cellent Breakfast", "pancakes"],
  [14, "Pancakes with Sausage", "Egg-Cellent Breakfast", "pancakes"],
  [15, "Whole Wheat Breakfast Wrap", "Egg-Cellent Breakfast", "breakfast-sandwich"],
  [16, "Frittata", "Egg-Cellent Breakfast", "frittata"],
  [17, "English Muffin Breakfast Sandwich", "Egg-Cellent Breakfast", "breakfast-sandwich"],
  [18, "Tuna Sandwich", "Nutritious Menu", "sandwiches"],
  [19, "Chicken Wrap", "Nutritious Menu", "sandwiches"],
  [20, "Chicken Caesar Wrap", "Nutritious Menu", "caesar"],
  [21, "Garden Salad", "Nutritious Menu", "fruit"],
  [22, "Caesar Salad", "Nutritious Menu", "caesar"],
  [23, "Grilled Cheese Sandwich", "Nutritious Menu", "sandwiches"],
  [24, "Sandwich", "Nutritious Menu", "sandwiches"],
  [25, "Fries", "Nutritious Menu", "potatoes"],
  [26, "Tomato Soup", "Nutritious Menu", "soups"],
  [27, "Veggie Soup", "Nutritious Menu", "soups"],
  [28, "Hamburger Soup", "Nutritious Menu", "soups"],
  [29, "Chicken Noodle Soup", "Nutritious Menu", "soups"],
  [30, "Carrot Soup", "Nutritious Menu", "soups"],
  [31, "Stew with Bannock", "Nutritious Menu", "bannock"],
  [32, "Tomato Alphabet Soup", "Nutritious Menu", "soups"],
  [33, "Chicken Fingers with 1 Side", "Lunch Menu", "sandwiches"],
  [34, "Chicken Burger with 1 Side", "Lunch Menu", "burgers"],
  [35, "Cheeseburger with 1 Side", "Lunch Menu", "burgers"],
  [36, "Poutine", "Lunch Menu", "poutine"],
  [37, "Chicken Wings with 1 Side", "Lunch Menu", "sandwiches"],
  [38, "Mac & Cheese with Garlic Toast", "Lunch Menu", "pasta"],
  [39, "Spaghetti with Meat Sauce", "Lunch Menu", "pasta"],
  [40, "Veggie Spaghetti with Garlic Toast", "Lunch Menu", "pasta"],
  [41, "Chicken Alfredo with Garlic Toast", "Lunch Menu", "alfredo"],
  [42, "Taco Beef Bowl", "Lunch Menu", "taco-bowl"],
  [43, "Crispy Chicken Burger with 1 Side", "Lunch Menu", "burgers"],
  [44, "Chicken Parmesan with Veggie Pasta", "Lunch Menu", "alfredo"],
  [45, "Cheese Ravioli", "Lunch Menu", "pasta"]
];

const sourceCatalog = {
  cfiaTrace: { label: "CFIA — Traceability for food businesses", url: "https://inspection.canada.ca/en/food-safety-industry/toolkit-food-businesses/traceability" },
  mbCrops: { label: "Manitoba Agriculture — Crops", url: "https://www.gov.mb.ca/agriculture/crops/" },
  mbOats: { label: "Manitoba Agriculture — Oat production", url: "https://www.gov.mb.ca/agriculture/crops/crop-management/oats.html" },
  mbPotatoes: { label: "Manitoba Agriculture — Potato production", url: "https://www.gov.mb.ca/agriculture/crops/crop-management/potatoes.html" },
  mbSeasonal: { label: "Manitoba Agriculture — Seasonal crop reports", url: "https://www.gov.mb.ca/agriculture/crops/seasonal-reports/index.html" },
  parksBannock: { label: "Parks Canada — Bannock", url: "https://parks.canada.ca/culture/gourmand-gourmet/recette-recipe66" },
  metisBannock: { label: "Louis Riel Institute — Bannock history", url: "https://www.metismuseum.ca/media/document.php/14167.Bannock.pdf" },
  aafcEggs: { label: "Agriculture and Agri-Food Canada — Poultry and eggs", url: "https://agriculture.canada.ca/en/sector/animal-industry/poultry-and-egg-market-0" },
  aafcDairy: { label: "Agriculture and Agri-Food Canada — Dairy industry", url: "https://agriculture.canada.ca/en/sector/animal-industry/canadian-dairy-information-centre/dairy-industry" },
  cfiaFish: { label: "CFIA — Fish labelling and traceability", url: "https://inspection.canada.ca/en/food-labels/food-fraud/fish-labelling-and-traceability/requirements" },
  smithFrenchToast: { label: "Smithsonian — French toast history", url: "https://www.smithsonianmag.com/smart-news/there-are-many-names-french-toast-ways-cook-it-180961221/" },
  smithCaesar: { label: "Smithsonian — Caesar salad history", url: "https://www.smithsonianmag.com/arts-culture/hail-caesarthe-birthplace-of-the-famous-salad-closes-69245867/" },
  smithBurger: { label: "Smithsonian — Hamburger history", url: "https://www.smithsonianmag.com/arts-culture/taste-testing-history-hamburger-180959789/" },
  smithTaco: { label: "Smithsonian — Taco history", url: "https://www.smithsonianmag.com/arts-culture/where-did-the-taco-come-from-81228162/" },
  romaAlfredo: { label: "Turismo Roma — Fettuccine Alfredo", url: "https://www.turismoroma.it/en/node/169838" },
  irepiPoutine: { label: "Université Laval IREPI — Poutine", url: "https://www.irepi.ulaval.ca/fiche-poutine-651.html" }
};

function buildTrace(type, ingredient) {
  const traces = {
    grain: [["🌱", "Plant", ingredient + " begins as seed in soil"], ["☀️", "Grow", "A field crop ripens"], ["⚙️", "Mill", "Grain is cleaned and milled or rolled"], ["👩🏽‍🍳", "Prepare", "Shelly's kitchen follows the recipe"], ["🏫", "Plate", "The meal is served at school"]],
    produce: [["🌱", "Plant", ingredient + " begins as seed or young plant"], ["☀️", "Grow", "Field, orchard, vine or greenhouse"], ["🧺", "Harvest", "Picked, cooled and packed"], ["👩🏽‍🍳", "Prepare", "Washed, cut or cooked in the kitchen"], ["🏫", "Plate", "The meal is served at school"]],
    potato: [["🥔", "Plant", "A seed potato is planted"], ["🌿", "Grow", "New tubers form underground"], ["🚜", "Harvest", "Potatoes are lifted and stored"], ["👩🏽‍🍳", "Prepare", ingredient + " is cut and cooked"], ["🏫", "Plate", "The meal is served at school"]],
    egg: [["🐔", "Farm", "Laying hens are cared for"], ["🥚", "Collect", "Eggs are collected and graded"], ["🚚", "Deliver", "Packed eggs move through a cold chain"], ["👩🏽‍🍳", "Cook", ingredient + " is prepared safely"], ["🏫", "Plate", "The meal is served at school"]],
    poultry: [["🐣", "Farm", "Birds are hatched and raised"], ["🌾", "Raise", "Farmers provide feed, water and care"], ["🏭", "Process", "Poultry is inspected, packed and lot-coded"], ["👩🏽‍🍳", "Cook", ingredient + " is cooked safely"], ["🏫", "Plate", "The meal is served at school"]],
    beef: [["🐄", "Farm", "Cattle begin on a farm or ranch"], ["🌾", "Raise", "Animals receive feed, water and care"], ["🏭", "Process", "Beef is inspected, packed and lot-coded"], ["👩🏽‍🍳", "Cook", ingredient + " is cooked safely"], ["🏫", "Plate", "The meal is served at school"]],
    dairy: [["🐄", "Farm", "Dairy cows are cared for"], ["🥛", "Collect", "Milk is collected and tested"], ["🧀", "Transform", "Milk becomes cheese or another dairy food"], ["👩🏽‍🍳", "Cook", ingredient + " is added to the recipe"], ["🏫", "Plate", "The meal is served at school"]],
    seafood: [["🌊", "Water", "Tuna begins in an ocean fishery"], ["🎣", "Catch", "Species and catch area identify the source"], ["🧊", "Process", "Fish is checked, packed and kept cold"], ["👩🏽‍🍳", "Prepare", ingredient + " is mixed in the kitchen"], ["🏫", "Plate", "The meal is served at school"]],
    mixed: [["🧭", "Source", ingredient + " has several farm or water origins"], ["🏷️", "Identify", "Supplier names and lot codes follow ingredients"], ["🚚", "Deliver", "Ingredients travel safely to the kitchen"], ["👩🏽‍🍳", "Combine", "Shelly's prepares the menu recipe"], ["🏫", "Plate", "The meal is served at school"]]
  };
  return traces[type] || traces.mixed;
}

const itemProfiles = {
  1: { kicker: "A Prairie grain wakes up", character: "Oatie the Explorer", speech: "Follow my oat seed through a sunny field, a roller and a bubbling breakfast pot!", young: "Oatmeal starts as seeds in a field. Farmers harvest the oat grain, processors remove its tough hull, and rollers flatten it before Shelly's cooks it soft.", story: "Oats suit the cool Prairie climate. After harvest, each oat kernel is cleaned, dehulled and rolled so hot liquid can soften it into breakfast.", deep: "This is a regional agriculture connection, not a claim that Shelly's oats came from a named Manitoba farm.", fact: "The oat we eat is the plant's seed.", question: "Why do rolled oats cook faster than whole oat kernels?", trace: "grain", traceName: "oats", ingredients: ["Rolled oats", "Milk", "Fruit topping", "Granola"], sources: ["mbOats", "cfiaTrace"] },
  2: { kicker: "A fruit bowl with many passports", character: "Frida Fruit", speech: "My pieces may come from a tree, vine, bush or field — inspect every colour!", young: "Each piece of fruit began as part of a plant. Flowers became fruit, growers picked it, and packers protected it for the trip to school.", story: "A mixed fruit cup is a seasonal map: one piece may grow nearby in summer while another travels from a warmer region during winter.", deep: "Exact fruit, country of origin, supplier and lot need the current case label or invoice; the card does not invent them.", fact: "Many fruits begin where a flower once grew.", question: "Which piece might have travelled the farthest, and what evidence would prove it?", trace: "produce", traceName: "mixed fruit", ingredients: ["Seasonal mixed fruit"], sources: ["mbSeasonal", "cfiaTrace"] },
  3: { kicker: "Three farm trails meet in one box", character: "Marty Mix-Up", speech: "Bread, breakfast meat and sides arrive by different roads before sharing my box!", young: "A breakfast box brings foods from different farms together. Grain may become bread, animals provide meat, and plants can become fruit or potatoes.", story: "The story is convergence: separate crop and livestock chains are received, stored, cooked and portioned into one portable breakfast.", deep: "True traceability follows each component separately through supplier and lot records.", fact: "One meal can contain several completely different supply chains.", question: "How many ingredient journeys can you find in one box?", trace: "mixed", traceName: "breakfast-box ingredients", ingredients: ["Breakfast meat", "Bread or grain side", "Menu-selected sides"], sources: ["aafcEggs", "cfiaTrace"] },
  4: { kicker: "Baked bannock joins the breakfast table", character: "Bibi Breakfast Bannock", speech: "My flour travelled through trade and adaptation; today's baked version carries a living story.", young: "Bannock is made and enjoyed today in many First Nations and Métis families and communities. Shelly's bakes bannock and serves it in this breakfast box.", story: "Indigenous peoples had diverse breads before wheat flour arrived. Later, cooks adapted introduced flour into bannock recipes that became part of living First Nations and Métis foodways.", deep: "The box adds a contemporary school-meal chapter; it should not be described as an unchanged pre-contact recipe.", fact: "Bannock can be baked, fried or cooked over a fire; this menu version is baked.", question: "How can a community make an introduced ingredient part of its own living tradition?", trace: "grain", traceName: "bannock flour", ingredients: ["Baked bannock", "Breakfast meat", "Menu-selected sides"], sources: ["parksBannock", "metisBannock", "cfiaTrace"] },
  5: { kicker: "Breakfast learns to travel", character: "Sammy Stack", speech: "A grain field became bread, then bread became a pocket for a portable morning meal.", young: "This sandwich puts breakfast foods inside bread so the meal is easy to hold. Its bread begins with grain; each filling has a separate farm story.", story: "Portable bread-and-filling meals are old, but the breakfast sandwich is a modern North American format shaped by busy mornings and changing fillings.", deep: "The recipe name alone cannot identify the exact meat, cheese or supplier, so those details belong in the approved menu and lot record.", fact: "Changing the bread can change both the texture and the food journey.", question: "What makes a meal easy to carry without utensils?", trace: "mixed", traceName: "sandwich ingredients", ingredients: ["Bread", "Breakfast filling", "Recipe-dependent cheese or meat"], sources: ["mbCrops", "cfiaTrace"] },
  6: { kicker: "Bubbles lift a flat cake", character: "Pippa Pancake", speech: "Watch tiny batter bubbles puff, pop and leave clues that it is time to flip me!", young: "Pancakes begin with grain ground into flour. Liquid turns flour into batter, and heat makes bubbles expand into a soft cake.", story: "Flat cakes appear in many cultures, using local grains and toppings. Shelly's pancake is one modern branch of that worldwide cooking idea.", deep: "This eggless listing also shows that cooks can adapt a familiar form when an ingredient is omitted.", fact: "The holes on a pancake's surface are traces of gas bubbles.", question: "What changes when runny batter touches a hot surface?", trace: "grain", traceName: "pancake flour", ingredients: ["Flour", "Liquid", "Leavening", "Menu topping"], sources: ["mbCrops", "cfiaTrace"] },
  7: { kicker: "An iron grid becomes edible architecture", character: "Wally Waffle", speech: "My crispy squares are tiny pockets engineered by heat, steam and a patterned iron!", young: "Waffle batter cooks between two hot patterned plates. Steam helps the batter rise while the grid makes crisp edges and pockets.", story: "Waffle irons turned a simple grain batter into a distinctive shape. Using that waffle as sandwich bread adds a playful modern chapter.", deep: "The flour still traces back through milling to a field even when the final shape looks nothing like grain.", fact: "A waffle's pockets increase its crisp surface area.", question: "Why might the same batter feel different as a pancake and a waffle?", trace: "grain", traceName: "waffle flour", ingredients: ["Waffle batter", "Breakfast filling"], sources: ["mbCrops", "cfiaTrace"] },
  8: { kicker: "Two pancakes become one sandwich", character: "Flip & Fill", speech: "We turned breakfast cakes into bread — now trace our flour and the filling separately!", young: "Two pancakes can hold a filling like slices of bread. The pancakes begin with milled grain while the middle begins on its own farm journey.", story: "This menu item combines two familiar forms: the griddle-cooked pancake and the portable sandwich.", deep: "It is a useful example of food adaptation: an old cooking method can take on a new job.", fact: "A food's function can change even when its recipe stays familiar.", question: "Is this more like a pancake or a sandwich? Defend your answer.", trace: "mixed", traceName: "pancakes and filling", ingredients: ["Pancakes", "Breakfast filling"], sources: ["mbCrops", "cfiaTrace"] },
  9: { kicker: "A griddled muffin carries the morning", character: "Muffy Morning", speech: "My round bread was cooked for nooks, crannies and a tidy handheld breakfast!", young: "An English muffin is a round bread cooked on a griddle. Its holes catch flavour, and its two halves hold the breakfast filling.", story: "The muffin's grain is planted, milled into flour, fermented into dough and griddled before it becomes a sandwich.", deep: "This eggless listing changes the filling while keeping the same portable bread structure.", fact: "English muffins are usually split open instead of sliced smooth.", question: "How does a bread's texture help it hold a filling?", trace: "grain", traceName: "English-muffin wheat", ingredients: ["English muffin", "Eggless breakfast filling"], sources: ["mbCrops", "cfiaTrace"] },
  10: { kicker: "The egg trail inside a breakfast box", character: "Ellie Egg", speech: "Crack my code: farm, collection, grading, cold delivery, kitchen and school!", young: "Eggs are collected from laying hens, checked and graded, kept cool, delivered and cooked for the breakfast box.", story: "The egg's route is different from the box's bread, potato or fruit routes. Safe temperature and identifiable cartons help connect the kitchen back to the supplier.", deep: "The actual farm and flock require Shelly's purchase and lot records.", fact: "Egg grading checks quality and sorts eggs by size.", question: "Why does a kitchen keep the egg carton or lot information?", trace: "egg", traceName: "breakfast-box eggs", ingredients: ["Eggs", "Menu-selected breakfast sides"], sources: ["aafcEggs", "cfiaTrace"] },
  11: { kicker: "Eggs meet baked bannock", character: "Bannock Bea & Egg", speech: "Two stories share one box: a living bannock tradition and a carefully traced egg trail.", young: "Shelly's breakfast box pairs baked bannock with egg and other breakfast foods. Each part begins in a different place.", story: "Bannock carries a nuanced story of Indigenous adaptation and living foodways, while the egg follows a farm, grading and cold-chain route.", deep: "Teaching both paths avoids treating the whole box as if it had one origin.", fact: "A single breakfast can connect cultural history and modern food-safety systems.", question: "Which part tells a cultural story, and which records would trace its ingredients?", trace: "mixed", traceName: "bannock-box ingredients", ingredients: ["Baked bannock", "Egg", "Menu-selected sides"], sources: ["parksBannock", "metisBannock", "aafcEggs", "cfiaTrace"] },
  12: { kicker: "Older bread gets a second chance", character: "Toasty Time-Traveller", speech: "Cooks have soaked bread for centuries — I am a delicious lesson in using food wisely!", young: "Bread is soaked with liquid and egg, then cooked. This can turn older bread into a new warm meal instead of wasting it.", story: "Soaked-and-cooked bread appears in Roman-era writing and later in French pain perdu, meaning lost bread. The sausage adds a separate modern farm trail.", deep: "The long history is a family tree of related ideas, not proof of one unchanged recipe.", fact: "The French name pain perdu means lost bread.", question: "How can cooking help a household waste less food?", trace: "mixed", traceName: "bread, egg and sausage", ingredients: ["Bread", "Egg", "Milk or liquid", "Sausage"], sources: ["smithFrenchToast", "aafcEggs", "cfiaTrace"] },
  13: { kicker: "Three rounds, one grain journey", character: "The Triple Flippers", speech: "Count us, stack us, then follow every fluffy round backward to a field of wheat!", young: "These three pancakes all begin with flour made from grain. Mixing and heat transform one batter into three soft rounds.", story: "A stack makes repetition visible: the cook portions similar amounts of batter so the cakes cook evenly and serve consistently.", deep: "The count changes portioning, while the planting-to-milling story remains the same for each pancake.", fact: "Consistent portions help foods cook at a similar rate.", question: "What could make three pancakes turn out different even from one bowl of batter?", trace: "grain", traceName: "pancake flour", ingredients: ["Flour", "Egg", "Liquid", "Leavening"], sources: ["mbCrops", "aafcEggs", "cfiaTrace"] },
  14: { kicker: "A field trail meets a farm trail", character: "Pancake Pat & Sausage Sam", speech: "My flour and sausage did not travel together until the kitchen paired us!", young: "The pancakes begin with grain and the sausage begins with animals raised on farms. Shelly's kitchen brings the two trails together.", story: "This plate is a simple way to compare crop and livestock systems before they converge during preparation and service.", deep: "Supplier, species and production lot are needed to replace the illustrated route with an audited one.", fact: "Ingredients served side by side can have very different journeys.", question: "Which steps belong only to the pancakes, and which only to the sausage?", trace: "mixed", traceName: "pancakes and sausage", ingredients: ["Pancakes", "Sausage"], sources: ["mbCrops", "aafcEggs", "cfiaTrace"] },
  15: { kicker: "The whole grain keeps more of its layers", character: "Wheely Whole-Wheat", speech: "My wrap keeps the bran, germ and endosperm together — three parts of one tiny kernel!", young: "Whole-wheat flour keeps more parts of the wheat kernel than refined white flour. The flour becomes a flexible wrap around breakfast fillings.", story: "A wheat kernel has bran, germ and endosperm. Milling choices determine which parts stay in the flour before dough is mixed and flattened.", deep: "The fillings still need their own egg, dairy, meat or vegetable trace records.", fact: "Whole-wheat flour contains all three main parts of the kernel.", question: "How can milling change a grain before we ever see the wrap?", trace: "grain", traceName: "whole wheat", ingredients: ["Whole-wheat wrap", "Egg", "Vegetables", "Recipe-dependent filling"], sources: ["mbCrops", "aafcEggs", "cfiaTrace"] },
  16: { kicker: "An Italian method holds a garden together", character: "Frankie Frittata", speech: "Eggs are my glue, but leaves, roots, seeds and bulbs make my colourful cast!", young: "A frittata is an Italian egg dish. Shelly's version mixes eggs and cheese with many colourful vegetables.", story: "Unlike a quickly folded omelette, a frittata cooks a thicker mixture of egg and fillings together. It turns small vegetable pieces into one sliceable meal.", deep: "Its many ingredients make a good traceability exercise: each produce case and egg carton has its own source.", fact: "Shelly's vegetables represent several plant parts, including leaves, roots, seeds and bulbs.", question: "How many plant parts can you identify in one frittata?", trace: "egg", traceName: "frittata eggs", ingredients: ["Eggs", "Spinach", "Peas", "Corn", "Carrots", "Celery", "Onion", "Cheese"], sources: ["aafcEggs", "mbSeasonal", "cfiaTrace"] },
  17: { kicker: "Nooks, crannies and an egg", character: "Nook the Muffin", speech: "My craggy bread catches the filling while an egg travels safely from farm to griddle!", young: "This sandwich pairs a griddled English muffin with an egg filling. The bread and egg arrive through two different food chains.", story: "Fermentation makes bubbles in the muffin dough; cooking fixes those spaces into the famous nooks that grip a soft filling.", deep: "The egg's carton and the bread's case label are separate traceability clues.", fact: "Tiny gas bubbles create the muffin's uneven interior.", question: "What evidence would let a kitchen trace both the bread and the egg?", trace: "mixed", traceName: "muffin and egg", ingredients: ["English muffin", "Egg", "Recipe-dependent meat or cheese"], sources: ["mbCrops", "aafcEggs", "cfiaTrace"] },
  18: { kicker: "An ocean journey inside two slices", character: "Tilly Tuna", speech: "Ask for my species, catch area and lot code — ocean stories need good labels!", young: "Tuna begins in the ocean, is caught, checked, processed and kept safe before it is mixed for a sandwich.", story: "Fish traceability depends on accurate common names and records. A complete story would identify species, catch area, processor and lot.", deep: "Because those details were not supplied, this card describes the chain without guessing the fishery.", fact: "The word tuna can refer to more than one fish species.", question: "Why is a species name more useful than simply saying fish?", trace: "seafood", traceName: "tuna filling", ingredients: ["Tuna", "Bread", "Recipe-dependent sandwich filling"], sources: ["cfiaFish", "cfiaTrace"] },
  19: { kicker: "A chicken trail rolls into a wheat wrap", character: "Chirpy Chicken Wrap", speech: "Unroll me and you will find poultry, grain and garden trails tucked together!", young: "Chicken is raised and processed, wheat becomes a wrap, and vegetables are harvested before Shelly's rolls them together.", story: "The wrap hides several supply chains in one spiral. Temperature records matter for chicken; case and lot labels matter for every component.", deep: "Tracing the finished wrap means linking the preparation batch to each received ingredient.", fact: "Rolling a wrap changes the meal's shape, not the origins of its ingredients.", question: "Which ingredient needs cold storage, and why?", trace: "poultry", traceName: "wrap chicken", ingredients: ["Chicken", "Wheat wrap", "Vegetables", "Recipe-dependent sauce"], sources: ["aafcEggs", "mbCrops", "cfiaTrace"] },
  20: { kicker: "Tijuana's salad takes a portable turn", character: "Cee-Cee Wrap", speech: "A 1920s restaurant salad climbed into a wrap and picked up a chicken farm trail!", young: "Caesar salad's story connects Tijuana and an Italian immigrant restaurant family. This version adds chicken and rolls the salad in a wrap.", story: "Turning Caesar salad into a chicken wrap shows how dishes migrate and adapt: recognizable flavours remain while format and ingredients change.", deep: "Romaine, Parmesan, dressing, crouton or wrap, and chicken each require their own supplier record.", fact: "Caesar salad is named for Caesar Cardini, not the Roman ruler.", question: "Which parts of a Caesar salad remain recognizable inside the wrap?", trace: "mixed", traceName: "Caesar-wrap ingredients", ingredients: ["Chicken", "Romaine", "Caesar dressing", "Parmesan", "Wrap"], sources: ["smithCaesar", "aafcEggs", "cfiaTrace"] },
  21: { kicker: "A bowl made from plant parts", character: "Greta Garden", speech: "Leaves, roots, fruits and seeds can all meet in one crunchy garden!", young: "A garden salad brings together vegetables that may be leaves, roots, fruits or seeds. Growers harvest and cool them before the kitchen washes and cuts them.", story: "Unlike a named historic recipe, this salad's strongest story is plant biology, seasonality and the meeting of several produce supply chains.", deep: "The exact crops and origins change with the approved recipe, season and supplier case labels.", fact: "In botany, tomatoes are fruits even when cooks use them like vegetables.", question: "Which plant parts are in today's salad?", trace: "produce", traceName: "garden vegetables", ingredients: ["Leafy greens", "Seasonal vegetables", "Recipe-dependent dressing"], sources: ["mbSeasonal", "cfiaTrace"] },
  22: { kicker: "A tableside salad born in Tijuana", character: "Cee-Cee Caesar", speech: "My story crosses borders: Italian family, Mexican city, North American diners!", young: "Caesar salad was made famous in Tijuana, Mexico, by an Italian immigrant restaurant family. It is named after Caesar Cardini.", story: "The generally accepted account places the salad in Cardini's 1920s Tijuana restaurant, where tableside mixing helped make it memorable to visitors.", deep: "The origin story is strong, while individual contributors are still discussed; Shelly's romaine follows a separate modern produce trail.", fact: "Caesar salad was not named for Julius Caesar.", question: "How can a border city help create a food with more than one cultural connection?", trace: "produce", traceName: "romaine lettuce", ingredients: ["Romaine lettuce", "Caesar dressing", "Parmesan", "Croutons"], sources: ["smithCaesar", "cfiaTrace"] },
  23: { kicker: "Heat transforms grain and milk", character: "Gilly Grilled Cheese", speech: "My bread turns crisp while my cheese softens — two farm stories, one hot sandwich!", young: "Bread begins with grain and cheese begins with milk. Heat toasts the bread and softens the cheese between the slices.", story: "The magic is a meeting of cereal farming, dairy processing and heat: starch browns at the surface while cheese melts inside.", deep: "Bread and cheese retain separate case and lot identities until the kitchen combines them.", fact: "Cheese softens because heat loosens its fat and protein structure.", question: "Why is the outside crisp while the middle stays soft?", trace: "mixed", traceName: "bread and cheese", ingredients: ["Bread", "Cheese", "Recipe-dependent spread"], sources: ["aafcDairy", "mbCrops", "cfiaTrace"] },
  24: { kicker: "A flexible format with a mystery filling", character: "Sasha Sandwich", speech: "My name tells you my shape, not my ingredients — open the recipe before tracing me!", young: "A sandwich puts a filling between pieces of bread. The exact filling decides which farms, waters or processors are part of its story.", story: "Because this menu listing does not name the filling, its honest story begins with the approved recipe and receiving record rather than an invented origin.", deep: "This is traceability thinking in action: identify the food before making a source claim.", fact: "A menu name can describe a format without identifying its ingredients.", question: "What information would you ask for before drawing this sandwich's journey?", trace: "mixed", traceName: "recipe-selected sandwich", ingredients: ["Bread", "Approved recipe filling"], sources: ["cfiaTrace"] },
  25: { kicker: "An underground stem becomes a crisp side", character: "Fryday Spud", speech: "I grew underground as a tuber, rested in storage, then changed shape in the kitchen!", young: "A seed potato grows a plant that makes new potatoes underground. Farmers harvest and store them before cooks cut and cook them.", story: "Fries connect plant science with processing: cutting increases surface area, while cooking changes a firm, starchy tuber into a soft centre and crisp outside.", deep: "Manitoba has commercial potato production, but Shelly's actual farm or processor must be confirmed from records.", fact: "A potato is a swollen underground stem called a tuber.", question: "How does cutting change what heat can do to a potato?", trace: "potato", traceName: "fries", ingredients: ["Potatoes", "Cooking oil", "Seasoning"], sources: ["mbPotatoes", "cfiaTrace"] },
  26: { kicker: "A red fruit becomes a warm bowl", character: "Tommy Tomato Soup", speech: "From tiny seed to red fruit to smooth soup — I transform at every stop!", young: "Tomatoes begin as seeds, grow into plants, ripen, and are harvested. The kitchen cooks and blends them into soup.", story: "Tomato soup is a transformation story: whole fruit can be crushed, concentrated or blended with liquid and seasoning into a spoonable meal.", deep: "Fresh, canned or puréed tomato inputs have different processors and lots, so the exact recipe determines the trace path.", fact: "Tomatoes are botanical fruits because they grow from flowers and contain seeds.", question: "What changes when a tomato becomes soup, and what stays the same?", trace: "produce", traceName: "tomatoes", ingredients: ["Tomatoes", "Broth or liquid", "Seasoning"], sources: ["mbSeasonal", "cfiaTrace"] },
  27: { kicker: "Many garden trails meet in one pot", character: "Violet Veggie Soup", speech: "Every colour in my pot may have a different farm, harvest date and plant part!", young: "Vegetable soup cooks several plants together in liquid. The vegetables may be roots, leaves, stems, fruits or seeds.", story: "The pot creates one flavour, but traceability keeps every ingredient's identity: a carrot lot does not become the same thing as a pea or tomato lot.", deep: "Season, recipe and supplier labels determine the real route for each vegetable.", fact: "Soup can combine more plant parts than many foods eaten by themselves.", question: "Can you sort the soup vegetables by the plant parts we eat?", trace: "mixed", traceName: "soup vegetables", ingredients: ["Mixed vegetables", "Broth", "Herbs and seasoning"], sources: ["mbSeasonal", "cfiaTrace"] },
  28: { kicker: "A ranch trail and a garden trail share a pot", character: "Hank Hamburger Soup", speech: "Beef, vegetables and broth keep their own histories even while their flavours mingle!", young: "Hamburger soup cooks ground beef and vegetables together in broth. Beef begins with cattle; vegetables begin as plants.", story: "Slow simmering turns separate farm ingredients into a shared meal while safe cooking and batch records connect the pot back to received lots.", deep: "The recipe can be traced only when the beef package, produce cases and preparation date are linked.", fact: "Ground meat mixes many small pieces, so batch identification is especially important.", question: "How can one soup batch be connected to several ingredient lots?", trace: "beef", traceName: "soup beef", ingredients: ["Ground beef", "Vegetables", "Broth", "Seasoning"], sources: ["cfiaTrace", "mbSeasonal"] },
  29: { kicker: "Farm, field and garden become comfort in a bowl", character: "Nora Noodle Soup", speech: "Chicken, wheat noodles and vegetables arrive on three trails before swimming together!", young: "Chicken noodle soup combines poultry, noodles made from grain, vegetables and broth. Each part has its own path to the pot.", story: "Versions of chicken-and-noodle soup appear in many communities; this chapter focuses on how a simple pot joins livestock, grain and produce systems.", deep: "The finished batch should connect back to chicken, noodle and vegetable receiving records.", fact: "Noodles keep their shape because grain proteins and starch change as they cook.", question: "Which ingredient changes most when it simmers?", trace: "mixed", traceName: "chicken, noodles and vegetables", ingredients: ["Chicken", "Wheat noodles", "Vegetables", "Broth"], sources: ["aafcEggs", "mbCrops", "cfiaTrace"] },
  30: { kicker: "A buried root turns silky and bright", character: "Cara Carrot Soup", speech: "My orange root grew in dark soil while green leaves gathered sunlight above!", young: "Carrot seeds grow leaves above ground and orange roots below. Farmers lift and wash the roots before the kitchen cooks and blends them.", story: "Blending breaks softened carrot pieces into a smooth soup, but the root's colour and sweetness still reveal its plant origin.", deep: "A Manitoba-grown carrot is possible, not confirmed; the produce label and supplier record establish origin.", fact: "The carrot we eat is the plant's enlarged root.", question: "How can leaves above the soil help a root grow below it?", trace: "produce", traceName: "carrots", ingredients: ["Carrots", "Broth or liquid", "Seasoning"], sources: ["mbSeasonal", "cfiaTrace"] },
  31: { kicker: "A shared pot beside a living bannock tradition", character: "Stewie & Bibi", speech: "The stew tells a many-ingredient story; the bannock tells a careful story of adaptation.", young: "Stew slowly cooks ingredients together. Shelly's serves it with baked bannock, a food important in many First Nations and Métis communities today.", story: "This pairing invites two histories without collapsing them: widespread one-pot cooking and flour bannock shaped through trade, colonization and Indigenous adaptation.", deep: "The lesson must avoid calling the current flour recipe an unchanged ancient food.", fact: "Slow cooking can soften firm ingredients and bring their flavours into the liquid.", question: "How can one plate hold both a cooking-method story and a cultural-history story?", trace: "mixed", traceName: "stew and bannock ingredients", ingredients: ["Stew ingredients", "Baked bannock"], sources: ["parksBannock", "metisBannock", "cfiaTrace"] },
  32: { kicker: "Tomatoes carry edible letters", character: "Alfie Alphabet Soup", speech: "Read me, eat me, then trace my red tomato base and tiny wheat letters!", young: "Tomato alphabet soup combines tomatoes with letter-shaped pasta. Tomatoes grow on plants; pasta begins as grain.", story: "This playful soup joins food literacy and word literacy: processing turns tomatoes into a base and milling turns wheat into tiny readable shapes.", deep: "The two main components keep separate processor and lot records until the kitchen combines them.", fact: "Pasta can be shaped without changing the grain it came from.", question: "What food word can you spell before the letters disappear?", trace: "mixed", traceName: "tomatoes and pasta letters", ingredients: ["Tomato soup base", "Alphabet pasta", "Seasoning"], sources: ["mbCrops", "mbSeasonal", "cfiaTrace"] },
  33: { kicker: "A crispy coat protects a tender centre", character: "Flick the Chicken Finger", speech: "Trace my chicken and my grainy coat separately — crunch has a supply chain too!", young: "Chicken is cut into strips, coated with crumbs made from grain and cooked. The chosen side adds another ingredient journey.", story: "The crisp coating is food engineering: a dry outer layer changes faster under heat than the moist chicken inside.", deep: "Poultry lot, breading lot, cooking batch and side must all be connected for full traceability.", fact: "Breading adds surface texture and helps the outside brown.", question: "Why do the coating and chicken centre feel different?", trace: "poultry", traceName: "chicken fingers", ingredients: ["Chicken", "Breading", "Cooking oil", "Choice of side"], sources: ["aafcEggs", "mbCrops", "cfiaTrace"] },
  34: { kicker: "A poultry path fits inside a bun", character: "Chipper Charlie Burger", speech: "My bun began in a field, my patty on a poultry farm, and my side has its own tale!", young: "A chicken burger brings a poultry patty and a grain-based bun together. The chosen side follows a third trail.", story: "Calling it a burger describes the portable bun format; chicken replaces the ground-beef patty often associated with the form.", deep: "That adaptation changes the livestock supply chain while leaving the sandwich structure familiar.", fact: "A familiar food shape can hold a completely different protein.", question: "What changed from a beef burger, and what stayed the same?", trace: "mixed", traceName: "chicken, bun and side", ingredients: ["Chicken patty", "Bun", "Recipe toppings", "Choice of side"], sources: ["aafcEggs", "mbCrops", "cfiaTrace"] },
  35: { kicker: "A debated burger story gains a dairy layer", character: "Bertie Cheeseburger", speech: "Many cooks claimed the burger idea — my cheese adds one more farm trail to investigate!", young: "A cheeseburger combines a ground-beef patty, a bread bun and cheese made from milk. Several people claimed to invent the modern burger.", story: "Hamburg-style ground beef, mechanical grinders and portable fair food all appear in the burger's debated North American history.", deep: "Adding cheese and a side turns one debated food-history story into at least four modern supply chains.", fact: "Historians have not proved one single inventor of the hamburger.", question: "What kind of evidence could support an invention claim?", trace: "mixed", traceName: "beef, cheese, bun and side", ingredients: ["Beef patty", "Bun", "Cheese", "Toppings", "Choice of side"], sources: ["smithBurger", "aafcDairy", "cfiaTrace"] },
  36: { kicker: "A Québec snack-bar favourite", character: "Tina Poutine", speech: "My Québec roots are clear, but several communities tell different beginning stories!", young: "Poutine comes from Québec and is known for potatoes, cheese curds and gravy. Shelly's version uses baked fries, gravy and cheese.", story: "The dish took shape in rural Québec snack bars in the late 1950s. Several towns and restaurants remember its invention differently.", deep: "The region is well supported, while the exact inventor is debated; the potato, dairy and gravy ingredients still need current supplier records.", fact: "More than one Québec community claims to be poutine's birthplace.", question: "Why might communities remember the same food beginning differently?", trace: "mixed", traceName: "potatoes, cheese and gravy", ingredients: ["Baked fries", "Gravy", "Cheese"], sources: ["irepiPoutine", "mbPotatoes", "aafcDairy", "cfiaTrace"] },
  37: { kicker: "A whole-bird lesson in using more", character: "Winnie Wing", speech: "I am one part of a chicken — trace the bird, the sauce and the side before they meet!", young: "Chicken wings are one part of a bird raised on a poultry farm. They are processed, kept cold, cooked and served with a side.", story: "Wings show how cooks use different cuts from one animal rather than expecting every meal to use the same part.", deep: "Sauce and side create additional lots that must be linked to the service batch.", fact: "A chicken wing has more than one joint and section.", question: "Why might using many cuts from one animal matter?", trace: "poultry", traceName: "chicken wings", ingredients: ["Chicken wings", "Recipe sauce or seasoning", "Choice of side"], sources: ["aafcEggs", "cfiaTrace"] },
  38: { kicker: "Grain and milk become creamy comfort", character: "Mackie Mac", speech: "Pasta tubes catch my cheese sauce while garlic toast doubles the wheat-field trail!", young: "Pasta and toast begin with grain. Cheese sauce begins with milk. Shelly's kitchen cooks and combines them.", story: "The pasta's shapes hold sauce, while toasted bread adds a contrasting crunch. It is a lesson in how shape and heat change eating experience.", deep: "Pasta, dairy sauce and garlic bread remain separate traceable products before preparation.", fact: "Hollow pasta shapes can carry sauce inside and outside.", question: "How does shape help pasta hold cheese sauce?", trace: "mixed", traceName: "pasta, dairy and toast", ingredients: ["Macaroni", "Cheese sauce", "Garlic toast"], sources: ["aafcDairy", "mbCrops", "cfiaTrace"] },
  39: { kicker: "Three agricultural worlds twirl together", character: "Spencer Spaghetti", speech: "Wheat, tomatoes and beef follow separate routes before meeting under my sauce!", young: "Spaghetti begins as wheat flour, meat sauce includes beef, and tomatoes grow on plants. The kitchen joins all three.", story: "This familiar Italian-influenced North American meal is best traced ingredient by ingredient instead of assigned one simple origin label.", deep: "The finished batch connects dry pasta, beef and tomato-product lots through the kitchen's preparation record.", fact: "Long pasta looks simple but links crop, livestock and processing systems.", question: "Which ingredient travelled through the most transformations?", trace: "mixed", traceName: "wheat, beef and tomatoes", ingredients: ["Spaghetti", "Ground meat", "Tomato sauce", "Seasoning"], sources: ["mbCrops", "mbSeasonal", "cfiaTrace"] },
  40: { kicker: "A garden-filled sauce follows the wheat trail", character: "Vera Veggie Spaghetti", speech: "Twirl my wheat noodles, then hunt for the plant parts hiding in the sauce!", young: "Spaghetti starts with grain. Vegetables grow as different plant parts, and garlic toast begins with grain too.", story: "Replacing meat with vegetables shifts the plate toward crop supply chains while keeping the pasta-and-sauce form familiar.", deep: "Each frozen, fresh or processed vegetable still has its own supplier and lot identity.", fact: "A plant-based dish can include roots, fruits, leaves and seeds at once.", question: "How does changing the sauce change the food-system map?", trace: "produce", traceName: "sauce vegetables", ingredients: ["Spaghetti", "Vegetables", "Tomato sauce", "Garlic toast"], sources: ["mbCrops", "mbSeasonal", "cfiaTrace"] },
  41: { kicker: "A Roman pasta story crosses the Atlantic", character: "Alfredo the Adventurer", speech: "My 1908 Roman ancestor used pasta, butter and Parmesan — later cooks changed the recipe!", young: "A famous Alfredo story begins in Rome in 1908 with pasta, butter and Parmesan. North American versions later became creamier and added ingredients such as chicken.", story: "Rome's account connects Alfredo Di Lelio's simple dish with his wife Ines. Travellers helped make it famous, and cooks abroad adapted it.", deep: "Shelly's chicken and garlic toast add poultry and grain routes to the dairy-and-pasta story.", fact: "The famous early Roman version did not rely on heavy cream.", question: "Why do recipes change when they travel?", trace: "mixed", traceName: "chicken, pasta and dairy", ingredients: ["Chicken", "Pasta", "Alfredo sauce", "Garlic toast"], sources: ["romaAlfredo", "aafcDairy", "aafcEggs", "cfiaTrace"] },
  42: { kicker: "Mexican taco history takes a bowl-shaped turn", character: "Taco-Trail Tia", speech: "My flavours remember tacos, but rice makes me a modern bowl with a new route!", young: "Tacos have deep Mexican connections. Shelly's uses taco-inspired flavours in a bowl with beef, rice, lettuce, tomato, cheese and sour cream.", story: "Moving fillings from a tortilla to rice shows adaptation: format changes while part of the flavour story remains recognizable.", deep: "The bowl should be called Mexican-inspired, not an unchanged traditional taco; each component has a separate source.", fact: "A dish can keep familiar flavours even when its shape changes.", question: "Which parts of the taco idea stayed, and which changed?", trace: "mixed", traceName: "beef-bowl ingredients", ingredients: ["Seasoned beef", "Rice", "Lettuce", "Tomato", "Cheese", "Sour cream"], sources: ["smithTaco", "aafcDairy", "cfiaTrace"] },
  43: { kicker: "Crunch changes the chicken-burger map", character: "Crispy Kit", speech: "My chicken, crunchy coating, bun and side are four trails stacked into one lunch!", young: "A crispy chicken burger adds a grain-based coating to chicken before placing it in a bun. The chosen side brings another path.", story: "Compared with a plain chicken patty, the breaded surface adds processing, texture and a separate ingredient lot.", deep: "Full traceability links poultry, breading, bun, toppings and side to the preparation batch.", fact: "More surface area means more places for a coating to become crisp.", question: "How does breading change both texture and traceability?", trace: "mixed", traceName: "breaded chicken, bun and side", ingredients: ["Chicken", "Breading", "Bun", "Toppings", "Choice of side"], sources: ["aafcEggs", "mbCrops", "cfiaTrace"] },
  44: { kicker: "An Italian-American idea meets veggie pasta", character: "Parmy & the Pasta Patch", speech: "Chicken, tomatoes, cheese and garden pasta make me a whole cast of travelling ingredients!", young: "Chicken Parmesan layers breaded chicken, tomato sauce and cheese. Shelly's serves it with pasta containing vegetables.", story: "The dish belongs to an Italian-American family of breaded cutlet recipes, adapted with North American ingredients and restaurant habits.", deep: "Its name does not make every ingredient Italian; poultry, wheat, tomatoes, dairy and vegetables each have modern suppliers.", fact: "Parmesan in a dish name can point to a cooking tradition as well as an ingredient.", question: "How can a recipe show both heritage and adaptation?", trace: "mixed", traceName: "chicken, tomato, dairy and pasta", ingredients: ["Breaded chicken", "Tomato sauce", "Cheese", "Veggie pasta"], sources: ["aafcEggs", "aafcDairy", "mbCrops", "cfiaTrace"] },
  45: { kicker: "A pasta pocket hides a dairy centre", character: "Ravi the Ravioli", speech: "My wheat-and-egg wrapper protects a cheesy surprise — trace outside and inside!", young: "Ravioli is filled pasta. Flour and egg become a wrapper, and milk becomes the cheese tucked inside.", story: "Filled pasta uses simple kitchen engineering: two sheets or folded dough seal a small portion so filling and wrapper cook together.", deep: "The pasta product label can connect its wheat, egg and dairy ingredients to one manufacturing lot before kitchen service.", fact: "Ravioli's sealed edge keeps filling inside during cooking.", question: "What makes a pasta pocket stay closed in hot water?", trace: "mixed", traceName: "pasta and cheese filling", ingredients: ["Wheat pasta", "Egg", "Cheese filling", "Recipe sauce"], sources: ["aafcEggs", "aafcDairy", "mbCrops", "cfiaTrace"] }
};

const themeById = new Map(storyThemes.map((story) => [story.id, story]));
const stories = menuItems.map(([number, name, category, themeId]) => {
  const theme = themeById.get(themeId);
  const profile = itemProfiles[number];
  return {
    ...theme,
    id: "menu-" + String(number).padStart(2, "0"),
    number,
    themeId,
    title: name,
    category,
    kicker: profile.kicker,
    icon: profile.icon || theme.icon,
    character: { ...theme.character, name: profile.character, speech: profile.speech },
    region: profile.region || theme.region,
    connection: profile.connection || theme.connection,
    confidence: profile.confidence || theme.confidence,
    ingredients: profile.ingredients,
    shellys: "Shelly's menu lists “" + name + "” in the " + category + " section. Ingredient details shown here are educational and should be checked against the current approved recipe.",
    grade: { 1: profile.young, 2: profile.story, 3: profile.story + " " + profile.deep },
    fact: profile.fact,
    question: profile.question,
    sensory: profile.sensory || theme.sensory,
    sources: profile.sources.map((key) => sourceCatalog[key]),
    traceability: buildTrace(profile.trace, profile.traceName),
    traceName: profile.traceName,
    traceNote: "Illustrative food-system route for " + profile.traceName + ". Shelly's actual supplier, origin and lot must be verified from receiving and preparation records."
  };
});

const journeys = [
  {
    id: "wheat", name: "Wheat", icon: "🌾", origin: "Can be grown in Manitoba and across the Canadian Prairies.",
    note: "Shelly's supplier is not specified, so this is a Manitoba possibility — not a sourcing claim.",
    steps: [["🌱", "Planted", "Seed goes into soil"], ["☀️", "Grown", "Wheat ripens in a field"], ["🚜", "Harvested", "A combine collects grain"], ["⚙️", "Milled", "Grain becomes flour"], ["🥣", "Mixed", "Flour becomes dough"], ["👩🏽‍🍳", "Prepared", "Shelly's kitchen"], ["🏫", "Served", "Your school plate"]]
  },
  {
    id: "oats", name: "Oats", icon: "🌾", origin: "A major Prairie crop; Manitoba produces oats.",
    note: "Processing removes the tough outer hull before oats are cut or rolled for cooking.",
    steps: [["🌱", "Planted", "Oat seed goes into soil"], ["☀️", "Grown", "Plants grow all summer"], ["🚜", "Harvested", "Grain is collected"], ["⚙️", "Rolled", "Cleaned and processed"], ["🥣", "Cooked", "Liquid softens the oats"], ["👩🏽‍🍳", "Topped", "Fruit and granola"], ["🏫", "Served", "Breakfast at school"]]
  },
  {
    id: "potatoes", name: "Potatoes", icon: "🥔", origin: "Manitoba has an established commercial potato sector.",
    note: "Potatoes can be produced in Manitoba; Shelly's actual supplier has not been confirmed.",
    steps: [["🥔", "Seed potato", "Planted in soil"], ["🌱", "Grown", "Tubers form underground"], ["🚜", "Harvested", "Lifted from the soil"], ["📦", "Stored", "Kept cool and dark"], ["🔪", "Prepared", "Cut, baked or mashed"], ["👩🏽‍🍳", "Cooked", "Shelly's kitchen"], ["🏫", "Served", "Your school plate"]]
  },
  {
    id: "dairy", name: "Dairy", icon: "🥛", origin: "Milk is produced on regulated Canadian dairy farms, including in Manitoba.",
    note: "Milk can become cheese, butter or a drink through different forms of processing.",
    steps: [["🐄", "Raised", "Dairy cows on a farm"], ["🥛", "Milked", "Milk is collected"], ["🧪", "Tested", "Quality and safety checks"], ["♨️", "Pasteurized", "Carefully heat-treated"], ["🧀", "Transformed", "Milk, cheese or butter"], ["👩🏽‍🍳", "Prepared", "Shelly's kitchen"], ["🏫", "Served", "Your school plate"]]
  },
  {
    id: "eggs", name: "Eggs", icon: "🥚", origin: "Canada has a regulated commercial egg sector.",
    note: "Egg grading checks quality and sorts eggs by size before distribution.",
    steps: [["🐓", "Raised", "Laying hens on a farm"], ["🥚", "Laid", "Eggs are collected"], ["🔎", "Graded", "Quality and size check"], ["📦", "Packed", "Placed into cartons"], ["🚚", "Delivered", "Moved through distribution"], ["👩🏽‍🍳", "Cooked", "Shelly's kitchen"], ["🏫", "Served", "Your school plate"]]
  },
  {
    id: "chicken", name: "Chicken", icon: "🐓", origin: "Chicken is raised in Canada's regulated poultry sector, including in Manitoba.",
    note: "This journey explains the food system without claiming a specific Shelly's supplier.",
    steps: [["🐣", "Hatched", "Chicks begin at a hatchery"], ["🐓", "Raised", "Cared for on a farm"], ["🏭", "Processed", "Food-safety steps"], ["❄️", "Kept safe", "Temperature is controlled"], ["🚚", "Distributed", "Delivered to kitchens"], ["👩🏽‍🍳", "Prepared", "Shelly's kitchen"], ["🏫", "Served", "Your school plate"]]
  },
  {
    id: "beef", name: "Beef", icon: "🐄", origin: "Canada has a large cattle and beef sector.",
    note: "Animal-care, processing and food-safety steps are part of the journey from farm to meal.",
    steps: [["🐄", "Raised", "Cattle farm or ranch"], ["🌾", "Fed", "Pasture and farm feed"], ["🏭", "Processed", "Inspected food system"], ["❄️", "Kept safe", "Temperature is controlled"], ["🚚", "Distributed", "Delivered to kitchens"], ["👩🏽‍🍳", "Prepared", "Shelly's kitchen"], ["🏫", "Served", "Your school plate"]]
  },
  {
    id: "tomatoes", name: "Tomatoes", icon: "🍅", origin: "Tomatoes can grow in fields or greenhouses. Supplier origin is not specified.",
    note: "Tomatoes can arrive fresh or be processed into sauces and soups.",
    steps: [["🌱", "Planted", "Seed begins the plant"], ["☀️", "Grown", "Field or greenhouse"], ["🍅", "Ripened", "Fruit changes colour"], ["🧺", "Harvested", "Picked from the plant"], ["🥣", "Transformed", "Fresh, sauce or soup"], ["👩🏽‍🍳", "Prepared", "Shelly's kitchen"], ["🏫", "Served", "Your school plate"]]
  },
  {
    id: "vegetables", name: "Vegetables", icon: "🥕", origin: "Vegetables come from roots, leaves, stems, flowers, fruits and seeds.",
    note: "Exact growing region changes by vegetable and season; Shelly's supplier origin is not supplied.",
    steps: [["🌱", "Planted", "Seeds or young plants"], ["☀️", "Grown", "Field or greenhouse"], ["🧺", "Harvested", "Picked at the right time"], ["💧", "Washed", "Cleaned and cooled"], ["🚚", "Distributed", "Moved to kitchens"], ["👩🏽‍🍳", "Prepared", "Fresh or cooked"], ["🏫", "Served", "Your school plate"]]
  },
  {
    id: "fruit", name: "Fruit", icon: "🍎", origin: "Fruit grows on trees, vines, bushes and smaller plants in many regions.",
    note: "The journey varies by fruit and season. Specific fruit suppliers are not identified.",
    steps: [["🌱", "Planted", "Tree, vine or plant"], ["🌸", "Flowered", "Many fruits begin as flowers"], ["☀️", "Ripened", "Sun and time help fruit grow"], ["🧺", "Harvested", "Picked by hand or machine"], ["📦", "Packed", "Sorted and protected"], ["🚚", "Distributed", "Moved to kitchens"], ["🏫", "Served", "Fresh fruit at school"]]
  },
  {
    id: "tuna", name: "Tuna", icon: "🐟", origin: "Tuna begins in an ocean fishery. Exact sourcing is not supplied.",
    note: "A full sourcing story would need species, fishing area and supplier information from Shelly's.",
    steps: [["🌊", "Ocean", "Wild fish habitat"], ["🎣", "Caught", "Commercial fishery"], ["🔎", "Checked", "Quality and safety"], ["🏭", "Processed", "Prepared and packed"], ["🚚", "Distributed", "Moved to kitchens"], ["👩🏽‍🍳", "Prepared", "Shelly's kitchen"], ["🏫", "Served", "Tuna sandwich"]]
  },
  {
    id: "turkey", name: "Turkey", icon: "🦃", origin: "Turkey is part of Canada's regulated poultry sector.",
    note: "Shelly's offers chicken/turkey sausage choices; exact supplier origin is not supplied.",
    steps: [["🐣", "Hatched", "Poults begin at a hatchery"], ["🦃", "Raised", "Cared for on a farm"], ["🏭", "Processed", "Food-safety steps"], ["❄️", "Kept safe", "Temperature controlled"], ["🚚", "Distributed", "Moved to kitchens"], ["👩🏽‍🍳", "Prepared", "Shelly's kitchen"], ["🏫", "Served", "Your school plate"]]
  },
  {
    id: "carrots", name: "Carrots", icon: "🥕", origin: "Carrots can be grown in Canada; Shelly's supplier origin is not supplied.",
    note: "The orange root grows underground while green leaves collect sunlight above ground.",
    steps: [["🌱", "Planted", "Tiny seeds in soil"], ["☀️", "Grown", "Root grows underground"], ["🚜", "Harvested", "Lifted from the soil"], ["💧", "Washed", "Soil is removed"], ["🔪", "Prepared", "Cut, grated or blended"], ["👩🏽‍🍳", "Cooked", "Soup or meal"], ["🏫", "Served", "Your school plate"]]
  }
];

const earlyStories = [
  {
    id: "roman-toast",
    number: "01",
    icon: "🍞",
    era: "Roman era",
    place: "Mediterranean world",
    title: "Bread gets a second chance",
    status: "Strongly supported",
    statusClass: "supported",
    story: "People were soaking and cooking bread long before anyone called the result ‘French toast.’ Roman-era food writing includes an early version of the idea. Much later, French cooks used the name pain perdu — ‘lost bread’ — for bread rescued with milk, egg and heat.",
    clue: "This is an early relative of French toast, not proof of one straight, unchanged recipe from Rome to today.",
    question: "Why might saving yesterday's bread have mattered to a household?",
    source: "Smithsonian — French toast history",
    url: "https://www.smithsonianmag.com/smart-news/there-are-many-names-french-toast-ways-cook-it-180961221/",
    quiz: { prompt: "What did soaking older bread help cooks do?", options: ["Use it in a new meal", "Turn it into cheese", "Make it grow again"], answer: 0, explanation: "Right! Cooking transformed bread that might otherwise have been wasted." }
  },
  {
    id: "bannock-trails",
    number: "02",
    icon: "🫓",
    era: "Fur-trade era",
    place: "Western Canada",
    title: "Flour travels the trade routes",
    status: "Nuanced history",
    statusClass: "debated",
    story: "Scottish-style bannock travelled with fur traders. Indigenous cooks adapted introduced wheat flour and long-lasting ingredients into practical new breads. Flour bannock later became important in many First Nations and Métis families and communities. Indigenous peoples already had other bread and cake traditions before European flour arrived.",
    clue: "The story includes colonization and adaptation. Modern flour bannock should never be presented as an unchanged pre-contact recipe.",
    question: "How can people make an introduced ingredient part of a living community food tradition?",
    source: "Louis Riel Institute / Virtual Museum of Métis History and Culture",
    url: "https://www.metismuseum.ca/media/document.php/14167.Bannock.pdf",
    quiz: { prompt: "Which statement is most accurate?", options: ["Flour bannock has a story of trade and adaptation", "All bannock recipes are exactly the same", "Indigenous peoples had no breads before wheat flour"], answer: 0, explanation: "Exactly. Flour bannock has a complex story of introduced ingredients, adaptation and living food culture." }
  },
  {
    id: "hamburger-grinder",
    number: "03",
    icon: "🍔",
    era: "1885–1904",
    place: "United States",
    title: "Ground meat meets portable bread",
    status: "Origin debated",
    statusClass: "debated",
    story: "Hamburg-style beef dishes reached the United States through European travel and migration. Between about 1885 and 1904, several vendors claimed the idea of putting ground meat between bread. New mechanical meat grinders made patties faster to prepare for crowds at fairs and food stands.",
    clue: "There is no proven single inventor. Several cooks may have had a similar idea around the same time.",
    question: "How can a new kitchen tool help create a new kind of meal?",
    source: "Smithsonian — Taste-Testing the History of the Hamburger",
    url: "https://www.smithsonianmag.com/arts-culture/taste-testing-history-hamburger-180959789/",
    quiz: { prompt: "Which tool helped ground-meat patties become easier to make?", options: ["A meat grinder", "A toaster", "A refrigerator magnet"], answer: 0, explanation: "Yes! Mechanical grinders made preparing ground meat much faster." }
  },
  {
    id: "alfredo-invention",
    number: "04",
    icon: "🍝",
    era: "1908",
    place: "Rome, Italy",
    title: "A simple pasta for Ines",
    status: "Supported account",
    statusClass: "supported",
    story: "Rome's tourism authority tells that Alfredo Di Lelio made a simple fettuccine in 1908 for his wife, Ines, after the birth of their child. The dish used fresh pasta, butter and Parmesan. It later became famous with visitors and changed into creamier versions across North America.",
    clue: "The early Roman preparation was creamy because butter, cheese and pasta water blended together — not because it used heavy cream.",
    question: "What can happen when travellers carry a favourite recipe home?",
    source: "Turismo Roma — Fettuccine Alfredo",
    url: "https://www.turismoroma.it/en/node/169838",
    quiz: { prompt: "Which ingredient was not part of the famous early Roman trio?", options: ["Heavy cream", "Butter", "Parmesan"], answer: 0, explanation: "Correct. The famous early version used pasta, butter and Parmesan." }
  },
  {
    id: "caesar-tijuana",
    number: "05",
    icon: "🥗",
    era: "1920s",
    place: "Tijuana, Mexico",
    title: "A salad crosses borders",
    status: "Strongly supported",
    statusClass: "supported",
    story: "The generally accepted story connects Caesar salad with Italian immigrant restaurateur Caesar Cardini in 1920s Tijuana. The salad was mixed dramatically at the table and became popular with visitors. Other people later claimed a role, so good historians keep that wrinkle in the story.",
    clue: "Caesar salad is named for Caesar Cardini, not Julius Caesar — and its story connects Italy, Mexico and North America.",
    question: "Why is this salad more than simply an ‘Italian’ or ‘Mexican’ food?",
    source: "Smithsonian — Hail Caesar",
    url: "https://www.smithsonianmag.com/arts-culture/hail-caesarthe-birthplace-of-the-famous-salad-closes-69245867/",
    quiz: { prompt: "Where is the salad's generally accepted birthplace?", options: ["Tijuana", "Rome", "Winnipeg"], answer: 0, explanation: "That's it — Tijuana, Mexico, in a restaurant run by an Italian immigrant." }
  },
  {
    id: "poutine-quebec",
    number: "06",
    icon: "🍟",
    era: "Late 1950s",
    place: "Centre-du-Québec",
    title: "A snack-bar favourite takes shape",
    status: "Inventor debated",
    statusClass: "debated",
    story: "Fries and fresh cheese curds came together in rural Québec snack bars in the late 1950s; gravy joined the now-famous combination as the dish developed. Several towns and restaurants remember the beginning differently. The region is clear, but one exact inventor is not.",
    clue: "The traditional Québec combination is fries, cheese curds and hot gravy. Shelly's menu says baked fries, gravy and cheese — a school-menu adaptation.",
    question: "Why can community memories disagree even when the region is well known?",
    source: "Université Laval IREPI — La poutine",
    url: "https://www.irepi.ulaval.ca/fiche-poutine-651.html",
    quiz: { prompt: "Why is poutine's exact invention story called debated?", options: ["Several places claim it", "Nobody ate it", "It came from one cookbook"], answer: 0, explanation: "Correct. Several Québec communities and restaurants tell competing origin stories." }
  }
];

const discussionCards = [
  ["🌎", "Geography", "Where on the map does today's food story take us?", "#386b5b"],
  ["🌾", "Agriculture", "Which ingredients in today's meal started on a farm?", "#b07b30"],
  ["🪶", "Indigenous foodways", "How can a community adapt new ingredients while keeping food connected to community life?", "#9b4a3a"],
  ["📜", "History", "Has this food always looked the way it does today?", "#87415a"],
  ["👪", "Community", "Why do people share certain foods when they gather?", "#59775b"],
  ["🔬", "Science", "What changes when a food is baked instead of fried?", "#527b87"],
  ["♻️", "Food system", "How many steps happened before this food reached school?", "#6c7650"]
];

const packages = {
  essential: {
    number: "01",
    title: "A story with every featured meal",
    lede: "The smallest useful package: quick for schools, visible to students and reusable whenever a dish returns.",
    items: [["▣", "Food Story Card", "A 50–100 word card with origin, ingredients, fact and question."], ["⌁", "One QR code", "A direct path to the longer digital story."], ["✉", "Order email", "A teacher-ready introduction to today's meal."]]
  },
  enhanced: {
    number: "02",
    title: "A story schools can display",
    lede: "High-visibility pieces that make the program present in hallways, cafeterias and family communications.",
    items: [["▧", "12 rotating posters", "Large-format stories grouped to avoid repetition."], ["▤", "Take-home pamphlet", "A family introduction to food, culture and community."], ["▰", "Digital signage", "10–15 second slides for school screens."]]
  },
  digital: {
    number: "03",
    title: "One library, many formats",
    lede: "A QR-linked food-story library keeps longer content accessible and makes updates manageable when the menu changes.",
    items: [["⌘", "Dish pages", "See it, find it, learn it, grow it, make it and ask it."], ["◎", "Interactive map", "Origin, migration, adaptation and Canadian connections."], ["▶", "Short videos", "30-second, 60-second and classroom versions."]]
  },
  teacher: {
    number: "04",
    title: "A two-minute lesson, ready to use",
    lede: "Teachers get a consistent structure without needing to become food historians before lunch.",
    items: [["?", "Before eating", "One noticing or prediction question."], ["◉", "While eating", "One inclusive sensory observation."], ["↗", "After eating", "One culture, history or food-system question."]]
  },
  cultural: {
    number: "05",
    title: "More depth where the story needs it",
    lede: "Some foods warrant dedicated material because their histories are especially meaningful, complex or frequently oversimplified.",
    items: [["🫓", "Bannock", "Living First Nations and Métis foodways, with colonial context."], ["🍟", "Poutine", "Strong Québec connection; disputed invention story."], ["🥗", "Caesar salad", "Italian migration, Tijuana and North American restaurant culture."]]
  }
};

const deliverables = [
  "Complete menu inventory", "Origin research matrix", "Farm-to-plate matrix", "Source register", "Cultural-sensitivity review",
  "45 individual story cards", "Poster series", "Pamphlet", "Food fact cards", "Educational menu insert",
  "School-order emails", "30-second videos", "60-second videos", "Classroom video concepts", "Digital signage",
  "Teacher resource sheets", "Morning announcements", "QR food library", "World food map", "Farm-to-school graphics",
  "Student food passport", "Discussion cards", "One Ingredient series", "Indigenous food story", "Recommended package"
];

const storyById = new Map(stories.map((story) => [story.id, story]));
const storyByNumber = new Map(stories.map((story) => [story.number, story]));
let currentGrade = 2;
let currentFilter = "all";
let activeDrawerStory = null;
let lastFocusedElement = null;
let discussionIndex = 0;
let activeComicId = earlyStories[0].id;
let storyStamps = new Set();

try {
  storyStamps = new Set(JSON.parse(localStorage.getItem("shellys-story-stamps") || "[]"));
} catch {
  storyStamps = new Set();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function gradeLabel(grade) {
  return grade === 1 ? "K–3" : grade === 2 ? "Grades 4–6" : "Grades 7–12";
}

function characterPortrait(story, className = "story-character") {
  const xPositions = [0, 33.333, 66.667, 100];
  const x = xPositions[story.character.x] ?? 0;
  const y = story.character.y === 1 ? 100 : 0;
  const style = `--character-image:url('assets/${story.character.sheet}');--character-x:${x}%;--character-y:${y}%`;
  return `<span class="${className}" role="img" aria-label="${escapeHtml(story.character.name)}, ${escapeHtml(story.title)} storybook character" style="${style}"></span>`;
}

function renderFeaturedStories() {
  const featured = [storyById.get("menu-04"), storyById.get("menu-36"), storyById.get("menu-22")];
  document.querySelector("#featured-stories").innerHTML = featured.map((story) => `
    <button class="featured-story" data-story-id="${story.id}" aria-label="Open ${escapeHtml(story.title)} food story">
      <span class="featured-arrow" aria-hidden="true">↗</span>
      <span class="featured-story-content">
        ${characterPortrait(story, "featured-character")}
        <span class="featured-tag">${escapeHtml(story.region)}</span>
        <h3>${escapeHtml(story.title)}</h3>
        <p>${escapeHtml(story.kicker)}</p>
      </span>
    </button>
  `).join("");
}

function renderStories() {
  const term = document.querySelector("#story-search").value.trim().toLowerCase();
  const filtered = stories.filter((story) => {
    const matchesFilter = currentFilter === "all" || story.tags.includes(currentFilter);
    const haystack = [story.title, story.kicker, story.region, story.connection, story.ingredients.join(" "), story.grade[currentGrade]].join(" ").toLowerCase();
    return matchesFilter && (!term || haystack.includes(term));
  });

  document.querySelector("#story-grid").innerHTML = filtered.map((story) => `
    <button class="story-card" data-story-id="${story.id}" style="--card-accent:${story.colour}" aria-label="Open ${escapeHtml(story.title)} food story">
      <span class="story-card-scene">
        ${characterPortrait(story)}
        <span class="story-card-bubble">
          <strong>${escapeHtml(story.character.name)} says…</strong>
          <span>“${escapeHtml(story.character.speech)}”</span>
        </span>
      </span>
      <span class="story-card-top">
        <span class="story-card-icon" aria-hidden="true">${story.icon}</span>
        <span class="story-card-region"><span>Connection</span><strong>${escapeHtml(story.region)}</strong></span>
      </span>
      <span class="story-trace-preview">
        <strong>Trace it: origin to school plate</strong>
        <span class="story-trace-route">
          ${story.traceability.map(([icon, label], index) => `<span><i aria-hidden="true">${icon}</i><small>${escapeHtml(label)}</small></span>${index < story.traceability.length - 1 ? '<b aria-hidden="true">→</b>' : ''}`).join("")}
        </span>
      </span>
      <h3>${escapeHtml(story.title)}</h3>
      <p>${escapeHtml(story.grade[currentGrade])}</p>
      <span class="story-card-footer">
        <span class="confidence-badge ${story.confidence.toLowerCase().replaceAll(" ", "-")}">${escapeHtml(story.confidence)}</span>
        <span class="story-count-badge">Menu #${String(story.number).padStart(2, "0")} · ${escapeHtml(story.category)}</span>
      </span>
    </button>
  `).join("");

  document.querySelector("#story-grid").hidden = filtered.length === 0;
  document.querySelector("#story-empty").hidden = filtered.length !== 0;
}

function openStory(id) {
  const story = storyById.get(id);
  if (!story) return;
  activeDrawerStory = story;
  lastFocusedElement = document.activeElement;
  const drawer = document.querySelector("#story-drawer");
  const panel = drawer.querySelector(".drawer-panel");
  panel.style.setProperty("--drawer-colour", story.colour);
  panel.querySelector("#drawer-content")?.remove();
  panel.insertAdjacentHTML("beforeend", `
    <div id="drawer-content">
      <div class="drawer-hero" style="--drawer-colour:${story.colour}">
        <span class="drawer-icon" aria-hidden="true">${story.icon}</span>
        <p class="drawer-kicker">${escapeHtml(story.region)}</p>
        <h2 id="drawer-title">${escapeHtml(story.title)}</h2>
        <p>${escapeHtml(story.kicker)}</p>
      </div>
      <div class="drawer-body">
        <section class="drawer-storybook" aria-label="A clue from ${escapeHtml(story.character.name)}">
          ${characterPortrait(story, "drawer-character")}
          <div class="drawer-speech">
            <span>Story guide</span>
            <h3>${escapeHtml(story.character.name)}</h3>
            <p>“${escapeHtml(story.character.speech)}”</p>
          </div>
        </section>
        <section class="drawer-traceability" aria-label="Traceability trail for ${escapeHtml(story.title)}">
          <div class="drawer-trace-heading">
            <span>Traceability trail</span>
            <h3>From field, farm or water to the school plate</h3>
            <p>Follow the featured ingredient: <strong>${escapeHtml(story.traceName)}</strong></p>
          </div>
          <div class="traceability-steps">
            ${story.traceability.map(([icon, label, note], index) => `
              <div class="traceability-step">
                <span class="trace-step-number">${String(index + 1).padStart(2, "0")}</span>
                <span class="trace-step-icon" aria-hidden="true">${icon}</span>
                <strong>${escapeHtml(label)}</strong>
                <small>${escapeHtml(note)}</small>
              </div>
            `).join("")}
          </div>
          <p class="traceability-note"><span aria-hidden="true">ⓘ</span>${escapeHtml(story.traceNote)}</p>
        </section>
        <div class="drawer-meta">
          <div><span>Connection</span><strong>${escapeHtml(story.connection)}</strong></div>
          <div><span>Origin confidence</span><strong>${escapeHtml(story.confidence)}</strong></div>
          <div><span>Reading level</span><strong>${gradeLabel(currentGrade)}</strong></div>
        </div>
        <section class="drawer-section">
          <h3>Food story</h3>
          <p>${escapeHtml(story.grade[currentGrade])}</p>
        </section>
        <section class="drawer-section shellys-version">
          <h3>Shelly's school-menu version</h3>
          <p>${escapeHtml(story.shellys)}</p>
        </section>
        <section class="drawer-section">
          <h3>Main ingredients</h3>
          <div class="ingredient-tags">${story.ingredients.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
        </section>
        <section class="drawer-section">
          <h3>Did you know?</h3>
          <p>${escapeHtml(story.fact)}</p>
        </section>
        <section class="drawer-section question-block">
          <span>Think about it</span>
          <p>${escapeHtml(story.question)}</p>
        </section>
        <section class="drawer-section">
          <h3>Research base</h3>
          <p class="source-links">${story.sources.map((source) => `<a href="${source.url}" target="_blank" rel="noopener">${escapeHtml(source.label)} <span aria-hidden="true">↗</span></a>`).join("")}</p>
        </section>
        <div class="drawer-actions">
          <button class="button button-primary" data-teach-story="${story.id}">Use in class</button>
          <button class="button button-outline" id="print-story">Print story</button>
        </div>
      </div>
    </div>
  `);
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
  requestAnimationFrame(() => drawer.querySelector(".drawer-close").focus());
}

function closeStory() {
  const drawer = document.querySelector("#story-drawer");
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
  activeDrawerStory = null;
  if (lastFocusedElement) lastFocusedElement.focus();
}

function renderMenuTable() {
  const term = document.querySelector("#menu-search").value.trim().toLowerCase();
  const category = document.querySelector("#menu-category").value;
  const filtered = menuItems.filter(([number, name, itemCategory]) => {
    const story = storyByNumber.get(number);
    return (category === "all" || itemCategory === category) && (!term || `${name} ${itemCategory} ${story.title}`.toLowerCase().includes(term));
  });
  document.querySelector("#menu-table-body").innerHTML = filtered.map(([number, name, itemCategory]) => `
    <tr><td>${number}</td><td>${escapeHtml(name)}</td><td>${escapeHtml(itemCategory)}</td><td>${escapeHtml(storyByNumber.get(number).title)}</td></tr>
  `).join("") || `<tr><td colspan="4">No menu listings match that search.</td></tr>`;
}

function renderIngredientPicker() {
  document.querySelector("#ingredient-picker").innerHTML = journeys.map((journey, index) => `
    <button class="ingredient-button ${index === 0 ? "active" : ""}" role="tab" aria-selected="${index === 0}" data-ingredient="${journey.id}">
      <span aria-hidden="true">${journey.icon}</span>${journey.name}
    </button>
  `).join("");
  renderJourney("wheat");
}

function renderJourney(id) {
  const journey = journeys.find((item) => item.id === id) || journeys[0];
  document.querySelectorAll(".ingredient-button").forEach((button) => {
    const active = button.dataset.ingredient === journey.id;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.querySelector("#journey-card").innerHTML = `
    <div class="journey-card-header">
      <div class="journey-title-wrap">
        <span aria-hidden="true">${journey.icon}</span>
        <div><h2>${escapeHtml(journey.name)}</h2><p>From origin to school meal</p></div>
      </div>
      <div class="journey-origin"><strong>Canadian connection</strong>${escapeHtml(journey.origin)}</div>
    </div>
    <div class="journey-steps">
      ${journey.steps.map(([icon, title, note]) => `
        <div class="journey-step"><span class="journey-step-icon" aria-hidden="true">${icon}</span><strong>${escapeHtml(title)}</strong><small>${escapeHtml(note)}</small></div>
      `).join("")}
    </div>
    <div class="journey-card-footer"><span aria-hidden="true">◎</span><strong>Source note:</strong> ${escapeHtml(journey.note)}</div>
  `;
}

function lessonPrompts(story, grade) {
  const before = grade === 1
    ? `Look at ${story.title.toLowerCase()}. What ingredients or colours can you spot?`
    : grade === 2
      ? `What do you think is the main ingredient in ${story.title.toLowerCase()}, and where might it begin?`
      : `What is the difference between the origin of this dish and the origin of its ingredients?`;
  const after = grade === 1
    ? `What is one new thing you learned about this food?`
    : story.question;
  return [
    ["Before eating", before],
    ["While eating", story.sensory],
    ["After eating", after]
  ];
}

function renderTeacherStoryOptions() {
  document.querySelector("#teacher-story").innerHTML = stories.map((story) => `<option value="${story.id}">${escapeHtml(story.title)}</option>`).join("");
  document.querySelector("#teacher-story").value = "menu-04";
  renderLesson();
}

function renderLesson() {
  const story = storyById.get(document.querySelector("#teacher-story").value) || stories[0];
  const grade = Number(document.querySelector("#teacher-grade").value);
  const prompts = lessonPrompts(story, grade);
  document.querySelector("#lesson-title").textContent = `${story.icon} ${story.title}`;
  document.querySelector("#lesson-steps").innerHTML = prompts.map(([label, prompt], index) => `
    <div class="lesson-step">
      <span class="lesson-step-number">0${index + 1}</span>
      <span>${escapeHtml(label)}</span>
      <p>${escapeHtml(prompt)}</p>
    </div>
  `).join("");
  document.querySelector("#lesson-fact").innerHTML = `<strong>Food fact:</strong> ${escapeHtml(story.fact)} · <strong>Level:</strong> ${gradeLabel(grade)}`;
}

function renderDiscussionDeck() {
  document.querySelector("#discussion-deck").innerHTML = discussionCards.map(([icon, label, question, colour], index) => `
    <article class="discussion-card ${index === discussionIndex ? "active" : ""}" style="--card-colour:${colour}" aria-hidden="${index !== discussionIndex}">
      <div class="discussion-card-icon" aria-hidden="true">${icon}</div>
      <div class="discussion-card-copy"><span>${escapeHtml(label)}</span><h3>${escapeHtml(question)}</h3></div>
    </article>
  `).join("");
  document.querySelector("#deck-count").textContent = `${discussionIndex + 1} / ${discussionCards.length}`;
}

function renderComicChapters(id = activeComicId) {
  activeComicId = id;
  const chapter = earlyStories.find((item) => item.id === id) || earlyStories[0];
  document.querySelector("#comic-chapter-list").innerHTML = earlyStories.map((item) => `
    <button class="comic-chapter-button ${item.id === chapter.id ? "active" : ""} ${storyStamps.has(item.id) ? "visited" : ""}" role="tab" aria-selected="${item.id === chapter.id}" data-comic="${item.id}">
      <span aria-hidden="true">${item.icon}</span>
      <span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.era)} · ${escapeHtml(item.place)}</small></span>
      <span class="chapter-stamp-mini" aria-label="${storyStamps.has(item.id) ? "Story stamp earned" : ""}" aria-hidden="${!storyStamps.has(item.id)}">${storyStamps.has(item.id) ? "★" : ""}</span>
    </button>
  `).join("");

  document.querySelector("#comic-chapter").dataset.bigNumber = chapter.number;
  document.querySelector("#comic-chapter").innerHTML = `
    <div class="chapter-topline">
      <span class="chapter-era">Chapter ${chapter.number} · ${escapeHtml(chapter.era)} · ${escapeHtml(chapter.place)}</span>
      <span class="truth-badge ${chapter.statusClass}">${escapeHtml(chapter.status)}</span>
    </div>
    <h3>${chapter.icon} ${escapeHtml(chapter.title)}</h3>
    <p class="chapter-story">${escapeHtml(chapter.story)}</p>
    <div class="chapter-clue"><span aria-hidden="true">🔎</span><div><strong>Historian's clue</strong><small>${escapeHtml(chapter.clue)}</small></div></div>
    <p class="chapter-question"><strong>Wonder:</strong> ${escapeHtml(chapter.question)}</p>
    <div class="comic-quiz" data-answer="${chapter.quiz.answer}">
      <span class="quiz-label">Quick clue challenge</span>
      <p>${escapeHtml(chapter.quiz.prompt)}</p>
      <div class="quiz-options">${chapter.quiz.options.map((option, index) => `<button data-quiz-option="${index}">${escapeHtml(option)}</button>`).join("")}</div>
      <div class="quiz-result" role="status" aria-live="polite"></div>
    </div>
    <div class="chapter-actions">
      <button class="button button-primary stamp-button ${storyStamps.has(chapter.id) ? "stamped" : ""}" data-stamp="${chapter.id}">${storyStamps.has(chapter.id) ? "★ Story stamp earned" : "I explored this story!"}</button>
      <a class="chapter-source-link" href="${chapter.url}" target="_blank" rel="noopener">Read the research source ↗</a>
    </div>
  `;
  renderStampScore();
}

function renderStampScore() {
  const score = document.querySelector("#stamp-score");
  if (score) score.textContent = `${storyStamps.size} / ${earlyStories.length}`;
}

function burstConfetti(button) {
  const rect = button.getBoundingClientRect();
  const colours = ["#e4a63e", "#a83f5b", "#6f9a67", "#d8624b", "#88aeba"];
  for (let index = 0; index < 22; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.setProperty("--x", `${rect.left + rect.width / 2}px`);
    piece.style.setProperty("--y", `${rect.top + rect.height / 2}px`);
    piece.style.setProperty("--dx", `${(Math.random() - 0.5) * 260}px`);
    piece.style.setProperty("--c", colours[index % colours.length]);
    document.body.append(piece);
    setTimeout(() => piece.remove(), 950);
  }
}

function renderPackage(key) {
  const data = packages[key];
  document.querySelectorAll("#package-tabs button").forEach((button) => {
    const active = button.dataset.package === key;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.querySelector("#package-detail").innerHTML = `
    <div><span class="package-number">Layer ${data.number}</span><h2>${escapeHtml(data.title)}</h2><p class="package-detail-lede">${escapeHtml(data.lede)}</p></div>
    <div class="package-items">${data.items.map(([icon, title, note]) => `<div class="package-item"><span aria-hidden="true">${icon}</span><div><strong>${escapeHtml(title)}</strong><small>${escapeHtml(note)}</small></div></div>`).join("")}</div>
  `;
}

function renderDeliverables() {
  document.querySelector("#deliverables-grid").innerHTML = deliverables.map((name, index) => `
    <article class="deliverable-card"><span>${String(index + 1).padStart(2, "0")}</span><strong>${escapeHtml(name)}</strong><small>Covered</small></article>
  `).join("");
}

function showView(view, options = {}) {
  const panel = document.querySelector(`[data-view-panel="${view}"]`);
  if (!panel) return;
  document.querySelectorAll("[data-view-panel]").forEach((item) => {
    const active = item === panel;
    item.hidden = !active;
    item.classList.toggle("active", active);
  });
  document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  const menu = document.querySelector("#mobile-menu");
  menu.hidden = true;
  document.querySelector(".mobile-menu-button").setAttribute("aria-expanded", "false");
  if (!options.preserveScroll) window.scrollTo({ top: 0, behavior: "smooth" });
  if (!options.skipHash) history.replaceState(null, "", view === "home" ? location.pathname : `#${view}`);
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    document.body.append(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2200);
}

async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(successMessage);
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.append(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    showToast(successMessage);
  }
}

function addFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand"><span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 44 44"><path d="M22 5c2.3 5.8 1.2 10.2-3.3 13.1C13 17.2 9 14.7 7 10.5c6.4-.6 11.4 1.2 15 5.5"/><path d="M22 5c-2.3 5.8-1.2 10.2 3.3 13.1C31 17.2 35 14.7 37 10.5c-6.4-.6-11.4 1.2-15 5.5"/><path d="M22 39c-1-9.5-.4-16.5 0-23"/></svg></span><span><strong>Shelly's Food Stories</strong><small>Food · Culture · Land · Community</small></span></div>
      <p>Educational concept for the St. James-Assiniboia School Division Universal Nutrition Program.</p>
      <p class="footer-note">Every meal has a story.<br />Content draft · Source review required before publication.</p>
    </div>`;
  document.body.insertBefore(footer, document.querySelector("script"));
}

function setupEvents() {
  document.addEventListener("click", (event) => {
    const nav = event.target.closest("[data-view]");
    if (nav) showView(nav.dataset.view);

    const go = event.target.closest("[data-go]");
    if (go) showView(go.dataset.go);

    const storyTrigger = event.target.closest("[data-story-id], .map-pin[data-story]");
    if (storyTrigger) openStory(storyTrigger.dataset.storyId || storyTrigger.dataset.story);

    if (event.target.closest("[data-close-drawer]")) closeStory();

    const teach = event.target.closest("[data-teach-story]");
    if (teach) {
      const storyId = teach.dataset.teachStory;
      closeStory();
      showView("teachers");
      document.querySelector("#teacher-story").value = storyId;
      renderLesson();
    }

    if (event.target.closest("#print-story")) window.print();

    const ingredient = event.target.closest("[data-ingredient]");
    if (ingredient) renderJourney(ingredient.dataset.ingredient);

    const comicTrigger = event.target.closest("[data-comic]");
    if (comicTrigger) {
      renderComicChapters(comicTrigger.dataset.comic);
      if (comicTrigger.closest(".comic-captions")) {
        document.querySelector(".comic-reader-section").scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    const quizOption = event.target.closest("[data-quiz-option]");
    if (quizOption) {
      const quiz = quizOption.closest(".comic-quiz");
      const chapter = earlyStories.find((item) => item.id === activeComicId);
      const selected = Number(quizOption.dataset.quizOption);
      quiz.querySelectorAll("[data-quiz-option]").forEach((button) => button.classList.remove("correct", "incorrect"));
      quizOption.classList.add(selected === chapter.quiz.answer ? "correct" : "incorrect");
      quiz.querySelector(".quiz-result").textContent = selected === chapter.quiz.answer ? chapter.quiz.explanation : "Good guess — look at the historian's clue and try again.";
    }

    const stampButton = event.target.closest("[data-stamp]");
    if (stampButton && !storyStamps.has(stampButton.dataset.stamp)) {
      storyStamps.add(stampButton.dataset.stamp);
      try { localStorage.setItem("shellys-story-stamps", JSON.stringify([...storyStamps])); } catch { /* Progress still works for this visit. */ }
      stampButton.classList.add("stamped");
      stampButton.textContent = "★ Story stamp earned";
      document.querySelector(`.comic-chapter-button[data-comic="${stampButton.dataset.stamp}"]`)?.classList.add("visited");
      renderStampScore();
      burstConfetti(stampButton);
      showToast("Story stamp added to your passport!");
    }

    const grade = event.target.closest("[data-grade]");
    if (grade) {
      currentGrade = Number(grade.dataset.grade);
      document.querySelectorAll("[data-grade]").forEach((button) => button.classList.toggle("active", button === grade));
      renderStories();
      if (activeDrawerStory) openStory(activeDrawerStory.id);
    }

    const filter = event.target.closest("[data-filter]");
    if (filter) {
      currentFilter = filter.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((button) => button.classList.toggle("active", button === filter));
      renderStories();
    }

    const packageButton = event.target.closest("[data-package]");
    if (packageButton) renderPackage(packageButton.dataset.package);
  });

  document.querySelector("#story-search").addEventListener("input", renderStories);
  document.querySelector("#menu-search").addEventListener("input", renderMenuTable);
  document.querySelector("#menu-category").addEventListener("change", renderMenuTable);
  document.querySelector("#teacher-story").addEventListener("change", renderLesson);
  document.querySelector("#teacher-grade").addEventListener("change", renderLesson);

  document.querySelector("#inventory-toggle").addEventListener("click", (event) => {
    const button = event.currentTarget;
    const panel = document.querySelector("#inventory-panel");
    const open = panel.hidden;
    panel.hidden = !open;
    button.setAttribute("aria-expanded", String(open));
    button.innerHTML = open ? `Hide full inventory <span>−</span>` : `View full inventory <span>+</span>`;
  });

  document.querySelector("#mobile-menu-button, .mobile-menu-button")?.addEventListener("click", (event) => {
    const button = event.currentTarget;
    const menu = document.querySelector("#mobile-menu");
    const open = menu.hidden;
    menu.hidden = !open;
    button.setAttribute("aria-expanded", String(open));
  });

  document.querySelector("#random-story-button").addEventListener("click", () => {
    const story = stories[Math.floor(Math.random() * stories.length)];
    openStory(story.id);
  });

  document.querySelector("#deck-prev").addEventListener("click", () => {
    discussionIndex = (discussionIndex - 1 + discussionCards.length) % discussionCards.length;
    renderDiscussionDeck();
  });

  document.querySelector("#deck-next").addEventListener("click", () => {
    discussionIndex = (discussionIndex + 1) % discussionCards.length;
    renderDiscussionDeck();
  });

  document.querySelector("#copy-prompts").addEventListener("click", () => {
    const story = storyById.get(document.querySelector("#teacher-story").value);
    const grade = Number(document.querySelector("#teacher-grade").value);
    const prompts = lessonPrompts(story, grade);
    const text = `SHELLY'S FOOD STORIES — ${story.title}\n${gradeLabel(grade)} · 2–5 minute activity\n\n${prompts.map(([label, prompt]) => `${label}: ${prompt}`).join("\n\n")}\n\nFood fact: ${story.fact}`;
    copyText(text, "Lesson prompts copied");
  });

  document.querySelector("#print-lesson").addEventListener("click", () => window.print());

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.querySelector("#story-drawer").classList.contains("open")) closeStory();
  });
}

function init() {
  renderFeaturedStories();
  renderStories();
  renderMenuTable();
  renderIngredientPicker();
  renderTeacherStoryOptions();
  renderDiscussionDeck();
  renderComicChapters();
  renderPackage("essential");
  renderDeliverables();
  if (!document.querySelector("footer")) addFooter();
  setupEvents();

  const requestedView = location.hash.replace("#", "");
  if (["stories", "comics", "journeys", "teachers", "plan"].includes(requestedView)) {
    showView(requestedView, { skipHash: true, preserveScroll: true });
  }
}

init();
