// setTimeout(() => {
//     const paragrafo = document.createElement("p");
//     paragrafo.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia velit minima et totam voluptatum saepe molestiae ea assumenda aliquam deleniti, officiis necessitatibus debitis praesentium excepturi sit quia itaque ex dolore.";
//     document.body.appendChild(paragrafo);

//     setTimeout(() => document.body.removeChild(paragrafo), 5000);
// }, 3000);


// setTimeout(() => {
//     const loremIpsum = document.getElementById("lorem-ipsum");
//     if(loremIpsum){
//         const br = document.createElement("br");
//         loremIpsum.appendChild(br);
//         loremIpsum.textContent = loremIpsum.textContent + "Mudei o Lorem Ipsum...";
//     }
// }, 2000);

// setTimeout(() => {
//     const loremIpsum = document.getElementById("lorem-ipsum");
//     loremIpsum.style.fontSize = "20px";
// }, 2000);

// const btnMudarBackground = document.getElementById("mudar-background");
// const loremIpsum = document.getElementById("lorem-ipsum");
// const mudarBackground = () => {
//     if(loremIpsum.classList.contains("background-lorem")){
//         loremIpsum.classList.remove("background-lorem");
//     }else{
//         loremIpsum.classList.add("background-lorem");
//     }
// };
// // btnMudarBackground.addEventListener("click", mudarBackground);
// btnMudarBackground.onclick = mudarBackground;


// document.addEventListener("copy", (e) => {
//     console.log(`Você copiou: ${e.clipboardData.getData("utf-8")}`);
// });

const formAluno = document.getElementById("form-aluno");
formAluno.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome");
    const curso = document.getElementById("curso");

    console.log(`O aluno ${nome.value} estuda no curso ${curso.value}.`);
});
