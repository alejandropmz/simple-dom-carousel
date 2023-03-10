const data = [
  {
    id: 1,
    name: "Albert Perez",
    role: "Full Stack Developer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvp0wCEIuD0hUkEnfMYW0qHaYRSc5l9PQyyo1wGKihP7opkCAqzw6FV5ZJDHEraGdn18Q&usqp=CAU",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quas fuga fugit nobis, cumque eius doloribus nihil unde? Reiciendis vero quam, dolore voluptatum recusandae animi nesciunt obcaecati consequatur eum a?"
  },
  {
    id: 2,
    name: "Ana Maria Lopez",
    role: "Industrial Engineer",
    img: "https://1fid.com/wp-content/uploads/2022/07/aesthetic-profile-picture-2-1024x1024.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptates illo autem obcaecati, recusandae veritatis omnis quisquam odio, cumque, iure facilis tempora. Facere deserunt illo fugiat? Voluptatibus adipisci sit deleniti?"
  },
  {
    id: 3,
    name: "Alejanro Ramos",
    role: "Musician",
    img: "https://marketplace.canva.com/EAFEits4-uw/1/0/800w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-r0bPCSjUqg0.jpg",
    text: "ipsum dolor sit amet consectetur adipisicing elit. Quibusdam praesentium quo maiores cumque pariatur, quos saepe dolorum earum vero, hic distinctio! Veritatis aut cupiditate aliquid porro sapiente vel facilis incidunt?"
  },
  {
    id: 4,
    name: "Didier Calvo",
    role: "Mechanic",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6NL_lSvGQbvUlgVmr6R2LKTCYS9kG3qe0hxP9vd4lNWl-62-hoN3Fwgc3kjSW7Kp-3oc&usqp=CAU",
    text: "quos saepe dolorum earum vero, hic distinctio! Veritatis aut cupiditate aliquid porro sapiente vel facilis incidunt?"
  },
  {
    id: 5,
    name: "Alexa Bravo",
    role: "Front End Developer",
    img: "https://1fid.com/wp-content/uploads/2022/06/Twitter-profile-picture.jpg",
    text: "ipsum dolor sit amet consectetur adipisicing elit. sapiente vel facilis incidunt?"
  },
]

/* document */

const img = document.getElementById('img');
const username = document.getElementById('name');
const role = document.getElementById('role');
const description = document.getElementById('description');
const button = document.getElementById('button');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

/* funcionalidad */

let counter = 0;

document.addEventListener('DOMContentLoaded', () => {
  img.src = data[0].img
  username.innerHTML = data[0].name
  role.innerHTML = data[0].role
  description.innerHTML = data[0].text
})

button.addEventListener('click', () => {
  let random = Math.floor(Math.random()*data.length-1) + 1
  counter = random
  
  img.src = data[random].img
  username.innerHTML = data[random].name
  role.innerHTML = data[random].role
  description.innerHTML = data[random].text
})

leftButton.addEventListener('click', () => {
  if (counter == 0){
    counter = data.length-1
  }
  counter--
  img.src = data[counter].img
  username.innerHTML = data[counter].name
  role.innerHTML = data[counter].role
  description.innerHTML = data[counter].text
})

rightButton.addEventListener('click', () => {
  if (counter == data.length-1){
    counter = 0;
  }
  counter++
  img.src = data[counter].img
  username.innerHTML = data[counter].name
  role.innerHTML = data[counter].role
  description.innerHTML = data[counter].text
})

