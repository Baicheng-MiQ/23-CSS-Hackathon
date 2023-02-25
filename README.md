# 2023 CSS Hackathon Project

Deployed Here: [uclmao.com](https://uclmao.com/)

This repo keeps front-end code for the 2023 CSS Hackathon Project.

## Tech stack in use

- Vue.js
- Tailwind CSS
- Vite
- Firebase

## A little bit about [CI/CD](https://en.wikipedia.org/wiki/CI/CD) on this project

I have setted up [GitHub Actions](https://github.com/features/actions) to automate the deployment process. The workflow is as follows:

1. When a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) is created, the workflow will run the test and build process.
2. If the test and build process passes, the workflow will deploy a preview version of the website to [Firebase Hosting](https://firebase.google.com/docs/hosting) and post a comment to the pull request with the preview link.
3. When the pull request is merged to the main branch, the workflow will deploy the website to Firebase Hosting.

## How to download

Clone the repo to your local machine using the following command:

```
git clone https://github.com/Baicheng-MiQ/23-CSS-Hackathon.git
```

## How to fire up the project

Make sure you have [Node.js](https://nodejs.org/en/) installed on your machine.

### Project setup

This command will install all the dependencies for the project.

```
npm install
```

### Compiles and hot-reloads for development

This command will start a local server for development.

```
npm run dev
```

## How to start contributing

1. Create a new branch for your feature

```
# go to develop branch
git checkout dev
# create a new branch from develop branch
git checkout -b <your-branch-name>
```

2. Start developing
3. Commit your changes

```
git add .
git commit -m "your commit message"
```

4. Push your changes to the remote repo

```
git push origin <your-branch-name>
```

5. Create a pull request to merge your branch to the **develop branch** on GitHub.
6. Wait all checks to pass and preview the website using the preview link provided by github-actions bot.
7. Yell out to the team to merge the pull request.

## How to deploy to production

1. Create a pull request to merge the **develop branch** to the **main branch** on GitHub.
2. Preview the website using the preview link provided by github-actions bot to make sure everything is working fine.
3. Yell out to the team to merge the pull request.

## How to view Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click on the project named **23-CSS-Hackathon**
3. Yell out to the team if you don't have access to the project.

## Some useful links

- [Vue.js](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Firebase](https://firebase.google.com/)
