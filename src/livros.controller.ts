import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from "./livro.model";
import { LivrosService } from "./livros.service";

@Controller('livros')
export class LivrosController {
    constructor(private livrosService: LivrosService) { }

    @Get()
    async obterTodos(): Promise<Livro[]> {
        return this.livrosService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param() params): Promise<Livro> {
        return this.livrosService.obterUm(params.id);
    }

    @Post()
    async criarLivro(@Body() livro: Livro) {
        livro.id = 100;
        this.livrosService.criarLivro(livro);
        return 'Livro adicionado!';
    }

    @Put()
    async alterarLivro(@Body() livro: Livro): Promise<[number]> {
        console.log(livro);
        return this.livrosService.alterarLivro(livro);
    }

    @Delete(':id')
    async excluirLivro(@Param() params) {
        this.livrosService.apagarLivro(params.id);
        return 'Livro apagado!';
    }
}