# Event handling:
### event.preventDefault():
* It is used to prevent the default behaviour of a browser.
* Cerain operations like submitting a form would reload the page. this line prevents the berowser from performing the default operations.
* These default operations are done by browser before JS was introduced. which helps in redirecting ti a page and submitting a form etc.
* prevents breaking SPA and states.

## SPA
* Single Page Application
* It is where the whole application runs on a single page.
* There is no reload anywhere in the page
* React maintains SPA.
* For each call the changes are requested and recieved as a JSON file not a HTML
* It is used for fast rendering by not reloading. 
### Work Flow
* First it requestes for HTML page at initial.
* Mounts JS.

# Life cycle Methods in Class component [Reference](https://www.freecodecamp.org/news/react-component-lifecycle-methods/):
* There are 3 phases in class component:
    * Mounting
    * Updating 
    * Unmounting
