import emailjs from "emailjs-com";

/* EMAILJS - ACCOUNT 1 */

// Send a welcome email to a new user with his email.
export const registerMail = (email) => {
  emailjs.init("mlq8NFOh_4FFPnBBS");
  emailjs.send("service_3kjhmde", "template_ej97pne", {
    for: email,
  });
};

// Give a link to reset the password of an account with a specific email
export const resetPasswordMail = (email, resetUrl) => {
  emailjs.init("mlq8NFOh_4FFPnBBS");
  emailjs
    .send("service_3kjhmde", "template_1q62vbi", {
      for: email,
      link: resetUrl,
    })
    .then(
      (response) => {
        console.log("Lien de re-initialisation envoyé");
      },
      (err) => {
        console.log(err);
      }
    );
};

/* EMAILJS - ACCOUNT 2 */

//Send a notification to a email account when an alarm is triggered
export const alarmTrigerred = (email, title) => {
  emailjs.init("0dAHY8DxSACd5mDCk");
  emailjs
    .send("service_tnmqf1i", "template_i1cprqn", {
      alarm_title: title,
      email: email,
    })
    .then(
      (response) => {
        console.log("Notification envoyée");
      },
      (err) => {
        console.log(err);
      }
    );
};
