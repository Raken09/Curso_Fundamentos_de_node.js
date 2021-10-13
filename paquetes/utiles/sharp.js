const sharp = require('sharp');

sharp('original.png')
    .resize(200)
    .grayscale()
    .toFile('resized.png');