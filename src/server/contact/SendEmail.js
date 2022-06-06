import sgMail from '@sendgrid/mail'

class Mail {
    constructor(req) {
        this.req = req
        this.mail = sgMail
        this.mail.setApiKey(process.env.SENDGRID_API_KEY)

        this.msg = {
            to: 'josephplaugher@gmail.com', // Change to your recipient
            from: 'josephplaugher@gmail.com', // Change to your verified sender
            subject: `New form submission from ${req.fullName}`,
            text: `New form submission: \n
                Name: ${req.fullName} \n
                Company: ${req.companyName} \n
                Email: ${req.email} \n
                Phone: ${req.phoneNumber} \n
                Pref Contact Method: ${req.pref} \n
                Comments: ${req.comments} `,
            // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        }
    }

    Send() {
        this.mail
            .send(this.msg)
            .then(() => {
                console.log('Email sent')
            })
            .catch((error) => {
                console.error(error)
            })
    }
}

export default Mail