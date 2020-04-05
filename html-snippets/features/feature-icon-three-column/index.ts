import FeatureIconThreeColumns from './feature-icon-three-column.vue';
import { Snippet } from '~/types/Snippet';
import { ContentType, getContent } from '~/shared/content';

const component: Snippet = {
  title: 'Three Icons Feature',
  component: FeatureIconThreeColumns,
  color: 'white',
  content: [
    {
      image: getContent(ContentType.Icons, 1),
      title: getContent(ContentType.FeatureTitle, 1),
      content: getContent(ContentType.SmallDescription)
    },
    {
      image: getContent(ContentType.Icons, 2),
      title: getContent(ContentType.FeatureTitle, 2),
      content: getContent(ContentType.SmallDescription)
    },
    {
      image: getContent(ContentType.Icons, 3),
      title: getContent(ContentType.FeatureTitle, 3),
      content: getContent(ContentType.SmallDescription)
    }
  ]
};

export default component;