var str = "XABCDEFGHIJKLMNOPQRSTUVWXYZ"

      //Retorna o Tamanho
      var st1= str.length;

      //Retorna o índice da primeira ocorrência
      var st2 = str.indexOf("X");

      //Retorna o índice da primeira ocorrência a partir de N
      var st3 = str.indexOf("X", 1);

      //Retorna o índice da última ocorrência
      var st4 = str.lastIndexOf("X");

      //Retorna o índice da última ocorrência N do fim ao início
      var st5 = str.lastIndexOf("X",1);

      //Retorna a posição da string procurado
      var st6 = str.search("EFG");

      //Retorna o caractere no índice especificado
      var st7 = str.charAt(0); 
      var st8 = str[0]; 

      //Retorna o unicode do caractere no índice especificado
      var st9 = str.charCodeAt(0); 

      //Extrair uma parte(posição inicial e a posição final) 
      var st10 = str.slice(7, 13);

      //Extrair uma parte(será contada a partir do final da string) 
      var st11 = str.slice(-12, -6);

      //Extrair uma parte(especificando o comprimento)
      var st12 = str.substr(0, 1);

      //Substituir a primeira correspondência
      var st13 = str.replace("W", "0");

      //Substituir sem distinção entre maiúsculas e minúsculas
      var st14 = str.replace(/z/i, "1");

      //Substituir todas as correspondências
      var st15 = str.replace(/X/g, "2");

      //Converter para maiúscula
      var st16 = str.toUpperCase()

      //Converter para minúscula
      var st17 = str.toLowerCase()

      //Juntar
      var st18 = str.concat(" ", "12345");
      var st19 = "   " + st15 + "@#$%   "

      //Remover espaço em branco 
      var st20 = st16.trim();

      //Separar strings por caractere
      var nome = "Carlos Felipe Ferreira "
      var st21 = nome.split(" ") 
      console.log(st21)

      //Template String(Literals)
      nome = 'Jorge'
      console.log(`
        Oi ${nome}, 
        tudo bem?
      `)
  
       console.log(`7 + 7 = ${7+7}`)

      function calcular(x, y) {
        return x * y
      }

      console.log(`A multiplicação de 8 * 8 é: ${calcular(8,8)}`) 