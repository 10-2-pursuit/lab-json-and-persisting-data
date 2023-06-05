const { writeJSON, readJSON } = require("../src/fs.js");

describe('readJSON', () => {
    const mock = require('mock-fs');
    mock.restore();
    mock({
        'folderName': {
            'index.json': '{"_id":"d3156ec1-944f-4a25-afef-ca2811b78278"}'
        },
    })
    const file = `index.json`;
    const path = `${process.cwd()}/folderName`;
    const actual = readJSON(path, file);
    
    test("opening file properly", ()=>{
        expect(actual).toStrictEqual({"_id":"d3156ec1-944f-4a25-afef-ca2811b78278"});
    })
    test("if file does not exist, catch ENOENT error", ()=>{
        try{
            const actual2 = readJSON(path, "NOTHING");
        } catch (e) {
            expect(e.code).toEqual('ENOENT');
        }
    })
    mock.restore();
});
