import EmberRouter from '@ember/routing/router';
import config from 'site-aiki3/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('aikido');
  this.route('club');
  this.route('practice', { path: 'pratiquer' });
  this.route('links', { path: 'liens' });
  this.route('stages');
});
