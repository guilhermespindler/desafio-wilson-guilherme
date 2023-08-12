class CaixaDaLanchonete {

    constructor() {
        this.cardapio = {
            "cafe": 3.00,
            "chantily": 1.50,
            "suco": 6.20,
            "sanduiche": 6.50,
            "queijo": 2.00,
            "salgado": 7.25,
            "combo1": 9.50,
            "combo2": 7.50,
        };
    }

    calcularValorDaCompra(formaDePagamento, itens) {
        const formasDePagamentoValidas = ["dinheiro", "debito", "credito"];
        if (!formasDePagamentoValidas.includes(formaDePagamento)) {
            return "Forma de pagamento inválida!";
        }
    }

}

export {  CaixaDaLanchonete };