function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById('resultados-pesquisa');

  let campoPesquisa = document.getElementById('campo-pesquisa').value;

  // Se o campo pesquisa estiver sem uma string "vazio"
  if (!campoPesquisa) {
    section.innerHTML =
      '<p style="color: white;">Nada foi encontrado. Você não digitou !</p>';
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Cria uma string vazia para armazenar os resultados
  let resultados = '';
  let titulo = '';
  let descricao = '';
  let tags = '';

  // Itera sobre cada dado na lista de dados

  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    // Verifica se o campo de pesquisa não está vazio E se o título inclui o termo de pesquisa
    if (
      (campoPesquisa !== '' && titulo.includes(campoPesquisa)) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // Cria um novo elemento  para cada resultado
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
    `;
    }
  }
  if (!resultados) {
    resultados = '<p style="color: white;">Nada foi encontrado</p>';
  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}
