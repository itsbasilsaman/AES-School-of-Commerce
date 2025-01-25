export default {
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'pageDescription',
      title: 'Page Description',
      type: 'string',
    },
    {
      name: 'fullTitle',
      title: 'Full Title',
      type: 'string',
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
    },
    {
      name: 'eligibility',
      title: 'Eligibility',
      type: 'string',
    },
    {
      name: 'stages',
      title: 'Stages',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {
      name: 'isFeature',
      title: 'Is Featured',
      type: 'boolean',
    },
    {
      name: 'url',
      title: 'Youtube Link',
      type: 'string',
    },
    {
      name : 'syllabus',
      title : 'Syllabus',
      type : 'array',
      of : [
        
        {
          type : 'object',
          name : 'section',
          title : 'section',
          
          fields: [
            {
              type : 'string',
              name : 'sectionName',
              title : 'Section Name'
            },
            {
              name: 'chapter',
              title: 'Chapter ',
              type: 'array',
              of : [
                {
                  name : 'object',
                  type : 'object',
                  fields : [
                    {
                      type : 'string',
                      name: 'chapterName',
                      title : 'Chapter Name'
                    },
                    {
                      name: 'unit',
                      title : 'Units',
                      type : 'array',
                      of : [
                        {
                          type: 'string',
                          name : 'unitName'
                        }
                      ]
                    }
                  ]
                }
              ],
              
            },
            
          ]
        }
      ]
    }
  ],
}
