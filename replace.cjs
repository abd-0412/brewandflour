const fs = require('fs');

const oldText1 = `        <span>&copy; 2026 Brew & Flour, Coimbatore. Built as a portfolio piece by <span class="footer-bottom-studio" style="color: var(--pure-white);">Safr Labs</span> — Tamil Nadu's digital studio.</span>`;
const oldText2 = `        <span>&copy; 2026 Brew & Flour, Coimbatore. Built as a portfolio piece by <span class="footer-bottom-studio" style="color: var(--pure-white);">Safr Labs</span> - Tamil Nadu's digital studio.</span>`;

const newText = `        <div style="display: flex; flex-direction: column; gap: 4px;">
          <span>&copy; 2026 Brew & Flour, Coimbatore.</span>
          <span style="opacity: 0.8; font-size: 0.9em;">Built as a portfolio piece by <span class="footer-bottom-studio" style="color: var(--pure-white);">Safr Labs</span> — Tamil Nadu's digital studio.</span>
        </div>`;

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes(oldText1) || content.includes(oldText2)) {
    content = content.replace(oldText1, newText);
    content = content.replace(oldText2, newText);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
}
