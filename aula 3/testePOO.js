const readline = require('readline');

// Configuração para ler dados digitados no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função principal de cálculo com 2 exceções exclusivas por operação
function calcularSeguro(operacao, valor1, valor2) {
    // Validação Geral Comum: Bloqueia caracteres de texto e NaNs
    if (Number.isNaN(valor1) || (operacao === 'potencia' && Number.isNaN(valor2))) {
        throw new TypeError("Entrada inválida! Você deve digitar apenas números.");
    }

    if (operacao === 'potencia') {
        // [POTENCIAÇÃO] Exceção 1: Base e expoente zero simultâneos (Indeterminação matemática)
        if (valor1 === 0 && valor2 === 0) {
            throw new RangeError("Indeterminação Matemática: 0 elevado a 0 não é definido.");
        }
        // [POTENCIAÇÃO] Exceção 2: Divisão por zero velada (Base zero com expoente negativo)
        if (valor1 === 0 && valor2 < 0) {
            throw new DivideByZeroError("Erro de Divisão: Base 0 com expoente negativo gera uma divisão por zero (1/0).");
        }
        return Math.pow(valor1, valor2);
    } 
    
    if (operacao === 'raiz') {
        // [RAIZ QUADRADA] Exceção 1: Raiz de número negativo
        if (valor1 < 0) {
            throw new RangeError("Erro Matemático: Não existe raiz quadrada de número negativo no conjunto dos números reais.");
        }
        // [RAIZ QUADRADA] Exceção 2: Limitação de processamento para evitar travamentos
        if (valor1 > 1e150) {
            throw new RangeError("Estouro de Escopo: O número digitado é grande demais para calcular a raiz com precisão segura.");
        }
        return Math.sqrt(valor1);
    }
}

// Criação de uma classe de erro customizada para a divisão por zero
class DivideByZeroError extends Error {
    constructor(message) {
        super(message);
        this.name = "DivideByZeroError";
    }
}

// Fluxo de perguntas no terminal do VS Code com TRY, CATCH e FINALLY
function iniciarCalculadora() {
    rl.question("\nEscolha a operação:\n1. Potenciação\n2. Raiz Quadrada\nDigite (1 ou 2): ", (opcao) => {
        
        if (opcao !== '1' && opcao !== '2') {
            console.log("\x1b[31m%s\x1b[0m", "[Erro]: Opção inválida! Escolha 1 ou 2.");
            return iniciarCalculadora(); // Reinicia em caso de opção errada
        }

        const operacao = opcao === '1' ? 'potencia' : 'raiz';

        rl.question(operacao === 'potencia' ? "Digite a Base: " : "Digite o Radicando (número): ", (txt1) => {
            const num1 = Number(txt1.replace(',', '.')); // Aceita vírgula decimal

            if (operacao === 'potencia') {
                rl.question("Digite o Expoente: ", (txt2) => {
                    const num2 = Number(txt2.replace(',', '.'));
                    
                    // --- ESTRUTURA COMPLETA DE EXCEÇÃO ---
                    try {
                        const resultado = calcularSeguro(operacao, num1, num2);
                        console.log("\x1b[32m%s\x1b[0m", `\n=> Resultado do Cálculo: ${resultado}`);
                    } catch (erro) {
                        console.error("\x1b[31m%s\x1b[0m", `\n[${erro.name}]: ${erro.message}`);
                    } finally {
                        console.log("\x1b[33m%s\x1b[0m", "\n[Sistema] Operação finalizada. Fechando conexão de entrada...");
                        rl.close(); // Fecha o terminal com segurança
                    }
                });
            } else {
                // --- ESTRUTURA COMPLETA DE EXCEÇÃO ---
                try {
                    const resultado = calcularSeguro(operacao, num1, null);
                    console.log("\x1b[32m%s\x1b[0m", `\n=> Resultado do Cálculo: ${resultado}`);
                } catch (erro) {
                    console.error("\x1b[31m%s\x1b[0m", `\n[${erro.name}]: ${erro.message}`);
                } finally {
                    console.log("\x1b[33m%s\x1b[0m", "\n[Sistema] Operação finalizada. Fechando conexão de entrada...");
                    rl.close(); // Fecha o terminal com segurança
                }
            }
        });
    });
}

// Inicia o programa
console.log("=== CALCULADORA DE TERMINAL SEGURA ===");
iniciarCalculadora();
