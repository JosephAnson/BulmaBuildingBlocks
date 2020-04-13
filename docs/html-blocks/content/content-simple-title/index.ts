import ContentTitle from './content-simple-title.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Title',
  component: ContentTitle,
  color: 'white',
  content: new Model()
};

export default component;