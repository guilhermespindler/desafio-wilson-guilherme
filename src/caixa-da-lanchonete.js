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

        if (itens.length === 0) {
            return "Não há itens no seu carrinho de compra!";
        }

        let total = 0;
        let principalItems = [];
        let extras = [];

        for (const itemInfo of itens) {
            const [itemCode, quantity] = itemInfo.split(",");

            if (!this.cardapio.hasOwnProperty(itemCode)) {
                return "Item inválido!";
            }

            if (quantity <= 0) {
                return "Quantidade inválida!";
            }

            if (itemCode !== "chantily" && itemCode !== "queijo") {
                principalItems.push(itemCode);
            } else {
                extras.push(itemCode);
            }

            total += this.cardapio[itemCode] * quantity;

        }

        for (const extra of extras) {
            const principal = extra === "chantily" ? "cafe" : "sanduiche";
            if (!principalItems.includes(principal)) {
                return "Item extra não pode ser pedido sem o principal";
            }
        }

        if (formaDePagamento === "dinheiro") {
            total *= 0.95;
        } else if (formaDePagamento === "credito") {
            total *= 1.03;
        }


    }

}

export {  CaixaDaLanchonete };