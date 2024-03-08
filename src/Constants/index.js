import { Littlelemon, bruchetta, delivery, greeksalad, lemoncake } from "../assets/images"

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