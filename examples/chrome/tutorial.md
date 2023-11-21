# Chrome extension tutorial

## How to deploy your code to Firebase
In this tutorial you will learn how to quickly deploy this code.
<walkthrough-tutorial-duration duration="3"></walkthrough-tutorial-duration>

## Make sure you have a Firebase project
To host to Firebase, you need a Firebase project.
Visit [Firebase console](https://console.firebase.google.com/?forceCheckTos=true) and see if you need to create one.
## Authentication
To setup Firebase credentials, run the following command:
```bash
firebase login --no-localhost --reauth
```
and follow its instructions.
## Deployment
To deploy the code at Firebase Hosting, specify the Firebase `Project ID` and run:
```bash
firebase deploy --only hosting --project <PROJECTID>
```
It will deploy the new site and print out its URL.
<walkthrough-info-message>Anyone with the URL can access the website.</walkthrough-info-message>

### Redeployment
You can redeploy as many times as you like.

## Link to the page from your extension
Update iframe inside your `side_window.html` file to link to the newly deployed website.