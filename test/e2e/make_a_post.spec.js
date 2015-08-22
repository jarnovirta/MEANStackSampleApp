var chai = require('chai');
chai.use(require('chai-as-promised'));
var expect = chai.expect;
var db = require('../../db');

describe('making a post', function () {
	it('creates an account and a new post', function () {
		// go to home page
		browser.get('http://localhost:3001');
		// click 'login'
		element(by.css('nav .register')).click();
		// browser.pause();

		// fill out and submit login form
		element(by.model('username')).sendKeys('jv');
		element(by.model('password')).sendKeys('pass');
		element(by.css('form .btn')).click();


		browser.pause();
		// submit a new post on the posts page
		var post = 'Protractor test post ' + Math.random();
		element(by.model('postBody')).sendKeys(post);
		element(by.css('form .btn')).click();

		// the user should now see their post as the first

		expect(element.all(by.css('ul.list-group li')).first()
			.getText()).to.eventually.contain(post);
		
		// post on the page
		afterEach(function() {
			db.connection.db.dropDatabase();
		})
	});
});