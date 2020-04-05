import FeatureSimpleSixColumns from './feature-simple-six-columns';
import FeatureSimpleEightColumns from './feature-simple-eight-column';
import FeatureIconThreeColumns from './feature-icon-three-column';
import FeatureImagesThreeColumns from './feature-image-three-column';
import FeatureIconThreeColumnsMedia from './feature-icon-three-column-media';
import FeatureBigImageLeft from './feature-big-image-left';
import FeatureBigImageRight from './feature-big-image-right';
import { Snippet } from '~/types/Snippet';

const components: Snippet[] = [
  FeatureSimpleSixColumns,
  FeatureSimpleEightColumns,
  FeatureImagesThreeColumns,
  FeatureIconThreeColumns,
  FeatureBigImageLeft,
  FeatureBigImageRight,
  FeatureIconThreeColumnsMedia
];

export default components;
