//objeto guardando as minhas redes sociais
const LinkSocialMedia = {
  github: "jubassul",
  instagram: "juliabassull",
  facebook: "",
  twitter: "",
  youtube: "",
};
//criando links das redes sociais
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    //a primeiro li vai rodar, pois ela é o primeiro filho, até chegar na última, que é o último filho, é nela que o for vai parar de ser executado.
    const social = li.getAttribute("class");
    //getAttribute: através dele pegamos a class que colocamos no html e fazemos com que o const guarde a classe e não o objeto html
    li.children[0].href = `https://${social}.com/${LinkSocialMedia[social]}`;
    //estou pegando o filho na posição 0 (insta) e seu link, entretranto, eu atribui uma variavel ao hrf, onde, eu coloquei a variável social em "forma de link", ou seja, ao clicar no instagram será direcionado para ele, pois estou usando a const que guarda o nome das minhas redes, e assim vai, até o último filho ter passado, pois o for só termina quando o último filho passa.
  }
}
changeSocialMediaLinks();

//pegando as informações que estão no github e trazendo para cá
function getGitHubProfileInfos() {
  //pegando a url users do github através da api
  const url = `https://api.github.com/users/${LinkSocialMedia.github}`;
  //o fetch vai "bater" na url, chamada de rota, pega o que ela responder e devolve para nós
  //o then é a promisse, a promessa de pegar alguma coisa, é com ela que pegamos a resposta do fetch, só conseguimos pegar se a resposta (url) estiver funcionando direito.
  //arrow function: transformar a response em jscon, pois o fetch não guarda em json.
  fetch(url)
    .then((response) => response.json())
    //o data armazena a resposta da url em json
    //criando uma function p/ pegar do html os elementos que eu quero e substituir pelo data
    .then((data) => {
      //peguei o id dos elementos do html e usei o text content p/ mudar eles, esse .name e .bio são os elementos presentes lá na api do github, e assim conseguir fazer a substição de elementos html com os da api
      userName.textContent = data.name;
      bio.textContent = data.bio;
      //para o href usamos .href e com isso aparecerá na página o link do meu github
      linkGithub.href = data.html_url;
      //para imagem usar o .src
      photoJulia.src = data.avatar_url;
    });
}

getGitHubProfileInfos();
