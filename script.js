const dataAtual = new Date();
const mesAtual = dataAtual.getMonth();
const diaAtual = dataAtual.getDay();
var select = document.getElementById('select_mes');
var opcaoValor = select.options[select.selectedIndex].value

var valorS = document.getElementById("valorSalario");
var valoroutros = document.getElementById("valoroutros");

// Dados iniciais para janeiro (você pode adicionar dados para outros meses)
var mesesData = {
    0: {
    saldoConta: 0,
    receitas: 0,
    despesas: 0,
    gastosPorCategoria: [0, 0, 0, 0],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
  },
    1: {
    saldoConta: 0,
    receitas: 0,
    despesas: 0,
    gastosPorCategoria: [0, 0, 0, 0],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
  },
    2: {
    saldoConta: 0,
    receitas: 0,
    despesas: 0,
    gastosPorCategoria: [0, 0, 0, 0],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
  },
    3: {
    saldoConta: 0,
    receitas: 0,
    despesas: 0,
    gastosPorCategoria: [0, 0, 0, 0],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
  },
    4: {
    saldoConta: 0,
    receitas: 0,
    despesas: 0,
    gastosPorCategoria: [0, 0, 0, 0],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
  },
    5: {
    saldoConta: 0,
    receitas: 0,
    despesas: 0,
    gastosPorCategoria: [0, 0, 0, 0],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
  },
    6: {
    saldoConta: 0,
    receitas: 0,
    despesas: 0,
    gastosPorCategoria: [0, 0, 0, 0],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
  },
    7: {
    saldoConta: 0,
    receitas: 0,
    despesas: 0,
    gastosPorCategoria: [0, 0, 0, 0],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
  },
    8: {
    saldoConta: 0,
    receitas: 0,
    despesas: 0,
    gastosPorCategoria: [0, 0, 0, 0],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
  },
    9: {
    saldoConta: 0,
    receitas: 0,
    despesas: 0,
    gastosPorCategoria: [0, 0, 0, 0],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
  },
    10: {
    saldoConta: 0,
    receitas: 0,
    despesas: 0,
    gastosPorCategoria: [0, 0, 0, 0],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
  },
    11: {
    saldoConta: 0,
    receitas: 0,
    despesas: 0,
    gastosPorCategoria: [0, 0, 0, 0],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
  },
  // Adicione dados para outros meses aqui...
};

// Configurações do gráfico
var options = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 1,
};

// Obtém o contexto do canvas
var ctx = document.getElementById('myPieChart').getContext('2d');

// Função para salvar dados no localStorage
function salvarDadosNoLocalStorage() {
  var mesesDataString = JSON.stringify(mesesData);
  localStorage.setItem('dadosMeses', mesesDataString);
}

// Função para carregar dados do localStorage
function carregarDadosDoLocalStorage() {
  var mesesDataString = localStorage.getItem('dadosMeses');
  if (mesesDataString) {
    mesesData = JSON.parse(mesesDataString);
  }
}

// Função para atualizar o gráfico e informações com base no mês selecionado
function atualizarDadosMes(mes) {
  var data = {
    labels: ['Gastos Essenciais', 'Investimentos', 'Gastos Pessoais', 'Dívidas'],
    datasets: [{
      data: mesesData[mes].gastosPorCategoria,
      backgroundColor: mesesData[mes].backgroundColor
    }]
  };

  myPieChart.data = data;
  myPieChart.update();

  document.getElementById('saldo_conta').innerText = `R$ ${mesesData[mes].saldoConta.toFixed(2)}`;
  document.getElementById('num_receitas').innerText = `R$ ${mesesData[mes].receitas.toFixed(2)}`;
  document.getElementById('num_despesas').innerText = `R$ ${mesesData[mes].despesas.toFixed(2)}`;

  salvarDadosNoLocalStorage();
}

function onChangeSelect() {
  // Obtém o valor do mês selecionado
  var novoMes = select.value;

  // Atualiza os dados com base no novo mês
  atualizarDadosMes(novoMes);
}

select.addEventListener('change', onChangeSelect);

// Chama a função para carregar dados do localStorage ao iniciar
carregarDadosDoLocalStorage();

// Função para abrir o modal
function abrirModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'block';
}

