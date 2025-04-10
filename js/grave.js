const button = document.querySelector('#grave_clicker')
const counter = document.querySelector('#souls')
const sps_tracker = document.querySelector('#sps_tracker')
const upgrade_menu = document.querySelector('#upgrades_menu')

const upgrade_template = document.querySelector('#u_template')

let souls = 0
let soulPerClick = 1
let soulsPerSecond = 0


let upgrades = [
    {
        name: "Skeleton",
        description: "One of your creations helps you summon more souls, * +2 souls per second *",
        img: "Skeleton",
        cost: 20,
        SPS: 2
    },
    {
        name: "Cultist",
        description: "A beginner within necromancy tries to help your efforts, all praise the dark lord!, * +18 souls per second *",
        img: "Cultist",
        cost: 175,
        SPS: 18
    },
    {
        name: "Cursed Totem",
        description: "It feels cursed with dark power, it gives you strength, *+4 souls per click*",
        img: "Totem",
        cost: 550,
        SPC: 4,
        scaling: 1.5
    },
    {
        name: "Reaper",
        description: "Death itself, its empowered by your undead, *+7 souls per second for each skeleton you have*",
        img: "Totem",
        cost: 1666,
        SPS: 7,
        Dependancy: "Skeleton",
        scaling: 1.75
    }
];

let active_upgrades = {}

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
    
    img.id = upgrade.img

    upgrade_button.textContent = `(${amount}) Cost: ${cost}`

    active_upgrades[upgrade.name] = {
        up_cost: cost,
        up_amount: amount,
        up_SPS: 0,
        button: upgrade_button
    }

    if (upgrade.SPS) {
        active_upgrades[upgrade.name]["SPS_increase"] = upgrade.SPS
    }

    if (upgrade.scaling) {
        scaling = upgrade.scaling
    }
    if (upgrade.Dependancy) {
        for (const[other_name,other_upgrade] of Object.entries(active_upgrades)) {
            if (other_name === upgrade.Dependancy) {
                active_upgrades[other_name]["affiliate"] = upgrade.name
            }
        }
    }

    upgrade_button.addEventListener(
        'click', (event) => {
            if (souls >= cost) {
                
                souls -= cost
                amount += 1
                active_upgrades[upgrade.name].up_amount = amount

                if (upgrade.SPS) {
                    if (active_upgrades[upgrade.name].affiliate) {
                        var affiliate = active_upgrades[upgrade.name].affiliate
                        active_upgrades[affiliate].up_SPS = amount * active_upgrades[affiliate].SPS_increase * active_upgrades[affiliate].up_amount
                    }
                    
                    if (upgrade.Dependancy) {
                        active_upgrades[upgrade.name].up_SPS = amount * active_upgrades[upgrade.name].SPS_increase * active_upgrades[upgrade.Dependancy].up_amount
                    }
                    else {
                        active_upgrades[upgrade.name].up_SPS += active_upgrades[upgrade.name].SPS_increase
                    }
                    
                }
                if (upgrade.SPC) {
                    soulPerClick += upgrade.SPC
                }

                
                cost = Math.round(upgrade.cost * Math.pow(scaling,amount))
                active_upgrades[upgrade.name].up_cost = cost
                

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
    var increase = 0

    if (timestamp >= last + 1000) {
        for (const [name, upgrade] of Object.entries(active_upgrades)) {
            souls += upgrade.up_SPS
        }
        last = timestamp
    }

    for (const [name, upgrade] of Object.entries(active_upgrades)) {
        increase += upgrade.up_SPS
        if (upgrade.up_cost > souls) {
            if (upgrade.button.classList.contains("button_off") !== true) {
                upgrade.button.classList.add("button_off")
            }
        };

        if (upgrade.up_cost <= souls){
            
            if (upgrade.button.classList.contains("button_off")) {
                upgrade.button.classList.remove("button_off")
            }
        };
      }
    sps_tracker.textContent = increase

    counter.textContent = souls
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