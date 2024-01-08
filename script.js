// Dados iniciais para janeiro (você pode adicionar dados para outros meses)
var mesesData = {
  janeiro: {
    saldoConta: 1320,
    receitas: 0,
    despesas: 0,
    gastosPorCategoria: [30, 20, 25, 25],
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
}

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

// Função para confirmar o salário
function confirmarSalario() {
    var valorSalario = document.getElementById('valorSalario').value;
    if (valorSalario) {
        alert(`Salário confirmado! Valor: R$ ${valorSalario}`);
        fecharcaixaSalario();
        // Atualize aqui o saldo em conta com o valor do salário
    } else {
        alert('Por favor, digite o valor do salário.');
    }
}

// Função para atualizar a caixa de outros
function atualizarCaixaOutros() {
    var caixaOutros = document.getElementById('caixaOutros');
    caixaOutros.style.display = 'block';

    // Ocultar outros elementos que não devem ser exibidos ao selecionar outros
    document.getElementById('caixaCredito').style.display = 'none';
    document.getElementById('caixaSalario').style.display = 'none';
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
atualizarDadosMes('janeiro');
