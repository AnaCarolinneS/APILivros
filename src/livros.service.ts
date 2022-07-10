import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Livro } from "./livro.model";

@Injectable() //injetando classes em outras - no caso, injetando no controlador
//injeção de dependencia é um padrao de projeto que ajuda a manter um baixo nivel de acoplamento entre classes.
//sao definidas pelo framework.
export class LivrosService {
    constructor(
        @InjectModel(Livro)
        private livroModel: typeof Livro
    ) { }

    async obterTodos(): Promise<Livro[]> {
        return this.livroModel.findAll();
    }

    async obterUm(id: number): Promise<Livro> {
        return this.livroModel.findByPk(id);
    }

    async criarLivro(livro: Livro) {
        this.livroModel.create(livro);
    }

    async alterarLivro(livro: Livro) : Promise<[number]> {
        return this.livroModel.update(livro, {
            where: {
                id: livro.id,
            }
        });
     }

    async apagarLivro(id: number) {
        const livro: Livro = await this.obterUm(id);
        livro.destroy;
    }
}