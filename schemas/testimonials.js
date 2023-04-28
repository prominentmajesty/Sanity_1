export default {
    name : 'testimonial',
    title : 'Testimonial',
    type : 'document',

    fields : [
        {
            name : 'name',
            title : 'Name',
            type : 'string'
        },

        {
            name : 'company',
            title : 'Company',
            type : 'string'
        },

        {
            name : 'imageurl',
            title : 'Image',
            type : 'image',
            options : {
                hotspot : true,
            }
        },

        {
            name : 'feedback',
            title : 'Feedback',
            type : 'string'
        },
    ]
}