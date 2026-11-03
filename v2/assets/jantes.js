// Données du mur de jantes — v2 : textes historiques ajoutés.
// Numérotation chronologique : 01 = plus ancienne (bas du mur), 12 = plus récente (haut).
// col : colonne du mur (g = gauche, c = centre, d = droite)
// ligne : position verticale en demi-hauteurs de jante, 1 = haut du mur
// palier : étage chronologique (1 = bas)
// periode + modele : étiquette du mur (look + années), ex. « 2014–2019 — 991 Turbo »
window.JANTES = [
  { n: "01", nom: "Classic Sport F", taille: 15, periode: "1967–1989", modele: "Retro Look 911", design: "L’esthétique Fuchs classique", gen: "classique", col: "g", ligne: 8, palier: 1, photo: true,
    histoire: "Véritable révolution, la jante Fuchs apparaît sur la 911 S. Forgée en aluminium pour gagner du poids, elle deviendra l’un des symboles intemporels de Porsche." },
  { n: "02", nom: "Classic Sport F", taille: 17, periode: "1989–1997", modele: "Retro Look 911 « 964-993 »", design: "Le style Fuchs revisité en 17 pouces", gen: "classique", col: "d", ligne: 8, palier: 1, photo: true,
    histoire: "Héritier du dessin Fuchs des années 1960, ce style revisité en 17 pouces démontre qu’une silhouette emblématique peut traverser les générations sans perdre son identité." },
  { n: "03", nom: "Classic Sport F", taille: 19, periode: "1998–2012", modele: "Retro Look 911 « 997-996 »", design: "Une interprétation moderne Fuchs", gen: "classique", col: "c", ligne: 7, palier: 1, photo: true,
    histoire: "La 911 Sport Classic, limitée à 250 exemplaires, remet à l’honneur le mythique dessin Fuchs. Un hommage néo-rétro qui unit tradition et modernité." },
  { n: "04", nom: "Cup I", taille: 17, periode: "1989–1994", modele: "Porsche Cup Look « 964 »", design: "Cinq branches larges et plates", gen: "964", col: "d", ligne: 6, palier: 2, photo: true,
    histoire: "Inspiré de l’univers sportif Porsche, le dessin Cup I devient emblématique des années 1990. Ses cinq branches pleines offrent une rupture avec les anciennes Fuchs." },
  { n: "05", nom: "Turbo Look 50X", taille: 18, periode: "2000–2005", modele: "Cup 3 Look « 996 4S - Turbo »", design: "Cinq branches larges et galbées", gen: "996", col: "g", ligne: 6, palier: 2, photo: true,
    histoire: "Avec la 996 Turbo, Porsche entre dans une nouvelle époque. Les cinq branches larges et galbées expriment la puissance et le caractère musclé de cette génération." },
  { n: "06", nom: "Targa 241", taille: 18, periode: "1998–2004", modele: "Targa Look « 996 »", design: "Cinq branches fines et arrondies", gen: "996", col: "c", ligne: 5, palier: 2, photo: true,
    histoire: "La génération 996 ouvre l’ère du refroidissement liquide. En 2002, la Targa se distingue notamment par son grand toit vitré et sa lunette arrière ouvrante." },
  { n: "07", nom: "Look S 331", taille: 19, periode: "2004–2012", modele: "Carrera S Look « 997 »", design: "Style « Lobster Claw »", gen: "997", col: "g", ligne: 4, palier: 3, photo: true,
    histoire: "Surnommé « Lobster Claw » pour sa forme en pince de homard, ce dessin caractéristique devient l’une des signatures visuelles des premières Carrera S type 997." },
  { n: "08", nom: "Look 367", taille: 19, periode: "2004–2012", modele: "Sport Design Look « 997 »", design: "SportDesign à quinze branches", gen: "997", col: "d", ligne: 4, palier: 3, photo: true,
    histoire: "Inspiré de l’esprit SportDesign, ce dessin multibranche illustre une tendance des années 2000 : des jantes plus travaillées, à l’allure sportive et raffinée." },
  { n: "09", nom: "Turbo Look 997", taille: 19, periode: "2006–2009", modele: "997 Turbo MkI", design: "Cinq branches dédoublées", gen: "997", col: "c", ligne: 3, palier: 3, photo: true,
    histoire: "En 2006, la 997 Turbo inaugure la géométrie variable de ses turbocompresseurs. Son style de jante à branches dédoublées accompagne cette nouvelle ère de performance." },
  { n: "10", nom: "Turbo Look MkII", taille: 19, periode: "2009–2012", modele: "997 Turbo MkII", design: "Cinq doubles branches droites", gen: "997", col: "g", ligne: 2, palier: 4, photo: true,
    histoire: "La seconde phase de la 997 marque une évolution technique et esthétique. Le style des jantes devient plus affûté, accompagnant une Turbo toujours plus performante." },
  { n: "11", nom: "Carrera 725", taille: 20, periode: "2011–2015", modele: "Carrera S Look « 991 MkI »", design: "Dessin Carrera Classic", gen: "991", col: "d", ligne: 2, palier: 4, photo: true,
    histoire: "Avec l’arrivée de la 991, les jantes de 20 pouces prennent une place importante. Le dessin Carrera Classic associe élégance traditionnelle et modernité." },
  { n: "12", nom: "Turbo Look 735", taille: 20, periode: "2014–2019", modele: "991 Turbo", design: "Dix doubles branches", gen: "991", col: "c", ligne: 1, palier: 4, photo: true,
    histoire: "Avec la génération 991, Porsche modernise les codes de la Turbo. Les lignes deviennent plus sculptées, affirmant le caractère sportif et technologique de la 911." }
];

// Repères de la frise (année de début de chaque étage), du bas vers le haut du mur
window.PALIERS = [
  { palier: 1, label: "1967", sous: "Héritage Fuchs" },
  { palier: 2, label: "1989", sous: "964 · 996" },
  { palier: 3, label: "2004", sous: "997" },
  { palier: 4, label: "2009", sous: "997.2 · 991" }
];
