var data = {
    labels: ['Gastos Essenciais', 'Investimentos', 'Gastos Pessoais', 'Dívidas'],
    datasets: [{
      data: [30, 20, 25, 25], // Porcentagens dos gastos
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'] // Cores para cada categoria
    }]
  };

  // Configurações do gráfico
  var options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
  };

  // Obtém o contexto do canvas
  var ctx = document.getElementById('myPieChart').getContext('2d');

  // Cria o gráfico de pizza
  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
  });