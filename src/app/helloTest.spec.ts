describe('Test1', () => {

    let expected = '';
    let notexpected = '';

    beforeEach(() => {
        expected = 'hello';
        notexpected = 'hi';
    });

    afterEach(() => {
        expected = '';
        notexpected = '';
    });

    it('checks if hello is not hello', () => {
        expect('hello').not.toBe(notexpected);
    });
    it('checks if hello is hello', () => {
        expect('hello').toBe(expected);
    });
});
