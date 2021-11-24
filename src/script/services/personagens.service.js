import axios from 'axios';

const URL = 'https://swapi.dev/api';

export async function obterPersonagem(name) {
  const url = `${URL}/people/?search=${name}`;
  console.log(url);
  const { data } = await axios.get(url);

  return data.results.map(mapearPersonagem);
}

function mapearPersonagem(item) {
  return {
    name: item.name,
    birth_year: item.birth_year,
    gender: item.gender,
    homeworld: item.homeworld,
    films: item.films,
  };
}
