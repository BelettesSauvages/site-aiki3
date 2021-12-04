import Controller from '@ember/controller';
import { A } from '@ember/array';
import config from 'site-aiki3/config/environment';

const { rootURL } = config;

export default class LinksController extends Controller {
  linkItems = A([
    {
      title: 'Site de Patrick Bénézi',
      url: 'http://www.aikido-benezi.com',
      image: `${rootURL}assets/link_benezi.jpg`,
    },
    {
      title: 'Site de la FFAAA',
      url: 'http://www.aikido.com.fr',
      image: `${rootURL}assets/link_ffaaa.png`,
    },
    {
      title: 'Site de Maître Christian Tissier',
      url: 'http://www.christiantissier.com',
      image: `${rootURL}assets/link_tissier.jpg`,
    },
    {
      title: 'Site de Maître Yamaguchi',
      url: 'http://www.yamaguchi-aikido.com/html/menu.html',
      image: `${rootURL}assets/link_yamaguchi.jpg`,
    },
    {
      title: 'Site du TOS KARATE-DO',
      url: 'http://www.toskarate.com',
      image: `${rootURL}assets/link_toskarate.jpg`,
    },
  ]);

  docs = A([
    {
      title: "Tryptique de présentation de l'Aiki3 (pdf)",
      url: `${rootURL}assets/aiki3-triptyque-2010-2011.pdf`,
    },
    {
      title: 'Le planning des stages 2021-2022 de Patrick Bénézi (pdf)',
      url: 'http://www.aikido-benezi.com/img/affiche/planning%202021-2022%20-28%207%2021.pdf',
    },
  ]);
}