// Função para fechar o modal
function fecharModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}
function fecharcaixaCredito() {
  var caixacredito = document.getElementById('caixaCredito');
  caixacredito.style.display = 'none';
}
function fecharcaixaSalario() {
  var caixaSalario = document.getElementById('caixaSalario');
  caixaSalario.style.display = 'none';
}
function fecharcaixaDebito() {
  var caixaDebito = document.getElementById('caixaDebito');
  caixaDebito.style.display = 'none';
}
function fecharcaixage() {
  var caixage = document.getElementById('caixage');
  caixage.style.display = 'none';
}
function fecharcaixagp() {
  var caixagp = document.getElementById('caixagp');
  caixagp.style.display = 'none';
}
function fecharcaixad() {
  var caixad = document.getElementById('caixad');
  caixad.style.display = 'none';
}
function fecharcaixai() {
  var caixai = document.getElementById('caixai');
  caixai.style.display = 'none';
}
function fecharcaixaoutros() {
  var caixaoutros = document.getElementById('caixaoutros');
  caixaoutros.style.display = 'none';
}

// Função para atualizar a caixa de crédito
// Função para atualizar a caixa de crédito
function atualizarCaixaCredito() {
  var caixaCredito = document.getElementById('caixaCredito');
  caixaCredito.style.display = 'block';
  fecharModal();

  // Ocultar outros elementos que não devem ser exibidos ao selecionar crédito
  document.getElementById('caixaSalario').style.display = 'none';
  document.getElementById('caixaOutros').style.display = 'none';
}

// Função para atualizar a caixa de salário
function atualizarCaixaSalario() {
  var caixaSalario = document.getElementById('caixaSalario');
  caixaSalario.style.display = 'block';

  // Ocultar outros elementos que não devem ser exibidos ao selecionar salário
  document.getElementById('caixaCredito').style.display = 'none';
  document.getElementById('caixaOutros').style.display = 'none';
}
function atualizarCaixaDebito() {
  var caixaDebito = document.getElementById('caixaDebito');
  caixaDebito.style.display = 'block';

  // Ocultar outros elementos que não devem ser exibidos ao selecionar salário
  document.getElementById('modal').style.display = 'none';
  document.getElementById('caixaOutros').style.display = 'none';
}
function atualizarCaixaDebito_ge() {
  var caixage = document.getElementById('caixage');
  caixage.style.display = 'block';

  // Ocultar outros elementos que não devem ser exibidos ao selecionar salário
  document.getElementById('caixaDebito').style.display = 'none';
}
function atualizarCaixaDebito_gp() {
  var caixagp = document.getElementById('caixagp');
  caixagp.style.display = 'block';

  // Ocultar outros elementos que não devem ser exibidos ao selecionar salário
  document.getElementById('caixaDebito').style.display = 'none';
}
function atualizarCaixaDebito_d() {
  var caixad = document.getElementById('caixad');
  caixad.style.display = 'block';

  // Ocultar outros elementos que não devem ser exibidos ao selecionar salário
  document.getElementById('caixaDebito').style.display = 'none';
}
function atualizarCaixaDebito_i() {
  var caixai = document.getElementById('caixai');
  caixai.style.display = 'block';

  // Ocultar outros elementos que não devem ser exibidos ao selecionar salário
  document.getElementById('caixaDebito').style.display = 'none';
}
function atualizarCaixaOutros() {
  var caixaoutros = document.getElementById('caixaoutros');
  caixaoutros.style.display = 'block';

  // Ocultar outros elementos que não devem ser exibidos ao selecionar salário
  document.getElementById('caixaDebito').style.display = 'none';
}

// Função para confirmar o salário
function confirmarSalario() {
    var valorSalario = document.getElementById('valorSalario').value;
    if (valorSalario) {
      if (opcaoValor <= mesAtual){
        alert(`Salário confirmado! Valor: R$ ${valorSalario}`);
        fecharcaixaSalario();
        atualizarValores();
        // Atualize aqui o saldo em conta com o valor do salário
      }
      else  {
        alert('Não é possível mudar valor dos meses seguintes');
       } 
    } else {
        alert('Por favor, digite o valor do salário.');
    }
}

