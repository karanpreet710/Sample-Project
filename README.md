# Social Media Project

## Project Structure

### Backend(Server)
```
src
├───controllers   # functions to connect routes to db operations
├───db            # db connection and model defintions
├───public        # html/css/js files for static part of website
└───routes        # express middlewares (route wise)
```

### Frontend (Client Side Code)
```
src/public
│   index.html                      #first/home page
│
├───app                             #our own frontend js code
│       common.js
│
├───components                      #our own html snippets
│       navbar.html
│
├───css                             #css libraries we are using
│       bootstrap.css
│
├───fonts                           #fonts that we are using
│       Muli-Italic.woff2
│       muli.css
│       Muli.woff2
│
└───js                              #js libraries we are using
        bootstrap.js
        jquery-3.4.1.js
        popper.js
```

## Business Logic

### Users

1. **create users**  
    this will create a new user with a random username

### Posts

1. **create post**   
    this will create a new post, required fields are
    - username (the author of the post)
    - title
    - body

2. **show all posts**   
    list all existing posts, we should have following filtering support
    - filter by username
    - filter by title contained in title(search by title)

3. **edit posts**

4. **delete posts**

## Comments

1. **show all comments (of a user)**

2. **show all comments (under a post)**

3. **add a comment**

## API Documentation

### `users`

1. `POST /users`

Creates a new user with random username and an user id

2. `GET /users/{userid}`

Get an user with a given user id

3. `GET /users/{username}`

Get an user with a given username

### `posts`

1. `GET /posts`

Get all posts by everyone

2. `POST /posts`

Create a new post
Required fields in body -

```
userId=
title=
body=
```