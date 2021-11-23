import { deepEqual } from 'assert';
import { obterFilmes } from '../src/script/services/filmes.service.js';
import { obterPersonagem } from '../src/script/services/personagens.service.js';
import { filme } from './filme.js';
import { personagem } from './personagem.js';

describe('Obeter personagem', () => {
  it('deve buscar o R2-D2 com o formato correto', async () => {
    const expected = personagem;
    const nomeBase = 'R2-D2';
    const result = await obterPersonagem(nomeBase);

    deepEqual(result, expected);
  });
});

describe('Obeter filme', () => {
  it('deve buscar o filme 01, episódio 4', async () => {
    const expected = filme;
    const urlBase = 'https://swapi.dev/api/films/1/';
    const result = await obterFilmes(urlBase);

    deepEqual(result, expected);
  });
});
