import cruzvermelha from './cruzvermelha.jpg';
import './App.css';

function App() {
  const testeCovid = () => {
    alert("A seguir, você responderá a algumas perguntas para avaliarmos a necessidade de comparecer ao médico. Responda com sim ou não as perguntas a seguir")
    var nome = prompt("Qual o seu nome completo?")
    var age = 16;
    let febre = 16;
    let tosse = 5;
    let dorNoCorpo = 5;
    let dorDeCabeca = 5;
    let pontos = 0;

    while (true) {
        let promptPergunta = prompt("Tem mais de 60 anos?")
        promptPergunta = promptPergunta.toUpperCase();
        if (promptPergunta === "SIM") {
            pontos += age;
            break;
        } else if (promptPergunta === "NÃO" || promptPergunta === "NAO") {
            break;
        } else {
            alert("Digite sim ou não para continuar");
        }
    }

    while (true) {
        let promptPergunta = prompt("Teve febre?")
        promptPergunta = promptPergunta.toUpperCase();
        if (promptPergunta === "SIM") {
            pontos += febre;
            break;
        } else if (promptPergunta === "NÃO" || promptPergunta === "NAO") {
            break;
        } else {
            alert("Digite sim ou não para continuar");
        }
    }

    while (true) {
        let promptPergunta = prompt("Teve tosse?")
        promptPergunta = promptPergunta.toUpperCase();
        if (promptPergunta === "SIM") {
            pontos += tosse;
            break;
        } else if (promptPergunta === "NÃO" || promptPergunta === "NAO") {
            break;
        } else {
            alert("Digite sim ou não para continuar");
        }
    }

    while (true) {
        let promptPergunta = prompt("Teve dores no corpo?")
        promptPergunta = promptPergunta.toUpperCase();
        if (promptPergunta === "SIM") {
            pontos += dorNoCorpo;
            break;
        } else if (promptPergunta === "NÃO" || promptPergunta === "NAO") {
            break;
        } else {
            alert("Digite sim ou não para continuar");
        }
    }

    while (true) {
        let promptPergunta = prompt("Teve dores de cabeça?")
        promptPergunta = promptPergunta.toUpperCase();
        if (promptPergunta === "SIM") {
            pontos += dorDeCabeca;
            break;
        } else if (promptPergunta === "NÃO" || promptPergunta === "NAO") {
            break;
        } else {
            alert("Digite sim ou não para continuar");
        }
    }
    if (pontos >= 21) {
        let aguardarResultado = document.getElementById("Suspeita");
        aguardarResultado.textContent = ("Olá " + nome + ", de acordo com seus sintomas, o indicado pelo MS é que procure o posto de saúde mais próximo")
    } else {
        let aguardarResultado2 = document.getElementById("Aguardar");
        aguardarResultado2.textContent = ("Olá " + nome + ", de acordo com seus sintomas, o indicado pela MS é que fique em casa e acompanhe os sintomas nos próximos dias, caso apareça mais algum sintoma volte aqui e realize o teste novamente")
    }
}
return (
  <div className="App">
      <header className="App-header">
        <img src={cruzvermelha} className="App-logo" alt="logo" />
      </header>
      <body>
        <form className = 'form'>
          <h1>Covid-19 - Preciso ir ao médico?</h1>
          <p> Faça o teste e veja se é necessário que vá ao médico.</p>
          <button onclick={testeCovid}>Clique aqui</button>
          <p> Resultado </p>
          <p id="Suspeita"></p>
          <p id="Aguardar"></p>
        </form>
      </body>
  </div>
  );
}

export default App;
