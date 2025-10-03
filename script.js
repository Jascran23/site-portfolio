const projetos = [
    {
        image: './img/spotify.png',
        titulo: 'Clone Spotify',
        alt: 'Project-Spotify',
        descricao: 'Um Clone do Spotify em html, CSS e Javascript',
        link: 'https://github.com/Jascran23/dvclb-clone-spotify',
    },
    {
        image: './img/front-testmonials.png',
        titulo: 'Testmonials Grid',
        alt: 'Project-testmonials-grid',
        descricao: 'Um exercício de css grid',
        link: 'https://github.com/Jascran23/fm-section-testmonials',
    },
    {
        image: './img/todo-list.png',
        titulo: 'Lista de Tarefas',
        alt: 'Project-todo-list',
        descricao: 'Exercício para praticar javascript, construção de uma lista de tarefas',
        link: 'https://github.com/Jascran23/todoList-dev',
    },

];

const localProjects = document.querySelector('.container-projects');


projetos.forEach(projeto => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('card-projects');

    projectCard.innerHTML = `
        <img src="${projeto.image}" alt="${projeto.alt}" class="project-image">
        <div>
            <div>
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>  
            </div>
            <a href="${projeto.link}" target="_blank">
                <i class="external-link fa-solid fa-arrow-up-right-from-square"></i>
            </a>
                
        </div>
        
    `;
    
    localProjects.appendChild(projectCard);

});



function enviarWhats(event){
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5583987325752';

    const texto = ` Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}/?text=${msgFormatada}`;

    window.open(url, '_blank');
}
