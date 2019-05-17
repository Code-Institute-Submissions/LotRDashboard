# LoTR Dashboard
### Milestone Project 2 Overview
This project is a data dashboard, the data here is based upon data from the films, books and characters 
based in the Lord of the Rings universe created bj J.R.R Tolkien. It shows graphs, charts and other data presentation tools
to make absorption of data easier than just a Excel spreadsheet. The main point of this project is to display my knowledge and skills from
D3, Crossfilter and other tools used to create a data dashboard.


## UX
My wireframes for the project can be found here https://app.moqups.com/xMaya2FvZh/view
The UX for this website is based upon people wishing to view data from different sources and different types. This data is for a few people
1. Users interested in the Movies and their Monetary values
2. Users interested in the percentages of the different Races in the LOTR Universe (Named Characters)
3. Users invested in the books and want to know who spoke the most, and where they spoke these words.
4. Users interested in seeing a list of all characters and being able to access further information on them through external links
The final Mockup can be viewed here https://drive.google.com/open?id=1dp2fN33rxcm4ra_FnGlPMWTupz7ALKlr

## Features
The features of the data dashboard are 3 pages of data that have been graphed and pie charted to show parts of a whole, this shows the spread of races, words spoken, times spoken and facts on the movie data that some users may find interesting.
I've also added my own take on the data sets as to what may have happened and why certain races are only shown as having 2 or 1 individual and have put across my view as to why they are so low compared to other races.
In terms of the movies I have highlighted the fact that despite having a higher budget the second trilogy was not as critically acclaimed as the first, and the views as to why.
The site contains more information in its Modal boxes which can be accessed with the "I" FA tags Alongside the data that can be easily seen from "Movies.html" and "Books.html"
## Technologies Used
I have used a few different technologies to help my code this dashboard these are the following:
1. jQuery - This has been used to help simplify traversing the DOM and displaying different parts of the data.
2. D3 - This has been used to help simplify creating the different bars and charts.
3. CrossFilter - This will also be used for the above reason.
4. BootStrap - Used to help minimise the amount of coding necessary with building the structure of the HTML
5. Modal.js - Was used to help minimise coding required for Modal boxes for my Information sections.
6. FontAwesome for use of Information, and copyright tags for more UX based usability.


# To be done
## Testing
So far during the development I have been attempting to build tables and charts using DC and crossfilter. This has been trial and error work which can be seen in the version control, for example
at the moment of writing the data is currently displaying incorrectly, I have been trying different methods to remove certain aspects of the JSON's and to manipulate the data so that it looks 
and feels better, being as responsive as possible. 

The testing for the Table Creation has been trialing and erroring different table building techniques, the first technique wrote a table with "Object, object, object..."etc. for each instance of a character
in the associated characters.json

With my Modals I had first used popovers however the sizing of these was not compatible and this resulted in a ridiculous long box appearing over the elements. Modals were used in this instance to minimize this 
and to enable users to have it cover the data so they can see the breakdown and assessment of data.

### User Stories
User A wants to see how well the movies did at the box office, they are able to do this by going to movies.html and viewing the data here.
User B wants to be able to see how much Aragorn spoke in total througout the books, he is able to see this in Books.html
User C is able to view the race spread of named characters in the books, however this data is not proportionate, so he can also view the full list in charlist.html
#### Bugs witin Testing
##### Table
I had a lot of issues with implementing my table data as can be seen in my previous uploads to GitHub. I also had issues making the table data without having to write the HTML until I found a tabluate function online, which I have utilised as this has saved
myself time making the table.  I would've liked to append using the DOM however having issues with fetch and JSON data here this hasnt worked as planned, so the table will be as is without external linkage to the LOTR wikia.
##### Stack Chart
I also have a bug where "0" is a dataset within my Times a race has spoken graph, I havent been able to wipe this zero out and this also
displays the "Undead" race as the same color as the "Ainur" still trying to figure this one out, however I have tried using different numbers of domains and adding more range in terms of color to make this less noticeable.




## Deployment
The website has been deployed on GitHub Pages, the final dashboard includes all of the above mentioned features, minus the HTML manipulation of the tablulate function within charlist.js. To run this locally to see the code 
all is needed is a pull request on github this will give you the full data sets and the code of the dashboard.
I also put all my HTML, CSS and JS into checkers from w3Schools/Esprima prior to uploading to GitHubPages. To ensure that I had as clean as possible code - I am aware of a warning from my jumbotron apparently not being eligible for being a child of the body tag   .


# Credits
## Media
I obtained 2 free to use images for the background and the Copyright sections on this project. The first one was available here https://www.goodfreephotos.com/other-photos/lord-of-the-rings-the-one-ring.jpg.php (Copyright image placeholder)
and the second was available here https://www.pexels.com/de-de/foto/herr-der-ringe-herr-des-rings-knechten-ring-1228268/. I'd like to thank both websites and any individuals involved for allowing free use on these images.

## Acknowledgements 
I was helped out by stackoverflow for a reduce function in my race dataset from Gordon Woodhull here: https://stackoverflow.com/questions/56039110/is-there-a-way-to-count-each-instance-of-person-in-race-only-once-then-disp/56048844?noredirect=1#comment98795755_56048844
I also took a basic table forming function (tabulate) from here: http://www.d3noob.org/2013/02/add-html-table-to-your-d3js-graph.html.

I recieved inspiration for this project from one of CI's mentors, Eventyret (Simen Daelin from his website here: https://eventyret.github.io/PokeDash/)
## Sources
The data for these charts and tables are taken from here https://www.kaggle.com/mokosan/lord-of-the-rings-character-data a big thanks to https://www.kaggle.com/mokosan Moko Sharma for his data!
