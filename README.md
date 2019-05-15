# LoTR Dashboard
### Milestone Project 2 Overview
This project is a data dashboard, the data here is based upon data from the films books and characters 
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
The features of the data dashboard are 3 pages of data that have been graphed and pie charted to show parts of a whole, this shows the spread of races, words spoken, times spoken and facts on the movie data that some viewers may find interesting.
I've also added my own take on the data sets as to what may have happened and why certain races are only shown as having 2 or 1 individual and have put across my view as to why they are so low compared to other races.
In terms of the movies I have highlighted the fact that despite having a higher budget the second trilogy was not as critically acclaimed as the first, and the views as to why.

## Technologies Used
I have used a few different technologies to help my code this dashboard these are the following:
1. jQuery - This has been used to help simplify traversing the DOM and displaying different parts of the data.
2. D3 - This will be used to help simplify creating the different bars and charts
3. CrossFilter - This will also be used for the above reason.
4. BootStrap - Used to help minimise the amount of coding necessary with building the structure of the HTML


# To be done
## Testing
So far during the development I have been attempting to build tables and charts using DC and crossfilter. This has been trial and error work which can be seen in the version control, for example
at the moment of writing the data is currently displaying incorrectly, I have been trying different methods to remove certain aspects of the JSON's and to manipulate the data so that it looks 
and feels better, being as responsive as possible. 

The testing for the Table Creation has been trialing and erroring different table building techniques, the first technique wrote a table with "Object, object, object..."etc. for each instance of a character
in the associated characters.json

#### Bugs witin Testing
I had a lot of issues with implementing my table data as can be seen in my previous uploads to GitHub. I also have a bug where "0" is a dataset within my Times a race has spoken graph, i havent been able to wipe this zero out and this also
displays the "Undead" race as the same color as the "Ainur" still trying to figure this one out.

I also had issues making the table data without having to write the HTML until i found a tabluate function online, which I have utilised as this has saved



## Deployment
The website has been deployed on GitHub Pages, 



# Credits
## Acknowledgements 
I was helped out by stackoverflow for a reduce function in my race dataset from Gordon Woodhull here: https://stackoverflow.com/questions/56039110/is-there-a-way-to-count-each-instance-of-person-in-race-only-once-then-disp/56048844?noredirect=1#comment98795755_56048844
I also took a basic table forming function (tabulate) from here: http://www.d3noob.org/2013/02/add-html-table-to-your-d3js-graph.html
## Sources
The data for these charts and tables are taken from here https://www.kaggle.com/mokosan/lord-of-the-rings-character-data a big thanks to https://www.kaggle.com/mokosan Moko Sharma for his data!
