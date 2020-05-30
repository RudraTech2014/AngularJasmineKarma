describe('Array Test', ()=>{
    it('Testing Array using "toEqual", arrays should be equal', ()=>{
        let a = [1,2,3];
        expect(a).toEqual([1,2,3]);
    });

    it('Testing Array using "toContain", array should contain element', ()=>{
        let strArr = ['abc','def','xyz'];
        expect(strArr).toContain('def');
    });
});