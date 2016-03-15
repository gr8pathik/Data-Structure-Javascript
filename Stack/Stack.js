function Stack(){
	this.size = 0;
	this.storage = {};
}

Stack.prototype.push = function(data){
	this.storage[this.size] = data;
	this.size++;
	return this.storage;
}

Stack.prototype.pop = function(){
	--this.size;
	var deletedData = this.storage[this.size]
	delete this.storage[this.size];
	return deletedData;
}

Stack.prototype.show = function(){
	return this.storage;
}

var undoOp = new Stack();
undoOp.push("1st");
undoOp.push("2nd");
undoOp.push("3rd");
undoOp.push("4th");
undoOp.show();
undoOp.pop();
undoOp.show();
undoOp.pop();
undoOp.show();
undoOp.pop();
undoOp.show();
undoOp.pop();
undoOp.show();