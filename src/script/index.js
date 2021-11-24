import { program } from 'commander';
import { listaDeFilmes } from './lista-filmes.js';
import { obterFilmes } from './services/filmes.service.js';
import { obterPersonagem } from './services/personagens.service.js';

async function main() {
  program
    .version('v1')
    .option('-n, --nome [value]', 'Nome do Personagem')
    .option('-f, --filme [value]', 'Qual o filme (exemplo 1)')
    .parse(process.argv);

  if (program.opts().nome) {
    const name = program.opts().nome;
    console.log(name);
    const [personagem] = await obterPersonagem(name).catch(error =>
      console.error('Erro ao buscar personagem', error.message)
    );

    console.log(personagem);
  }

  if (program.opts().filme) {
    const qualFilme = Number(program.opts().filme) - 1;

    const filme = await obterFilmes(listaDeFilmes[qualFilme]).catch(error =>
      console.error('Erro ao buscar filme', error.message)
    );

    console.log(filme);
  }
}

main();
