window.addEventListener('touchstart', function() {

	// create empty buffer
	var buffer = myContext.createBuffer(1, 1, 22050);
	var source = myContext.createBufferSource();
	source.buffer = buffer;

	// connect to output (your speakers)
	source.connect(myContext.destination);

	// play the file
	source.noteOn(0);

}, false);