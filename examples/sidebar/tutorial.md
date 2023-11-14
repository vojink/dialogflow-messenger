# Sidebar chat tutorial

## How to deploy your code to Firebase
In this tutorial you will learn how to quickly deploy this code.
<walkthrough-tutorial-duration duration="3"></walkthrough-tutorial-duration>

## Setup Firebase hosting
To setup your Firebase service, visit [Firebase console](https://console.firebase.google.com/) and accept _Terms of Service_.
## Authentication
To setup Firebase credentials, run the following command:
```bash
firebase login --no-localhost
```
and follow its instructions.
## Deployment
To deploy the code at Firebase Hosting, specify the `Project ID` and run:
```bash
firebase deploy --only hosting --project <PROJECTID>
```
It will deploy the new site and print out its URL.
<walkthrough-info-message>Anyone with the URL can access the website.</walkthrough-info-message>

### Redeployment
You can redeploy as many times as you like.