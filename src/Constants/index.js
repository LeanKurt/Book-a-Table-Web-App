import { Littlelemon, bruchetta, delivery, greeksalad, lemoncake, panna,polenta,ravioli,saltim,cacciucco,carpaccio } from "../assets/images"

export const navLinks = [
    {id: 1, name: 'Home'},
    {id: 2, name: 'About'},
    {id: 3, name: 'Menu'},
    {id: 4, name: 'Reservations'},
];

export const myLogo = [{
    src: Littlelemon, alt: "Little lemon"
},]

export const landingProducts = [
    { src:greeksalad, title:"Greek salad" , description:"The famous greek salad with crispy lettuce,peppers,olives and our Chicago style teta cheese, garnished with crunchy garlic and rosemary croutons.", price:"$12.90"},
    { src:bruchetta, title:"Bruchetta" , description:"Our Bruschetta is made from grilled bread that has been smeated with garlic and seasoned with salt and olive oil", price:"$5.99"},
    { src:lemoncake, title:"Lemon Dessert" , description:"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.", price:"$5.00"},
]

export const deliveryLogo = [{
    src: delivery , alt:"deliverylogo"
},]

export const menu = [
    {src:carpaccio, title:"Carpaccio",description:"Carpaccio offers a culinary journey through the vibrant flavors of Italy, where every dish is crafted with passion and authenticity.",price:"$7.75"},
    {src:cacciucco, title:"Cacciucco",description:"Cacciucco is a traditional Italian seafood stew originating from the coastal region of Livorno in Tuscany. This hearty dish is a celebration of the bounty of the sea.",price:"$10.75"},
    {src:panna, title:"Panna",description:"it can be whipped and sweetened to make whipped cream or incorporated into custards, ice creams, and cakes for a luxurious texture and flavor.",price:"$5.42"},
    {src:polenta, title:"Polenta",description:"Polenta is a traditional Italian dish made from coarsely ground yellow or white cornmeal. It has been a staple of Italian cuisine for centuries, particularly in the northern regions such as Lombardy, Veneto, and Piedmont.",price:"$15.75"},
    {src:ravioli, title:"Ravioli",description:"Ravioli is a classic Italian pasta dish consisting of small parcels of dough filled with various ingredients, typically cheese, meat, or vegetables.",price:"$8.25"},
    {src:saltim, title:"saltimbocca",description:"Saltimbocca is a classic Italian dish that translates to jump in the mouth, and it's known for its burst of flavor. Traditionally made with veal, it consists of thinly sliced meat, typically veal cutlets",price:"$9.53"}
]