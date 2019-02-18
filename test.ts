import { assert, test, runTests } from "https://deno.land/x/testing/mod.ts";
import { escapeStringRegexp } from "./mod.ts";

test({name: "escapeStringRegexp", fn: () => {
        assert.equal(escapeStringRegexp('\\ ^ $ * + ? . ( ) | { } [ ]'), 
            '\\\\ \\^ \\$ \\* \\+ \\? \\. \\( \\) \\| \\{ \\} \\[ \\]');
}});

runTests();