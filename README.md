# LoTR Dashboard
### Milestone Project 2 Overview
This project is a data dashboard, the data here is based upon data from the films books and characters 
based in the Lord of the Rings universe created bj J.R.R Tolkien. It will show graphs, charts and other data presentation tools
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
### To be implemented
1. Landing Page, Dashboard space creation, List page created
2. CSS styles for the dashboard
3. All charts, graphs etc created
4. Charts displayed using SCSS and the tools within D3/CrossFilter

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

#### To change
1. Add a different method to create the table.
2. Change the way the piechart shows for the movie revenue, for some reason the Two Towers is displaying nearly 5x its actual value.
3. Figure out a way to display the top 15 Characters by Words spoken, rather than displaying all characters by the amount of times they speak.


## Deployment




# Credits

## Sources
The data for these charts and tables are taken from here https://www.kaggle.com/mokosan/lord-of-the-rings-character-data a big thanks to https://www.kaggle.com/mokosan Moko Sharma for his data!