# Expense Notes
### [expreal.vercel.app](https://expreal.vercel.app)

Simple expense tracker with AI-powered transaction parsing.

Test account:
- Email: `user@user.com`
  - Password: `user@user.com`

### Transaction details
Each transaction has:
- date
- amount (required input)
- type
- tags (flexible alternative to categories or comments)

### Creation of transaction
Just write a note with the details — AI will parse it and create the transaction.
You can edit or delete it afterward.

### Import and export
- Import: drop a JSON file with an array of transaction objects.
- Export: download all transactions as a JSON file.

### Settings
Define preferred tags to help the AI parse notes more accurately.

### Why AI?
To simplify transaction creation — no forms to fill, just write a quick note.

### Technical details
React used because of its simplicity and ecosystem (simplest charts adapters).
Next.js used for easy deployment to Vercel.

Required environment variables:
 - `ICON_PATH` - path to the icon for the app, different icons to improve DX
 - `GROQ_API_KEY` - api key to AI service
 - `GROQ_URL` - AI service url
 - `NEXT_PUBLIC_REPO_URL` - info link to the repo
 - `DATABASE_URL` - prisma postgres connection string

#### File structure
- `types` - general types used in the app, not related to specific components or actions
- `app` - Next.js defined directory, app routes and download link
- `components` - react components, written for this app
- `shadcn` - ui components generated with shadcn, only index files modified
- `utils` - any utils, except very specific ones, related to components single components
- `server` - everything can be moveto to server side in classic client-server architecture - db, ai, auth. Has only two type of exports:
  - `actions` - exported mutation functions (and specific types)
  - `get` - exported query functions (and specific types)