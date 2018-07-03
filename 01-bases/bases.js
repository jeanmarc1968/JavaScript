

//------------------------
// 1- Commentaires
//------------------------

// pour écrire un commentaire sur une seule ligne

/*
pour écrire des commentaires sur plusieurs lignes
*/

//------------------------
// 2- Affichage
//------------------------

document.write('mon premier message'); // affichage dans le navigateur

document.write('<h1>Les bases du JavaScript</h1>'); // on peut mettre des balises HTML, elles sont interprêtées et donc insérées dans le HTML

// Toutes les instructions en JS se finissent par un ";". Elles se suivent et sont effectuées les unes à la suite des autres, du HAUT vers le BAS  du script.

//----------
// Les boîtes de dialogue :
//alert('Salut');  // affiche un message
//confirm('Etes-vous sûr ?');  // message avec boutons de confirmation "ok" ou "annuler"
//prompt('Quel est votre code postal ?');  // message avec champ à remplir

//---------
// Afficher dans la console :
console.log('attention aux erreurs de syntaxes dans la console');  // message écrit dans la console de débugage (F12 + onglet Console)

//------------------------
// 3- Variables - déclaration - affectation
//------------------------
document.write('<h2> 3- Variables - déclaration - affectation</h2>');
// Définition: une variable est un espace mémoire nommé dans lequel nous allons stocker une donnée, une valeur. Cette donnée peut être de n'importe quel type : chiffre, chaîne de caractères, une balise HTML, etc.

// Déclaration d'une variable : 
var maBoite;  // le mot clé var permet de déclarer (= créer) la variable nommée maBoite.

// Règle de nommage des Variables : caractères acceptés : a à z, A à Z, 0 à 9 (jamais au début), _ (jamais au début ni à la fin). Premier mot en minuscules, puis majuscule à la 1ère lettre de chaque mot.

//--------
// Affectation d'une variable :
maBoite = 10;  // on affecte une valeur à une variable avec le signe "=", maBoite contiient donc 10

document.write(maBoite);  // on affiche le contenu de la variable en ne mettant pas de quote autour de son nom. Affiche 10

var maBoite = 10;  // on peut déclarer et affecter une variable en même temps (nous retiendrons cette écriture)

//--------
monAutreBoite = 'bonjour';  // cette écriture est possible (déclaration sans le mot clé var), mais ce n'est pas conventionnel. De plus, dans une fonction cela n'a pas la même signification (voir chapitre "portée des variables")  

document.write('<br>');

//--------
// Déclarer et affecter plusieurs variables en même temps :
var prenom = 'Sylvie',
    nom = 'Robert',
    genre = 'féminin';  // un seul var en séparant chaque déclaration par une virgule, un saut de ligne et une indentation. On termine par un ";"

document.write(prenom);  // affiche Sylvie
document.write('<br>');

//--------
// Changer la valeur d'une variable :
prenom = 'Pierre';  // Nous changeons la valeur initiale "Sylvie" pour la remplacer par "Pierre"
document.write(prenom);  // affiche Pierre
document.write('<br>');

prenom = nom;  // nous affectons la valeur de la variable nom à la variable prenom, autrement dit on remplace "Pierre" par "Robert"

document.write(prenom);  // affiche Robert
document.write('<br>');

//--------
// Ajouter une valeur à la valeur déjà existante d'une variable :
var fruit = 'pomme';
fruit += ' fraise';  // on ajoute la chîne de caractères " fraise" à "pomme" déjà existante dans la variable fruit avec l'opérateur += (sans espace)

document.write(fruit);  // affiche "pomme fraise"
document.write('<br>');

//--------
// Utiliser prompt avec une variable :
var codePostal = prompt('Quel est votre code postal ?');
document.write(codePostal);  // affiche le code postal indiqué par l'internaute
document.write('<br>');

//------------------------
// 4- Types de données
//------------------------
document.write('<h2> Types de données </h2>');

// Nous commençons par les 3 principaux types de données dits primitifs :

// Les types numériques appelés NUMBER :
var chiffre = 20;   // les chiffres s'écrivent sans quote ni guillemets
// Tous les types numériques sont possibles : entiers, décimaux, positifs, négatifs...

