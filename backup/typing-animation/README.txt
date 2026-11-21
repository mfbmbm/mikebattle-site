Old homepage typing animation + Skip button (removed Nov 2026).
To restore: copy typewriter.js to public/scripts/, paste animation.css into src/styles/global.css,
add the data-type attribute to each homepage line in src/pages/index.astro, add
<script is:inline src="/scripts/typewriter.js"></script> at the end of index.astro, and add
<script is:inline>document.documentElement.classList.add('js');</script> inside <head> in src/layouts/Base.astro.
Easiest: ask Claude to do it.
