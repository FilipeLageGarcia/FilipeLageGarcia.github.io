var elementID = 0;

function artigo (imgSrc, title, post, gitHubLink)
{
    //window.location.href = (gitHubLink);
    redirecionamento (this, gitHubLink);

}

function redirecionamento (id, gitHubLink) {
    id.window.location.href = gitHubLink;
}

const artigos = [
    {
        imgSrc: './Projects/CursoMVC/PhotoCover.jpg',
        title: 'Projeto baseado no projeto de Curso de MVC para o bootcamp da Localiza e MRV em .NET na Digital Inovation One. Foi utilizado um sistema MVC com banco de dados SQL.',
        post: 'Projeto criado baseando-se no curso da Digital Inovation One que tinha como objetivo a criação de uma capa de rede social similar ao Instagram.',
        gitHubLink: 'https://github.com/FilipeLageGarcia/CursoMVC'
    }
]