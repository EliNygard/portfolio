export function observerMenu(menu1, menu2) {
    const container = document.createElement("div")

    const menuOne = document.createElement("p")
    menuOne.textContent = menu1

    const menuTwo = document.createElement("p")
    menuTwo.textContent = menu2

    container.append(menuOne, menuTwo)

    return container
}

export function buttonGoToTop() {
    const button = document.createElement("button")
    button.textContent = "To top"
    return button
}