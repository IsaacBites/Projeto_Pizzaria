document.addEventListener('DOMContentLoaded', function () {
    const pizzas = {
        ModaDaCasa: {
            valor: 50,
            quantidade: 0,
            inputId: 'ModaDaCasa'
        },
        CheesePremium: {
            valor: 66,
            quantidade: 0,
            inputId: 'CheesePremium'
        },
        FourFlavors: {
            valor: 60,
            quantidade: 0,
            inputId: 'FourFlavors'
        },
        ShrimpWithCheese: {
            valor: 80,
            quantidade: 0,
            inputId: 'ShrimpWithCheese'
        },
        TrufflePizza: {
            valor: 100,
            quantidade: 0,
            inputId: 'TrufflePizza'
        },
        VegetarianPizza: {
            valor: 60,
            quantidade: 0,
            inputId: 'VegetarianPizza'
        },
        AutumnSpecial: {
            valor: 50,
            quantidade: 0,
            inputId: 'AutumnSpecial'
        },
        HalloweenSpecial: {
            valor: 50,
            quantidade: 0,
            inputId: 'HalloweenSpecial'
        }
    };

    const totalPizzasOutput = document.getElementById('totPizzas');
    const totalPagarOutput = document.getElementById('totPagar');

    function updateTotals() {
        let totalPizzas = 0;
        let totalPagar = 0;

        for (const pizza in pizzas) {
            const pizzaData = pizzas[pizza];
            totalPizzas += pizzaData.quantidade;
            totalPagar += pizzaData.quantidade * pizzaData.valor;

            document.getElementById('input_' + pizzaData.inputId).value = pizzaData.quantidade;
        }

        totalPizzasOutput.textContent = totalPizzas;
        totalPagarOutput.textContent = `$${totalPagar}`;
    }

    document.querySelectorAll('button[data-action="increase"]').forEach(function (button) {
        button.addEventListener('click', function () {
            const pizzaType = button.getAttribute('data-pizza');
            if (pizzas[pizzaType].quantidade < 20) {
                pizzas[pizzaType].quantidade++;
                updateTotals();
            }
        });
    });

    document.querySelectorAll('button[data-action="decrease"]').forEach(function (button) {
        button.addEventListener('click', function () {
            const pizzaType = button.getAttribute('data-pizza');
            if (pizzas[pizzaType].quantidade > 0) {
                pizzas[pizzaType].quantidade--;
                updateTotals();
            }
        });
    });

    document.querySelectorAll('input[type="number"]').forEach(function (input) {
        input.addEventListener('input', function () {
            const pizzaType = input.getAttribute('id').replace('input_', '');
            pizzas[pizzaType].quantidade = parseInt(input.value) || 0;
            if (pizzas[pizzaType].quantidade < 0) pizzas[pizzaType].quantidade = 0;
            if (pizzas[pizzaType].quantidade > 20) pizzas[pizzaType].quantidade = 20;
            updateTotals();
        });
    });
    updateTotals();
});
