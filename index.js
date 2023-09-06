const text = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel eum incidunt maiores quidem. Quam ab inventore deleniti rem fuga quis maxime voluptate odio, dolorem modi impedit in aliquid, suscipit consectetur sapiente eius saepe eos vero. Repellendus voluptatem nulla sequi magnam!",


    "Consectetur adipisicing elit. Vel eum incidunt maiores quidem. Quam ab inventore deleniti rem fuga quis maxime voluptate odio, dolorem modi impedit in aliquid, suscipit consectetur sapiente eius saepe eos vero. Repellendus voluptatem nulla sequi magnam!",


    "A met consectetur adipisicing elit. Vel eum incidunt maiores quidem. Quam ab inventore deleniti rem fuga quis maxime voluptate odio, dolorem modi impedit in aliquid, suscipit consectetur sapiente eius saepe eos vero. Repellendus voluptatem nulla sequi magnam!",


    " Sit amet consectetur adipisicing elit. Vel eum incidunt maiores quidem. Quam ab inventore deleniti rem fuga quis maxime voluptate odio, dolorem modi impedit in aliquid, suscipit consectetur sapiente eius saepe eos vero. Repellendus voluptatem nulla sequi magnam!",


    "panskura college ipsum dolor, sit amet consectetur adipisicing elit. Vel eum incidunt maiores quidem. Quam ab inventore deleniti rem fuga quis maxime voluptate odio, dolorem modi impedit in aliquid, suscipit consectetur sapiente eius saepe eos vero. Repellendus voluptatem nulla sequi magnam!",


    "Jailer dolor, sit amet consectetur adipisicing elit. Vel eum incidunt maiores quidem. Quam ab inventore deleniti rem fuga quis maxime voluptate odio, dolorem modi impedit in aliquid, suscipit consectetur sapiente eius saepe eos vero. Repellendus voluptatem nulla sequi magnam!",


    "Yes boss or, sit amet consectetur adipisicing elit. Vel eum incidunt maiores quidem. Quam ab inventore deleniti rem fuga quis maxime voluptate odio, dolorem modi impedit in aliquid, suscipit consectetur sapiente eius saepe eos vero. Repellendus voluptatem nulla sequi magnam!",


    "Hello there, sit amet consectetur adipisicing elit. Vel eum incidunt maiores quidem. Quam ab inventore deleniti rem fuga quis maxime voluptate odio, dolorem modi impedit in aliquid, suscipit consectetur sapiente eius saepe eos vero. Repellendus voluptatem nulla sequi magnam!",


    "I am koushik, sit amet consectetur adipisicing elit. Vel eum incidunt maiores quidem. Quam ab inventore deleniti rem fuga quis maxime voluptate odio, dolorem modi impedit in aliquid, suscipit consectetur sapiente eius saepe eos vero. Repellendus voluptatem nulla sequi magnam!"
];

const button = document.querySelector("button");
const input = document.querySelector("input");
const container = document.querySelector(".container");


button.addEventListener("click", () => {
    const tagCreat = document.createElement("p");
    if (isNaN(input.value) || input.value < 0 || input.value > 9 || input.value == "") {
        const randomIndex = Math.floor(Math.random() * text.length);
        container.innerHTML = `<p>${text[randomIndex]}</p>`;
    } else {
        container.innerHTML = ``
        const data = text.slice(0, input.value);
        const parser = data.map((item) => {
            return `<p>${item}</p>`
        })
        input.value = "";



        tagCreat.innerHTML = `${parser.join("")}`;
        container.appendChild(tagCreat);
        console.log(tagCreat.innerHTML);
    }



})