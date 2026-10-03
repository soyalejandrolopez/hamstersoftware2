import { build } from 'esbuild'
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'

const directory = await mkdtemp(join(tmpdir(), 'hs-blog-tests-'))
try {
  const outfile = join(directory, 'blog.test.mjs')
  await build({
    entryPoints: ['tests/blog.test.jsx'],
    outfile,
    bundle: true,
    platform: 'node',
    format: 'esm',
    jsx: 'automatic',
    define: { 'process.env.NODE_ENV': '"production"' },
    // React's CommonJS server renderer needs Node's require in an ESM bundle.
    banner: { js: 'import { createRequire } from "node:module"; const require = createRequire(import.meta.url);' },
  })
  const result = spawnSync(process.execPath, ['--test', outfile], { stdio: 'inherit' })
  process.exitCode = result.status ?? 1
} finally {
  await rm(directory, { recursive: true, force: true })
}
