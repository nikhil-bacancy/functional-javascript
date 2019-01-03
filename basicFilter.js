function getShortMessages(messages) {
	// body...
	//console.log(messages);
	return messages.filter( msg => {
		return msg.message && msg.message.length < 50 ;
	}).map(obj => {
		return obj.message;
	});
}


 module.exports = getShortMessages;
