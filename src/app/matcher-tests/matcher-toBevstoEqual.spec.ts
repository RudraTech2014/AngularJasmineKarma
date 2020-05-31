describe('toBe vs ToEqual',()=>{
    //This test will fail as the .toBe does not deep equality.a
    //
    xit('should test "toBe" matcher',()=>{
        let a = {
            val: 10
        };
        let b = {
            val: 10
        };
        expect(a).toBe(b);
    });

    it('should test "toEqual" matcher',()=>{
        let a= {
            val: 10
        };
        let b= {
            val: 10
        };
        expect(a).toEqual(b);
    });

    
});