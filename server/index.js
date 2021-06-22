const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortune = ["A hunch is creativity trying to tell you something.", "A person is never too old to learn.", "A new perspective will come with the new year.", "All will go well with your new project", "Adventure can be real happiness."
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
  
});













app.get("/api/picture", (req, res) => {

  const picture = ["https://i.redd.it/vnhkpqanvhk41.jpg", "https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-63.png", "https://inteng-storage.s3.amazonaws.com/img/iea/yrwQvLJbON/sizes/programmer-memes_resize_md.jpg", "https://i.pinimg.com/236x/c9/9d/c6/c99dc6486eee7fc43ed702f85d1acd9d--programming-humor-memes.jpg", "https://miro.medium.com/max/1920/0*z1mm6izqSeDiKukb", "https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png", "https://codinginfinite.com/wp-content/uploads/2019/05/maxresdefault-1.jpg"]

  // choose random picture
  let randomIndex = Math.floor(Math.random() * picture.length);
  let randomPicture = picture[randomIndex];

  res.status(200).send(randomPicture);  
});

app.get("/api/gif", (req, res) => {

  const gif = ["https://media.giphy.com/media/sLeUxBaoMsePeIoLvv/giphy.gif", "https://media.giphy.com/media/3ohs4jnnmnxfkYiGic/giphy.gif", "https://media0.giphy.com/media/LmNwrBhejkK9EFP504/200.gif", "https://media0.giphy.com/media/7FrOU9tPbgAZtxV5mb/giphy-downsized-large.gif", "https://i2.wp.com/allhtaccess.info/wp-content/uploads/2018/03/programming.gif?fit=1281%2C716&ssl=1", "https://media4.giphy.com/media/13HgwGsXF0aiGY/giphy.gif"]

  // choose random gif
  let randomIndex = Math.floor(Math.random() * gif.length);
  let randomGif = gif[randomIndex];

  res.status(200).send(randomGif);  
});






app.listen(4000, () => console.log("Server running on 4000"));
