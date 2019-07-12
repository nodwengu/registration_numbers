describe("createRegistrationNumber Function", function() {
    it('should return "CA 45789" if "CA 45789" is proveded as input', function(){
        var registrationsInstance = createRegistrationNumber();

        registrationsInstance.setRegNumber('CA 45789');
        
        assert.equal(registrationsInstance.getRegNumber(), 'CA 45789');
      
    });

    it('should return ["CA 34567", "CA 888"] when ["CL 900", "CA 34567", "CJ 67890", "CA 888"] is passed as input', function(){
        var registrationsInstance = createRegistrationNumber();
        //let registrations = [{registration: 'CL 900'}, {registration: 'CJ 678 543'}, {registration:'CA 34567'}, {registration:'CJ 67890'}, {registration:'CN 7864'}, {registration:'CA 888'}, {registration:'CY 789'}, {registration:'CL 7878'}]
        let registrations = ['CL 900', 'CJ 678 543', 'CA 34567', 'CJ 67890', 'CN 7864', 'CA 888', 'CY 789', 'CL 7878']
        
        assert.deepEqual(registrationsInstance.getAllFromCapeTown(registrations), ['CA 34567', 'CA 888']);
    });

    it('should return ["CJ 678 543", "CJ 67890", "CJ 777"] when ["CJ 678 543", "CA 34567", "CJ 67890", "CL 7878", "CJ 777"] is provided as input ', function(){
        var registrationsInstance = createRegistrationNumber();
        let registrations = ['CJ 678 543', 'CA 34567', 'CJ 67890', 'CL 7878', "CJ 777"]
        
        assert.deepEqual(registrationsInstance.getAllFromPaarl(registrations), ['CJ 678 543', 'CJ 67890', 'CJ 777']);
    });

    it('should return ["CY 3434"] when ["CJ 678 543", "CA 34567", "CY 3434", "CL 7878", "CJ 777"] is provided as input ', function(){
        var registrationsInstance = createRegistrationNumber();
        let registrations = ['CJ 678 543', 'CA 34567', 'CY 3434', 'CL 7878', "CJ 777"]
        
        assert.deepEqual(registrationsInstance.getAllFromBellville(registrations), ['CY 3434']);
    });
    
    it('should return ["CL 0000", "CL 7878"] when ["CL 0000", "CA 34567", "CL 7878"] is provided as input ', function(){
        var registrationsInstance = createRegistrationNumber();
        let registrations = ['CL 0000', 'CA 34567', 'CL 7878']
        
        assert.deepEqual(registrationsInstance.getAllFromStellenbosch(registrations), ['CL 0000', 'CL 7878']);
    });

    it('should return the object "{registration: "CA 2020"}" when the reg number "CA 2020" is provided as input', function(){
        var registrationsInstance = createRegistrationNumber();

        registrationsInstance.setRegNumber('CA 2020')
        registrationsInstance.setRegObj();
        
        assert.deepEqual(registrationsInstance.getRegObj(), {registration: 'CA 2020'});
    });

    it('should return false when registration number provided does not already exist on the list', function(){
        var registrationsInstance = createRegistrationNumber();

        registrationsInstance.setRegNumber('CA 45789');
        var data = [{registration:'CA 123'}, {registration:'CL 900'}, {registration:'CY 246'}];

        assert.equal(registrationsInstance.checkRegNumber(data), false);
    });

    it('should return true when registration number provided already exist on the list', function(){
        var registrationsInstance = createRegistrationNumber();

        registrationsInstance.setRegNumber('CY 246');
        var data = [{registration:'CA 123'}, {registration:'CL 900'}, {registration:'CY 246'}];

        assert.equal(registrationsInstance.checkRegNumber(data), true);
    });
    
});