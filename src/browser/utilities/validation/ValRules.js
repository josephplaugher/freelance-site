const ValRules = [
    {
        name: 'fullName',
        required: true,
    },
    {
        name: 'companyWebsite',
        required: false
    },
    {
        name: 'email',
        required: true,
        email: true
    },
    {
        name: 'phoneNumber',
        required: false,
        phone: true
    },
    {
        name: 'comments',
        required: true
    }
]

export default ValRules