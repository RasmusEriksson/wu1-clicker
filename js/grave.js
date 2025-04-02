const button = document.querySelector('#grave_clicker')
const counter = document.querySelector('#souls')
const upgrade_menu = document.querySelector('#upgrades_menu')

const upgrade_template = document.querySelector('#u_template')

let souls = 0
let soulPerClick = 1
let soulsPerSecond = 0


let upgrades = [
    {
        name: "Skeletony",
        description: "One of your creations helps you summon more souls, * +2 souls per second *",
        img: "upgrade_1",
        cost: 20,
        SPS: 2
    },
    {
        name: "Cultist",
        description: "A beginner within necromancy tries to help your efforts, all praise the dark lord!, * +18 souls per second *",
        img: "upgrade_1",
        cost: 175,
        SPS: 18
    },
    {
        name: "Cursed Totem",
        description: "It feels cursed with dark power, it gives you strength, *+2 souls per click*",
        img: "upgrade_1",
        cost: 550,
        SPC: 2,
        scaling: 1.5
    }
];


function create_upgrade(upgrade) {
    const clone = upgrade_template.cloneNode(true)
    clone.removeAttribute("id")
    let children = clone.childNodes

    let cost = upgrade.cost
    let amount = 0
    let scaling = 1.25

    const name = children.item(1).childNodes.item(1)
    const description = children.item(1).childNodes.item(3)
    const upgrade_button = children.item(1).childNodes.item(5)
    const img = children.item(3)
    
    if (upgrade.scaling) {
        scaling = upgrade.scaling
    }


    img.id = upgrade.img

    upgrade_button.textContent = `(${amount}) Cost: ${cost}`

    upgrade_button.addEventListener(
        'click', (event) => {
            if (souls >= cost) {

                souls -= cost
                if (upgrade.SPS) {
                    soulsPerSecond += upgrade.SPS
                }
                if (upgrade.SPC) {
                    soulPerClick += upgrade.SPC
                }

                amount += 1
                cost = Math.round(upgrade.cost * Math.pow(scaling,amount))

                upgrade_button.textContent = `(${amount}) Cost: ${cost}`
            }
        },
        false
    )
    
    name.textContent = upgrade.name
    description.textContent = upgrade.description


    return clone
};


button.addEventListener(
    'click', (event) => {
        souls += soulPerClick
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