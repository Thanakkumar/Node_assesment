var expect  = require('chai').expect;
var request = require('request');
var assert = require('assert');
describe("ex1", function() {
it('Main page url', function(done) {
    request('http://localhost:3001', function(error, response) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
it('Main page content', function(done) {
    request('http://localhost:3001', function(error, response) {
        assert.notEqual(response.body,"")
        done();
    });
});
});



