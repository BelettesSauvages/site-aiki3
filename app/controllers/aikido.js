import Controller from '@ember/controller';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';

export default class AikidoController extends Controller {
  @tracked currentTab = 'A';

  definitions = A([
    {
      title: 'Ashi',
      definition: 'La jambe',
    },
    {
      title: 'Atémi',
      definition: 'Coup',
    },
    {
      title: 'Bo',
      definition: 'Bâton long (de 1,60m à 2m)',
    },
    {
      title: 'Bokken',
      definition: 'Sabre de bois',
    },
    {
      title: 'Budo',
      definition: "Littéralement, c'est arrêter une épée menaçante.",
      citation:
        "Il est nécessaire, en Aïkido, d'avoir un esprit à servir la paix de l'humanité, et non pas un esprit à vouloir être fort et vaincre un adversaire. Il n'y a ni  adversaire ni ennemi dans le vrai Budo. Le vrai Budo ne connaît pas la défaite. Ne jamais se battre pour ne jamais être vaincu.",
    },
    {
      title: 'Bushido',
      definition: 'La Voie des samouraïs',
    },
    {
      title: 'Chudan',
      definition: 'Dans une garde ou pour un coup, position moyenne',
    },
    {
      title: 'Dan',
      definition: 'Grade, à partir de ceinture noire',
    },
    {
      title: 'Deai',
      definition: "Le moment de vérité. L'instant de la communion de 2 forces",
    },
    {
      title: 'Deshi',
      definition: 'Etudiant',
    },
    {
      title: 'Dojo',
      definition:
        "L'endroit où la Voie est révélée. Un endroit pour le renforcement et le raffinement de l'esprit, de l'âme et du corps",
    },
    {
      title: 'Eri',
      definition: 'Le col (du gi, par exemple)',
    },
    {
      title: 'Gedan',
      definition: 'Dans une garde ou pour un coup, position basse',
    },
    {
      title: 'Gi',
      definition:
        "Vêtement de travail et d'entraînement. Baptisé kimono, à tort",
    },
    {
      title: 'Go no Geiko',
      definition: 'Entraînement en puissance',
    },
    {
      title: 'Hakama',
      definition: 'Large jupe-pantalon portée sur le gi. Vêtement traditionnel',
    },
    {
      title: 'Hanmi',
      definition:
        "La garde souple triangulaire de l'Aïkido. Elle est stable et suffisamment flexible pour permettre un déplacement rapide dans n'importe quelle direction. Toute technique commence, se poursuit et s'achève en hanmi",
    },
    {
      title: 'Hanmi handachi',
      definition: 'Techniques où nage est assis et uke debout',
    },
    {
      title: 'Hara',
      definition:
        "La partie inférieure de l'abdomen. Le centre de l'énergie physique et spirituelle. Tout mouvement doit naître de ce point",
    },
    {
      title: 'Hiji',
      definition: 'Le coude',
    },
    {
      title: 'Irimi',
      definition:
        "Entrer, se déplacer vers et à travers la ligne d'attaque, sans idée de fuite",
    },
    {
      title: 'Jiyu waza',
      definition: 'Technique libre. Habituellement pratiqué avec un partenaire',
    },
    {
      title: 'Jo',
      definition: 'Bâton court',
    },
    {
      title: 'Jodan',
      definition: 'Dans une garde ou pour un coup, position haute',
    },
    {
      title: 'Jo dori',
      definition: 'Techniques au bâton court',
    },
    {
      title: 'Ju no Geiko',
      definition: 'Entraînement en souplesse',
    },
    {
      title: 'Kamae',
      definition:
        "Attitude ou garde d'attente. Dans chaque kamae, il y a différentes positions pour les mains ou les armes (jodan, chudan, gedan)",
    },
    {
      title: 'Kata',
      definition:
        "L'épaule. Figures conventionnelles construites d'après des règles établies. Dans la plupart des Arts Martiaux, mode de transmission des techniques et de l'esprit",
    },
    {
      title: 'Kata dori',
      definition: "Saisie d'épaule",
    },
    {
      title: 'Katate dori',
      definition: 'Saisie de poignet',
    },
    {
      title: 'Katate dori ryote mochi',
      definition: 'Saisie des 2 poignets. Se dit également "ryote dori"',
    },
    {
      title: 'Keiko',
      definition:
        "Etude ou pratique. Le sens le plus profond est le retour aux origines. Par l'étude du passé et l'appréciation de l'expérience, le présent peut être compris, et l'esprit raffiné",
    },
    {
      title: 'Kiai',
      definition:
        "La libération des pouvoirs spirituel et physique, sous la forme d'un cri venant du hara",
    },
    {
      title: 'Kohai',
      definition:
        "Elève junior. Ceux qui ont commencé l'Aïkido après vous. Vous leur devez aide et soutien",
    },
    {
      title: 'Koshi',
      definition: 'La hanche',
    },
    {
      title: 'Kote',
      definition: 'Le poignet',
    },
    {
      title: 'Kokyu',
      definition: 'Le pouvoir du souffle, renouvellement de force vive',
    },
    {
      title: 'Kosa dori',
      definition: 'Saisie croisée. Se dit également "ai hanmi katate dori"',
    },
    {
      title: 'Kotodama',
      definition:
        'La fonction spirituelle du son. Chaque syllabe a sa propre vibration spirituelle',
    },
    {
      title: 'Kubi',
      definition: 'Le cou',
    },
    {
      title: 'Kubi shime',
      definition: 'Saisie avec strangulation',
    },
    {
      title: 'Kumi jo',
      definition: 'Exercice à 2 jo',
    },
    {
      title: 'Kyu',
      definition: 'Grades avec ceinture blanche',
    },
    {
      title: 'Maai',
      definition:
        "La distance, en temps et espace, séparant 2 forces. Le mouvement de la pensée, le courant de l'esprit, leur direction, aussi bien que leur distance matérielle, définissent l'usage approprié et équilibré de l'espace",
    },
    {
      title: 'Misogi',
      definition:
        "Purification de la pensée, du corps et de l'esprit. Transpirer, se laver, jeûner, keiko sont des actions de misogi",
    },
    {
      title: 'Munetsuki',
      definition: 'Coup de poing direct au plexus solaire',
    },
    {
      title: 'Mushin',
      definition:
        'Sans pensée, sans ego. Une pensée identique à un miroir qui renvoie une image sans la juger',
    },
    {
      title: 'Musubi',
      definition:
        "Les contraires sont des images différentes d'une même réalité. Musubi est le processus de leur unification. C'est le mouvement de la spirale",
    },
    {
      title: 'Nage',
      definition: 'Projection. Celui qui projette',
    },
    {
      title: 'Omote',
      definition: 'De face',
    },
    {
      title: "O'Sensei",
      definition:
        "Grand Maître, titre utilisé pour le Fondateur de l'Aïkido, ainsi que pour les fondateurs des autres Arts Martiaux",
    },
    {
      title: 'Randori',
      definition: 'Technique libre contre attaques multiples',
    },
    {
      title: 'Rei',
      definition: 'Saluer',
    },
    {
      title: 'Reigi',
      definition:
        "Rei peut aussi être traduit comme saint esprit, gi comme manifestation. Utilisés ensembles, les mots signifient l'étiquette correcte, appropriée, respectant la force créatrice et l'esprit qui sont les mêmes pour chacun de nous",
    },
    {
      title: 'Ryote dori',
      definition: 'Saisie des 2 poignets',
    },
    {
      title: 'Ryokata',
      definition: 'Saisie des 2 épaules',
    },
    {
      title: 'Ryu',
      definition: "Ecole d'arts martiaux",
    },
    {
      title: 'Samuraï',
      definition:
        'Vient du verbe "servir". Celui qui a le devoir et la responsabilité de protéger la société',
    },
    {
      title: 'Sempai',
      definition:
        'Etudiant "senior". Celui qui a commencé l\'étude de l\'Aïkido avant vous. Vous lui devez respect pour son expérience',
    },
    {
      title: 'Seiza',
      definition: 'Position assise',
    },
    {
      title: 'Sen',
      definition:
        "Analyse de la situation dans laquelle se trouve le partenaire. Go no Sen exprime l'idée de blocage ou de contre-attaque. Sen no Sen exprime l'idée d'attaque dans l'attaque, ou d'initiative dans l'attaque",
    },
    {
      title: 'Sensei',
      definition:
        'Enseignant, celui qui donne les directions sur le chemin. Littéralement, celui qui est né avant',
    },
    {
      title: 'Senshin',
      definition:
        'Un esprit et un coeur purifiés. Attitude de lucidité, de clairvoyance',
    },
    {
      title: 'Shikko',
      definition: 'Marche à genoux',
    },
    {
      title: 'Shime',
      definition: 'Etranglement',
    },
    {
      title: 'Shomen',
      definition:
        "L'autel qui abrite le portrait de Maître Ueshiba ainsi que l'esprit de l'Aïkido. Se nomme également kamiza",
    },
    {
      title: 'Shomenuchi',
      definition: 'Coup au sommet de la tête',
    },
    {
      title: 'Shomentsuki',
      definition: 'Direct au niveau des yeux',
    },
    {
      title: 'Shinai',
      definition: "Sabre d'entraînement en bambou fendu",
    },
    {
      title: 'Shodan',
      definition: '1er dan',
    },
    {
      title: 'Shugyo',
      definition:
        'Le travail quotidien pour améliorer et purifier la qualité de la vie',
    },
    {
      title: 'Sode',
      definition: 'La manche',
    },
    {
      title: 'Soto',
      definition: 'Extérieur',
    },
    {
      title: 'Sokumen',
      definition: 'De biais',
    },
    {
      title: 'Suburi',
      definition:
        "Exercice à l'épée ou au bokken au cours duquel le même geste de coupe est répété encore et encore. Très bon exercice de purification et de méditation",
    },
    {
      title: 'Suwariwaza',
      definition:
        'Exercices qui commencent avec les partenaires assis en seiza, et qui se poursuivent à genoux',
    },
    {
      title: 'Tachi',
      definition: 'Longue épée japonaise. Position debout',
    },
    {
      title: 'Tachi dori',
      definition: 'Exercices pratiqués par 2 partenaires debout',
    },
    {
      title: 'Taijutsu',
      definition: 'Exercices à mains nues',
    },
    {
      title: 'Taïsabaki',
      definition: 'Déplacement du corps',
    },
    {
      title: 'Takemusu Aïki',
      definition: "L'Aïkido pratiqué lucidement.",
      citation:
        "L'Aïkido a une forme, et ne doit pas avoir de forme. L'Aïkido est une vie qui a une forme et continue à couler en changeant. Elle s'exprime par son propre changement. Une forme sans aucune forme, comme un mot dans un poème qui exprime sans limite l'univers.",
    },
    {
      title: 'Tanden',
      definition: 'Voir Hara',
    },
    {
      title: 'Tanrem',
      definition:
        "L'entraînement, avec un sens différent de keiko. Suburi, par exemple est tanrem, alors que kumi tachi est keiko",
    },
    {
      title: 'Tanto',
      definition: 'Couteau',
    },
    {
      title: 'Tanto dori',
      definition:
        "Exercices consistant à désarmer un partenaire armé d'un couteau",
    },
    {
      title: 'Tatami',
      definition: "Tapis d'entraînement, d'une surface de 2 m²",
    },
    {
      title: 'Te',
      definition: 'La main',
    },
    {
      title: 'Tenkan',
      definition: 'Rotation pour détourner la force',
    },
    {
      title: 'Tori',
      definition: 'Celui qui donne. La personne qui projette',
    },
    {
      title: 'Tsuki',
      definition: 'Attaque directe',
    },
    {
      title: 'Uchi',
      definition: 'Intérieur',
    },
    {
      title: 'Ude',
      definition: 'Le bras',
    },
    {
      title: 'Uke',
      definition: 'Celui qui reçoit. La personne qui est projetée',
    },
    {
      title: 'Ukemi',
      definition:
        "Techniques de chute. L'art de se protéger des blessures. La première et plus importante étape pour acquérir des techniques puissantes",
    },
    {
      title: 'Ura',
      definition: "Vers l'arrière",
    },
    {
      title: 'Ushiro',
      definition: 'Par-derrière',
    },
    {
      title: 'Waza',
      definition: 'Technique',
    },
    {
      title: 'Yokomenuchi',
      definition: 'Coup sur le côté de la tête ou du cou',
    },
    {
      title: 'Yudansha',
      definition: 'Pratiquant portant la ceinture noire.',
    },
    {
      title: 'Zanshin',
      definition: "Continuité. Rester éveillé et prêt à l'action suivante",
    },
  ]);

  get tabs() {
    return [...new Set(this.definitions.map((def) => def.title.charAt(0)))]
      .sort()
      .map((title) => {
        let definitions = this.definitions.filter(
          (def) => def.title.charAt(0) === title
        );
        return { title, definitions };
      });
  }
}
