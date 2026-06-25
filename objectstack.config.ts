import { defineStack } from '@objectstack/spec';
import * as objects from './src/objects';

export default defineStack({
  manifest: {
    id: 'com.example.app_demo',
    namespace: 'app_demo',
    version: '0.1.0',
    type: 'app',
    name: 'App Demo',
    description: 'App Demo application built with ObjectStack',
  },

  objects: Object.values(objects),
});
