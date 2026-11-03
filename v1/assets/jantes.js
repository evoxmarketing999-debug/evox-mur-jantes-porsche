// Données du mur de jantes — textes repris de la fiche validée.
// Numérotation chronologique : 01 = plus ancienne (bas du mur), 12 = plus récente (haut).
// col : colonne du mur (g = gauche, c = centre, d = droite)
// ligne : position verticale en demi-hauteurs de jante, 1 = haut du mur
// palier : étage chronologique (1 = bas)
window.JANTES = [
  { n: "01", nom: "Classic Sport F", taille: 15, modele: "Style des premières 911 S", annee: "Origine du dessin : 1967", design: "L’esthétique Fuchs classique", gen: "classique", col: "g", ligne: 8, palier: 1, photo: true },
  { n: "02", nom: "Classic Sport F", taille: 17, modele: "Inspiration 911 classiques", annee: "Interprétation contemporaine", design: "Le style Fuchs revisité en 17 pouces", gen: "classique", col: "d", ligne: 8, palier: 1, photo: true },
  { n: "03", nom: "Classic Sport F", taille: 19, modele: "Style 911 Sport Classic - 997", annee: "Évocation du modèle de 2010", design: "Une interprétation moderne Fuchs", gen: "classique", col: "c", ligne: 7, palier: 1, photo: true },
  { n: "04", nom: "Cup I", taille: 17, modele: "911 - type 964", annee: "Début des années 1990", design: "Cinq branches larges et plates", gen: "964", col: "d", ligne: 6, palier: 2, photo: true },
  { n: "05", nom: "Turbo Look 50X", taille: 18, modele: "911 Turbo / Carrera 4S - 996", annee: "Turbo dès 2000 · 4S dès 2002", design: "Cinq branches larges et galbées", gen: "996", col: "g", ligne: 6, palier: 2, photo: true },
  { n: "06", nom: "Targa 241", taille: 18, modele: "911 Carrera / Targa - 996", annee: "Dessin du millésime 2002", design: "Cinq branches fines et arrondies", gen: "996", col: "c", ligne: 5, palier: 2, photo: true },
  { n: "07", nom: "Look S 331", taille: 19, modele: "911 Carrera S - 997.1", annee: "2004-2008", design: "Style « Lobster Claw »", gen: "997", col: "g", ligne: 4, palier: 3, photo: true },
  { n: "08", nom: "Look 367", taille: 19, modele: "911 - génération 997", annee: "2004-2012", design: "SportDesign à quinze branches", gen: "997", col: "d", ligne: 4, palier: 3, photo: true },
  { n: "09", nom: "Turbo Look 997", taille: 19, modele: "911 Turbo - 997.1", annee: "2006-2009", design: "Cinq branches dédoublées", gen: "997", col: "c", ligne: 3, palier: 3, photo: true },
  { n: "10", nom: "Turbo Look MkII", taille: 19, modele: "911 Turbo - 997.2", annee: "2009-2012", design: "Cinq doubles branches droites", gen: "997", col: "g", ligne: 2, palier: 4, photo: true },
  { n: "11", nom: "Carrera 725", taille: 20, modele: "911 Carrera - 991.1", annee: "Millésimes 2012-2015", design: "Dessin Carrera Classic", gen: "991", col: "d", ligne: 2, palier: 4, photo: true },
  { n: "12", nom: "Turbo Look 735", taille: 20, modele: "911 Turbo - 991.1", annee: "Dessin présenté en 2013", design: "Dix doubles branches", gen: "991", col: "c", ligne: 1, palier: 4, photo: true }
];

// Repères de la frise (année de début de chaque étage), du bas vers le haut du mur
window.PALIERS = [
  { palier: 1, label: "1967", sous: "Héritage Fuchs" },
  { palier: 2, label: "1990", sous: "964 · 996" },
  { palier: 3, label: "2004", sous: "997" },
  { palier: 4, label: "2009", sous: "997.2 · 991" }
];
