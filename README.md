# Set to stun
set to stun is a site I designed to act as a fun pass time to anyone who uses it, and it's a game that uses luck and chance to determine who wins each time.

## Features
### Header
contains a header that spells out the name of the website

### Footer
Social media links provide a simple click away style link to Facebook, Twitter and Instagram.

### prompt
this is there to encourage the user to press one of five buttons (rock, paper, scissors, lizard or spock).

### buttons
with the help of javascript, these visually appealing icons allow the user to play the game and select their choice.

### outcome area
this first gives a word of encouragement to the user, but with javascript, it displays a message showing the users and computers choice and says who won and lost the round or if it was a draw.

### scoreboard
is a visually appealing way for the user to track who is currently winning and, with the help of javascript, maintains its self by increasing the user score if they win and vice versa and stays the same on a draw.

### help section
allows the user to see what beats what so they can better understand the game.

### Other features
The aria-label and labelledby elements used to help with accessibility. 

The use of fontawesome provides a visually appealing font for the reader to enjoy and a backup sans-serif if the browser doesn't allow its use.

And using CSS I've added a background colour that acts as a lovely contrast to the black and purple present.
Future improvements.

## Testing
I used google chromes developer tools to see how it would display in other viewports and test out code before adding it to gitpod.
I also used my phone and a tablet to see how it works on them directly.
I tested it on chrome, Microsoft edge and firefox to see how it would work on popular browsers.
I also used the w3c site to check the HTML and CSS as I went through my development process and jshint for the javascript.
I also asked a few friends to try the game and report any issues they found.

## UX

### Business goals
- This website aims to provide the user with a fun and interactive platform to play rock paper lizard spock.
- Develop a fully functional game to bring in users, expand my portfolio, and bring my work to a broader audience.

### Users goals
#### New user
- easy to use website that has an easy to use layout.
- A visually appealing website that grabs my attention.
- A way to keep track of my score.
- I want an option to explain how the game works to avoid confusion.

#### Repeat users
- To be able to grab my attention no matter how many times i see it.
- I want to be able to remind myself how the game works if need be.

### User story
#### Owner
- as the site owner, I want to produce a fully functioning game to bring back repeat users.
- I know when I have achieved this when my function does the desired function and produces minimal errors.

#### New customer
- I want a fun and interactive game to use to pass the time.
- As a new user, I want to understand what I'm supposed to do so that instructions would be helpful.
- As a new user, I want to be visually drawn to what's in front of me; otherwise, I won't want to spend much time using or even trying the game.
- I want easy to use mechanics as it's a simple game and doesn't need to be overly convoluted.

#### Returning users
- As a returning user, I want to play a game that continues to grasp my attention and doesn't get boring too quickly.
- As a returning user, I want to feel challenged like the game is worth my time; if it's too easy, there's no point in trying.
- I want to track my score automatically and visually see the score and timer to add suspense.
- As a returning user, just like a new user, I want to come to the site feeling like it has a visually appealing aspect to it; otherwise, no matter how good the game is, if it's not visually appealing, I won't want to play it.

## Website structure
First, I used Wireframe to provide a basic template of my website. This acks to give me an end goal that I would work towards.

Then I used CSS actually to style the elements to look like I planned.

## Wireframe
![Wireframe](assets/media-reedme/wireframe.png)

## Bugs/Fixes
one bug was that my javascript had an unused function and missing semicolons, but it was an easy thing to resolve with the help of jshint.

My HTML was missing h elements in some sections; to resolve this, I just had to add them in, and it removed the issues.

As for the CSS, I had an issue with text-decoration as I didn't realise that you couldn't specify a width, so I used the CSS validator to find and resolve this issue by removing it, which removes the bug.

## Error warning

![Error](assets/media-reedme/errorimage.png)
the only issues in js are Metrics
There are 27 functions in this file.

Function with the largest signature takes 2 arguments, while the median is 2.

Largest function has 5 statements in it, while the median is 3.

The most complex function has a cyclomatic complexity value of 26 while the median is 1.

Other than this, there are no errors.

No errors or warnings are found in HTML, and the only CSS warning is that it cannot validate for googlefonts and no errors.

## Validator used
- https://jigsaw.w3.org/css-validator/ 
- https://validator.w3.org/
- https://jshint.com/

## Deployment
The project is deployed on GitHub Pages, and I used Gitpod to develop my assignment. When I committed all changes, I used git add . Followed by git commit -m "" providing a description or summary of the changes. I used git push to save changes to GitHub.

To deploy a project, I had to:
Log in to GitHub and click on the repository I wanted to deploy in this case, my milestone one project, then we select the settings option above the style gallery and scroll till you reach the section listed as Github pages. Click on the source options box with the caption none and select the main branch and save. After this, refresh the page to get the link. It may take some time to create the webpage, but it will notify you when it is ready.

In my case, the link was posted on Github pages as https://baileymuir.github.io/project_2_rock_paper_lizard_spock/ ; after going back, it stated that the Pages settings now has a dedicated tab! Check it out here! Upon clicking, it will provide you with the link address.

Host locally
Log in to GitHub and click on the repository to download the file. Click the code button next to the green Gitpod button and press download ZIP; this will download all files in this repository and is easier than using the link it provides you to download.

## Credits

all Fontawesome code came directly from https://fontawesome.com/

https://www.w3schools.com/css/css3_multiple_columns.asp was helpful when trying to fix and find errors in my code.

https://validator.w3.org/ was used to help find any issues in my HTML code.

https://jshint.com/ was used to help find errors and fix them in my javascript

https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const where i got /*jshint esversion: 6 */

For help with coding, I watched https://www.youtube.com/watch?v=qWPtKtYEsN4 and used the lessons in the coursework.

## Resources used
- HTML and CSS - to structure and style the pages, respectively.
- Javascript was used for the responsive parts of my webpage.
- Fontawesome - for icons used in footer.
- Googlefonts - provided me with the fonts needed to style my page.
- GitHub-was used as a way to store and deploy my assignment.
- Gitpod - allowed me to develop my assignment.
- Developer tools chrome - allowed me to make small changes to work without affecting Gitpod, and check how it would look on specific devices based on their viewport size.
- Balsamiq wireframe - was used to make the basic design as a template.
- My first projects readme.md.

## future development

- A score limit to add more suspense and make the user feel accomplished when they finally win.
- A way to play with friends in the future.
- Different levels of difficulty so that returning users will have more aspects to play with.

## Finished project - screenshots
![Screenshot](assets/media-reedme/completedgame.png)