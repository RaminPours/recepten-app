const recipes = [
// India
{
id: 1,
title: "Butter Chicken",
country: "India",
image: "https://miljuschka.nl/wp-content/uploads/2025/08/Indiase-butter-chicken.jpg",
ingredients: ["Kip", "Boter", "Tomatenpuree", "Garam masala", "Room"],
steps: "Bak kip met kruiden, voeg tomatensaus en room toe. Laat sudderen. Serveer met rijst."
},
{
id: 2,
title: "Chana Masala",
country: "India",
image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop",
ingredients: ["Kikkererwten", "Ui", "Knoflook", "Gember", "Tomaat", "Kruiden"],
steps: "Fruit ui/knoflook, voeg kruiden en tomaat toe, laat kikkererwten mee pruttelen."
},
// Mexico
{
id: 3,
title: "Tacos",
country: "Mexico",
image: "https://gran.luchito.com/wp-content/uploads/2024/09/Landscape-Hero-Beef-tacos.jpg",
ingredients: ["Tortilla", "Gehakt", "Sla", "Tomaat", "Kaas"],
steps: "Bak gehakt met kruiden, vul tortilla's, voeg toppings toe."
},
{
id: 4,
title: "Guacamole",
country: "Mexico",
image: "https://www.francoislambert.one/cdn/shop/articles/authentic_guacamole.webp?v=1715355125",
ingredients: ["Avocado", "Limoen", "Ui", "Koriander", "Zout"],
steps: "Prak avocado, meng met limoensap, gesnipperde ui en koriander."
},
// Italië
{
id: 5,
title: "Pizza Margherita",
country: "Italië",
image: "https://i0.wp.com/cookingitalians.com/wp-content/uploads/2024/11/Margherita-Pizza.jpg?fit=1344%2C768&ssl=1",
ingredients: ["Pizzadeeg", "Tomatensaus", "Mozzarella", "Basilicum"],
steps: "Beleg deeg met saus en mozzarella, bak heet af, garneer met basilicum."
},
{
id: 6,
title: "Pasta Carbonara",
country: "Italië",
image: "https://static.ah.nl/static/recepten/img_RAM_PRD122191_1224x900_JPG.jpg",
ingredients: ["Spaghetti", "Eieren", "Pecorino", "Guanciale", "Peper"],
steps: "Bak guanciale, meng eieren/kaas, schep met hete pasta zonder te stollen."
},
{
    // India
    id: 7,
    title: "Tandoori Chicken",
    country: "India",
    image: "https://hips.hearstapps.com/hmg-prod/images/tandoori-chicken2-1672868378.jpg?crop=1xw:0.9997826086956522xh;center,top",
    ingredients: ["Kip", "garam masala", "cayenne peper", "kaneel poeder", "komijn poeder", "rijst", "ui"],
    steps: "Alle ingredienten in een kom en mixen, kook rijst gaar, griekse yoghurt aan toevoegen, etenstijd!"
},
{
    // India
    id: 8,
    title: "Biryani",
    country: "India",
    image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/F2CD6DF4-24AD-40A9-BAFB-469685926926/Derivates/BD8F723D-3FA5-41F6-9DCF-CD28D81F0F36.jpg",
    ingredients: ["Vlees", "Kardemom", "Komijn", "Ui", "Tomaten", "Chilipeper", "Gember", "Knoflook & Koriander"],
    steps: "Rasp gember en knoflook in een kom, roer yoghurt, tomatenpuree, garam masala en de rest van de ingredienten in een kom, zet rijst, zet kip in de oven, serveer met rijst!"
},
{
    // Mexico
    id: 9,
    title: "Enchiladas",
    country: "Mexico",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2024/02/BeefEnchiladas-68c9381.jpg?quality=90&webp=true&resize=440,400",
    ingredients: ["Tomatenblokjes", "Knoflook", "1 eetlepel suiker", "Ui", "Cacaopoeder", "Paprikapoeder", "Rundergehakt", "Tortillawraps"],
    steps: "Verwarm de oven, tomatenblokjes in steelpan, voeg de ingredienten toe, voeg gehakt toe, zet geheel in de oven voor 10 minuten, etenstijd!"
},
{
    // Italië
    id: 10,
    title: "Tagliatelle alla Bolognese",
    country: "Italië",
    image: "https://rms.condenast.it/rms/public/5fa/28a/e17/thumb_6648_1200_670_0_0_auto.jpg",
    ingredients: ["Gehakt", "Tagliatelle", "2 wortels", "Zout & Peper", "Selderij", "Ui", "Rode Wijn"],
    steps: "Kruid het gehakt goed met zout & peper, snijd de pancetta in kleine reepjes en voeg dit ook toe (tomatenpuree en al erin), kook ondertussen de tagliatelle met de saus, etenstijd!"
},
{
    // Italië
    id: 11,
    title: "Tiramisu",
    country: "Italië",
    image: "https://www.leukerecepten.nl/app/uploads/2019/12/tiramisu-klassiek-1.jpg",
    ingredients: ["3 eieren", "40 gr suiker", "250 gr mascarpone", "20 lange vingers", "1 kopje espresso", "Cacaopoeder"],
    steps: "Splits de eieren, mix eigelen met de suiker, voeg de mascarpone toe, klop daarna de eiwitten helemaal stijf, roer de espresso in een kommetje, doop de lange vingers in, strooi wat cacao over en zet in de koelkast."
},
{
    // Mexico
    id: 12,
    title: "Huevos rancheros",
    country: "Mexico",
    image: "https://www.leukerecepten.nl/app/uploads/2024/11/huevos-rancheros.jpg",
    ingredients: ["4 grote tortilla wraps", "4 eieren", "2 avocado's", "Knoflook", "Ui", "Zwarte bonen", "Tomatenblokjes", "Komijn", "Paprikapoeder", "Chili"],
    steps: "verhit koekenpan, fruit ui en knoflook, voeg tomatenblokjes en de rest toe, laat zwarte bonen uitlekken en roer ze door de saus,Bak ondertussen de eieren in een andere pan aan 1 zijde tot de eierdooier nog iets zacht is, of langer als je de dooier wat steviger wilt. Verwarm de wraps kort in een droge koekenpan of magnetron. Etenstijd"
},
{   
    // Nederland
    id: 13,
    title: "Friet Kapsalon",
    country: "Nederland",
    image: "https://static.ah.nl/static/recepten/img_092923_1224x900_JPG.jpg",
    ingredients: ["Friet", "Kaas", "Vlees", "Sla", "Sausje"],
    steps: "Bak friet, gooi er vlees en kaas. Enjoy"
},

];


export default recipes;