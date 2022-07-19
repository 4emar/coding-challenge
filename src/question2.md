**Question 2: How would you design an infinite scroll view, like feed on Facebook?**

To achieve this effect of an infinite scroll view, we would need to adjust the pagination of the data that we are
showing. The way that infinite scroll works is, as soon as we get to the bottom of our results, it will query the next
pages of results and add them to the bottom of our page. Because of this we need to keep track on what page we are on.

For this to work we need to set up an axios get method that will take all the data that we want to display. The query
and the page number will be stored in state, and we can edit them easily with every update. Additionally we would need
to check if there is more data that needs to be shown, so we know when to stop the loading of new data, as well as an
error catcher for the same reason.

The next step will be implementing the pagination, by using useRef. useRef is a value that persists after each render,
and in React everything that we have stored from a render is stored in state, and with useRef we are able to store the
data that comes in between renders, that is not part of our state. In our case we would be using it to reference the
intersectionObserver which is part of the document API.

Moreover, we would need to save the last element of the current render, to know when to iterate the page number, and to
do that we would need to use useCallback. useCallback will lead to a call of a function, at the moment when our last
element is shown on the screen.

When we get to our last element of the current render, the intersectionObserver needs to be disconnected from it,
because we need to reconnect it to the new last element. We will do that when the current last element is intersects
with the node that we are displaying. And that is the moment when we check if the API has more data to display, and if
yes, we update our page number, and more data will be displayed.
