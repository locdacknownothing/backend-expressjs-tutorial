# Backend Express.js Tutorial

This repository contains the source code and materials for the Backend Express.js Tutorial. In this tutorial, we will explore building a backend application using Express.js, MongoDB with Mongoose, and other useful libraries.

## Database Setup

1. Make sure you have MongoDB installed and running. For instance, with MongoDB Compass, create new database named `be_tutorial_dev` with default collection named `courses`.

2. With the config above, use the following connection URL to connect to your local MongoDB instance:

```
mongodb://127.0.0.1:27017/be_tutorial_dev
```

3. You can use another connection URL by replacing your URL in the file `src/config/db/index.js`.

## Getting Started Locally

To get started, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/be_tutorial.git
```

2. Install the dependencies:

```bash
npm install
```

3. Run the application:

```bash
npm start
```

This will start the Express.js server and make it available at `http://localhost:3000`.
