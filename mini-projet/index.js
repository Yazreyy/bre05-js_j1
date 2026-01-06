const nombreSecret = 65;

let propositionUtilisateur = -1;

console.log("le jeu démarre");

while (propositionUtilisateur !== nombreSecret){
    let saisie = window.prompt("Devinez le chiffres secret (entre 0 & 100) :")
    if ( saisie === null){
        window.alert("annulation de la partie");
        break;
    } 
    
    propositionUtilisateur = parseInt(saisie, 10);
/*Not a Number*/
    if (isNaN(propositionUtilisateur)){
        window.alert("Veuillez saisir un nombre valide");
        continue;
    }
    
    if (propositionUtilisateur < nombreSecret){
        window.alert("c'est plus ! essayez encore");
        } else if (propositionUtilisateur > nombreSecret){
            window.alert("c'est moins ! essayez encore");
        }
}
if(propositionUtilisateur === nombreSecret){
    window.alert(`Bravo, vous avez trouver le nombre : ${nombreSecret}`);
}
