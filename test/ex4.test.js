var expect  = require('chai').expect;
var request = require('request');
var assert = require('assert');
describe("ex4",function(){
    it('Main page url', function(done) {
        request('http://localhost:9000/nonRepeating/testee', function(error, response) {
            expect(response.body).to.equal("first non repeating character is: s");
            done();        
    });
});
});