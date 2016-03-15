# Data-Structure with Javascript: Stack

## Operations of a Stack
In computer science, a stack is a linear data structure. If this statement holds marginal value to you, as it originally did with me, consider this alternative: A stack organizes data into sequential order. 

This sequential order is commonly described as a stack of dishes at a cafeteria. When a plate is added to a stack of dishes, the plate retains the order of when it was added; moreover, when a plate is added, it is pushed towards the bottom of a stack. Every time we add a new plate, the plate is pushed towards the bottom of the stack, but it also represents the top of the stack of plates. 

This process of adding plates will retain the sequential order of when each plate was added into the stack. Removing plates from a stack will also retain the sequential order of all plates. If a plate is removed from the top of a stack, every other plate in the stack will still retain the correct order in the stack. What I am describing, possibly with too many words, is how plates are added and removed at most cafeterias! 

To provide a more technical example of a stack, let us recall the 'undo' operation of a text editor. Every time text is added to a text editor, this text is pushed into a stack. The first addition to the text editor represents the bottom of the stack; the most recent change represents the top of the stack. If a user wants to undo the most recent change, the top of the stack is removed. This process can be repeated until there are no more additions to the stack, which is a blank file!  

Operations of a Stack

Since we now have a conceptual model of a stack, let us define the two operations of a stack:

- push(data) adds data.
- pop() removes the most recently added data.
- show() to display the data.