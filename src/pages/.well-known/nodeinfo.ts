import config from "@config";

export async function GET() {
  const mastodonHost = new URL(config.social.mastodon.instance).host;
  return await fetch(`https://${mastodonHost}/.well-known/nodeinfo`, {
    headers: {
      Accept: "application/jrd+json",
    },
  });
}
