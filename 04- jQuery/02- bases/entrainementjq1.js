// Ce fichier est en jQuery

/* 
Document ready :
Les deux lignes suivantes ont la même signification : exécuter le code JS après avoir chargé le code HTML. Par conséquent, le lien vers la page JS peut se faire n'importe où dans la page HTML (dans le <head> ou avant la fermeture de <body>).

$(function(){
    // ici vous mettez tout votre code jQuery
});

Ou encore, autre syntaxe :
$(document).ready(function(){
    // ici vous mettez tout votre code jQuery
});
*/

$(function(){  // ce code s'exécutera une fois le document HTML totalement chargé

//---------
// Fonction principale de jQuery, alias $, selecteur et évènement :
$('#monBouton').click(function(){  // sélectionne la balise #monBouton et au clic appelle la function anonyme qui suit :
    $('#carre').hide();  // sélectionne la balise #carre et l'efface
});


jQuery('#monBouton').click(function(){  
    jQuery('#carre').hide();  
});  // en réalité le $ remplace le mot "jQuery" dont il est un alias. Les deux font la même chose : ils créent un OBJET jQuery


$('#carre').click(function(){  // sélectionne la balise #carre et au clic => sélectionne toutes les balises h3 et les efface (sans écrire de boucle)
    $('h3').hide();
});

// Le contraire de hide() c'est show():
$('.photo').dblclick(function(){   // sélectionne la balise .photo et au double-clic => sélectionne la balise #carre et l'affiche en 1000 ms (=1s)
    $('#carre').show(1000);  // hide() et show() peuvent prendre un argument : une durée en ms, ou encore 'slow' ou 'fast'
});


// Pour alterner hide() et show() automatiquement : toggle()
$('#interrupteur').click(function(){
    $("#on-off").toggle();
});

//----------
// on() équivalent de addEventListener, et son contraire off():
$('#monBouton').on('click', function(){
    alert('Déclenchement de la méthode on()');
});  // on() permet d'associer un évènement à un élément comme le ferait addEventListener() en JS "pur". La seule différence entre la syntaxe ligne 22 et celle-ci réside dans le fait que cette dernière marche aussi avec les éléments créés dynamiquement (= ajoutés par le jQuery).

$('#monBouton').off('click');  // en ajoutant cette ligne, on dissocie les clicks de l'élément #monBouton : les clics précédemment lis au bouton ne fonctionnent plus ! C'est un moyen simple de supprimer un évènement.

//-----------
// Evènement hover, modifier du CSS depuis jQuery :
$('#vert').hover(
        function(){
            $('#rouge').css({
                width: '300px',
                'background-color': 'yellow'
            });
        }, function(){
            $('#bleu').css({
                width: '300px',
                'background-color': 'yellow'
            });
        });

    // L'évènement hover est une combinaison de mouseover et mouseout en JS : il possède 2 fonctions anonymes qui s'exécutent l'une quand on entre, l'autre quand on sort de l'élément.
    // La méthode css() permet de modifier des propriétés CSS écrites dans un objet : on les met entre des {} et sont séparées par une ",". Notez que les propriétés CSS qui contiennent un tiret s'écrivent dans des quotes.


    //-----------
    // Récupérer ou modifier la valeur d'un input avec val() :
    $('#mdp1').change(function(){
        var texte = $('#mdp1').val();  // val() sans argument retourne la valeur saisie dans le champ #mdp1 (getter)

        $('#mdp2').val(texte);   // val(argument) permet de changer la valeur du champ #mdp2 (setter)
    });


});  // fin du document ready (à ne pas supprimer)