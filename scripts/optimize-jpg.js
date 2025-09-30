const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeJpg(inputPath, outputPath, quality = 80) {
  try {
    const stats = fs.statSync(inputPath);
    const fileSizeInKB = stats.size / 1024;
    console.log(`\nProcessing: ${inputPath}`);
    console.log(`Original size: ${fileSizeInKB.toFixed(2)} KB`);

    await sharp(inputPath)
      .webp({ quality, effort: 6 })
      .toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    const newSizeInKB = newStats.size / 1024;
    const reduction = ((stats.size - newStats.size) / stats.size * 100).toFixed(2);

    console.log(`New size: ${newSizeInKB.toFixed(2)} KB`);
    console.log(`Reduction: ${reduction}%`);

    return { success: true, originalSize: fileSizeInKB, newSize: newSizeInKB, reduction };
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function optimizeAllJpgs() {
  const jpgsToOptimize = [
    {
      input: 'public/images/blog/move-1-thumb.jpg',
      output: 'public/images/blog/move-1-thumb.webp',
      quality: 75
    },
    {
      input: 'public/images/pushkar-author.jpg',
      output: 'public/images/pushkar-author.webp',
      quality: 75
    }
  ];

  console.log('Starting JPG optimization...\n');
  console.log('='.repeat(50));

  let totalOriginalSize = 0;
  let totalNewSize = 0;

  for (const image of jpgsToOptimize) {
    const result = await optimizeJpg(image.input, image.output, image.quality);
    if (result.success) {
      totalOriginalSize += result.originalSize;
      totalNewSize += result.newSize;
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log('\nOptimization Summary:');
  console.log(`Total original size: ${totalOriginalSize.toFixed(2)} KB`);
  console.log(`Total new size: ${totalNewSize.toFixed(2)} KB`);
  console.log(`Total savings: ${(totalOriginalSize - totalNewSize).toFixed(2)} KB`);
  console.log(`Overall reduction: ${((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(2)}%`);
}

optimizeAllJpgs().catch(console.error);
