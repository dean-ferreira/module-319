# sba-319 - [Visit Live Deployment](https://sba-319.onrender.com)

## About the Project

This assessment measures your understanding of MongoDB and your capability to implement its features in a practical manner. You have creative freedom in the topic, material, and purpose of the web application you will be developing, so have fun with it! However, remember to plan the scope of your project to the timeline you have been given.

## Objectives

- Create a server application with Node, Express, and MongoDB.
- Create a CRUD API using Express and MongoDB.
- Create MongoDB indexes.
- Use MongoDB indexing to make efficient queries.
- Create MongoDB validation rules.
- Use MongoDB validation to ensure data consistency.

## Built With

- JavaScript
- Node
- npm
- nodemon
- Express
- MongoDB
- Mongoose

## Getting Started

### Prerequisites

- npm (Node Packet Manager)

  - To install npm, you need to install Node.js, which includes npm
  - Install Node.js via installer: https://nodejs.org/en/download/current
  - Verify installation by running

    ```sh
    node -v
    npm -v
    ```

  - If installed correctly, these commands will display the versions of Node.js and npm installed on your system

### Installation

1. Clone the repo and then navigate to the new directory
   ```sh
   git clone https://github.com/dean-ferreira/module-319.git
   cd module-319
   git checkout sba-319
   ```
2. Install all Development Dependencies listed in package.json
   ```sh
   npm install
   ```
3. Configure .env file
   ```sh
   DATABASE_URL=your_database_url
   ```

## Usage

- Start a server:
  ```sh
  npm start
  ```
- To start a development server with nodemon:
  ```sh
  npm run dev
  ```

## API Routes
1. `/seed`
    - GET `/`
        - Populate your application's collections with sample data illustrating the use case of the collections.
        - Read Operation
2. `/states`
    - GET `/`
        - Retrieve all states
        - Read Operation
    - GET `/:name`
        - Retrieve state by name
        - Read Operation
    - PATCH `/:name`
        - Update state by name
        - Update Operation
3. `/fav`
    - GET `/`
        - Retrieve all favorites
        - Read Operation
    - GET `/:id`
        - Retrieve favorite by id
        - Read Operation
    - POST `/`
        - Create a favorite
        - Create Operation
    - PATCH `/:id`
        - Update a favorite by id
        - Update opreation
    - DELETE `/:id`
        - Delete a favorite by id
        - Delete Operation
4. `/users`
    - GET `/`
        - Retrieve all users
        - Read Operation
    - GET `/:id`
        - Retrieve user by id
        - Read Operation
    - GET `/:id`
        - Retrieve user by id
        - Read Operation
    - POST `/`
        - Create user
        - Create Operation
    - PATCH `/:id`
        - Update user by id
        - Update Operation
    - DELETE `/:id`
        - Delete user by id
        - Delete operation