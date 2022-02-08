# 1. Analysis

- [1. Analysis](#1-analysis)
  - [1.1. Interviews](#11-interviews)
    - [1.1.1. 15/11/21 : Tyler](#111-151121--tyler)
  - [1.2. Observations](#12-observations)
    - [1.2.1. dd/mm/yy : place](#121-ddmmyy--place)
  - [1.3. Swoosh](#13-swoosh)
  - [1.4. Current Issues](#14-current-issues)
    - [1.4.1. Problem](#141-problem)
    - [1.4.2. Solution](#142-solution)
    - [1.4.3. Problem](#143-problem)
    - [1.4.4. Solution](#144-solution)
    - [1.4.5. Problem](#145-problem)
    - [1.4.6. Solution](#146-solution)
  - [1.5. Modelling](#15-modelling)
    - [1.5.1. Models](#151-models)
    - [1.5.2. User](#152-user)
    - [1.5.3. FollowRelation](#153-followrelation)
    - [1.5.4. Movie](#154-movie)
    - [1.5.5. Book](#155-book)
    - [1.5.6. Song](#156-song)
    - [1.5.7. Person](#157-person)
    - [1.5.8. Relationship Diagram](#158-relationship-diagram)
  - [1.6. Workflows](#16-workflows)
    - [1.6.1. Entrance](#161-entrance)
  - [1.7. Objectives](#17-objectives)
  - [1.8. Potential Solutions](#18-potential-solutions)
  - [1.9. Design](#19-design)
    - [1.9.1 GraphQL Queries/Mutations/](#191-graphql-queriesmutations)
    - [1.9.2 Normalisation](#192-normalisation)
    - [1.9.3 Frontend](#193-frontend)
  - [1.10 Code Listing (screenshots)](#110-code-listing-screenshots)

## 1.1. Interviews

### 1.1.1. 15/11/21 : Tyler

What would you like to see in an entertainment database website?

- ratings, actors (people), movies, book, reviews, songs
- plex and other third party applications.

What notificaitons would you like to recieve?

- friend requests, new media.

Would you like certain information such as personal reviews to be hidden if required?

- There should be an option to toggle hide certain information from other users.

Are you ok with allowing a singular cookie for session storage?

- I'm okay with allowing a cookie for sessoin storage if asked for and notified at initial login.

## 1.2. Observations

### 1.2.1. dd/mm/yy : place

1. Person

What they did

## 1.3. Swoosh

Swoosh is a progressive web application developed to fill a gap in the market due not to the lack of the problem being solved, but to the lack of features and composite forms of entertainment in current solutions. For example, there are many sites an end-user could visit (tmdb, imdb, goodreads and lastfm) in order to save their favourite movies, books, people and songs, however, they must visit various different sites in order to do so. This is where swoosh fills the gap, it provides an all-in-one type of environment for the end-user so they do not have to meaninglessly navigate a plethora of sites in order to save their favourite form of entertainment.

## 1.4. Current Issues

### 1.4.1. Problem

Variation of sites the end-user must use in order to save their media and entertainment. 

### 1.4.2. Solution

Encompass all forms of media and entertainment into one progressive web application.  

### 1.4.3. Problem

As the data is in separate databases owned by separate sites it means that joining it is not possible which could provide an annoyance for the end-user e.g. if they want to see what movies or songs a saved celebrity has been in it would not be possible without at platform such as swoosh. 

### 1.4.4. Solution

As all the data will be held in one database but just in different tables it means sequel joins can be done to relate data to each other so that the user can have such luxuries as of those not provided by other platforms mentioned in the problem above. 

### 1.4.5. Problem

Current entertainment platforms such as YouTube, Netflix and Spotify can only provide recommendations based on the data they collect inside the platform which is not at fault of the platform but could be at the cost of the users experience when using the app as this means that they will get worse overall recommendations then they would if more data was provided. Note, swoosh is not a replacement for such platforms but solves the problem that these platforms face. 

### 1.4.6. Solution

A main feature of swoosh will be allowing the user to rate the media or entertainment as to give better recommendations. This is better than current recommendations, like for example, Spotify technically does have a rating system as you can like songs, however, this only allows for a minimal view of the users’ tastes as the rating range isn’t wide enough. This platform will fix the issue by letting the user rate the media from say 1 – 10. Due to the higher range, it means that we can get a better idea of what the end-user actually likes and dislikes in order to push certain entertainment. 

## 1.5. Modelling

### 1.5.1. Models

### 1.5.2. User

| Primary Key | "id" SERIAL NOT NULL                                                     |
|-------------|--------------------------------------------------------------------------|
|             | "confirmed"   BOOLEAN NOT NULL DEFAULT false                             |
|             | "email"       TEXT NOT NULL                                              |
|             | "username"    TEXT NOT NULL                                              |
|             | "displayname" TEXT NOT NULL                                              |
|             | "password"    TEXT NOT NULL                                              |
|             | "role" "Role" NOT NULL DEFAULT E'USER'                                   |
|             | "avatar"      TEXT NOT NULL DEFAUTL E'https:via.placeholder.com/400x400' |
|             | "bio"         TEXT NOT NULL DEFAULT E''                                  |
|             | "dob"         TEXT NOT NULL DEFAULT E''                                  |
|             | "createdAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP            |
|             | "updatedAt"   TIMESTAMP(3) NOT NULL DEFAULT                              |

### 1.5.3. FollowRelation

|   |                      |
|---|----------------------|
|   | "A" INTEGER NOT NULL |
|   | "B" INTEGER NOT NULL |

### 1.5.4. Movie

| Primary Key | "id" SERIAL NOT NULL                                          |
|-------------|---------------------------------------------------------------|
|             | "userId"      INTEGER NOT NULL                                |
|             | "title"       TEXT NOT NULL                                   |
|             | "description" TEXT NOT NULL                                   |
|             | "createdAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP |
|             | "updatedAt"   TIMESTAMP(3) NOT NULL DEFAULT                   |


### 1.5.5. Book


| Primary Key | "id" SERIAL NOT NULL                                          |
|-------------|---------------------------------------------------------------|
|             | "userId"      INTEGER NOT NULL                                |
|             | "title"       TEXT NOT NULL                                   |
|             | "author"      TEXT NOT NULL                                   |
|             | "createdAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP |
|             | "updatedAt"   TIMESTAMP(3) NOT NULL DEFAULT                   |

### 1.5.6. Song

| Primary Key | "id" SERIAL NOT NULL                                          |
|-------------|---------------------------------------------------------------|
|             | "userId"      INTEGER NOT NULL                                |
|             | "title"       TEXT NOT NULL                                   |
|             | "artist"      TEXT NOT NULL                                   |
|             | "createdAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP |
|             | "updatedAt"   TIMESTAMP(3) NOT NULL DEFAULT                   |

### 1.5.7. Person

<!-- TODO: Add more fields -->

| Primary Key | "id" SERIAL NOT NULL                                          |
|-------------|---------------------------------------------------------------|
|             | "userId"      INTEGER NOT NULL                                |
|             | "name"        TEXT NOT NULL                                   |
|             | "description" TEXT NOT NULL                                   |
|             | "createdAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP |
|             | "updatedAt"   TIMESTAMP(3) NOT NULL DEFAULT                   |

### 1.5.8. Relationship Diagram

![User](./ER1.png)

## 1.6. Workflows

### 1.6.1. Entrance

![Entrance Workflow](./WREntrance.png)

## 1.7. Objectives

1. Create a secure storage area for user details using a database such as postgresql and prisma with hashed passwords. This is so that only the end user can access their own data and login to the site.

2. Have a file upload server using apollographql to store images uploaded by the user such as profile pictures. Instead of loading images from existing web servers, having a dedicated one to the site means that the images can not only load faster but they can be stored in the best viable way for the sites purpose rather than using services such as the imgur api.

3.Majority of the images must be lazy loaded to improve efficiency of the site as that is what the user will be looking at most of the time. As the site will have a lot of images due to such things as album, movie and song covers it means that lazy loading them will be a priority to allow for faster loading speeds.

4.Allow users to follow other users with a follow relation and receive notifications when they create new entries which will be done with graphql subscriptions. This provides interactivity that isn’t seen on other sites like this which will entice the users to come back when they receive the notifications.

5.Use an in-memory data structure store such as redis to store user sessions so the user doesn’t have to relogin to the site every time and store the data in a browser cookie. This will improve user experience whilst maintaining security as the data is only accessible on the client-side in the cookie.

6.To stop users from spamming the database I will firstly use graphql query complexity to limit the amount of items that can be queried. Secondly, use redis to limit the number of specific calls to the database an ip or user can make. To stop users from spamming the database I will firstly use graphql query complexity to limit the amount of items that can be queried. Secondly, use redis to limit the number of specific calls to the database an ip or user can make.

## 1.8. Potential Solutions

To build this project I will be using these programming languages that are infrequently known as the hypebeast stack. 

<!-- TODO: Add more detail to reasons -->

| Library       | Reason                                                                                                                                                                                                                             |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| React/Next.JS | I will be using Next.JS for the frontend which is built on top of the react library that allows for comprehensive state management due to such additions to html like the virtual DOM.                                             |
| TypeScript    | A programming language developed and maintained by Microsoft that is strongly typed and transcompiles to JavaScript.                                                                                                               |
| GraphQL       | This is an open-source data query and manipulation language developed by Facebook that allows for querying specific data from the backend to frontend.                                                                             |
| Apollo Client | This is a state management library that interacts with graphql in order to fetch, cache and modify application data between the front and backend.                                                                                 |
| Node.JS       | This is a runtime environment that the web and backend servers will be running on.                                                                                                                                                 |
| PostgreSQL    | This is a database management system.                                                                                                                                                                                              |
| PrismaORM     | This is a server-side library used to interact with a database (in this case postgresql) to aid reading and writing data.                                                                                                          |
| Redis         | An in-memory date structure store that I will use for user-sessions and rate-limiting.                                                                                                                                             |
| TypeGraphQL   | This is a framework built around GraphQL that allows for TypeScript integration so that you can use classes and decorators to define schema types for the backend and what data you expect to receive from apollo on the frontend. |
|               |

## 1.9. Design

### 1.9.1 GraphQL Queries/Mutations/
### 1.9.2 Normalisation
### 1.9.3 Frontend

## 1.10 Code Listing (screenshots)

