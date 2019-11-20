var Product = require("../models/product");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/online-shop", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});


// mongoose.connect(`mongodb+srv://thanhtuan090398:Tuan09031998@cluster0-jodk9.mongodb.net/shopping?retryWrites=true&w=majority`,{
//   useUnifiedTopology: true,
//   useNewUrlParser: true
// })

var products = [
  new Product({
    name: "Arbiter Vildred",
    image:
      "https://epic7x.com/wp-content/uploads/2019/01/arbiter-vildred-full.png",
    category: "Thief",
    description:
      "Arbiter Vildred is now very strong due to the fact that he has a free revive...",
    price: 937
  }),
  new Product({
    name: "Martial Artist Ken",
    image: "https://epic7x.com/wp-content/uploads/2019/01/ken-full-1.png",
    category: "Warrior",
    description:
      "This guy is one of the best characters in the game due to the way his...",
    price: 856
  }),
  new Product({
    name: "Dark Corvus",
    image: "https://epic7x.com/wp-content/uploads/2019/01/dark-corvus.png",
    category: "Warrior",
    description:
      "Dark Corvus is a tanky warrior that can use a strong single target...",
    price: 432
  }),
  new Product({
    name:"Fallen Cecilia",
    image:
      "https://epic7x.com/wp-content/uploads/2019/06/fallen-cecilia-full.png",
    category: "Tank",
    description:
      "Fallen Cecilia will be the latest addition for the new ML nat 5...",
    price: 526
  }),
  new Product({
    name: "Apocalypse Ravi",
    image:
      "https://epic7x.com/wp-content/uploads/2019/07/apoc-ravi-full.png",
    category: "Warrior",
    description:
      "ML Ravi’s strength lies in offense and not much on defense...",
    price: 395
  }),
  new Product({
    name:"Specter Tenebria", 
    image:
      "https://epic7x.com/wp-content/uploads/2019/01/specter-tenebria-full.png",
    category: "Mage",
    description:
      "With the new overhaul, she has turned from mediocre to very...",
    price: 421
  }),
  


  new Product({
    name:"Specimen Sez",
    image:
      "https://epic7x.com/wp-content/uploads/2019/01/specimen-full.png",
    category: "Thief",
    description:
      "With the new buffs, he becomes a terror, if the enemy gets stunned...",
    price: 2261
  }),
  new Product({
    name:"Desert Jewel Basar",
    image: "https://epic7x.com/wp-content/uploads/2019/09/desert-jewel-basar.png",
    category: "SoulWaver",
    description:
      "ML Basar is a bit of a niche character currently and...",
    price: 238
  }),
  new Product({
    name:"Baal Sage And Sezan",
    image: "https://epic7x.com/wp-content/uploads/2019/04/sage-baal-and-sezan.png",
    category: "Mage",
    description:
      "Has one of the most broken skill 2’s in the game...",
    price: 183
  }),
  new Product({
    name:"Judge Kise",
    image:
      "https://epic7x.com/wp-content/uploads/2019/01/judge-kise.png",
    category: "Warrior",
    description:
      "She now has AoE dispel on S2 and higher chance to reduce...",
    price: 812
  }),
  new Product({
    name:"Maid Chloe",
    image:
      "https://epic7x.com/wp-content/uploads/2019/01/maid-chloe.png",
    category: "SoulWaver",
    description:
      "Maid Chloe is decent as her Revive+Attack is an offensive kit...",
    price: 675
  }),
  new Product({
    name:"Ruele Of Light",
    image:
      "https://epic7x.com/wp-content/uploads/2019/01/ruele.png",
    category: "SoulWaver",
    description:
      "Ruele of Light, a great character that ensures your teammates...",
    price: 447
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
