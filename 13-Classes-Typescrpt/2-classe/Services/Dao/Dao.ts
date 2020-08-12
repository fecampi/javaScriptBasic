import DaoInterface from './DaoInterface'

export default class Dao<T> implements DaoInterface<T>{
    nomeTabela: string = 'tb_pessoa'

    inserir(object: T): boolean {
        console.log('lógica de insert')
        return true
    }

    atualizar(object: T): boolean {
        console.log('lógica update')
        return true
    }

    remover(id: number): T {
        console.log('lógica delete')
        return Object()
    }

    selecionar(id: number): T {
        console.log('lógica select')
        return Object()
    }

    selecionarTodos(): [any] {
        console.log('lógica getAll') 
        return Object()
    }
}
