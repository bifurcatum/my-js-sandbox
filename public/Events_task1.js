function hideSelf() {
    let button= document.querySelector('[class="hide-self-button"]');
    button.addEventListener('click', () => button.hidden = true);
    // button.addEventListener('click', () => button.hidden = false);
}

hideSelf();
