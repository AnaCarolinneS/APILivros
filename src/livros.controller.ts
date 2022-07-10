import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from "./livro.model";
import { LivrosService } from "./livros.service";

@Controller('livros')
export class LivrosController {
    constructor(private livrosService: LivrosService) { }

    @Get()
    obterTodos(): Livro[] {
        return this.livrosService.obterTodos();
    }

    @Get(':id')
    obterUm(@Param() params): Livro {
        return this.livrosService.obterUm(params.id);
    }

    @Post()
    criarLivro(@Body() livro: Livro) {
        livro.id = 100;
        this.livrosService.criarLivro(livro);
        return 'Livro adicionado!';
    }

    @Put()
    alterarLivro(@Body() livro: Livro): Livro {
        console.log(livro);
        return this.livrosService.alterarLivro(livro);
    }

    @Delete(':id')
    excluirLivro(@Param() params) {
        this.livrosService.apagarLivro(params.id);
        return 'Livro apagado!';
    }
}