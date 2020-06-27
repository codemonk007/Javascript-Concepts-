
In programming languages like e.g Java or C# the ?main program flow happens on the main thread or process and the occurrence of events independently of the main program flow is the spawning of new threads or processes that runs code in parallel to the main program flow.


This is not the case with JavaScript. 

That is because a JavaScript program is single threaded and 

all code is executed in a sequence, not in parallel. 
In JavaScript this is handled by using what is called an **asynchronous non-blocking I/O model**.

What that means is that **while the execution of JavaScript is blocking, I/O operations are not**.
I/O operations can be fetching data over the internet with Ajax or over WebSocket connections,
querying data from a database such as MongoDB or accessing the filesystem with the NodeJs 
fs module. All these kind of operations are done in parallel to the execution of your code 
and it is not JavaScript that does these operations; to put it simply, the underlying engine
does it.
