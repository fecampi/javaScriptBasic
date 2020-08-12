"use strict";
exports.__esModule = true;
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = 'tb_pessoa';
    }
    Dao.prototype.inserir = function (object) {
        console.log('lógica de insert');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('lógica update');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('lógica delete');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('lógica select');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('lógica getAll');
        return Object();
    };
    return Dao;
}());
exports["default"] = Dao;
