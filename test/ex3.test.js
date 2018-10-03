var expect  = require('chai').expect;
var request = require('request');
var assert = require('assert');
describe("ex3",function(){
    it('Main page url', function(done) {
        request('http://localhost:3001/write', function(error, response) {
            expect(response.body).to.equal("Successfully Written to File.");
            done();
        });
    });
});