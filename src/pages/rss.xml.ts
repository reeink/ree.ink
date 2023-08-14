import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import config from '@config';
import type { APIContext } from 'astro';

export async function get(context: APIContext) {
  const posts = await getCollection('posts');

  if (!context.site) {
    throw new Error('Missing site metadata. Generating rss feeds failed.');
  }

  return rss({
    title: config.base.title,
    description: config.base.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedTime,
      description: post.data.description,
      link: `posts/${post.slug}`,
    }))
  });
}
