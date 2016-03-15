# Data-Structure with Javascript: Queue

## A Queue
Similar to a stack, a queue is a linear data structure. Unlike a stack, a queue deletes only the oldest added data.  

To help you conceptualize how this would work, let's take a moment to use an analogy. Imagine a queue being very similar to the ticketing system of a deli. Each customer takes a ticket and is served when their number is called. The customer who takes the first ticket should be served first. 

Let's further imagine that this ticket has the number "one" displayed on it. The next ticket has the number "two" displayed on it. The customer who takes the second ticket will be served second. (If our ticketing system operated like a stack, the customer who entered the stack first would be the last to be served!)

A more practical example of a queue is the event-loop of a web browser. As different events are being triggered, such as the click of a button, they are added to an event-loop's queue and handled in the order they entered the queue. 

## Operations of a Queue
Since we now have a conceptual model of a queue, let us define its operations. As you will notice, the operations of a queue are very similar to a stack. The difference lies in where data is removed. 

- enqueue(data) adds data to a queue. 
- dequeue removes the oldest added data to a queue.  
- size() to display the size of queue
- show() to show the data.