const mongoose = require('mongoose');
const Blog = require('./models/blog');


const blogs = [
    {
        title: "Cricket",
        img:"https://images.unsplash.com/photo-1589801258579-18e091f4ca26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y3JpY2tldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "Anurag",
        desc: ": a game played with a ball and bat by two sides of usually 11 players each on a large field centering upon two wickets each defended by a batsman. 2 : fair and honorable behavior it wasn't cricket for her to break her contract"
    },
    {
        title: "Cars",
        img:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "Dev",
        desc: ": A car (or automobile) is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people rather than goods. ... Cars have controls for driving, parking, passenger comfort, and a variety of lights."
    },
    {
        title: "Football",
        img:"https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vdGJhbGx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "Deepak",
        desc: ": Association football, more commonly known as simply football or soccer, is a team sport played by all genders with a spherical ball between two teams of 11 players. It is played by approximately 250 million players in over 200 countries and dependencies"
    },
    {
        title: "Basketball",
        img:"https://images.unsplash.com/photo-1519861531473-9200262188bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFza2V0YmFsbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "Vishal",
        desc: ": Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball through the defender's hoop while preventing the opposing team from shooting through their own hoop"
    },
    {
        title: "Kabaddi",
        img:"https://upload.wikimedia.org/wikipedia/commons/1/1f/Iran_men%27s_national_kabaddi_team_13970602000432636707284535394012_98208.jpg",
        author: "Anshu",
        desc: "Kabaddi is a contact team sport. Played between two teams of seven players, the objective of the game is for a single player on offence, referred to as a raider, to run into the opposing team's half "
    },
]


const seedDB = async()=>{
    await Blog.insertMany(blogs);
    console.log("DB seeded");
};

module.exports = seedDB;