// Les types chaînes de caractères appelés STRING :
var texte = "phrase entre guillemets";
var apostrophe = 'il faut utiliser le caractère d\'échappement pour les apostrophes dans des quotes';  // AltGr + 8 pour le caractère d'échappement
// Les quotes ou les guillemets indiquent qu'il s'agit d'un type STRING.

var numero = '10';  // un chiffre dans des quotes ou des guillemets est interprété comme un STRING

// Le type booléen (ou boolean) :
// Le type booléen ne prend que deux valeurs : TRUE ou FALSE
var choix = true;  // s'écrit SANS quote

//---------
// typeof permet de vérifier le type d'une variable :
document.write(typeof(chiffre));  // number
document.write('<br>');

document.write(typeof(texte));  // string
document.write('<br>');

document.write(typeof(numero));  // string
document.write('<br>');

document.write(typeof(choix));  // boolean
document.write('<br>');

//------------------------
// 5- Constante
//------------------------
document.write('<h2> Constante </h2>');

// Définition : les constantes sont comme des variables dont la valeur NE PEUT PAS être modifiée. Elles permettent de "protèger" cette valeur au bon fonctionnement du script.

const CHANGE_PAS = 'ma constante impossible à modifier';  // par convention entre développeurs on écrit les constantes en majuscules et avec un "_" si besoin

document.write(CHANGE_PAS);  // affiche le contenu de la constante
document.write('<br>');

// CHANGE_PAS = 'autre valeur';   // erreur bloquante de type invalid assignment to const CHANGE_PAS



//------------------------
// 6- Concaténation
//------------------------
document.write('<h2> Concaténation </h2>');

// En JS, on fait suivre des variables et des strings avec le symbole "+". On parle de concaténation.

var prenom = 'Bruce',
    nom = 'Wayne';

document.write(prenom + ' ' + nom + '<br>');  // concatène la variable prenom avec un espace avec la variable nom avec une balise <br>

var personnage = prenom + ' ' + nom + '<br>';  // on peut concaténer des éléments au sein d'une variable
document.write(personnage);


//------------------------
// 7- Opérateurs arithmétiques
//------------------------
document.write('<h2> Opérateurs arithmétiques </h2>');

var resultat;

resultat = 10 + 5;  // addition
resultat = 10 - 5;  // soustaction
resultat = 10 * 5;  // multiplication
resultat = 10 / 5;  // division
resultat = 3 % 2;  // modulo = reste de la division entière. Si j'ai 3 billes réparties sur 2 personnes, il n'en reste 1 seule : 3%2 vaut donc 1 (modulo de 2 pour vérifier si un chiffre est pair ou impair, modulo de 10 si c'est une dizaine, ...)

//----------
// On peut appliquer les opérateurs aux variables :
var chiffre1 = 10,
    chiffre2 = 5;

resultat = chiffre1 + chiffre2;  // resultat vaut 15

var chiffre3 = 10;
chiffre3 = chiffre3 + 5; // 15
chiffre3 = chiffre3 + 5; // 20. Mais cette syntaxe n'est pas conventionnelle. On utilise la synthaxe suivante :
chiffre3 += 5;  // 25. Cette synthaxe fait la même chose que là précédente, mais c'est elle que l'on retiendra, chiffre3 vaut ici 25.

// Fonctionne avec tous les opérateurs : +=, -=, *=, /= et %=

//---------
// Incrémenter et décrémenter :
var i = 0;
i++;  // incrémenter i de +1. i vaut donc 1
i--;  // décrémenter i de -1. i vaut donc 0

// i++ et ++i ont le même résultat à la différence près :
// i++ retourne la valeur de i AVANT d'effectuer l'opération
// ++i retourne (fournie) la valeur de i APRES avoir effectué l'opération

var x = 5; 
var y = x++;  // y prend la valeur de 5 PUIS x passe à 6

document.write('y vaut ' +y);  // 5
document.write('x vaut ' +x);  // 6

