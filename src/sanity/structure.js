// https://www.sanity.io/docs/structure-builder-cheat-sheet
import { schema } from './schemaTypes'

const documentTypes = schema.types.map(type => type.name)

export const structure = (S) =>
  S.list()
    .title('Portfolio Content')
    .items([
      S.listItem()
        .title('Page Info')
        .child(S.document().schemaType('pageInfo').documentId('pageInfo')),
      S.divider(),
      S.listItem()
        .title('Skills')
        .child(S.documentTypeList('skill')),
      S.listItem()
        .title('Experience')
        .child(S.documentTypeList('experience')),
      S.listItem()
        .title('Projects')
        .child(S.documentTypeList('project')),
      S.listItem()
        .title('Socials')
        .child(S.documentTypeList('social')),
    ])
