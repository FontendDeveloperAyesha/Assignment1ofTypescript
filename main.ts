// Install Node.js, TypeScript and VS Code on your computer.
// xxxxxxxxxxxxxxxxxxx

// Task 02
// var userName : string = "Aisha";
// console.log("HEy"+userName+"Would you like to learn some python today?");
// // xxxxxxxxxxxxxxxxxxx
// // Task 03
// var xyzPerson : string = "Riyaz";
// const uppercaseString = xyzPerson.toUpperCase();
// console.log(uppercaseString);
// const lower = xyzPerson.toLowerCase();
// console.log(lower);

// function toTitleCase(input: string) {
//     return input.toLowerCase().replace(/(?:^|\s)\w/g, (match) => {
//       return match.toUpperCase();
//     });
//   }
//   const myString = "riyaz aly";
// const titleCaseString = toTitleCase(myString);

// console.log(titleCaseString);

// // XXXXXXXXXXXXXXXXXXXXXX
// // Task 04
// let favPoet : string = "Albert Einstein" ;
// console.log("Once ".concat(favPoet).concat(" said ").concat("A person who never made a mistake never tried anything new"));
// // //xxxxxxxxxxxxxxxxxxxxx

// // Task 05
// let fav_Person : string = "Zig Ziglar";
// let fav_quote : string = "People often say motivation doesnot last. Well, neither does bathing-That's  why we recommend it daily "
// let codeConcate : string = "Once ".concat(fav_Person).concat(" said ").concat(fav_quote);
// console.log(codeConcate);
// // xxxxxxxxxxxxxx

// // Task 06
// let name: string = "\t John Doe\n";
// let name10 : string = "Jhon Doe"
// console.log("Name with whitespace:");
// console.log(name);
// console.log("Stripped name:");
// console.log(name10);
// // xxxxxxxxxxxxxxxxxxxxxxxxx
// // Task 07      // Task 08
// console.log(5 + 3);
// console.log(9-1);
// console.log(2*4);
// console.log(64/8);

// // xxxxxxxxxxxxxxxxxxxxxxxx
// //  Task 09
// let fav_number : number = 7;
// let full_code : string = "My Favorite number is "+fav_number;
// console.log(full_code); 
// // xxxxxxxxxxxxxxxxxxxxxxxxx

// // Task 10
// var num1 : number = 14 ;
// var num2 : number = 11 ;
// var add : number = num1 + num2           // Addition
// console.log(add);
// // // xxxxxxxxxxxxxxxx

// // Task 11
// var name1 : string[] = ["Aisha " , "Riyaz ", "Riza ", "Risha"];
// for(let name of name1){
//     console.log(name)
// }
// // xxxxxxxxxxxxxxx

// // Task 12
// var name2 :string[] = ["Aisha ", "Riyaz"];
// for(let name2a of name2){
//     console.log(`Hello, ${name2a}! How are you today?`)
// }

// // xxxxxxxxxxxxx
 
// // Task 13
// let favTranspot : string[] = ["Bullet ", "Honda " , "Rover ", "Mercedes " ];
// console.log(`I would like to own ${favTranspot[0]} Bike`);
// console.log(`I would like to own ${favTranspot[1]} car`);
// console.log(`I would like to own ${favTranspot[2]} car`);
// console.log(`I would like to own ${favTranspot[3]} car`);

// //  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// // Task 14
// const guestList: string[] = ["Aisha", "Risha ", "celina ", "Neha "];

// for (const guest of guestList) {
//   console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of engaging conversation and delicious food.`);
// }

// // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// // Task 15 
// const guestList2: string[] = ["Aisha", "Risha", "Celina","Neha"];

// const guestWhoCantMakeIt1 = guestList2[2]; 

// console.log(`${guestWhoCantMakeIt1} can't make it to the dinner.`);

// guestList2[2] = "Areesha"; 

// for (const guest of guestList2) {
//   console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of engaging conversation and delicious food.`);
// }

// // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// // TAsk 16
// const guestList4: string[] = ["Aisha", "Risha", "Celina","Neha"];
// const guestWhoCantMakeIt2 = guestList4[2]; 

//  console.log(`${guestWhoCantMakeIt2} can't make it to the dinner.`);

