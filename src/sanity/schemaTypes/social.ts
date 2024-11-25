import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const social = defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
 // icon: DocumentTextIcon,
  fields: [
    {
      name:"title",
      title:"Title",
      type:"string",
   
    },
    {
      name:"url",
      title:"Url",
      type:"url",
      
   
    },
    
   
  ],
  
})
