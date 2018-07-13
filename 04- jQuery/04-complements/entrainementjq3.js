$(function(){

    //------------------
    // Naviguer dans le DOM :

    // Les méthodes next() et children() :
    // au clic sur un <h3> "effacer galerie...", la galerie qui suit s'efface :

    $('#galeries h3').click(function(){
        //$(this).next().fadeOut(1000);  // la méthode next() permet de sélectionner la balise directement suivante, ici le <div.galerie> qui suit le <h3> sur lequel on a cliqué. Ainsi, quelque soit le <h3> cliqué, seule la balise qui le suit s'efface. next() peut prendre un sélecteur en argument pour ne sélectionner que les balises suivantes répondant à celui-ci.

        // cependant, on voudrait effacer les <img> contenues dans les <div.galerie> :
        $(this).next().children('img').fadeOut(1000);  // la méthode children() permet de sélectionner TOUS les éléments enfants directs d'une balise, ici toutes les balises <img> qui se trouvent dans <div.galerie> qui suit directement le <h3> que l'on a cliqué. Sans argument, children() sélectionne les enfants directs sans distinction.
    });

    // La méthode parent() :
    // au clic sur une image, la bordure du parent devient rouge :
    $('#galeries img').click(function(){
        $(this).parent('.galerie').css({ border : '2px solid red'});  // la méthode parent() permet de sélectionner l'élément parent direct, ici le <div.galerie> dont on met la bordure en rouge. Sans argument parent() sélectionne le arent direct sans distinction.
    });

    // La méthode prev() (pour previous = précèdant), le contraire de next() :
    $('#galeries p').click(function(){
        $(this).prev().css({ border : ''});  // prev() permet de sélectionner l'élément directement précèdent, ici le <div.galerie> précèdent dont on réinitialise la bordure. prev() peut prendre un sélecteur en argument pour ne sélectionner que les balises précèdentes répondant à celui-ci.
    });

    // La méthode find() :
    // au clic sur le bouton "effacer toutes les galeries", les <img> descendantes de #galeries sont effacées :
    $('button').eq(0).click(function(){
        $('#galeries').find('img').fadeOut(1000);  // find() permet de sélectionner tous les descendants directs ou indirects correspondants au sélecteur précisé, ici "trouve" toutes les balises <img> qui se situent dans la balise #galeries
    });

    // Exercice "accordéon" : vous rendez fonctionnel l'accordéon du HTML : au clic sur "section 1" ou "section 2" ou "section 3" le <div> qu'on quitte se ferme, alors que le <div> de la nouvelle s'ouvre. Utilisez la classe "on" pour ouvrir un élément, et la classe "off" pour fermer, un élément.
$('#accordion h3').click(function(){
    $('.on').removeClass('on').addClass('off');
    $(this).next().removeClass('off').addClass('on');
});

});  // fin du doc ready