describe("createRegistrationNumber Function", function() {
    it('should return "CA 45789" if "CA 45789" is proveded as input', function(){
        var registrationsInstance = createRegistrationNumber();

        registrationsInstance.setRegNumber('CA 45789');
        
        assert.equal(registrationsInstance.getRegNumber(), 'CA 45789');
      
    });

    it('should return [ {registration: "CA 34567"}, {registration:"CA 888"} ] when [{registration: "CL 900"}, {registration: "CJ 678 543"}, {registration:"CA 34567"}, {registration:"CJ 67890"}, {registration:"CN 7864"}, {registration:"CA 888"}, {registration:"CY 789"}, {registration:"CL 7878"}] is passed as input', function(){
        var registrationsInstance = createRegistrationNumber();
        let registrations = [{registration: 'CL 900'}, {registration: 'CJ 678 543'}, {registration:'CA 34567'}, {registration:'CJ 67890'}, {registration:'CN 7864'}, {registration:'CA 888'}, {registration:'CY 789'}, {registration:'CL 7878'}]
        
        assert.deepEqual(registrationsInstance.getAllFromCapeTown(registrations), [ {registration: 'CA 34567'}, {registration:'CA 888'} ]);
    });

    it('should return [{registration:"CJ 678 543"}, {registration:"CJ 67890"}, {registration:"CJ 777"}] when [{registration:"CJ 678 543"}, {registration:"CA 34567"}, {registration:"CJ 67890"}, {registration:"CL 7878"}, {registration:"CJ 777"}] is provided as input ', function(){
        var registrationsInstance = createRegistrationNumber();
        let registrations = [{registration:'CJ 678 543'}, {registration:'CA 34567'}, {registration:'CJ 67890'}, {registration:'CL 7878'}, {registration:'CJ 777'}]
        
        assert.deepEqual(registrationsInstance.getAllFromPaarl(registrations), [{registration:'CJ 678 543'}, {registration:'CJ 67890'}, {registration:'CJ 777'}]);
    });

    it('should return [{registration:"CY 3434"}] when [{registration:"CJ 678 543"}, {registration:"CA 34567"}, {registration:"CY 3434"}, {registration:"CL 7878"}, {registration:"CJ 777"}] is provided as input ', function(){
        var registrationsInstance = createRegistrationNumber();
        let registrations = [{registration:'CJ 678 543'}, {registration:'CA 34567'}, {registration:'CY 3434'}, {registration:'CL 7878'}, {registration:"CJ 777"}]
        
        assert.deepEqual(registrationsInstance.getAllFromBellville(registrations), [{registration:'CY 3434'}]);
    });
    
    it('should return [{registration:"CL 0000"}, {registration:"CL 7878"}] when [{registration:"CL 0000"}, {registration:"CA 34567"}, {registration:"CL 7878"}] is provided as input ', function(){
        var registrationsInstance = createRegistrationNumber();
        let registrations = [{registration:'CL 0000'}, {registration:'CA 34567'}, {registration:'CL 7878'}]
        
        assert.deepEqual(registrationsInstance.getAllFromStellenbosch(registrations), [{registration:'CL 0000'}, {registration:'CL 7878'}]);
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

    it('should return true when registration number provided is a valid registration number', function(){
        var registrationsInstance = createRegistrationNumber();

        assert.equal(registrationsInstance.validInput('CA 4545'), true);
    });

    it('should return false when registration number provided is INVALID registration number', function(){
        var registrationsInstance = createRegistrationNumber();

        assert.equal(registrationsInstance.validInput('CB 4545'), false);
    });
    
});