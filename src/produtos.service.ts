import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.model";

@Injectable() //injetando classes em outras - no caso, injetando no controlador
export class ProdutosService {
    produtos: Produto[] = [
        new Produto('Livro001', 'Livro Javascript', 30.00),
        new Produto('Livro002', 'Livro MongoDB', 60.00),
        new Produto('Livro003', 'Livro Java', 99.00)
    ];

    obterTodos(): Produto[] {
        return this.produtos;
    }

    obterUm(id: number): Produto {
        return this.produtos[0];
    }

    criarProduto(produto: Produto) {
        this.produtos.push(produto);
    }

    alterarProduto(produto: Produto) : Produto {
        return produto;
    }

    apagarProduto(id: number) {
        this.produtos.pop();
    }
}