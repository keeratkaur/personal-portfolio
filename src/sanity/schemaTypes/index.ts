import { type SchemaTypeDefinition } from 'sanity'
import { pageInfo } from './pageInfo'
import { social } from './social'
import { skill } from './skill'
import { experience } from './experience'
import { project } from './project'

export const schema = {
  types: [pageInfo, social, skill, experience, project] as SchemaTypeDefinition[],
}

export const schemaTypes = [pageInfo, social, skill, experience, project]
