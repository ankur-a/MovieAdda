## Movie Adda ##

**Movie Adda** 
It is an online database of information related to films, television programs, and home videos, and internet streams, including cast, production crew, and plot summaries.

## Technology Used ##
Front-End: AngularJs, BootStrap.
Back-End: NodeJs, Express, MongoDB.
## Usage ##

We have three user                                                                                                          

     1. Actros
     2. Producers
     3. Movies
     
   #
    
                                                   # Basic Functionality
                                                      
  1. At home page a user can see all the movies and their information. User can also see all the producers and actors
     and he can add, delete and edit actors, producers or movies information.
    
  2. If a user add actrors in movie which are not in our database mean a actor does'n exist with that name,so 
     user will get a message to add this actor in Actor Database.
     
  3. If a user add producer in movie which is not in our Producers database means a producer does'n exist with 
     that name,so user will get a message to add this producer in Producer Database.
  
  4. If both actors and producer exist in database only then user can add movie with these actros and producer. 
     
  #
  
### change localhost to mLab MongoDB databse
replace mongodb://localhost/patients' with mongodb://username:password@ds251747.mlab.com:51747/database_name
### Installation required for app

```sh
$ npm install
```

```sh
$ npm start
```

## Open Website(Heroku Link)
https://movieadda.herokuapp.com/#/

