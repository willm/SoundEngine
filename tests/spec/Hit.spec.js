describe("Hit", function  (){

	var hit;

	beforeEach(function (){
		hit = new Hit();
	})


	it("should set up the hit correctly", function (){
		expect(hit.isOn).toBe(false);
		expect(hit.pitch).toEqual(1);
	});

	it("should toggle isOn when set is called", function (){
		hit.set();
		
		expect(hit.isOn).toBe(true);
		
		hit.set();
		
		expect(hit.isOn).toBe(false);
	});
	
	it("should set the pitch", function (){
		hit.changePitch(3);
		
		expect(hit.pitch).toEqual(3);
	});

});
