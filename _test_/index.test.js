const {
    createUserName,
    checkForDuplicates } = require("../usergeneration.js");
 const userNameData  = require("../userData/userNameInfo");

    describe("this will test createUserName", () => {
        it("should check if value input to function is a string", ()=> {
            const actual = typeof createUserName();
            const expected = "string";
            expect(actual).toEqual(expected);
        });
    });

    describe("this will test checkForDuplicates", () => {
        it("should check if value input to function is a already in the data, if it is return error message", ()=> {
            const input = "testerName";
            const actual = checkForDuplicates(userNameData,input);
            const expected = "Username is taken";
            expect(actual).toEqual(expected);
        });
    });