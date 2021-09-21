# LLCEscapeGame

## Branch System

Each activity/game is built in a different branch, please checkout a new branch before starting your work.
Please ensure that you code works with torch==1.7.1 and it is recommended to build the adversarial attacks using the torchattacks lib: torchattacks==2.14.1

The **Webserver** branch is used for the API and UI.

The **Main** branch will merge the validated activities and connect them to the webserver. Every merge will be preceeded with a pull request to check that everything is compatible :)

Adriano will set up a docker container for the full app (the main branch) for deployment.
