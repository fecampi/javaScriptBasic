//Função recursiva (ela mesmo chama de volta)
const recursive = (x) =>
    (x == 0)
        ? 1
        : x * recursive(x - 1);



console.log("Recursived", recursive(5))
// Endereço     Variável            Valor
// PASSO 1
// +------------+-------------+----------------------+
// |   0x0001   |  resultado  | recursiveFatorial(5) |
// +------------+-------------+----------------------+ 
// |   0x0002   |  temp_4     | recursiveFatorial(4) |  |
// +------------+-------------+----------------------+  |
// |   0x0003   |  temp_3     | recursiveFatorial(3) |  V
// +------------+-------------+----------------------+
// |   0x0004   |  temp_2     | recursiveFatorial(2) |
// +------------+-------------+----------------------+
// |   0x0005   |  temp_1     | recursiveFatorial(1) |
// +------------+-------------+----------------------+
// |   0x0006   |  temp_0     | 1                    |
// +------------+-------------+----------------------+
// PASSO 
// +------------+-------------+----------------------+
// |   0x0001   |  resultado  | 5 * temp_4 = 120     |
// +------------+-------------+----------------------+
// |   0x0002   |  temp_4     | 4 * temp_3 = 24      |
// +------------+-------------+----------------------+   ^
// |   0x0003   |  temp_3     | 3 * temp_2 = 6       |   |
// +------------+-------------+----------------------+   |
// |   0x0004   |  temp_2     | 2 * temp_1 = 2       |
// +------------+-------------+----------------------+
// |   0x0005   |  temp_1     | 1 * temp_0 = 1       |
// +------------+-------------+----------------------+
// |   0x0006   |  temp_0     | 1                    |
// +------------+-------------+----------------------+