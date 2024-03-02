# test-with-jest
API Testing with Supertest, Express.js, and Jest
--Install
npm init (create package.json)
npm i express
npm install --save-dev jest supertest

-- We could run api using node server.js on the terminal and test it using a tool like curl or Postman.
app.get("/greet", (req, res) => {
   const name = req.query.name || "World";
   res.json({ message: `Hello, ${name}!` });
);
ex: Running: curl http://localhost:3000/greet?name=John  -> response: {"message":"Hello, John!"}

-- To run test: npm test 



