import { obterFilmes } from './services/filmes.service.js';
import { obterPersonagem } from './services/personagens.service.js';

async function main() {
  const [personagem] = await obterPersonagem('r2-d2').catch(error =>
    console.error('Erro ao buscar personagem', error.message)
  );

  const filme = await obterFilmes('https://swapi.dev/api/films/1/').catch(
    error => console.error('Erro ao buscar filme', error.message)
  );

  console.log(personagem);
  console.log(filme);
}

main();
