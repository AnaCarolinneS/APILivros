import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { timeStamp } from "console";
import { Produto } from "./produto.model";
import { ProdutosService } from "./produtos.service";

@Controller('produtos')
export class ProdutosController {

    constructor(private produtosService: ProdutosService) {

    }

    @Get()
    obterTodos(): Produto[] {
        return this.produtosService.obterTodos();
    }

    @Get(':id')
    obterUm(@Param() params): Produto {
        return this.produtosService.obterUm(params.id);
    }

    @Post()
    criarProduto(@Body() produto: Produto) {
        produto.id = 100;
        this.produtosService.criarProduto(produto);
        return 'Livro adicionado!';
    }

    @Put()
    alterarProduto(@Body() produto: Produto): Produto {
        console.log(produto);
        return this.produtosService.alterarProduto(produto);
    }

    @Delete(':id')
    excluirProduto(@Param() params) {
        this.produtosService.apagarProduto(params.id);
        return 'Livro apagado!';
    }
}