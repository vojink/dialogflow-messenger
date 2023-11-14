# Sidebar chat tutorial

## How to deploy your code to Firebase
Click Start to learn how to deploy this code.
## Setup Firebase hosting
To setup your Firebase service, visit [Firebase console](https://console.firebase.google.com/).
## Authentication
To setup Firebase credentials, run the following command:
```bash
firebase login --no-localhost
```
and follow its instructions.
## Deployment
To deploy the code, specify the Project ID and run:
```bash
firebase deploy --only hosting --project <PROJECTID>
```
