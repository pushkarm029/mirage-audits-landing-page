const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage(inputPath, outputPath, quality = 80) {
  try {
    const stats = fs.statSync(inputPath);
    const fileSizeInMB = stats.size / (1024 * 1024);
    console.log(`\nProcessing: ${inputPath}`);
    console.log(`Original size: ${fileSizeInMB.toFixed(2)} MB`);

    await sharp(inputPath)
      .webp({ quality, effort: 6 })
      .toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    const newSizeInMB = newStats.size / (1024 * 1024);
    const reduction = ((stats.size - newStats.size) / stats.size * 100).toFixed(2);

    console.log(`New size: ${newSizeInMB.toFixed(2)} MB`);
    console.log(`Reduction: ${reduction}%`);

    return { success: true, originalSize: fileSizeInMB, newSize: newSizeInMB, reduction };
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function optimizeAllImages() {
  const imagesToOptimize = [
    {
      input: 'public/images/hero/hero-bg.png',
      output: 'public/images/hero/hero-bg.webp',
      quality: 75
    },
    {
      input: 'public/images/hero/hero3d.png',
      output: 'public/images/hero/hero3d.webp',
      quality: 80
    },
    {
      input: 'public/images/backgrounds/noise-bg.png',
      output: 'public/images/backgrounds/noise-bg.webp',
      quality: 85
    },
    {
      input: 'public/images/logos/near.png',
      output: 'public/images/logos/near.webp',
      quality: 90
    },
    {
      input: 'public/images/logos/xlm.png',
      output: 'public/images/logos/xlm.webp',
      quality: 90
    },
    {
      input: 'public/images/logos/sui.png',
      output: 'public/images/logos/sui.webp',
      quality: 90
    },
    {
      input: 'public/images/logos/solana.png',
      output: 'public/images/logos/solana.webp',
      quality: 90
    },
    {
      input: 'public/images/logos/rust.png',
      output: 'public/images/logos/rust.webp',
      quality: 90
    }
  ];

  console.log('Starting image optimization...\n');
  console.log('='.repeat(50));

  let totalOriginalSize = 0;
  let totalNewSize = 0;

  for (const image of imagesToOptimize) {
    const result = await optimizeImage(image.input, image.output, image.quality);
    if (result.success) {
      totalOriginalSize += result.originalSize;
      totalNewSize += result.newSize;
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log('\nOptimization Summary:');
  console.log(`Total original size: ${totalOriginalSize.toFixed(2)} MB`);
  console.log(`Total new size: ${totalNewSize.toFixed(2)} MB`);
  console.log(`Total savings: ${(totalOriginalSize - totalNewSize).toFixed(2)} MB`);
  console.log(`Overall reduction: ${((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(2)}%`);
}

optimizeAllImages().catch(console.error);
