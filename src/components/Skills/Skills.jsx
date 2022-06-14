import React from 'react';
import './Skills.scss';
import { Skill } from 'Components';
import {
  Apollo,
  Css,
  Docker,
  Elixir,
  Express,
  Firebase,
  Graphql,
  Java,
  Javascript,
  Mongodb,
  Mongoose,
  Nginx,
  Node,
  ObjC,
  Phoenix,
  Postgres,
  ReactJS,
  Sass,
  Sequelize
} from 'Images';

const Skills = (props) => {
  return (
    <section className='skills-container'>
      <h2 className='title'>Non-exhaustive List of Technologies That I Use and Have Used</h2>
      <div className='lists-wrapper'>
        <div className='technologies-list-wrapper'>
          <h3 className='title'>Front-end</h3>
          <div className='list-container'>
            <Skill title='Javascript' icon={<Javascript />} />
            <Skill title='React' icon={<ReactJS />} />
            <Skill title='React Native' icon={<ReactJS />} />
            <Skill title='CSS' icon={<Css />} />
            <Skill title='Sass' icon={<Sass />} />
            <Skill title='Java' icon={<Java />} />
            <Skill title='Objective-C' icon={<ObjC />} />
          </div>
        </div>
        <div className='technologies-list-wrapper'>
          <h3 className='title'>Back-end</h3>
          <div className='list-container'>
            <Skill title='NodeJS' icon={<Node />} />
            <Skill title='ExpressJS' icon={<Express />} />
            <Skill title='Elixir' icon={<Elixir />} />
            <Skill title='Phoenix' icon={<Phoenix />} />
            <Skill title='GraphQL' icon={<Graphql />} />
            <Skill title='Apollo' icon={<Apollo />} />
            <Skill title='Sequelize' icon={<Sequelize />} />
            <Skill title='MongooseJS' icon={<Mongoose />} />
            <Skill title='Docker' icon={<Docker />} />
            <Skill title='Nginx' icon={<Nginx />} />
          </div>
        </div>
        <div className='technologies-list-wrapper'>
          <h3 className='title'>DB</h3>
          <div className='list-container'>
            <Skill title='MongoDB' icon={<Mongodb />} />
            <Skill title='PostgreSQL' icon={<Postgres />} />
            <Skill title='Firebase' icon={<Firebase />} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Skills };
