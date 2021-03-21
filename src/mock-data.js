// const mpaEnums = {
//     "g":0,
//     "pg":1,
//     "pg13":2,
//     "r":3,
//     "other":4
// }

// import mpaEnums from "./mpa-enums"

// const genre = {
//     "drama":0,
//     "comedy":1,
//     "horror":2,
//     "thriller":3,
//     "scifi":4,

// }

let mock = [{
    id: 1,
    title: "Hidden Figures",
    mpa_rating: "PG",
    imbd_rating: 7.8,
    genre: "drama",
    image: "hidden-figures.jpg",
    synopsis: "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program." 
  },{
    id: 2,
    title: "Dead Poets Society",
    mpa_rating: "PG",
    imbd_rating: 8.1,
    genre: "drama",
    image: "dead-poets.jpg",
    synopsis: "Maverick teacher John Keating uses poetry to embolden his boarding school students to new heights of self-expression." 
  },{
    id: 3,
    title: "A Quiet Place",
    mpa_rating: "PG-13",
    imbd_rating: 7.5,
    genre: "thriller",
    image: "quiet-place.jpg",
    synopsis: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing." 
  },{
    id: 4,
    title: "The Court Jester",
    mpa_rating: "Other",
    imbd_rating: 7.9,
    genre: "comedy",
    image: "court-jester.jpg",
    synopsis: "A hapless carnival performer masquerades as the court jester as part of a plot against an evil ruler who has overthrown the rightful King." 
  },{
    id: 5,
    title: "What Lies Beneath",
    mpa_rating: "PG-13",
    imbd_rating: 6.6,
    genre: "horror",
    image: "what-lies-beneath.jpg",
    synopsis: "The wife of a university research scientist believes that her lakeside Vermont home is haunted by a ghost - or that she is losing her mind." 
  },{
    id: 6,
    title: "Ocean's Eleven",
    mpa_rating: "PG-13",
    imbd_rating: 7.7,
    genre: "thriller",
    image: "oceans-eleven.jpg",
    synopsis: "Danny Ocean and his ten accomplices plan to rob three Las Vegas casinos simultaneously." 
  },{
    id: 7,
    title: "Interstellar",
    mpa_rating: "PG-13",
    imbd_rating: 8.6,
    genre: "scifi",
    image: "interstellar.jpg",
    synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." 
  },{
    id: 8,
    title: "The Martian",
    mpa_rating: "PG-13",
    imbd_rating: 8.0,
    genre: "scifi",
    image: "martian.jpg",
    synopsis: "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive." 
  },
// {
//     id: 9,
//     title: "Hidden Figures",
//     mpa_rating: mpaEnums.pg,
//     imbd_rating: 7.8,
//     genre: genre.drama,
//     image: "hidden-figures.jpg",
//     synopsis: "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program." 
//   },{
//     id: 10,
//     title: "Hidden Figures",
//     mpa_rating: mpaEnums.pg,
//     imbd_rating: 7.8,
//     genre: genre.drama,
//     image: "hidden-figures.jpg",
//     synopsis: "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program." 
//   },{
//     id: 11,
//     title: "Hidden Figures",
//     mpa_rating: mpaEnums.pg,
//     imbd_rating: 7.8,
//     genre: genre.drama,
//     image: "hidden-figures.jpg",
//     synopsis: "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program." 
//   },{
//     id: 12,
//     title: "Hidden Figures",
//     mpa_rating: mpaEnums.pg,
//     imbd_rating: 7.8,
//     genre: genre.drama,
//     image: "hidden-figures.jpg",
//     synopsis: "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program." 
//   },{
//     id: 13,
//     title: "Hidden Figures",
//     mpa_rating: mpaEnums.pg,
//     imbd_rating: 7.8,
//     genre: genre.drama,
//     image: "hidden-figures.jpg",
//     synopsis: "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program." 
//   },{
//     id: 14,
//     title: "Hidden Figures",
//     mpa_rating: mpaEnums.pg,
//     imbd_rating: 7.8,
//     genre: genre.drama,
//     image: "hidden-figures.jpg",
//     synopsis: "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program." 
//   },{
//     id: 15,
//     title: "Hidden Figures",
//     mpa_rating: mpaEnums.pg,
//     imbd_rating: 7.8,
//     genre: genre.drama,
//     image: "hidden-figures.jpg",
//     synopsis: "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program." 
//   },{
//     id: 16,
//     title: "Hidden Figures",
//     mpa_rating: mpaEnums.pg,
//     imbd_rating: 7.8,
//     genre: genre.drama,
//     image: "hidden-figures.jpg",
//     synopsis: "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program." 
//   },{
//     id: 17,
//     title: "Hidden Figures",
//     mpa_rating: mpaEnums.pg,
//     imbd_rating: 7.8,
//     genre: genre.drama,
//     image: "hidden-figures.jpg",
//     synopsis: "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program." 
//   },{
//     id: 18,
//     title: "Hidden Figures",
//     mpa_rating: mpaEnums.pg,
//     imbd_rating: 7.8,
//     genre: genre.drama,
//     image: "hidden-figures.jpg",
//     synopsis: "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program." 
//   },{
//     id: 19,
//     title: "Hidden Figures",
//     mpa_rating: mpaEnums.pg,
//     imbd_rating: 7.8,
//     genre: genre.drama,
//     image: "hidden-figures.jpg",
//     synopsis: "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program." 
//   },{
//     id: 20,
//     title: "Hidden Figures",
//     mpa_rating: mpaEnums.pg,
//     imbd_rating: 7.8,
//     genre: genre.drama,
//     image: "hidden-figures.jpg",
//     synopsis: "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program." 
//   },
]

export default mock;
