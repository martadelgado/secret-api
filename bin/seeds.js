const mongoose     = require('mongoose');
const User         = require('../models/user');
const Secret         = require('../models/secret');
const Picture         = require('../models/picture');

mongoose.connect('mongodb://localhost/secret-place');
const bcrypt        = require("bcrypt");
const bcryptSalt    = 10;


var salt     = bcrypt.genSaltSync(bcryptSalt);


// const users = [
//     {
//     username      : "Loop@fruit.com",
//     password      : bcrypt.hashSync("123", salt),
//     name          : "Fruit",
//     travellerType : "Nomad",
//     description   : "I have been travelling from longer than I could walk.",
//     profilePic    : null,
//     isDisclaimer  : true,
//     role          : 'User'
//
//   },
//   {
//   username      : "p@p.com",
//   password      : bcrypt.hashSync("123", salt),
//   name          : "Prissy",
//   travellerType : "Lujo",
//   description   : "I never go anywhere untattended by a hoard of helpers. But i can keep a secret",
//   profilePic    : null,
//   isDisclaimer  : true,
//   role          : 'Admin'
//
//   },
//   {
//   username      : "dd@fruit.com",
//   password      : bcrypt.hashSync("abc", salt),
//   name          : "Dave",
//   travellerType : "Budget",
//   description   : "I travelled across asia with nothing more than $4 in my pocket and flip-flops.",
//   profilePic    : "https://s-media-cache-ak0.pinimg.com/736x/20/3d/59/203d59ade6a9d134cbe8ec8d045034ff.jpg",
//   isDisclaimer  : true,
//   role          : 'User'
//
//   },
//   {
//   username      : "tt@tee.com",
//   password      : bcrypt.hashSync("123", salt),
//   name          : "Tahira",
//   travellerType : "Budget",
//   description   : "All travel is good travel.",
//   profilePic    : null,
//   isDisclaimer  : true,
//   role          : 'User'
//
//   },
// ];

