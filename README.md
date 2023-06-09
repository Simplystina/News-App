## News Project
This is a news project that allows users to browse and read the latest news articles from various sources. The project is built using Next.js framework and React library. It utilizes the News API to fetch and display news articles. Please read more about the NewsAPI here [[newsapi.org](https://newsapi.org/)]

## Features
* Browse news articles from different sources
* Filter news articles by category, sources, countries
* Search for specific news articles
* Read full articles on the source website
* Pagination to display articles

## Installation
Follow the instructions below to run the project on your local machine:

# Step 1
clone the project directory
```git clone [[https://github.com/Simplystina/News-App/tree/main](https://github.com/Simplystina/News-App/tree/main)]```

# Step 2
Install the dependencies
```yarn install```

# Step 3
Set up environment variables:

Create an .env.local file in the root directory of the project.
Add the following environment variables to the .env.local file:

```NEXT_PUBLIC_NEWS_API_KEY=<your_news_api_key>```

Replace <your_news_api_key> with your News API key. You can obtain an API key by signing up at News API at [(newsapi.org)](https://newsapi.org/).

# Step 4
Run the development server:
```npm run dev```

6. Open your browser and visit http://localhost:3000 to see the project running.


## Technologies Used
Next.js
React
News API
React-icons
Chakra-ui
React Redux toolkit

## Deployment
* This project was deployed using vercel and the deployment url is located here [https://my-news-app-brown.vercel.app/](https://my-news-app-brown.vercel.app/)
* Please note that the deployed url doesn't display well on the browser because of the restriction on the development plan used. The development plan only works on localhost and not on a deployed link as specified by [NewsAPI.org](newsapi.org)
So please run on localhost to view full site functionalities

## Conclusion
* This project was created for my assessment for the Ibx frontend engineering role.
* This project fulfill all the functionalities specified in the assessment instructions