// guestList4[2] = "Areesha";
// console.log("It just Amazing that we found a bogger table dinner");
// guestList4.unshift("Nisha");
// guestList4.splice(4,3 , "Nisha");
// guestList4.push("Anzal");
// for(let names4 of guestList4){
//     console.log(`Dear ${names4}, you are cordially invited to dinner. Please join us for an evening of engaging conversation and delicious food.`)
// }
// // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// // Tasl 17
// const guestList5: string[] = ["Aisha", "Risha", "Celina","Neha"];
// console.log("Ops ! we are extremely sorry because the dinner table won't be arrive on time we can only invite two people for the dinner ");
// while (guestList5.length >= 2) {
//     let remove = guestList5.pop()
//     for(let names5 of guestList5){
//             console.log(`Dear ${names5}, you are cordially invited to dinner. Please join us for an evening of engaging conversation and delicious food.`)
//         }
    
// }
// guestList5.length = 0;
// console.log(`The empty list  = 0 ${guestList5}`);


// //  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// // Task 18
// let favPlaces :string[] = ["Suadia Arabia ", "Dubai ", "Bhutan ", "Australlia ","South Korea "];
// console.log(favPlaces);
// let alphabet = favPlaces.sort();
// console.log(alphabet);

// let reverse = favPlaces.reverse();
// console.log(favPlaces);
// console.log(reverse);
// favPlaces.reverse();
// console.log(favPlaces);
// favPlaces.reverse();
// console.log(favPlaces);
// favPlaces.sort();
// console.log(favPlaces);
// favPlaces.sort();
// console.log(`The orignal list has been changes ${favPlaces}`);


// // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// // Tas 19
// const guestList6: string[] = ["Aisha", "Risha ", "celina ", "Neha "];
// console.log("Original order:", guestList6);
// const numGuests: number = guestList6.length;
// console.log(`Number of people invited to dinner: ${numGuests}`);

// // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// // task 20
// var favs : string[] = ["Mount Everest ", "Denali ", "Mount Roramia " , "Mount Fuji"];
// console.log("The list of favorite mountain is" , favs);




// // Task 21

// interface Car {
//     name: string;
//     model: string;

//   }
//   const cars: Car[] = [
//     {
//       name: 'abc',
//       model: 'Camry',
  
//     },
//     {
//       name: 'xyz',
//       model: 'Accord',
   
//     },
//     {
//       name: 'cde',
//       model: 'Mustang',
 
//     }
//   ];
//   for (const car of cars) {
//     console.log('Make:', car.name);
//     console.log('Model:', car.model);
//     console.log('-------------------');
//   }
  
// xxxxxxxxxxxxxxxxxxxxxxx 

// TAsk 22

// const abc: string[] = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];
// console.log(abc[5]); // producing an error
// console.log(abc[2]); // fixing the error

// xxxxxxxxxxxxxxxxxxx

// Task 23
// let car: string = 'subaru';

// console.log("Is car == 'subaru'? I predict True.");

// console.log(car == 'subaru');
// console.log("Is car == 'honda'? I predict False.");
// console.log(car == 'honda');


// let flower:string="Rose";
// console.log("Is flower == 'Rose'? I predict True.");

// console.log(flower == 'Rose');
// console.log("Is flower == 'Jasmine'? I predict False.");
// console.log(flower == 'Jasmine');

// let place : string = "Bhutan";
// console.log("Is Place == 'Bhutan'? I predict True.");

// console.log(place == 'Bhutan');
// console.log("Is place == 'Dubai'? I predict False.");
// console.log(place == 'Dubai');


// let city : string = "Karachi";
// console.log("Is city == 'karachi'? I predict True.");

// console.log(city == 'Karachi');
// console.log("Is city == 'Mumbai'? I predict False.");
// console.log(city == 'Mumbai');


// let country : string = "Pakistan";
// console.log("Is country == 'Pakistan'? I predict True.");

// console.log(country == 'Pakistan');
// console.log("Is country == 'India'? I predict False.");
// console.log(country == 'India');

// Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//TAsk 24
// let number2 :string = "4";   // Testing string
// let number4 : string = "3";
// console.log(number2===  number4 );
// console.log( number4 !== number2);



// let testlowerCase : string= "ABCDEF";   // testing lowercase
// let Test = testlowerCase.toLowerCase();

// console.log(Test === "abcdef");


// let number20  : number  = 20;
// let nuumber40 : number = 40;
// if(number20 > nuumber40){
//     console.log("number20 is greater than number40")
// }else if(number20 < nuumber40){
//     console.log("number20 is smaller than number40")
// }else{
//     console.log("Both numbers are equals")
// }

// let  age : number=20;
// let weight : number = 100;
// if(age === 20 && weight >= 80){
//     console.log("Over weight do some exercise")
// }else{
//     console.log("Under weight")   
// }

