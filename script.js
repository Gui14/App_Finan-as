const dataAtual = new Date();
const mesAtual = dataAtual.getMonth;
var select = document.getElementById('select_mes');
var opcaoValor = select.options[select.selectedIndex].value

// Dados iniciais para janeiro (você pode adicionar dados para outros meses)
var mesesData = {
  janeiro: {
    saldoConta: 0,
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
