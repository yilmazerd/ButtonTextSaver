


function PatientView(_objects) {
	this._objects = _objects;
	this.dataTypes = ['q','m','m','q']
	this.id = 0;
}

PatientView.prototype.increase = function() {
	if (this.id<this.dataTypes.length-1) {this.id++;return true;}
	return false;
}

PatientView.prototype.reduce = function() {
	if (this.id>0) {this.id--;return true;}
	return false;
}

PatientView.prototype.getid = function() {
	return this.dataTypes[this.id]
}

PatientView.prototype.next = function() {
	// load the next view
}

PatientView.prototype.previous = function() {
	// in most cases, load the previos view
}


