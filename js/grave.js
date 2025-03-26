const button = document.querySelector('#grave_clicker');
const counter = document.querySelector('#souls');
const upgrade_menu = document.querySelector('#upgrades_menu')

const upgrade_template = document.querySelector('#u_template')

let souls = 0;
let test_image = document.getElementById("test_1")


let upgrades = [
    {
        name: "Assistant",
        description: "A beginner within necromancy tries to help your efforts",
        img: test_image,
    },
    {
        name: "wowtest",
        description: "this is insane!",
        img: test_image,
    }
];


function create_upgrade(upgrade) {
    const clone = upgrade_template.cloneNode(true)
    clone.removeAttribute("id")
    let children = clone.childNodes

    const name = children.item(1).childNodes.item(1)
    const description = children.item(1).childNodes.item(3)

    console.log(description)

    name.textContent = upgrade.name
    description.textContent = upgrade.description


    return clone
};


button.addEventListener(
    'click', (event) => {
        souls += 1
    },
    false
);



function step(timestamp) {
    counter.textContent = souls;
    window.requestAnimationFrame(step);
};

window.addEventListener(
    "load", (Event) => {
        upgrades.forEach((upgrade) => {
            upgrade_menu.appendChild(create_upgrade(upgrade));
        });

        window.requestAnimationFrame(step);
    }
)