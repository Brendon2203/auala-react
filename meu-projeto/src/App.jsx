function Saudacao(props) {
  return (
    <h2>Olá, {props.nome}! Seja bem-vindo à aula.</h2>
  );
}

function Botao(){
  return(
    <a href="https://www.youtube.com/watch?v=uyPXinsv5DM&list=RDuyPXinsv5DM&start_radio=1" target="blank_">Clique aqui</a>
  );
}
function App() {
  return (
    <div>
      <h1>Minha primeira aula de React</h1>
      <Saudacao nome="Brendon" />
      <Saudacao nome="Gabriel" />
      <Saudacao nome="Miguel" />
      <Saudacao nome="Daniel" />
      <Saudacao nome="Enrico" />
      <Saudacao nome="Davi" />
      <Botao/>
    </div>
  );
}
export default App;