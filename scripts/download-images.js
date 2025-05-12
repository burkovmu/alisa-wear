const https = require('https');
const fs = require('fs');
const path = require('path');

// Создаем директорию для изображений, если её нет
const baseDir = path.join(__dirname, '../public/images/products');
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

// Функция для загрузки изображения
const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const writeStream = fs.createWriteStream(filepath);
        response.pipe(writeStream);
        writeStream.on('finish', () => {
          writeStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
};

// Массив изображений для загрузки
const images = [
  // Платья
  {
    url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1',
    filename: 'dress1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217',
    filename: 'dress1_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1',
    filename: 'dress1_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
    filename: 'dress2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
    filename: 'dress2_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
    filename: 'dress2_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    filename: 'dress3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    filename: 'dress3_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    filename: 'dress3_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
    filename: 'dress4.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
    filename: 'dress4_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
    filename: 'dress4_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1',
    filename: 'dress5.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217',
    filename: 'dress5_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1',
    filename: 'dress5_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    filename: 'dress6.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    filename: 'dress6_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    filename: 'dress6_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
    filename: 'dress7.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
    filename: 'dress7_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
    filename: 'dress7_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1',
    filename: 'dress8.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217',
    filename: 'dress8_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1',
    filename: 'dress8_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    filename: 'dress9.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    filename: 'dress9_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    filename: 'dress9_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
    filename: 'dress10.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
    filename: 'dress10_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
    filename: 'dress10_3.jpg'
  },
  // Блейзеры
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer1_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer1_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer2_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer2_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer3_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer3_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer4.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer4_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer4_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer5.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer5_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer5_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer6.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer6_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer6_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer7.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer7_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer7_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer8.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer8_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer8_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer9.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer9_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer9_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer10.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer10_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
    filename: 'blazer10_3.jpg'
  },
  // Топы
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top1_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top1_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top2_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top2_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top3_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top3_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top4.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top4_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top4_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top5.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top5_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top5_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top6.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top6_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top6_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top7.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top7_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top7_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top8.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top8_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top8_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top9.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top9_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top9_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top10.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top10_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
    filename: 'top10_3.jpg'
  },
  // Юбки
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt1_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt1_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt2_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt2_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt3_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt3_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt4.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt4_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt4_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt5.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt5_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt5_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt6.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt6_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt6_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt7.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt7_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt7_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt8.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt8_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt8_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt9.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt9_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt9_3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt10.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt10_2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    filename: 'skirt10_3.jpg'
  }
];

// Загружаем все изображения
const downloadAllImages = async () => {
  for (const image of images) {
    try {
      const filepath = path.join(baseDir, image.filename);
      await downloadImage(image.url, filepath);
      console.log(`Downloaded: ${image.filename}`);
    } catch (error) {
      console.error(`Error downloading ${image.filename}:`, error);
    }
  }
};

downloadAllImages().catch(console.error); 