x = 5;
var z = ++x;  // x passe à 6 PUIS z prend la valeur de 6
document.write('z vaut '+z); // 6
document.write('x vaut '+x); // 6

//---------
// Exercice :

/* L'internaute a acheté 0.8kg de pommes et 0.7kg de poires.
Vous déclarez 4 variables, une qui contient "pommes", une qui contient "poires". Puis vous affichez la phrase "Vous avez acheté des pommes et des poires pour un poids total de 1.5kg." où les fruits et le poids total sont remplacés par les variables.
 */
var fruit1 = 'pommes',
    fruit2 = 'poires',
    poid1 = 0.8,
    poid2 = 0.7;

 var resultat = poid1 + poid2;
 
document.write('<br>');
document.write(fruit1);
document.write(fruit2);
document.write('<br>');
document.write(resultat);
document.write('<br>');
document.write('<p>Vous avez acheté des '  + fruit1 + ' et des ' + fruit2 + ' pour un poids total de' + resultat + ' kg. </p>');


//------------------------
// 8- Conditions
//------------------------
document.write('<h2> Conditions </h2>');

var a = 10, 
    b = 5,
    c = 2;

// La condition if / else :
if ( a > b) {
    // si la condition est évaluée à true, on entre dans ls accolades qui suivent :
    document.write('a est supérieur à b <br>');
    // sinon... si la condition est évaluée a false, on exécute le else :
} else {
    document.write('b est supérieur ou égal à a');
}

//----------
// if avec AND :
if ( a > b && b > c) {
    // Si a est supérieur à b et que dans le même temps b est supérieur à c, on entre dans les accolades qui suivent :
    document.write('Ok pour les 2 conditions <br>');
}

//---------
// if avec OR :
if ( a == 9 || b > c) {
    // si  a est égal (==) à 9 OU alors que b est supérieur à c, on entre dans les accolades qui suivent :
    document.write('Ok pour au moins une des deux conditions <br>');
}


//---------
// if... else if... else :
if ( a == 8 ) {
    // si a vaut 8, on exécute ce qui suit :
    document.write('a est égal à 8 <br>');
} else if ( a != 10 ) {
    // sinon si a est différent de 10, on exécute ce qui suit :
    document.write('a est différent de 10 <br>');
} else {
    // sinon, c'est que je ne suis tombé ni ndans le if, ni dans le else if, je me trouve donc dans ce else :
    document.write('Les 2 conditions sont fausses <br>');
}
// Notes : jamais de () après un else. Le else n'est pas obligatoire si il est vide. En revanche, après un if il y a toujours une condition.

// L'opérateur NOT :
// L'opérateur NOT qui s'écrit "!" permet d'inverser quelque chose de TRUE en FALSE, ou quelque chose de FALSE en TRUE. Il s'agit d'une négation.

var test = 3 < 1;

console.log('test vaut :'  + test);

if (!test) {
    // le "!" est une négation qui inverse le sens du booléen : test seul valant false, !test vaut donc true. La condition finale étant donc évaluée à true, on entre dans les accolades :
    document.write('On exécute ce code... <br>');
}

// Conclusion : les instructions d'une condition seront toujours exécutées que si la condition renvoie TRUE.

//----------
// La comparaison avec le triple "===" :
var varA = 1, // number
    varB = '1'; // string

if ( varA == varB) {
    // varA et varB valent tous les deux 1 en valeur : la condition avec "==" est donc vraie. On exécute les accolades qui suivent :
    document.write('Egalité en valeur uniquement <br>');
} else {
    document.write('Différence en valeur uniquement <br>');
}

if ( varA === varB) {
    // comparaison en valeur ET en type avec le triple "===". Ici nous avons un string et un number, il n'y a donc pas strict égalité entre les 2 variables : on va dans le else.
    document.write ('Egalité en valeur ET en type <br>');
} else {
    document.write('Différence en valeur OU en type <br>');
}

//---------
// Condition dite ternaire:
// La condition ternaire est une autre syntaxe de la condition if...else.

var voiture = 'bmw';

