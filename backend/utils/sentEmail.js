const sendEmail= async(options)=>{
    try{
        const BREVO_API_KEY =process.env.BREVO_API_KEY?.trim();
        if(!BREVO_API_KEY){
            console.error("Missing BREVO_API_KEY in the .env file");
            throw new Error("Missing Email API key");
        }

        const data ={
            sender:{
                name: "Real Estate Platform",
                email:process.env.EMAIL_USER
            },
            to:[{email:options.email}],
            subject: options.subject,
            htmlContent:options.message
        };

         const response = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers:{
                "api-key":BREVO_API_KEY,
                "Content-Type": "application/json",
                "Accept": "Application/json",
            },
            body:JSON.stringify(data),
         });

         const result = await response.json();
         if(response.ok){
            console.log("Email sent successfully via Brevo:", resultmessageID);
         }else{
            console.error("Brevo Api Key Error:",result);
            throw new Error(result.message || "could not send email via Brevo");
         }
    }

    catch (error){
        console.error("Brevo Email Error:",result);
        throw new Error("could not send email via Brevo ");
    }
};

export default sendEmail;