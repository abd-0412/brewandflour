const fs = require('fs');

const replacements = [
  {
    target: '<script src="./js/main.js"></script>',
    replacement: '<script type="module" src="./js/main.js"></script>'
  },
  {
    target: '<script src="./js/menu.js"></script>',
    replacement: '<script type="module" src="./js/menu.js"></script>'
  },
  {
    target: '<script src="./js/gallery.js"></script>',
    replacement: '<script type="module" src="./js/gallery.js"></script>'
  }
];

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let updated = false;

  for (const rep of replacements) {
    if (content.includes(rep.target)) {
      content = content.replace(rep.target, rep.replacement);
      updated = true;
    }
  }

  if (updated) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully added type="module" to scripts in:', file);
  }
}