function adicionarGastosPessoais() {

  var valor_ge = (mesesData[opcaoValor].gastosPorCategoria[0]* mesesData[opcaoValor].despesas) / 100;
  var valor_d = (mesesData[opcaoValor].gastosPorCategoria[3]* mesesData[opcaoValor].despesas) / 100;
  var valor_in = (mesesData[opcaoValor].gastosPorCategoria[1]* mesesData[opcaoValor].despesas) / 100;
  var valor_gp = (mesesData[opcaoValor].gastosPorCategoria[2]* mesesData[opcaoValor].despesas) / 100;
  
  var valorgastop = parseFloat(document.getElementById("valorgastop").value);
  if (isNaN(valorgastop) || valorgastop <= 0) {
    alert('Por favor, digite um valor de gasto válido.');
    return;
  }
  var valortotal = mesesData[opcaoValor].despesas + valorgastop; 
  
  var porcentagem_ge = (valor_ge * 100) / valortotal; 
  var porcentagem_d = (valor_d * 100) / valortotal; 
  var porcentagem_i = (valor_in * 100) / valortotal; 
  var porcentagem_gp = ((valorgastop + valor_gp) * 100) / valortotal;
  console.log(porcentagem_d, porcentagem_gp, porcentagem_ge, porcentagem_i);
  // Atualiza os dados
  mesesData[opcaoValor].despesas += valorgastop;
  mesesData[opcaoValor].saldoConta -= valorgastop;

  // Atualiza a porcentagem
  mesesData[opcaoValor].gastosPorCategoria[2] = porcentagem_gp;
  mesesData[opcaoValor].gastosPorCategoria[0] = porcentagem_ge;
  mesesData[opcaoValor].gastosPorCategoria[1] = porcentagem_i;
  mesesData[opcaoValor].gastosPorCategoria[3] = porcentagem_d;

  // Atualiza o gráfico e outras informações
  atualizarDadosMes(opcaoValor);

  // Fecha a caixa de gastos pessoais
  fecharcaixagp();
}
function adicionarGastosEssenciais() {

  var valor_ge = (mesesData[opcaoValor].gastosPorCategoria[0]* mesesData[opcaoValor].despesas) / 100;
  var valor_d = (mesesData[opcaoValor].gastosPorCategoria[3]* mesesData[opcaoValor].despesas) / 100;
  var valor_in = (mesesData[opcaoValor].gastosPorCategoria[1]* mesesData[opcaoValor].despesas) / 100;
  var valor_gp = (mesesData[opcaoValor].gastosPorCategoria[2]* mesesData[opcaoValor].despesas) / 100;
  
  var valorgastoe = parseFloat(document.getElementById("valorgastoe").value);
  if (isNaN(valorgastoe) || valorgastoe <= 0) {
    alert('Por favor, digite um valor de gasto válido.');
    return;
  }
  var valortotal = mesesData[opcaoValor].despesas + valorgastoe; 
  
  var porcentagem_gp = (valor_gp * 100) / valortotal; 
  var porcentagem_d = (valor_d * 100) / valortotal; 
  var porcentagem_i = (valor_in * 100) / valortotal; 
  var porcentagem_ge = ((valorgastoe + valor_ge) * 100) / valortotal;
  // Atualiza os dados
  mesesData[opcaoValor].despesas += valorgastoe;
  mesesData[opcaoValor].saldoConta -= valorgastoe;

  // Atualiza a porcentagem
  mesesData[opcaoValor].gastosPorCategoria[2] = porcentagem_gp;
  mesesData[opcaoValor].gastosPorCategoria[0] = porcentagem_ge;
  mesesData[opcaoValor].gastosPorCategoria[1] = porcentagem_i;
  mesesData[opcaoValor].gastosPorCategoria[3] = porcentagem_d;

  // Atualiza o gráfico e outras informações
  atualizarDadosMes(opcaoValor);

  // Fecha a caixa de gastos pessoais
  fecharcaixage();
}
function adicionarInvestimentos() {

  var valor_ge = (mesesData[opcaoValor].gastosPorCategoria[0]* mesesData[opcaoValor].despesas) / 100;
  var valor_d = (mesesData[opcaoValor].gastosPorCategoria[3]* mesesData[opcaoValor].despesas) / 100;
  var valor_in = (mesesData[opcaoValor].gastosPorCategoria[1]* mesesData[opcaoValor].despesas) / 100;
  var valor_gp = (mesesData[opcaoValor].gastosPorCategoria[2]* mesesData[opcaoValor].despesas) / 100;
  
  var valorinvestimento = parseFloat(document.getElementById("valorinvestimento").value);
  if (isNaN(valorinvestimento) || valorinvestimento <= 0) {
    alert('Por favor, digite um valor de gasto válido.');
    return;
  }
  var valortotal = mesesData[opcaoValor].despesas + valorinvestimento; 
  
  var porcentagem_ge = (valor_ge * 100) / valortotal; 
  var porcentagem_d = (valor_d * 100) / valortotal; 
  var porcentagem_gp = (valor_gp * 100) / valortotal; 
  var porcentagem_i = ((valorinvestimento + valor_in) * 100) / valortotal;
  console.log(porcentagem_d, porcentagem_gp, porcentagem_ge, porcentagem_i);
  // Atualiza os dados
  mesesData[opcaoValor].despesas += valorinvestimento;
  mesesData[opcaoValor].saldoConta -= valorinvestimento;

  // Atualiza a porcentagem
  mesesData[opcaoValor].gastosPorCategoria[2] = porcentagem_gp;
  mesesData[opcaoValor].gastosPorCategoria[0] = porcentagem_ge;
  mesesData[opcaoValor].gastosPorCategoria[1] = porcentagem_i;
  mesesData[opcaoValor].gastosPorCategoria[3] = porcentagem_d;

  // Atualiza o gráfico e outras informações
  atualizarDadosMes(opcaoValor);

  // Fecha a caixa de gastos pessoais
  fecharcaixai();
}
function adicionarDividas() {

  var valor_ge = (mesesData[opcaoValor].gastosPorCategoria[0]* mesesData[opcaoValor].despesas) / 100;
  var valor_d = (mesesData[opcaoValor].gastosPorCategoria[3]* mesesData[opcaoValor].despesas) / 100;
  var valor_in = (mesesData[opcaoValor].gastosPorCategoria[1]* mesesData[opcaoValor].despesas) / 100;
  var valor_gp = (mesesData[opcaoValor].gastosPorCategoria[2]* mesesData[opcaoValor].despesas) / 100;
  
  var valordivida = parseFloat(document.getElementById("valordivida").value);
  if (isNaN(valordivida) || valordivida <= 0) {
    alert('Por favor, digite um valor de gasto válido.');
    return;
  }
  var valortotal = mesesData[opcaoValor].despesas + valordivida; 
  
  var porcentagem_ge = (valor_ge * 100) / valortotal; 
  var porcentagem_gp = (valor_gp * 100) / valortotal; 
  var porcentagem_i = (valor_in * 100) / valortotal; 
  var porcentagem_d = ((valordivida + valor_d) * 100) / valortotal;
  console.log(porcentagem_d, porcentagem_gp, porcentagem_ge, porcentagem_i);
  // Atualiza os dados
  mesesData[opcaoValor].despesas += valordivida;
  mesesData[opcaoValor].saldoConta -= valordivida;

  // Atualiza a porcentagem
  mesesData[opcaoValor].gastosPorCategoria[2] = porcentagem_gp;
  mesesData[opcaoValor].gastosPorCategoria[0] = porcentagem_ge;
  mesesData[opcaoValor].gastosPorCategoria[1] = porcentagem_i;
  mesesData[opcaoValor].gastosPorCategoria[3] = porcentagem_d;

  // Atualiza o gráfico e outras informações
  atualizarDadosMes(opcaoValor);

  // Fecha a caixa de gastos pessoais
  fecharcaixad();
}


