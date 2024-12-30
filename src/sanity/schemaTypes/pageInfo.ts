import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageInfo = defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    {
      name:"name",
      title:"Name",
      type:"string",
   
    },
    {
      name:"role",
      title:"Role",
      type:"string",
   
    },
    {
      name:"heroImage",
      title:"Image",
      type:"image",
      options: {
        hotspot: true,
      }
   
    },
    {
      name:"backgroundInformation",
      title:"Background Information",
      type:"string",
    },
    {
      name:"profilePic",
      title:"ProfilePic",
      type:"image",
      options: {
        hotspot: true,
      }
   
    },
    {
      name:"phoneNumber",
      title:"PhoneNumber",
      type:"string",
      
    },
    {
      name:"email",
      title:"Email",
      type:"string",
      
    },
    {
      name:"address",
      title:"Address",
      type:"string",
      
    },
    {
      name:"socials",
      title:"Socials",
      type:"array",
      of:[{type:"reference", to:{type:"social"}}],
    },
  ],
  
})
