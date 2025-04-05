## The goal

The project falls under the Education category as it aims to dispel misinformation about ASD, and spread awareness on the disorder. My country, Mongolia, is far behind in terms of mental health, so a lot of my focus was on explaining terms, and facts about the disorder in an engaging way. To do this, I used well-known franchises, and animes like Dungeon Meshi and Sonic for the images on the articles. All the information in the articles can easily be found on the web, or as personal anecdotes from autistic individuals. The tests are considered as "accurate online assessments", and is NOT a diagnosis.

## To run the project

Firstly, you must run

```
npm install
```

Afterward, so the GitHub authentication works, run

```
npx auth secret
```

This will automatically create AUTH_SECRET in your .env.local file. Go to GitHub in developer settings and create a new OAuth app. Write [http://localhost:3000](http://localhost:3000) in the Homepage URL, and [http://localhost:3000/api/auth/callback/github](http://localhost:3000/api/auth/callback/github) in the Authorization callback URL. Press Register application.
In the .env.local file paste the Client ID you receive into

```
AUTH_GITHUB_ID=""
```

Generate a client secret in GitHub and then paste it into

```
AUTH_GITHUB_SECRET=""
```

Handwrite these GitHub ID, and secret in the .env.local file

Finally, in the terminal run:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## What the project used

I used Next.js to make the project, tailwind css for styling the webpage, react-icons for icons, react-redux to create a universal state (the toggle so it can switch between Mongolian and English), and I used NextAuth.js for authentication so the user could take the tests I provided.