// Função para adicionar salário
function adicionarSalario() {
  var valorSalario = parseFloat(document.getElementById("valorSalario").value);
  var diaSalario = parseInt(document.getElementById("diaSalario").value);

  if (isNaN(valorSalario) || valorSalario <= 0 || isNaN(diaSalario) || diaSalario <= 0) {
    alert('Por favor, digite valores válidos para o salário e o dia.');
    return;
  }

  // Verifica se o dia informado é válido (de 1 a 31)
  if (diaSalario < 1 || diaSalario > 31) {
    alert('Por favor, digite um dia válido.');
    return;
  }

  var mesesDataString = localStorage.getItem('dadosMeses');
  if (mesesDataString) {
    mesesData = JSON.parse(mesesDataString);
  }

  mesesData[opcaoValor].receitas += parseFloat(valorSalario);

  for (var i = 0; i < opcaoValor ; i++){
    valorSalario += mesesData[opcaoValor].saldoConta;
  }

  // Adiciona o salário ao mês atual
  mesesData[opcaoValor].saldoConta += parseFloat(valorSalario);

  // Define o salário para todos os meses
  for (var mes in mesesData) {
    mesesData[mes].salarioDia = diaSalario;
  }

  // Atualiza o gráfico e outras informações
  atualizarDadosMes(opcaoValor);

  // Fecha a caixa de salário
  fecharcaixaSalario();
}


// Função para adicionar outros
function adicionarOutros() {
  var valoroutros = parseFloat(document.getElementById("valoroutros").value);
  mesesData[opcaoValor].receitas += parseFloat(valoroutros);
  mesesData[opcaoValor].saldoConta += parseFloat(valoroutros);
  atualizarDadosMes(opcaoValor);
  fecharcaixaoutros();
  fecharcaixaCredito();
}

// Adiciona evento de clique à imagem para abrir o modal
document.getElementById('openModalBtn').addEventListener('click', abrirModal);

// Cria o gráfico de pizza
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {},
  options: options
});

// Chama a função para atualizar o gráfico e informações no mês de janeiro
atualizarDadosMes('0');
