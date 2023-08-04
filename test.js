const fs = require('fs');
const path = require('path');

const pageDir = path.join(__dirname, 'src', 'views', 'pages');

// Читаем все файлы в папке и записываем их названия в массив
fs.readdir(pageDir, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const pages = files.filter((file) => path.extname(file) === '.njk');

  // Создаем файл allPages.njk и записываем в него переменные Nunjucks
  const content = pages
    .map((page) => `{ title: '${path.parse(page).name}', url: '${page}' }`)
    .join(',\n');
  const nunjucksVariable = `{% set allPages = [\n${content}\n] %}`;

  fs.writeFile(path.join(pageDir, 'allPages.njk'), nunjucksVariable, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('allPages.njk was created!');
  });
});
