import { createClient } from 'contentful';

const client = createClient({
  space: "zxwltbyujwus",
  accessToken: "nSgSdYM9N_B3V3-XP0muXRAZRtgInnJ7N86dXQJSJqc",
});

export async function fetchReviews() {
  const entries = await client.getEntries({
    content_type: 'reviews',
  });
  return entries.items;
}

export async function contenetfulFetch(str:string) {
  const entries = await client.getEntries({
    content_type: str,
  });
  return entries.items;
}

export async function fetchProjects() {
  const entries = await client.getEntries({
    content_type: 'recentProjects',
  });
  return entries.items;
}
export async function fetchSocialLinks() {
  const entries = await client.getEntries({
    content_type: 'socialMediaHandles',
  });
  return entries.items;
}
