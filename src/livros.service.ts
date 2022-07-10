import { Injectable } from "@nestjs/common";
import { Livro } from "./livro.model";

@Injectable() //injetando classes em outras - no caso, injetando no controlador
//injeção de dependencia é um padrao de projeto que ajuda a manter um baixo nivel de acoplamento entre classes.
//sao definidas pelo framework.
export class LivrosService {
    livros: Livro[] = [
        /* new Livro('Livro001', 'Livro Javascript', 30.00),
        new Livro('Livro002', 'Livro MongoDB', 60.00),
        new Livro('Livro003', 'Livro Java', 99.00) */
    ];

    obterTodos(): Livro[] {
        return this.livros;
    }

    obterUm(id: number): Livro {
        return this.livros[0];
    }

    criarLivro(livro: Livro) {
        this.livros.push(livro);
    }

    alterarLivro(livro: Livro) : Livro {
        return livro;
    }

    apagarLivro(id: number) {
        this.livros.pop();
    }
}