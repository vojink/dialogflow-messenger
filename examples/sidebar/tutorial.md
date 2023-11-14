# Sidebar chat tutorial

## Setup Firebase hosting
To setup your Firebase service, visit https://console.firebase.google.com/.
## Authentication
To setup Firebase credentials, run the following command:
```bash
firebase login --no-localhost
```
## Deployment
```bash
firebase deploy --only hosting --project <PROJECTID>
```