// let favSub : string = "Comp";
// if(favSub === "Eng" || favSub === "Comp"){
//     console.log("My Fav Subject",favSub)
// }else{
//     console.log("Its not my fav subject")
// }

// let fruits: string[] = ['apple', 'banana', 'orange'];
// let searchItem: string = 'banana';

// let index: number = fruits.indexOf(searchItem);
// if (index !== -1) {
//   console.log("Item found at index:", index);
// } else {
//   console.log("Item not found in the array.");
// }




// let fruits10: string[] = ['apple', 'banana', 'orange'];
// let search10: string = 'pear';

// let index10: number = fruits10.indexOf(search10);
// if (index10 === -1) {
//   console.log("Item does not exist in the array.");
// } else {
//   console.log("Item found at index:", index10);
// }

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Task 25
// let alienClr1 : string= "Yellow";
// if(alienClr1 === "Green"){
//     console.log("You just earn 5 points")
// }

// xxxxxxxxxxxxxxxxx


// Task 26
// let alienClr2: string = 'green';

// if (alienClr2 === 'green') {
//   console.log("Congratulations! You just earned 5 points .");
// } else {
//   console.log("Congratulations! You just earned 10 points .");
// }
// let alienClr3: string = 'red';

// if (alienClr3 === 'green') {
//   console.log("Congratulations! You just earned 5 points .");
// } else {
//   console.log("Congratulations! You just earned 10 points .");
// }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Task 27
// let alienClr4 : string="red";
// if(alienClr4 === "red"){
//     console.log("Alien color is ".concat(alienClr4).concat(" So it just earn 15 points "))
// }else if(alienClr4 === "yellow"){
//     console.log("Alien color is ".concat(alienClr4).concat(" So it just earn 10 points "))
// }if(alienClr4 === "green"){
//     console.log("Alien color is ".concat(alienClr4).concat(" So it just earn 5 points "))
// }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Task 28
// let age: number = 25;

// if (age < 2) {
//   console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//   console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//   console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//   console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//   console.log("The person is an adult.");
// } else {
//   console.log("The person is an elder.");
// }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// task 29
// let favorite_fruits: string[] = ['apple', 'banana', 'orange'];

// if (favorite_fruits.indexOf('apple') !== -1) {
//   console.log("I really like apples!");
// }

// if (favorite_fruits.indexOf('banana') !== -1) {
//   console.log("I really like bananas!");
// }

// if (favorite_fruits.indexOf('orange') !== -1) {
//   console.log("I really like oranges!");
// }

// if (favorite_fruits.indexOf('strawberry') !== -1) {
//   console.log("I really like strawberries!");
// }

// if (favorite_fruits.indexOf('mango') !== -1) {
//   console.log("I really like mangoes!");
// }

// Task 30
// let usernames: string[] = ['admin', 'Eric', 'John', 'Jane', 'David'];

// for (let i = 0; i < usernames.length; i++) {
//   if (usernames[i] === 'admin') {
//     console.log('Hello admin, would you like to see a status report?');
//   } else {
//     console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
//   }
// }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Task 31

// let usernames2: string[] = [];

// if (usernames2.length === 0) {
//   console.log("We need to find some users!");
// } else {
//   for (let i = 0; i < usernames2.length; i++) {
//         console.log(`Hello ${usernames2[i]}, thank you for logging in again.`);
//     } 
// }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


//  Task 32
// let current_users: string[] = ['john', 'emma', 'sarah', 'david', 'michael'];
// let new_users: string[] = ['emma', 'peter', 'sophia', 'alex'];

// for (let i = 0; i < new_users.length; i++) {
//   let new_username: string = new_users[i].toLowerCase(); // Convert to lowercase for case-insensitive comparison

//   if (current_users.indexOf(new_username)=== 1) {
//     console.log(`Sorry, the username '${new_users[i]}' is already taken. Please enter a new username.`);
//   } else {
//     console.log(`Congratulations! The username '${new_users[i]}' is available.`);
//   }
// }

//  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// Task 33

// let numbers50 :number[]= [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numbers50.length; i++) {
//   let number501 = numbers50[i];

//   if (number501 === 1) {
//     console.log(number501 + "st");
//   } else if (number501 === 2) {
//     console.log(number501 + "nd");
//   } else if (number501 === 3) {
//     console.log(number501 + "rd");
//   } else {
//     console.log(number501 + "th");
//   }
// }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxx


// Task 34

// let pizazs1 : string[] = ['Veggie Pizza ', 'Pepperoni Pizza ','Meat Pizza ','BBQ Chicken Pizza ','Hawaiian Pizza '];
// for( let i = 0; i<pizazs1.length; i++){
//     console.log("I like ".concat(pizazs1[i]))
// }
// console.log("I really love pizza")

