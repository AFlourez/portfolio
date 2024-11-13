import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section class="contact" id="contact">
  <h2 class="contact-title">Contactez-moi</h2>
  <p class="contact-intro">Vous avez un projet ou des questions ? N'hésitez pas à me contacter !</p>

  <div class="contact-form-container">
    <form class="contact-form" action="/send" method="POST">
      <label for="name">Nom</label>
      <input type="text" id="name" name="name" placeholder="Votre nom" required />

      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Votre email" required />

      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" placeholder="Votre message..." required></textarea>

      <button type="submit" class="send-button">Envoyer</button>
    </form>
  </div>

  <div class="contact-info">
    <p>Email: <a href="mailto:flourez.alexis@gmail.com">flourez.alexis@gmail.com</a></p>
    <p>Téléphone: <a href="tel:+33658042405">06 58 04 24 05</a></p>
    <p>Adresse: 138 rue du Bugey, Montalieu Vercieu, 38390</p>
  </div>
</section>
  );
};

export default Contact;
