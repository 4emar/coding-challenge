**Question 1: List a few problems of JavaScript as a language.**

As you already know I don't have any professional experience in working with JavaScript, but in the time that I've used
it I noticed several things that I don't like. Firstly, the absence of the integer type. In languages like C, C++, Java,
the first thing we learn is input and addition of integers, and it is strange for a developer to use JS, and he can't
create a 64-bit integer to use. This can be a problem when we are working with the numbers, and we try to compare them.
For example:

var x = 0.1 + 0.2; console.log(x); //output: 0.30000000000000004 console.log(x === 0.3)
//output: false

The next problem that I can state, is not really a big problem, but it can lead to confusion and errors, and it is the
declaration of variables without a strict variable type assigned to it.

var x = 1001; var x = "Marko";

As an example, in Java or C, this won't be possible, since you would need to define x as a integer first, so you won't
be able to assign a string to it, but this is the case since JS is a weakly typed language.

Another problem is the absence of ArrayLists in JS, since they can be very handy when working in other languages, and in
JS we only have Arrays available to use. So, we don't have an option to store data linked to each other like in a list.

Moreover, I don't like the fact that it assumes that everything is a string. For example:

const points = [40, 100, 1, 5, 25, 10]; console.log(points.sort()); //output: [ 1, 10, 100, 25, 40, 5 ]
points.sort(function(a, b){return a-b}); console.log(points)
//output: [ 1, 5, 10, 25, 40, 100 ]

All in all, I haven't had any big problems with JS, it just requires more concentration when working with it.