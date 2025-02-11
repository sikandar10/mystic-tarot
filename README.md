git clone https://github.com/<your-username>/mystic-tarot.git
```bash
cd mystic-tarot
```


2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
VITE_BASE_URL=
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`.

## Building for Production

1. Create a `.env.production` file:
```bash
VITE_BASE_URL=/mystic-tarot
```

2. Build the application:
```bash
npm run build
```

## Deploying to GitHub Pages

1. First, ensure your repository settings are configured:
   - Go to your repository settings
   - Under "Pages", select the `gh-pages` branch as the source
   - Set the directory to `/ (root)`

2. Deploy using these commands:
```bash
git checkout -b gh-pages
npm run build
git add dist -f
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
