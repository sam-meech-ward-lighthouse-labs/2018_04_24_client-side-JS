# Client side javascript

### Global Vars

JavaScript always has a global object.

* window
  - the global object
  - any global variable that we create, gets attached to the window object.
  - It's the current browser window / tab
* navigator
  - represents the browser application.
* document
  - Is the entry point to the DOM
  - It's how our javascript communicates with the HTML

### HTML & the DOM

- HTML tags like `<p>` create different elements on the page

- The DOM (Document object model) is the represntation of html in the form of JavaScript objects.
- The DOM is a tree structure built up of nodes.
- Each node represents a single element.

#### Traversal

```js
document.children[0].children[1].children[3].parentElement
```

traversing like this is a brittle way of accessing the DOM nodes.

#### Selection

```js
document.getElementsByTagName("li")[1];
document.getElementById("second-emoji");
document.getElementsByClassName("favorites");
```

```js
querySelector();
querySelectorAll();
```

Allow us to select items in the DOM in the same way we do in css.

#### Manipulation

using properties like `innerText` we can manipulate existing elements on the page.

#### Creation

```js
newItem = document.createElement("li")
emojiList.appendChild(newItem)
```

--- 

## Including Javascript Files

Include a javascript file into your html page using a script tag like this:

```js
<script src="index.js"></script>
```

make sure you put it at the bottom of the page so that the html renders first.

## Events

The power of using the DOM, is when we respond to events. Somtimes these are browser events, sometimes these user user events. 

- mouse click
- input text
- keyboard input 

---

## Links from class

- [NodeList and HTMLCollection](https://stackoverflow.com/questions/15763358/difference-between-htmlcollection-nodelists-and-arrays-of-objects?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)
- [Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [Fill Murray](https://www.fillmurray.com/)
- [Character Encoding](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)