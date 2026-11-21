# mikebattle.com

## Where things live
- Homepage text: `src/pages/index.astro`
- Contact page: `src/pages/contact.astro`
- Blog (letters and any other writing): one Markdown file each in `src/content/blog/` (e.g. `2027-letter.md`). Each becomes a page and appears on the Blog list automatically.
- Email sign-up box: `src/components/Signup.astro` (set your Buttondown username on the one marked line)
- Colours, fonts, spacing: `src/styles/global.css`

## Security basics
- There are no passwords or API keys anywhere in this code. Keep it that way.
- Turn on two-factor login for GitHub, Netlify, Buttondown and wherever your domain is registered.
- GitHub keeps the full history of every change, so GitHub is your backup.

## Old typing animation
The typing animation and Skip button were removed from the homepage. Everything needed to bring them back is in `backup/typing-animation/`. Ask Claude to "restore the typing animation" and paste it that folder's files.
