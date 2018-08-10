import Controller from '@ember/controller';
import { A } from '@ember/array';
import env from '../config/environment';

const { rootURL } = env;

export default Controller.extend({
  gallery: A([
    {
      title: "Michel à droite, professeur de l'Aiki3",
      src: `${rootURL}assets/gallery_aiki1.jpg`,
      w: 479,
      h: 328
    },
    {
      title: 'Kokyu Nage (projection)',
      src: `${rootURL}assets/gallery_aiki2.jpg`,
      w: 400,
      h: 330
    },
    {
      title: 'Shihoo Nage (projection)',
      src: `${rootURL}assets/gallery_aiki3.jpg`,
      w: 400,
      h: 330
    },
    {
      title: 'Hiji Kime Osae',
      src: `${rootURL}assets/gallery_aiki4.jpg`,
      w: 400,
      h: 327
    },
    {
      title: 'Nikyo',
      src: `${rootURL}assets/gallery_aiki5.jpg`,
      w: 400,
      h: 330
    }
  ])
});
