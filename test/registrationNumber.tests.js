describe("createRegistrationNumber Function", function() {
    it('should return', function(){
        var regNumberInstance = createRegistrationNumber();

        regNumberInstance.setRegNumber('CA 45789');
        
        assert.equal(regNumberInstance.getRegNumber(), 'CA 45789');
      
    });

    
});