var origine = (voiture == 'bmw') ? 'origine allemande <br>' : 'autre origine <br>'; // la condition ternaire s'écrit avec un "?" qui remplace le if, et un ":"qui remplace le else

document.write(origine);

//---------
// isNAN : is Not a Number
// NaN pour Not a Number est une valeur utilisée pour représenter une "quantité" qui n'est pas un nombre en JavaScript.

// Les opérateurs d'égalité (== ou ===) ne peuvent pas être utilisés pour tester si une valeur est NaN. Il faut utiliser isNaN() :

var annee = '2018'; // string
if ( isNaN(annee)) {
    // condision fausse car '2018' après conversion est bien un number. On entre donc dans le else
    document.write('Ce n\'est pas un number après conversion <br>');
} else {
    document.write('C\'est un number après conversion <br>');
}

// Le contraire :
var annee = 'juin 2018'; // string
if ( isNaN(annee)) {
    // ici la condision est vraie. On entre donc ici :
    document.write('Ce n\'est pas un number après conversion <br>');
} else {
    document.write('C\'est un number après conversion <br>');
}

//----------
// Exercice :
/* Demandez l'âge de l'internaute dans un prompt.
Si la réponse est vide (on compare avec des quotes vides SANS espace), on affiche "Vous n'avez pas répondu."
Si la réponse n'est pas un nombre, on affiche "Vous n'avez pas indiqué un nombre."
Si la réponse est correcte, on affiche "Vous avez indiqué avoir X ans." où X est l'âge donné par l'internaute. */

var age = prompt('Quel est votre age ?'); //STRING

if (age == '') {
    document.write('Vous n\'avez pas répondu');
} else if (isNaN (age)) {
    document.write('Ce n\'est pas un nombre');
} else {
    document.write ('Vous avez '+ age + ' ans');
}


//------------------------
// 9- Synthèse des opérateurs
//------------------------
document.write('<h2> Synthèse des opérateurs </h2>');

// Pour tester des variables entre-elles :

/*
== pour égal en valeur
!=  pour différent de en valeur

=== pour strictement égal en valeur ET en type
!== pour strictement différent en valeur OU en type

>  pour plus grand que
<  pour plus petit que 
>= pour supérieur ou égal
<= pour inférieur ou égal
*/

// Les opérateurs logiques :
/* 
&& pour AND
|| pour OR
!  pour NOT (négation)

Les opérations effectuées avec les opérateurs logiques ne donnent que 2 résultats possibles : TRUE ou FALSE.

Exemples :
    true && true    => true
    true && false   => false
    false && false  => false
    
    true || true    => true
    true || false   => true
    false || false  => false

    !TRUE  => false
    !FALSE => true   
*/


//------------------------
// 10- Condition switch
//------------------------
document.write('<h2> Condition switch </h2>');

// La condition switch est une autre synthaxe pour écrire une condition if...else, lorsque l'on veut comparer une variable à une multitude de valeurs.

var couleur = 'jaune';

switch (couleur) {
    case 'bleu' :  // chaque case représente une valeur que peut prendre la variable. Si couleur contient 'bleu', on exécute le code qui suit ce case :
        document.write('Vous aimez le bleu <br>');
    break;  // obligatoire pour quitter la condition une fois le case exécuté

    case 'rouge' : 
        document.write('Vous aimez le rouge <br>');
    break;

    case 'vert' : 
        document.write('Vous aimez le vert <br>');
    break;
    default :   // on tombe dans default si on n'entre dans aucun case précédent
        document.write('Vous n\'aimez aucune de ces couleurs <br>');
    break;
}


//------------------------
// 11- Les boucles
//------------------------
document.write('<h2> Les boucles </h2>');
// Les boucles sont destinées a répéter des lignes de codes de façon automatique.

// While :
var i = 0; // on initialise une variable à 0 pour compter le nombre de boucle

while ( i <= 5) {  // ici entre parenthèses se situe la condition d'entrée dans la boucle while. Elle signifie "tant que i est inférieur ou égal à 5"
    document.write(i + '---');
    //...
    i++;  // on incrémente i de +1. On n'oublie pas d'incrémenter pour ne pas créer une boucle infinie
}
document.write( '<hr>');

