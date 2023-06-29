export default {
    name : 'testimonials',
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
            name : 'imgurl',
            title : 'image',
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