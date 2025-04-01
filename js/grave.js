const button = document.querySelector('#grave_clicker')
const counter = document.querySelector('#souls')
const upgrade_menu = document.querySelector('#upgrades_menu')

const upgrade_template = document.querySelector('#u_template')

let souls = 0
let soulsPerSecond = 0
let test_image = document.getElementById("test_2")


let upgrades = [
    {
        name: "Assistant",
        description: "A beginner within necromancy tries to help your efforts, * +2 souls per second *",
        img: "upgrade_1",
        cost: 20,
        SPS: 2,
    },
    {
        name: "Assistant",
        description: "A beginner within necromancy tries to help your efforts, * +2 souls per second *",
        img: "upgrade_1",
        cost: 670,
        SPS: 35,
    },
    {
        name: "Thanks!",
        description: "You win! * +666666666666666 souls per second*",
        img: "upgrade_2",
        cost: 666,
        SPS: 666666666666666,
    }
];


function create_upgrade(upgrade) {
    const clone = upgrade_template.cloneNode(true)
    clone.removeAttribute("id")
    let children = clone.childNodes

    let cost = upgrade.cost
    let amount = 0

    const name = children.item(1).childNodes.item(1)
    const description = children.item(1).childNodes.item(3)
    const upgrade_button = children.item(1).childNodes.item(5)
    const img = children.item(3)

    img.id = upgrade.img

    upgrade_button.textContent = `(${amount}) Cost:${cost}`

    upgrade_button.addEventListener(
        'click', (event) => {
            if (souls >= cost) {

                souls -= cost
                soulsPerSecond += upgrade.SPS
                amount += 1
                cost = Math.round(upgrade.cost * Math.pow(1.25,amount))

                upgrade_button.textContent = `(${amount}) Cost:${cost}`
            }
        },
        false
    )


    console.log(button)

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

let last = 0

function step(timestamp) {
    counter.textContent = souls
    if (timestamp >= last + 1000) {
        souls += soulsPerSecond
        last = timestamp
    }


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