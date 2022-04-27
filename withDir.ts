export const withDir = async (
  cb: (tempDir: string) => void | Promise<void>,
  option?: Deno.MakeTempOptions
) => {
  const tempDir = await Deno.makeTempDir(option);
  await cb(tempDir);
  await Deno.remove(tempDir, { recursive: true });
};
