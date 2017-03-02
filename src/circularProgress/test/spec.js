import CircularProgress from '../';

describe('CircularProgress', () => {
    describe('initialized without params', () => {
        const linearProgress = new CircularProgress();

        it("'s percent should be 0.", () => {
            expect(linearProgress.data.percent).to.be(0);
        });
    });
});
