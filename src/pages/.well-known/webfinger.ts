import config from "@config";

export async function GET() {
  const mastodonHost = new URL(config.social.mastodon.instance).host;
  return await fetch(
    `https://${mastodonHost}/.well-known/webfinger?resource=acct:${config.social.mastodon.username}@${mastodonHost}`,
    {
      headers: {
        Accept: "application/jrd+json",
      },
    },
  );
}
