function zeroAEsquerda(num) {
	return num >= 10
		? num
		: `0${num}`;
}


function getDiaSemanaTextoSwitch(diaSemana) {
	let diaSemanaTexto;

	switch (diaSemana) {
		case 0:
			diaSemanaTexto = 'Domingo';
			return diaSemanaTexto;
		case 1:
			diaSemanaTexto = 'Segunda';
			return diaSemanaTexto;
		case 2:
			diaSemanaTexto = 'Terça';
			return diaSemanaTexto;
		case 3:
			diaSemanaTexto = 'Quarta';
			return diaSemanaTexto;
		case 4:
			diaSemanaTexto = 'Quinta';
			return diaSemanaTexto;
		case 5:
			diaSemanaTexto = 'Sexta';
			return diaSemanaTexto;
		case 6:
			diaSemanaTexto = 'Sábado';
			return diaSemanaTexto;
		default:
			diaSemanaTexto = '';
			return diaSemanaTexto;
	}
}

function getDiaSemanaTexto(diaSemana) {
  const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 
    'sexta', 'sábado'];
  return diasSemana[diaSemana];
}

function getNomeMes(numeroMes) {
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maior', 'junho', 
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  return meses[numeroMes];
}


function formataData(data) {
	const diaSemanaTexto = getDiaSemanaTexto(data.getDay());
	const dia = zeroAEsquerda(data.getDate());
	const mesTexto = getNomeMes(data.getMonth())
	const mes = data.getMonth()+1
	const ano = zeroAEsquerda(data.getFullYear());
	const hora = zeroAEsquerda(data.getHours());
	const min = zeroAEsquerda(data.getMinutes());
	const seg = zeroAEsquerda(data.getSeconds());
	const ms = zeroAEsquerda(data.getMilliseconds());

	return `${diaSemanaTexto }, ${dia} de ${mesTexto} - ${dia}/${mes}/${ano} ${hora}:${min}:${seg}:${ms}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);


function retonaHora(data) {
	if (data && !(data instanceof Date)) {
	  throw new TypeError('Esperando instância de Date.');
	}
  
	if (!data) {
	  data = new Date();
	}
  
	return data.toLocaleTimeString('pt-BR', {
	  hour: '2-digit',
	  minute: '2-digit',
	  second: '2-digit',
	  hour12: false
	});
  }
  
  try {
	const hora = retonaHora(data);
	console.log(hora);
  } catch(e) {
	// Tratar erro
	// console.log(e);
  } finally {
	console.log('Tenha um bom dia.');
  }