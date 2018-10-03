var expect  = require('chai').expect;
var request = require('request');
var assert = require('assert');
describe("ex2",function(){
    it('Main page url', function(done) {
        request('http://localhost:3001/?input1=2&input2=3', function(error, response) {
            expect(response.body).to.equal("product of two numbers : 6");
            done();
        });
    });
});