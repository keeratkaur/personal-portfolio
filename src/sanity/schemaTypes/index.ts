import { type SchemaTypeDefinition } from 'sanity';

import { pageInfo } from './pageInfo';
import { social } from './social';
import { skill } from './skill';
import { experience } from './experience';
import { project } from './project';

// Export the schema configuration with explicit typing for the types array
export const schema = {
  types: [
    pageInfo, 
    social, 
    skill, 
    experience, 
    project
  ] as SchemaTypeDefinition[], // Explicitly typing the types array
};
