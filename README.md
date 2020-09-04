sponsorware-bot
===============

> Automates actions based on activity from your GitHub Sponsors. :moneybag:

## DESCRIPTION

sponsorware-bot is a GitHub app built with [Probot](https://probot.github.io/) that automates any action based on activity from your GitHub Sponsorship.

## INSTALLATION

Any GitHub user can install the [Sponsorware Bot GitHub App](jwright/sponsorware-bot). During the installation process, you will be asked for access to some of your repositories. You will want to provide access to your private Sponsorware repositories so that sponsorware-bot execute actions against those repositories.

After successfully installing the Sponsorware Bot, the user will be redirected to a URL with further instructions on how to update their sponsorship url. The instructions will provide a link for them to create a new webhook for their sponsorship (i.e. `https://github.com/sponsors/<github-username>/dashboard/webhooks/new`) with the proper payload url and secret.

### Permissions

TBD

## CONFIGURATION

TBD

## DEVELOPMENT

TBD

### Setup

Fork the repository

```
gh repo fork jwright/sponsorware-bot
```

Clone the repository locally

```
git clone git@github.com:<your-gh-username>/sponsorware-bot
cd sponsorware-bot
```

Install the dependencies

```
npm install
```

Run the bot locally

```
npm start
```

## DEPLOYMENT

This application is deployed on Heroku at [sponsorware-bot](https://dashboard.heroku.com/apps/sponsorware-bot).

The application can be deployed by just using git. You need to add the remote to the Heroku instance.

```
git remote add production https://git.heroku.com/sponsorware-bot.git
```

Then you can simply push the lastest to deploy the application.

```
git push production main
```

## RELEASING

TBD

## CONTRIBUTING

If you have suggestions for how sponsorware-bot could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2020 Jamie Wright <jamie@brilliantfantastic.com>
