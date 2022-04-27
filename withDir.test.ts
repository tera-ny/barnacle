import { withDir } from "./withDir.ts";
import { describe, it } from "https://deno.land/std@0.136.0/testing/bdd.ts";
import {
  assertRejects,
  assertEquals,
} from "https://deno.land/std@0.136.0/testing/asserts.ts";

const withDirTest = describe("withDir");

it(withDirTest, "should be deleted temp dir at test after", async () => {
  let dirSrc: string;
  await withDir(async (dir) => {
    dirSrc = dir;
    const info = await Deno.lstat(dir);
    assertEquals(info.isDirectory, true);
  });
  await assertRejects(() => Deno.lstat(dirSrc), Deno.errors.NotFound);
});
