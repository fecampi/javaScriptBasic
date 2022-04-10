let str = "STRING_STRING"

      //Retorna o Tamanho
      let st1= str.length;

      //Retorna o índice da primeira ocorrência
      let st2 = str.indexOf("X");

      //Retorna o índice da primeira ocorrência a partir de N
      let st3 = str.indexOf("X", 1);

      //Retorna o índice da última ocorrência
      let st4 = str.lastIndexOf("X");

      //Retorna o índice da última ocorrência N do fim ao início
      let st5 = str.lastIndexOf("X",1);

      //Retorna a posição da string procurado
      let st6 = str.search("EFG");

      //Retorna o caractere no índice especificado
      let st7 = str.charAt(0); 
      let st8 = str[0]; 

      //Retorna o unicode do caractere no índice especificado
      let st9 = str.charCodeAt(0); 

      //Extrair uma parte(posição inicial e a posição final) 
      let st10 = str.slice(7, 13);

      //Extrair uma parte(será contada a partir do final da string) 
      let st11 = str.slice(-12, -6);

      //Extrair uma parte(especificando o comprimento)
      let st12 = str.substr(0, 1);

      //Substituir a primeira correspondência
      let st13 = str.replace("W", "0");

      //Substituir sem distinção entre maiúsculas e minúsculas
      let st14 = str.replace(/z/i, "1");

      //Substituir todas as correspondências
      let st15 = str.replace(/X/g, "2");

      //Converter para maiúscula
      let st16 = str.toUpperCase()

      //Converter para minúscula
      let st17 = str.toLowerCase()

      //Juntar
      let st18 = str.concat(" ", "12345");
      let st19 = "   " + st15 + "@#$%   "

      //Remover espaço em branco 
      let st20 = st16.trim();

      //Separar strings por caractere
      let nome = "Carlos Felipe Ferreira "
      let st21 = nome.split(" ") 
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