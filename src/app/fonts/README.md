# Local fonts

Drop the Gonnex font file here as:

```
src/app/fonts/Gonnex-Regular.otf
```

(or `Gonnex-Regular.ttf` — both work, just keep the name the same).

Where to get it:

- Free for personal use: https://exfont.com/gonnexregular-otf.font (click the
  "Download Font" button on that page — the direct URL goes through a redirect)
- Commercial license (recommended for the live store):
  https://elements.envato.com/gonnex-display-bold-food-font-N8R6XFU

Once the file is in this folder, **uncomment the two marked lines in
`src/app/layout.tsx`** and refresh — the logo will switch from Bagel Fat One
to Gonnex automatically.

You can keep this folder empty (just delete the `.gitkeep` if you want); the
site falls back to Bagel Fat One for the logo until the file is present.
