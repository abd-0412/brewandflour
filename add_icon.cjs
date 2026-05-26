const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('<link rel="icon"')) {
    content = content.replace('</head>', '  <link rel="icon" type="image/png" href="./assets/icon.png">\n</head>');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
}
