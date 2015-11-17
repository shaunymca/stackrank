CD into app directory.

Make sure you have node.js installed.

The easiset way is to use [Homebrew](http://brew.sh/) (install homebrew first) to install it.
`brew install node`

In the project directory, run:
`sudo npm install`

Once that completes, run
`node app.js`  

Web can be viewed at http://localhost:3000

All angular stuff will be in `/public`.

TODO -
* Figure out SOQL to get the historical data
* Figure out how to get call data out of Jive
* Set up sf pushtopics for incremental changes
* Push the data from the dw to angular
* Have angular deal with the data and update the table.
