import { getMetals, setMetal } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

/*document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            window.alert(`User chose metal ${event.target.value}`)
        }
    }
)*/

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    const listItemsArray = metals.map(metal => {
        return`<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    })

    html += listItemsArray.join("")
    html += "</ul>"
    return html
}

/*export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(style => {
        return `<li>
            <input type="radio" name="size" value="${style.id}" /> ${style.style}
        </li>`
    })

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    html += "</ul>"
    return html
}*/