const { 
    createRandomContact,
    randomContactFactory
    } = require("../contacts")

describe("this will test createRandomContact", () => {
    it("should check if phoneNumber value is inputted as a string", () => {
      const actual = typeof createRandomContact().phoneNumber;
      const expected = "string";
      expect(actual).toEqual(expected);
    });
  });

  describe("this will test randomContactFactory", () => {
    it("should check to see if randomContactFactory creates multiple contacts", () => {
      const input = 2;
      const actual = randomContactFactory(input).length;
      const expected = 2
      expect(actual).toEqual(expected);
    });
  });