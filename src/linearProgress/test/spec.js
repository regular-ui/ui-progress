import LinearProgress from '../';

describe('LinearProgress', () => {
    describe('initialized without params', () => {
        const linearProgress = new LinearProgress();

        it("'s percent should be 0.", () => {
            expect(linearProgress.data.percent).to.be(0);
        });
    });
});
