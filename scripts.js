let hoje = new Date();
let dnasc = new Date("Mar 13, 2005");
let idade = hoje.getFullYear() - dnasc.getFullYear();
let m = hoje.getMonth() - dnasc.getMonth();

    if (m < 0 || (m == 0 && hoje.getDate() < dnasc.getDate() )){
        idade--;
    }

let paragrafro = document.querySelector("#parag1");/*https://www.horadecodar.com.br/2022/04/04/como-inserir-texto-em-uma-div-com-javascript/*/
let texto = document.createTextNode("Meu nome é Amabily Feuser, nasci em Joinville-SC e tenho " + idade + " anos. Sou estudante do CEDUP, cursando último ano do Ensino Médio integrado com o técnico em Informática. Quando me formar, pretendo ingressar na faculdade de Odontologia, me especializando em Harmonização Facial. Seguir nessa área sempre foi o meu grande sonho.");
paragrafro.appendChild(texto);

let paragrafro2 = document.querySelector("#parag2");
let texto2 = document.createTextNode("Não tenho facilidade em desenvolvimento de softwares. Minha aprendizagem na área é muito lenta, mas busco sempre evoluir.");
paragrafro2.appendChild(texto2);

let paragrafro3 = document.querySelector("#parag3");
let texto3 = document.createTextNode("Pretendo seguir na área de estética, dentro de odontologia.");
paragrafro3.appendChild(texto3);

let paragrafro4 = document.querySelector("#parag4");
let texto4 = document.createTextNode("No meu tempo livre gosto de ler, ouvir múscia, viajar e passar um tempo com minha família e amigos. Bom, isso é um pouco sobre mim!");
paragrafro4.appendChild(texto4);