function Queue() {
    this.oldestIndex = 1;
    this.newestIndex = 1;
    this.storage = {};
}
 
Queue.prototype.size = function() {
    return this.newestIndex - this.oldestIndex;
};
 
Queue.prototype.enqueue = function(data) {
    this.storage[this.newestIndex] = data;
    this.newestIndex++;
};
 
Queue.prototype.dequeue = function() {
    var oldestIndex = this.oldestIndex,
        newestIndex = this.newestIndex,
        deletedData;
 
    if (oldestIndex !== newestIndex) {
        deletedData = this.storage[oldestIndex];
        delete this.storage[oldestIndex];
        this.oldestIndex++;
 
        return deletedData;
    }
};

Queue.prototype.show = function(){
	console.log(this.storage);
}

var ticketLine = new Queue();
ticketLine.enqueue("1st");
ticketLine.enqueue("2nd");
ticketLine.enqueue("3rd");
ticketLine.enqueue("4th");
ticketLine.show();
ticketLine.dequeue();
ticketLine.show();
ticketLine.dequeue();
ticketLine.show();
ticketLine.dequeue();
ticketLine.show();
ticketLine.dequeue();
ticketLine.show();