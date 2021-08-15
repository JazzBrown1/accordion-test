# To Run the App

Open a console in the folder you want to clone the repo.

First clone the repo to your local.

```
git clone https://github.com/JazzBrown1/accordion-test
```

Then open the repo directory and the server sub-directory.

```
cd accordion-test
cd server
```

Install server dependencies.

*You may notice some high severity vulnerabilities, this is a recent issue with sqlite3 lib, its fixed on the master branch so the fix should be in released soon*

```
npm install
```

By default the app will run a memory instance of SQLite; If you want to opt to use a non memory instance of sqlite or change the PORT update the .env file. All options can be seen below or in server/example.env.

```env
PORT=3000
APP_PATH='../../app/build'
DB_NAME=database
DB_USER=user
DB_PASSWORD=storage
DB_STORAGE=databases/database.sqlite
```
*PORT and APP_PATH are reequired*

Run `npm start` to start the server.

```
npm start
```

Open the app in your browser by visiting [localhost:3000](http://localhost:3000)

# Project Notes

- The server and client apps are in separate npm project folders.
- I have not implemented SSL in this solution as in a production build that would be handled by a load balancer
- In a production build I would also prefer to serve the static app away from node.js (nginx, elb, s3 etc.)
- If I had more time I would have made a shared assets lib to share types validation functionality across server and client

Thanks for spending the time to check my solution out!
