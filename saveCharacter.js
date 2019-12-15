const loadPost = require('./loadPostBody')
const fUtil = require('./fileUtil');
const fs = require('fs');

module.exports = function (req, res, url) {
	if (req.method != 'POST' || url.path != '/goapi/saveCCCharacter/') return;
	loadPost(req, res).then(data => {
		fs.writeFile(fUtil.getNextFile('char-', '.xml'), data.body,
			e => e ? res.end('10') : res.end('00'));
	});
	return true;
}