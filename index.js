const mongoose = require("mongoose");

// Import Recipe model
const Recipe = require("./models/Recipe");

// Import data
const data = require("./data");

const MONGODB_URI = "mongodb://localhost/recipeApp";

// Connection to the database "recipeApp"
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to Mongo!");
  });

Recipe.create({
    "title": "Chocolate Chip Cookies",
    "level": "Amateur Chef",
    "ingredients": [
      "1/2 cup light brown sugar",
      "1 large egg",
      "2 tablespoons milk",
      "1 1/4 teaspoons vanilla extract",
      "2 cups semisweet chocolate chips"
    ],
    "cuisine": "French",
    "dishType": "Dish",
    "image": "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
    "duration": 30,
    "creator": "Chef Jennifer"
  })
  .then(item => {
    console.log(item.title);
  })

  .then(titles => {
    console.log("created many recipes");
    return Recipe.insertMany(data);
  })

  .then(item => {
    console.log('updated weirdo recipe');
    return Recipe.updateOne({
      "title": 'Rigatoni alla Genovese'
    }, {
      "duration": 100
    });
  })

  .then(item => {
    console.log('deleted delicious cake');
    return Recipe.deleteOne({
      "title": 'Carrot Cake'
    });
  })

  .catch(err => {
    console.error("Error creating recipe", err);
  })

  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

mongoose.connection.close();