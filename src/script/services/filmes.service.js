import axios from 'axios';

export async function obterFilmes(url) {
  const { data } = await axios.get(url);

  return {
    title: data.title,
    episode_id: data.episode_id,
    opening_crawl: data.opening_crawl,
    director: data.director,
    producer: data.producer,
    release_date: data.release_date,
  };
}