// Exercice :
// Sans modifier la condition de la boucle while précèdente, vous la complèter pour ne pas afficher les "---" après le 5.
var i = 0; // on n'oublie pas de réinitialiser i sinon il concerve la valeur 6 de la boucle précédente

while ( i <= 5 ) {
  if ( i == 5) {
      document.write( i + ' ');
  } else  {
      document.write(i + '---');      
  } 
  i++;
}
document.write( '<hr>');

//--------
// La boucle for :
// La boucle for est une autre syntaxe de la boucle while :
for (var i = 0; i <= 5; i++) {  // on met dans les parenthèses du for : initialisation de la variable suivie d'un ";", puis la condition d'entrée dans la boucle suivie d'un ";", puis l'incrémentation (ou décrémentation...) NON suivie d'un ";"
    document.write(i + '---');
    //...
}
document.write( '<hr>');

//--------
// Exercice : afficher un menu déroulant avec les années de 1900 à 2020. Utilisez une boucle FOR.

document.write('<select>');
    document.write('<option>1900</option>');
    document.write('<option>...</option>');
    document.write('<option>2020</option>');
document.write('</select>');
document.write( '<hr>');

document.write('<select>');
for (var i= 1900; i <= 2020; i++) {
    document.write ('<option>' + i + '</option>');
}
document.write('</select>');   
document.write( '<hr>');

// Alternative :
var affichage = ''; // pour contenir toutes les balises HTML à venir
affichage += '<select>';
for (var i= 1900; i <= 2020; i++) {
    affichage += '<option>' + i + '</option>';
}
affichage += '</select>'; 
console.log(affichage);
document.write(affichage); // on affiche tout le string qui contient l'ensemble des balises du sélecteur


// La boucle do...while existe aussi. Elle a la particularité de s'exécuter au moins une fois (correspondant au "do"), puis seulement à la fin on regarde la condition du while pour savoir si on retourne dans la boucle ou pas. Exemple d'utilisation : voius posez une question obligatoire a l'internaute ("do"), puis tant qu'il n'a pas correctement répondu ("while"), vous lui reposez la question.


//------------------------
// 12- Les fonctions utilisateurs
//------------------------
document.write('<h2> Les fonctions utilisateurs </h2>');
// Des fonctions sont des morceaux de codes encapsulés dans des accolades et portant un nom. Elles sont appelées (par leur nom) quand on a besoin d'exécuter tout le code qui s'y trouve. Il est d'usage de faire des fonctions simples qui réalisent des actions unitaires.

// A chaque fois que l'on répète une action, voir s'il n'est pas possible de la mettre dans une fonction : cela s'appelle factoriser son code.

// Il existe deux façons de déclarer une fonction en JS :
// 1° Avec le mot clé function :
function maFonction() {
    // ici tout votre code 
    document.write('<p>Nous avons une journée ensoleillée</p>');
}

// 2° Avec le mot clé var :
var maFonction2 = function() {
    // ici tout votre code
    document.write('<p>Nous avons une chaude journée</p>');
}

// Pour qu'une fonction s'exécute, il faut l'appeler :
maFonction();  // on appelle une fonction en écrivant son nom suivi d'une paire de parenthèses
maFonction2();  // en appelant cette fonction, j'exécute le code qui s'y trouve

// Par convention nous déclarons toujours une fonction avabnt de l'exécuter.


//-----------
// Fonctions avec paramètres :
function direBonjour(prenom, nom) {  // prenom et nom sont des pa   ramètres de la fonction, séparés par une "," et qui attendent une valeur
    document.write('<p>Bonjour ' + prenom + ' ' + nom + ', comment allez-vous ?</p>');
}

direBonjour('Alice', 'Dupont');  // la valeur "Alice" qui est en première position va être affectée au paramètre prenom, et la valeur "Dupont" (en seconde position) va être affectée au paramètre nom. Ainsi la fonction direBonjour peut afficher un message personnalisé.

//----------
function d(param) {
    document.write( param + '<br>');
}

d('Test de notre fonction');
d('<div class="test">Test de notre fonction</div>');