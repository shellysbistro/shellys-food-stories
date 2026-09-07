const stories = [
  {
    id: "oatmeal",
    title: "Oats & Oatmeal",
    kicker: "From Prairie field to breakfast bowl",
    icon: "🥣",
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

stories.forEach((story) => {
  story.count = menuItems.filter((item) => item[3] === story.id).length;
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
  "Story grouping", "Poster series", "Pamphlet", "Food fact cards", "Educational menu insert",
  "School-order emails", "30-second videos", "60-second videos", "Classroom video concepts", "Digital signage",
  "Teacher resource sheets", "Morning announcements", "QR food library", "World food map", "Farm-to-school graphics",
  "Student food passport", "Discussion cards", "One Ingredient series", "Indigenous food story", "Recommended package"
];

const storyById = new Map(stories.map((story) => [story.id, story]));
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

function renderFeaturedStories() {
  const featured = [storyById.get("bannock"), storyById.get("poutine"), storyById.get("caesar")];
  document.querySelector("#featured-stories").innerHTML = featured.map((story) => `
    <button class="featured-story" data-story-id="${story.id}" aria-label="Open ${escapeHtml(story.title)} food story">
      <span class="featured-arrow" aria-hidden="true">↗</span>
      <span class="featured-story-content">
        <span class="featured-icon" aria-hidden="true">${story.icon}</span>
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
      <span class="story-card-top">
        <span class="story-card-icon" aria-hidden="true">${story.icon}</span>
        <span class="story-card-region"><span>Connection</span><strong>${escapeHtml(story.region)}</strong></span>
      </span>
      <h3>${escapeHtml(story.title)}</h3>
      <p>${escapeHtml(story.grade[currentGrade])}</p>
      <span class="story-card-footer">
        <span class="confidence-badge ${story.confidence.toLowerCase().replaceAll(" ", "-")}">${escapeHtml(story.confidence)}</span>
        <span class="story-count-badge">${story.count} menu ${story.count === 1 ? "listing" : "listings"}</span>
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
          <p>${story.sources.map(escapeHtml).join(" · ")}</p>
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
  const filtered = menuItems.filter(([, name, itemCategory, storyId]) => {
    const story = storyById.get(storyId);
    return (category === "all" || itemCategory === category) && (!term || `${name} ${itemCategory} ${story.title}`.toLowerCase().includes(term));
  });
  document.querySelector("#menu-table-body").innerHTML = filtered.map(([number, name, itemCategory, storyId]) => `
    <tr><td>${number}</td><td>${escapeHtml(name)}</td><td>${escapeHtml(itemCategory)}</td><td>${escapeHtml(storyById.get(storyId).title)}</td></tr>
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
  document.querySelector("#teacher-story").value = "bannock";
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
