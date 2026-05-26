const fs = require('fs');

// Read menu.js and extract the MENU_ITEMS array
const menuJs = fs.readFileSync('js/menu.js', 'utf8');
const arrayStr = menuJs.substring(menuJs.indexOf('['), menuJs.indexOf('];') + 1);
const MENU_ITEMS = eval(arrayStr);

// Group by category
const categories = {};
for (const item of MENU_ITEMS) {
  if (!categories[item.category]) categories[item.category] = [];
  categories[item.category].push(item);
}

const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Brew & Flour Full Menu",
  "description": "Specialty coffees, fresh bakery items, breakfast, pasta, and burgers.",
  "hasMenuSection": Object.keys(categories).map(catName => ({
    "@type": "MenuSection",
    "name": catName.charAt(0).toUpperCase() + catName.slice(1),
    "hasMenuItem": categories[catName].map(item => ({
      "@type": "MenuItem",
      "name": item.name,
      "description": item.description,
      "offers": {
        "@type": "Offer",
        "price": item.price.toString(),
        "priceCurrency": "INR"
      }
    }))
  }))
};

let html = fs.readFileSync('menu.html', 'utf8');
const scriptTag = `  <!-- Menu Schema Markup (JSON-LD) for AEO/GEO -->
  <script type="application/ld+json">\n  ${JSON.stringify(menuSchema, null, 4).replace(/\n/g, '\n  ')}\n  </script>\n`;

if (!html.includes('MenuSection')) {
  html = html.replace('  </script>\n  <link rel="icon"', '  </script>\n' + scriptTag + '  <link rel="icon"');
  fs.writeFileSync('menu.html', html, 'utf8');
  console.log('Menu schema added.');
} else {
  console.log('Menu schema already present.');
}
