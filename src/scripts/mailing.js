import emailjs from "emailjs-com";

// Send a welcome email to a new user with his email.
export const registerMail = (email) => {
  emailjs.init("mlq8NFOh_4FFPnBBS");
  emailjs.send("service_3kjhmde", "template_woif947", {
    for: email,
  });
};

export const resetPasswordMail = (email, resetUrl) => {
  emailjs.init("mlq8NFOh_4FFPnBBS");
  emailjs
    .send("service_3kjhmde", "template_1q62vbi", {
      for: email,
      link: resetUrl,
    })
    .then(
      (response) => {
        console.log("Success");
      },
      (err) => {
        console.log(err);
      }
    );
};
