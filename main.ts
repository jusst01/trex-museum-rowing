/**
 * ai-excited-01 entry: T-Rex skeleton rowing a boat through a flooded natural-history museum
 * while a waterfall crashes through the glass ceiling.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const sourcePath = path.join(process.cwd(), 'entry.png');
const destPath = path.join(outputDir, 'entry.png');

fs.mkdirSync(outputDir, { recursive: true });
fs.copyFileSync(sourcePath, destPath);

const stats = fs.statSync(destPath);
console.log(`Verified output file size: ${stats.size} bytes`);
