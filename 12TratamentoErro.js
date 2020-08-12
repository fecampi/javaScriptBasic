
		var pessoas = Array()

		pessoas[1] = Array()
		pessoas[1]['nome'] = 'Felipe'
		pessoas[1]['idade'] = 44

		function getPessoa(n) {

			try {
				console.log('Nome: ' + pessoas[n]['nome'] + ' / Idade: ' + pessoas[n]['idade'])
			} catch (erro) {
				tratarErro()
				//Se quiser interromper
				//throw new Error(document.write('interrompe<br>'))	
				console.log('Tratou erro')

			} finally {
				console.log('Erro ou não passa aqui')
			}
			console.log('Acabou')


		}

		function tratarErro() {
			console.log('--Programa de tratamento de Erro')
		}

		getPessoa(0)

