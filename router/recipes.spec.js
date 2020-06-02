// const request = require("supertest");
// // const server = require("../server.js");
// const recipes = require("./recipesRouter.js");

it('is running with the correct db', () => {
    expect(process.env.DB_ENV).toBe('testing')
  }) // check if environment is "testing" 

//   describe('recipes.js', () => {
//     describe('[GET] /', () => {
//       it('runs correctly', () => {
//         return request(recipes).get('/recipes')
//           .expect('Content-Type', /json/)
//       })
//     })

//   });