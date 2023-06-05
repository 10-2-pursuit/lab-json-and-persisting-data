//const { writeJSON, readJSON } = require("./src/fs.js");
//const { createArrF } = require("./src/gen.js");
const { run } = require("../index.js");

describe('run()', () => {
    test("write test: is it end  w/o error?", () =>{
        process.argv[2] = "1";
        const actual = run();
        expect(actual).toBe(0);
    });
    test("read test: is it end  w/o error?", () =>{
        process.argv[2] = null;
        const actual = run();
        expect(actual).toBe(0);
    });
    
});