const secrets = [
  {
  where: "Chefchaouen, Morocco",
  location: "Medina",
  what: "Hotel Dar Dadicilef",
  description: "This is the best place to stay if you're going to spend a few days in Chefchaouen. Free breakfast along with one of the best views of the city from their terrace.",
  tips: "This place is very hard to find online. If you can get access to their phone number, call them directly to book. Also, their address isn't on google maps so you'll need to call and ask for directions if it's your first time.",
  when: "September 2016",
  user: "58c2e8517b531c08d4eb2f60",
  image: "https://static.pexels.com/photos/238622/pexels-photo-238622.jpeg"
  },


{
where: "Getaria, Spain",
location: "Monte de San Anton",
what: "Viewpoint",
description: "This short little hike up the San Anton mountain will without a doubt be worth the amazing views you get at the end. Located right next to the port, the top of the mountain gets you a 360 view surrounded by the sea and the town of Getaria. While the town of Getaria does get a good bit of tourists in peak summer time (while we were there), we didn't come across any tourists on this hike, just a few friendly locals as it's a good spot to bring dogs.",
tips: "The path starts off as a road but eventually turns to gravel and dirt, so make sure you bring comfortable shoes!",
when: "July 2016",
user: "58bed89570ba4033c16c5ef1",
image: "https://static.pexels.com/photos/227417/pexels-photo-227417.jpeg"
},

{
where: "New Orleans, USA",
location: "Port of Call",
what: "Place to Eat",
description: "Amazing little restaurant located in New Orleans, Louisiana. They have the best hamburger and baked potato in the city. While you can find hurricanes just about anywhere, only Port of Call has the monsoon...make sure you get one!",
tips: "There could be a long wait during dinner time, make sure you get there early or be prepared to wait!",
when: "December 2016",
user: "58bed89570ba4033c16c5ef0",
image: " "
},

{
where: "Lisbon, Portugal",
location: "Casa de Fado",
what: "Place to Eat",
description: "While I haven't seen them all, this has to be the best Fado house in Lisbon. Fado restaurants are popping up all over Lisbon, but this one has been around for a while and has a very authentic feel. Recommended to me by a friend from Lisbon, this one is strictly for locals and it's unusual to find a tourist here. Although they only had a few items on their menu, it was made up by the quality. The live Fado music is truly one of a kind here and it's a magical experience you need to see.",
tips: "This restaurant is located in a sketchier corner of Alfama so beware at night! I've never been robbed going to this restaurant but I have heard that it happens from time to time.",
when: "February 2014",
user: "58bed89570ba4033c16c5ef0",
image: " "
},

{
where: "San Sebastian, Spain",
location: "Rekondo",
what: "Place to Eat",
description: "Hidden in the mountains, this \"sideria\" is truly one of a kind. It has an amazing view from the terrace and you get incredible views to go along with your meal. If you simply want a glass of wine and enjoy the sunset, they have a great bar that overlooks their orchards. Great place to go with kids as well!",
tips: "This place is hard to reach so you can only get there by car.",
when: "June 2015",
user: "58bed89570ba4033c16c5ef0",
image: " "
},

{
where: "Madrid, Spain",
location: "Hombres Gin",
what: "Place to Drink",
description: "Great little bar with the best cocktails in Madrid! They only place 80's Spanish music so be prepared for a flashback!",
tips: "Thursdays are the best night to go. Avoid Saturdays as they get super packed!",
when: "January 2017",
user: "58bed89570ba4033c16c5ef0",
image: " "
},

{
where: "Barcelona, Spain",
location: "Koku Kitchen",
what: "Place to Eat",
description: "Nice place to eat Japanese food in Barcelona. It's a small restaurant so it gets packed easily. On Fridays and Saturdays you can expect wait but it's well worth it!",
tips: "There are two floors, the top floor is buns and the bottom floor is ramen. There are two different kitchens, however so you can only order from each floors respective kitchen. Make sure you check the menu before you sit.",
when: "March 2017",
user: "58bed89570ba4033c16c5ef0",
image: " "
},

{
where: "San Diego, USA",
location: "El Dorado Bar",
what: "Place to Drink",
description: "Cool little dive bar in the North Park neighborhood in San Diego. Great cocktails, cool music and nice atmosphere. They also have a patio area in the back so you can enjoy the terrific San Diego weather while you drink.",
tips: "Even though the bar closes at 2am, they usually do last call at 1:30am.",
when: "June 2016",
user: "58bed89570ba4033c16c5ef0",
image: " "
},

{
where: "California, USA",
location: "Bodega Bay",
what: "Activity",
description: "This outdoor picnic area sells raw oysters on the half shell so you can buy the by the sack and enjoy them outside. They are as fresh as they come since they catch the oysters right there in Bodega Bay. You can rent out the tools to shuck from the oyster farm or bring your own. They also sell alcohol but you can bring it yourself if you'd like. Wonderful place to enjoy oysters outdoors and get a great view of the bay!",
tips: "This place gets packed on Saturdays and Sundays and they have limited seating so be sure to get there by 10am or expect a wait of at least 2 hours. Everything is outdoors so not a good place to go if it's raining.",
when: "May 2015",
user: "58bed89570ba4033c16c5ef0",
image: " "
},

{
where: "New York, USA",
location: "DUMBO, Brooklyn",
what: "Activity",
description: "Just on the other side of Manhatten in Brooklyn, there's a little green area in Dumbo where you get a great view of the World Trade Center from across the river. It's at the base of the Brooklyn and Manhattan bridges overlooking the water.",
tips: "The neighborhood is a bit quiet so it's hard to find a place to eat or drink outside of work hours.",
when: "January 2016",
user: "58bed89570ba4033c16c5ef0",
image: " "
},

{
where: "Austin, USA",
location: "Dos Amigos Taco Truck",
what: "Place to Eat",
description: "Some of the best tacos you'll find in Texas. They have authentic Oaxacan tacos and little else on their menu.",
tips: "It's a taco truck so the location varies every day. Check their twitter (@dosamigostacotruck) to find out where they are that day.",
when: "December 2016",
user: "58bed89570ba4033c16c5ef0",
image: " "
},

  {
  where: "New Orleans, USA",
  location: "Port of Call",
  what: "Restaurant",
  description: "Amazing little restaurant located in New Orleans, Louisiana. They have the best hamburger and baked potato in the city. While you can find hurricanes just about anywhere, only Port of Call has the monsoon...make sure you get one!",
  tips: "There could be a long wait during dinner time, make sure you get there early or be prepared to wait!",
  when: "December 2016",
  user: "58c2e8517b531c08d4eb2f60",
  image: "http://www.brazilcarnival.com.br/upload_images/Example_Float_Brazil_Carnival_by_Alexandre_Vidal.jpg"
  },
  {
  where: "Bogota, Colombia",
  location: "Chicó norte",
  what: "Hotel Click-Clack",
  description: "Awesome. A really cool hotel. A giant plant wall greets as you walk in. The cocktail bar in the basement has innovative literary-themed cocktails. The place to be and be seen.",
  tips: "Don't skip the free breakfast.",
  when: "January 2016",
  user: "58c2e8517b531c08d4eb2f5f",
  image: "https://exp.cdn-hotels.com/hotels/7000000/6370000/6361800/6361784/6361784_112_z.jpg"
  },

  {
  where: "Montevideo, Uruguay",
  location: "",
  what: "View",
  description: "Its worth while hiring a scooter when you arrive here. They are easily available from the beach. Take the long open road out following the coast-line north of Montevideo to view the Darwin relics and feel part of the motorcycle-diaries.",
  tips: "Mosquito repellant is a must for even a short trip to the beach.",
  when: "December 2010",
  user: "58c2e8517b531c08d4eb2f5d",
  image: "https://static.pexels.com/photos/9537/sea-beach-sand-sun.jpg"
  },

  {
  where: "Chiang Mai, Thailand",
  location: "Chiang Mai",
  what: "Acitvity",
  description: "Massage Center by Ex-Prisoners is a massage parlour where all the massueses are ex-cons. Its really fun and they do a great job. ",
  tips: "There could be a long wait during dinner time, make sure you get there early or be prepared to wait!",
  when: "December 2016",
  user: "58c2e8517b531c08d4eb2f5d",
  image: "http://www.chiangmailocator.com/design/photosbiz/chiang-mai-khunka-massage-145.jpg"
  },
  {
  where: "Koh Lanta, Thailand",
  location: "Koh Lanta",
  what: "Accommodation",
  description: "I found the KLazy House by accident when I arrived on Koh Lanta with no place to stay. You take a tuc-tuc from the boat and he'll have to drop you off at the top of a dirt track about 15min drive from the boat. Trust me you need to walk down the path. The first accommodation you'll see if the Klazy House on the right. Its unmissable with all the hand crafted wood features from reception desk, bar and huts. There's a shared hut and private huts but all super cheap. Ko, the owner, also has chicken running around and it super welcoming. The huts are about 5mins from the beach. ",
  tips: "The tuc-tuc ride should be no more than 20baht. Hire a scooter to see the rest of the island. Take a padlock for valuables as security is non-existent.",
  when: "February 2013",
  user: "58c2e8517b531c08d4eb2f60",
  image: "http://www.chiangmailocator.com/design/photosbiz/chiang-mai-khunka-massage-145.jpg"
},
{
where: "Thailand",
location: "Bangkok",
what: "Eat",
description: "Coconut ice-cream that is quite easily the best thing I've put in my mouth. Ever! If you take the Golden Temple tour, outside the gates when you exit there is a little cafe which sells smooth coconut ice-cream with toppings. My favorite is topped with condensed milk and sweet red beans.",
when: "February 2013",
user: "58c2e8517b531c08d4eb2f60",
image: "http://images.budgettravel.com/thai-coconut-ice-cream-462015-175519_panoramic.jpeg"
}
];


// const pictures = [
//   {
//     pic_path: '/uploads/1489009898799.JPG',
//     pic_name: "luft",
//   	user: "58bed614f23e9c706c604fbc",
//     profile: true
//   }
// ];



  //     console.log(user.username);
  //   });
  //   mongoose.connection.close();
  // });

//
// User.create(users, (err, docs)=> {
//   if (err){
//     throw(err);}
//
//     docs.forEach( (user)=>{
//
//       console.log(user.username);
//     });
//     mongoose.connection.close();
//   });


Secret.create(secrets, (err, posts)=> {
  if (err){
    throw(err);
  }
    posts.forEach( (secret)=>{
      console.log(secret.where);
    });
    mongoose.connection.close();
});

// Picture.create(pictures, (err, pics)=> {
//   if (err){
//     throw(err);
//   }
//     pics.forEach( (pic)=>{
//       console.log(pic.pic_name);
//     });
//     mongoose.connection.close();
// });
