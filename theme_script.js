const fs = require('fs');
const path = require('path');

function walkDir(d, cb) {
  fs.readdirSync(d).forEach(f => {
    let p = path.join(d, f);
    fs.statSync(p).isDirectory() ? walkDir(p, cb) : cb(p);
  });
}

walkDir('app', (p) => {
  if(!p.endsWith('.tsx')) return;
  let content = fs.readFileSync(p, 'utf8');

  const replacements = {
    'bg-blue-900 text-white': 'bg-sky-400 text-white',
    'hover:bg-blue-800': 'hover:bg-sky-500',
    'bg-blue-900 text-blue-100': 'bg-sky-100 text-sky-800',
    'bg-[#172554]': 'bg-sky-50 border-t border-sky-100',
    'bg-blue-950/60': 'bg-sky-100/80',
    'bg-blue-950': 'bg-sky-100',
    'bg-blue-900/40': 'bg-white/40',
    'bg-blue-900': 'bg-sky-50',
    'bg-blue-800': 'bg-sky-100',
    'bg-blue-50': 'bg-blue-50/50',
    'bg-blue-100': 'bg-blue-50',
    'bg-blue-200': 'bg-sky-100',
    'bg-blue-300': 'bg-sky-200',
    'bg-blue-400': 'bg-sky-300',

    'text-blue-950': 'text-sky-800',
    'text-blue-900': 'text-sky-700',
    'text-blue-800': 'text-sky-600',
    'text-blue-700': 'text-sky-500',
    'text-blue-600/80': 'text-sky-500/80',
    'text-blue-600': 'text-sky-500',
    'text-blue-400/80': 'text-sky-600',
    'text-blue-400': 'text-sky-700',
    'text-blue-300': 'text-sky-800',
    'text-blue-200/80': 'text-sky-900/80',
    'text-blue-200': 'text-sky-900',
    'text-blue-100': 'text-sky-900',

    'from-blue-950': 'from-sky-100',
    'from-blue-700': 'from-sky-400',
    'to-blue-900': 'to-sky-500',
    'from-blue-600': 'from-sky-300',
    'to-blue-800': 'to-sky-400',
    'via-blue-600': 'via-sky-200',

    'border-blue-800': 'border-sky-200',
    'border-blue-700': 'border-sky-200',
    'border-blue-600': 'border-sky-300',
    'border-blue-500/50': 'border-sky-200',
    'border-blue-400': 'border-sky-200',
    'border-blue-200/60': 'border-sky-100/60',
    'border-blue-200/50': 'border-sky-100/50',
    'border-blue-200': 'border-sky-100',
    'border-blue-100': 'border-white',

    'hover:text-blue-900': 'hover:text-sky-600',
    'hover:text-blue-800': 'hover:text-sky-600',
    'hover:text-blue-700': 'hover:text-sky-500'
  };

  for (const [key, value] of Object.entries(replacements)) {
    content = content.split(key).join(value);
  }

  // Handle the text-white inside the dark feature section that became light
  // Note: the original dark bg had "bg-blue-900 text-white". Actually we replaced "bg-blue-900 text-white" with "bg-sky-400 text-white" above if they were together.
  // Wait, in section 5: 'bg-blue-900 text-white' is literally the string! So it becomes bg-sky-400 text-white. That should be ok, light blue background with white text.

  fs.writeFileSync(p, content);
});
console.log('Very light blue theme applied successfully.');