// xxxxxxxxxxxxxxxxx


// task 35
// let animals = ['dog', 'cat', 'rabbit'];

// for (let i = 0; i < animals.length; i++) {
//   console.log("A " + animals[i] + " would make a great pet.");
// }

// console.log("Any of these animals would make a great pet!");
 

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx



// task 36

// function make(size:string,text:string) {
//    console.log(`The size of T-shirt  is ${size}  ${text} `)
    
// }

// make("L","I really like your customer service");


// xxxxxxxxxxxxxxxxxxxxxxxx

// Task 37
// function make1(size:string = "Large",text:string="I love typescript") {
//        console.log(`The size of T-shirt  is ${size}  ${text} `)
        
//     }
//     make1();
//     make1("Medium","I really like your customer service");
    
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Task 38
// function describe_location(city:string = "Karachi",country:string="Pakistan") {
//            console.log(` ${city} in ${country} `)
            
//         }
//         describe_location();
//         describe_location("Mumbai","India");
//         describe_location('Jaigon', 'Bhutan')
        


// xxxxxxxxxxxxxxxxxxxxxxxx


//  TAsk 39
// function city_country(city:string= "Karachi", country:string="Pakistank") {
//     console.log(`${city} , ${country}`)
// }
// city_country();
// city_country("Mumbai ", "India");
// city_country("Istambol " ,"Turky")


// xxxxxxxxxxxxxxxxxx


//  Task 40
// function make_album(artist: string, title: string, tracks?: number): { artist: string; title: string; tracks?: number } {
//     let album = {
//       artist: artist,
//       title: title,
//       tracks :tracks
//     };
  
//     if (tracks) {
//       album.tracks = tracks;
//     }
  
//     return album;
//   }
  
//   let album1 = make_album('Artist 1', 'Album 1', 10);
//   let album2 = make_album('Artist 2', 'Album 2');
//   let album3 = make_album('Artist 3', 'Album 3', 15);
  
//   console.log(album1);
//   console.log(album2);
//   console.log(album3);

//   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Task 41 

// function show_magicians(magicians: string[]){
//     for (let magician of magicians) {
//       console.log(magician);
//     }
//   }
  
//   let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
  
//   show_magicians(magicians);
  


// XXXXXXXXXXXX


//Task 42

// function show_magicians2(magicians2: string[]) {
//     for (let magician2 of magicians2) {
//       console.log(magician2);
//     }
//   }
  
//   function make_great(magicians2: string[]) {
//     for (let i = 0; i < magicians2.length; i++) {
//       magicians2[i] = "the Great " + magicians2[i];
//     }
//   }
  
//   let magicians4: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
  
//   make_great(magicians4);
//   show_magicians2(magicians4);
  
  
  




// Task 43
// function show_magicians(magicians: string[]) {
//     for (let magician of magicians) {
//       console.log(magician);
//     }
//   }
  
//   function make_great(magicians: string[]): string[] {
//     let greatMagicians: string[] = [];
  
//     for (let magician of magicians) {
//       greatMagicians.push("the Great " + magician);
//     }
  
//     return greatMagicians;
//   }
  
//   let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
  
//   let greatMagicians: string[] = make_great([...magicians]);
  
//   console.log("Original Magicians:");
//   show_magicians(magicians);
  
//   console.log("\nModified Magicians:");
//   show_magicians(greatMagicians);
  

// xxxxxxxxxxxxxxxxxxxxxxxxxxx



// Task 44


// function make_sandwich(...items10: string[]) {
//     console.log("Making a sandwich with the following items:");
  
//     for (let item10 of items10) {
//       console.log("- " + item10);
//     }
  
//     console.log("Sandwich is ready!\n");
//   }
  
//   make_sandwich("Lettuce", "Tomato", "Cheese");
//   make_sandwich("Ham", "Mayonnaise");
//   make_sandwich("Ketchup","Meet","BBQ sauce");
  

// xxxxxxxxxxxxxxxxxx


// Task 45

function store_car_info(manufacturer: string, model: string, ...options: any[]): object {
    let carInfo: any = {
      manufacturer: manufacturer,
      model: model
    };
  
    for (let i = 0; i < options.length; i += 2) {
      let key = options[i];
      let value = options[i + 1];
      carInfo[key] = value;
    }
  
    return carInfo;
  }
  
  let car = store_car_info('Toyota', 'Camry', 'color', 'silver', 'optionalFeature', 'sunroof');
  
  console.log(car);
  







// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx







export{}
