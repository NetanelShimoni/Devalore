const Devalor = require('../devalor');
// import devalor from "../devalor"
describe("Test devalor project", () => {
    test("Check URL", () => {
        expect(Devalor.getURL()).toEqual("https://api.exchangerate.host/latest");
    })
    test("Check all data if under 10", async () => {
        const data = await Devalor.getRatesAfterFilter();
        const isUnder10 = data.every(rate => rate < 10);
        expect(isUnder10).toEqual(true);
    })

});