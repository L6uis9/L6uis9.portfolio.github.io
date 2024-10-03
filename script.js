function openTab(evt, tabName) {
    // Cache tous les onglets
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Supprime la classe "active" de tous les onglets
    let tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Affiche l'onglet sélectionné
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
