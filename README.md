git clone https://github.com/sikandar10/mystic-tarot.git
cd mystic-tarot
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`.

## Deployment on GitHub Pages

The application is deployed on GitHub Pages and can be accessed at:
https://sikandar10.github.io/mystic-tarot

### To deploy updates:

1. Make your changes in the `main` branch
2. Build the application:
```bash
npm run build
```

3. Switch to gh-pages branch:
```bash
git checkout gh-pages
```

4. Copy the contents of `dist/public` to the root of gh-pages branch
5. Commit and push the changes:
```bash
git add .
git commit -m "Update deployment"
git push origin gh-pages
```

6. GitHub Pages will automatically update your site

## Building for Production

```bash
npm run build
npm start