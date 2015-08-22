var Post = require('../../models/post');
var router = require('express').Router();
var websockets = require('../../websockets');
var pubsub = require('../../pubsub');

router.get('/', function(req, res, next) {
	Post.find()
	.sort('-date')
	.exec(function(err, posts) {
		if (err) { return next(err) }
		res.json(posts);
	})
});

router.post('/', function (req, res, next) {
	var post = new Post({ body: req.body.body });
	post.username = req.auth.username;
	post.save(function (err, post) {
		if (err) { console.log(err);
			return next(err) }
		pubsub.publish('new_post', post);
		res.status(201).json(post);

	});
	
});

pubsub.subscribe('new_post', function(post) {
	websockets.broadcast('new_post', post);
})
module.exports = router;