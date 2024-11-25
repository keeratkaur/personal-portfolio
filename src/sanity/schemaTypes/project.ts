import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  //icon: DocumentTextIcon,
  fields: [
    {
      name:"title",
      title:"title",
      description:"Title of the project",
      type:"string",
   
    },
    {
      name:"image",
      title:"Image",
      type:"image",
      options: {
        hotspot: true,
      }
   
    },
    {
      name:"summary",
      title:"Summary",
      type:"text",
      
    },
      
   
   
    {
      name:"technologies",
      title:"Technologies",
      type:"  date",
      
    },
     
   
    {
      name:"linkToBuild",
      title:"LinkToBuild",
      type:"url",
      
    },
   
  ],
  
})
