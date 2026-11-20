# Sadiq Digital X-Ray Clinic (Next.js)

## Run locally
    npm install
    npm run dev        # http://localhost:3000

## Edit your details
Open `lib/data.js`: change phone, WhatsApp number, address, hours and the X-ray texts.
To add an X-ray type, copy one object in `services` and give it a new `slug`.

## Free hosting (static)
    npm run build      # creates the `out/` folder
Upload the project to GitHub and import it in Vercel or Netlify (free), or host the `out/` folder on GitHub Pages / Cloudflare Pages.
