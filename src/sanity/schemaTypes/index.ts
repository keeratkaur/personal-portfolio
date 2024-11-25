import { type SchemaTypeDefinition } from 'sanity';

import { pageInfo } from './pageInfo';
import { social } from './social';
import { skill } from './skill';
import { experience } from './experience';
import { project } from './project';

// Export the schema configuration
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, social, skill, experience, project],
};
