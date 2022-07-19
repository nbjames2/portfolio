const urls = {
  linkedin: 'https://www.linkedin.com/in/nbairdjames',
  github: 'https://github.com/nbjames2',
  javascript: 'https://www.javascript.com/',
  react: 'https://reactjs.org/',
  reactnative: 'https://reactnative.dev/',
  css: 'https://www.w3.org/Style/CSS/Overview.en.html',
  sass: 'https://sass-lang.com/',
  java: 'https://www.java.com/en/download/help/whatis_java.html',
  objectivec: 'https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html',
  nodejs: 'https://nodejs.org/en/about/',
  expressjs: 'https://expressjs.com/',
  elixir: 'https://elixir-lang.org/',
  phoenix: 'https://www.phoenixframework.org/',
  graphql: 'https://graphql.org/',
  apollo: 'https://www.apollographql.com/',
  sequelize: 'https://sequelize.org/',
  mongoosejs: 'https://mongoosejs.com/',
  docker: 'https://www.docker.com/',
  nginx: 'https://www.nginx.com/',
  mongodb: 'https://www.mongodb.com/',
  postgresql: 'https://www.postgresql.org/',
  firebase: 'https://firebase.google.com/'
};

function OutsideLink (service) {
  service = service.replace(' ', '').replace('-', '').toLowerCase();
  console.log(urls[service]);
  window.open(urls[service], '_blank');
}

export default OutsideLink;
