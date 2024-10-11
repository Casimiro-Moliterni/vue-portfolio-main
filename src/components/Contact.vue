<script>
import Privacy_Policy from './Privacy_Policy.vue';
import emailjs from 'emailjs-com';
import { store } from "../store";

export default {
  name: "Contact",
  components: {
    Privacy_Policy
  },
  data() {
    return {
      store,
      name: '',
      email: '',
      message: '',
      mobileNumber: '',
      statusMessage: '',
      statusColor: '',
      errorInputMessage: '',
      errors: [],
      fieldErrors: {}, // Nuovo stato per errori specifici di ogni campo
      privacyChecked: false, // Nuovo stato per la privacy policy
      classMessageSendForm:false
    };
  },
  methods: {
    sendEmail() {
      const templateParams = {
        from_name: this.name,
        from_email: this.email,
        message: this.message,
        reply_to: this.email,
        mobileNumber: this.mobileNumber
      };

      emailjs.send('service_246q5rj', 'template_xjdvf8e', templateParams, 'qlZRc8sfsWEErRgJo')
        .then((response) => {
          this.statusMessage = 'Messaggio inviato con successo!';
          this.clearForm();
             // Rimuovere il messaggio di successo dopo 3 secondi
        setTimeout(() => {
          this.classMessageSendForm= true;
        }, 4000); // 3000 millisecondi = 3 secondi
        }, (error) => {
          this.statusMessage = 'Errore nell\'invio del messaggio.';
        });
    },

    checkForm(e) {
      this.errors = [];
      this.fieldErrors = {}; // Resetta gli errori specifici per i campi

      // Validazione del nome
      if (!this.name) {
        this.errors.push("Nome obbligatorio.");
        this.fieldErrors.name = "Nome obbligatorio.";
      } else if(this.name.length <= 4){
        this.errors.push("Nome deve contenere almeno 3 caratteri.");
        this.fieldErrors.name = "Nome deve contenere almeno 3 caratteri.";
      }

      // Validazione dell'email
      if (!this.email) {
        this.errors.push("Email obbligatoria.");
        this.fieldErrors.email = "Email obbligatoria.";
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Email non Valida.");
        this.fieldErrors.email = "Email non Valida.";
      }

      // Validazione della privacy policy
      if (!this.privacyChecked) {
        this.errors.push("You must agree to the privacy policy.");
        this.fieldErrors.privacyChecked = "You must agree to the privacy policy.";
      }

      if(this.message.length <= 4){
        this.errors.push("Il messaggio deve contenere almeno 5 caratteri.");
        this.fieldErrors.message= "Il messaggio deve contenere almeno 5 caratteri.";
      }

      // Se non ci sono errori, invia l'email
      if (!this.errors.length) {
        this.sendEmail();
      }
    },

    validEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    clearForm() {
      this.name = '';
      this.email = '';
      this.message = '';
      this.mobileNumber = '';
      this.privacyChecked = false;
      this.fieldErrors = {}; // Reset errori specifici
    }
  }
};
</script>

<template>
  <section id="Contact">
    <div class="my-container">
      <div class="container-contact pt-4">
        <h1 class="heading text-center">Contact <span>Me !</span></h1>
        
        <div
            class="home-social"
          >
            <ul class="ps-0 mb-0 ">
              <template v-for="link in store.social">
                <li>
                  <a class="" v-bind:href="link.url" target="_blank">
                    <i :class="link.class"></i>
                  </a>
                </li>
              </template>
            </ul>
          </div>
  
        <form @submit.prevent="checkForm" id="formContact">
          <div class="input-box">
            <div class="input-field">
              <input
                type="text"
                placeholder="Full Name"
                v-model="name"
                id="FullName"
              />
              <span class="focus"></span>
              <div class="error">{{ fieldErrors.name }}</div> <!-- Errore specifico del campo nome -->
            </div>
  
            <div class="input-field">
              <input
                type="number"
                placeholder="Mobile Number"
                id="MobileNumber"
                v-model="mobileNumber"
              />
              <span class="focus"></span>
              <div class="error">{{ fieldErrors.mobileNumber }}</div> <!-- Errore specifico del campo numero di telefono -->
            </div>
          </div>
  
          <div class="input-box">
            <div class="input-field w-100">
              <input
                type="email"
                placeholder="Email Address"
                v-model="email"
                class="w-100"
                id="Email"
              />
              <span class="focus"></span>
              <div class="error">{{ fieldErrors.email }}</div> <!-- Errore specifico del campo email -->
            </div>
          </div>
  
          <div class="textarea-field">
            <textarea
              id="description"
              cols="30"
              rows="10"
              placeholder="Your Message"
              v-model="message"
            ></textarea>
            <span class="focus"></span>
            <div class="error">{{ fieldErrors.message }}</div> <!-- Errore specifico del campo messaggio -->
          </div>
  
          <div class="wrapper-checkbox text-start">
            <input type="checkbox" id="privacy" v-model="privacyChecked" />
            <span for="privacy">By submitting the form, you agree to our 
              <span><a href="">privacy policy</a></span> and
              <span><a href="">terms and conditions</a></span>
            </span>
            <div class="error ">{{ fieldErrors.privacyChecked }}</div> <!-- Errore specifico per la privacy policy -->
          </div>
  
          <div class="btn-box btns">
            <button type="submit" class="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="message" :class="{active : statusMessage , delayMessage : classMessageSendForm}">
      {{ statusMessage }}
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

#Contact {
  min-height: 100vh;
  background-color: $primary_color;
  padding-bottom: 40px;
.container-contact{
  /* padding: 0 10px; */
  max-width: 70rem;
  margin: 0 auto;
}
  h1 {
    text-align: center;
    color: white;
    font-size: 50px;
    font-weight: 900;
     margin-top: 70px;
     margin-bottom: 40px;
    @media screen and (max-width:540px) {
      margin-bottom: 20px;
      margin-top: 40px;
   }
    span {
      color: $secondary_color;
    }
  }

  form {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  .input-box {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .input-field {
      position: relative;
      width: 49%;
      margin: 0.8rem 0;
      z-index: 1;

      @media screen and (max-width: 768px) {
        width: 100%;
      }
      @media screen and (max-width:540px) {
        margin: 0.2rem 0;
   }
    }
  }
  textarea,
  input {
    width: 100%;
    padding: 0.8rem;
    height: 60px;
    font-size: 1.6rem;
    color: white;
    background-color: transparent;
    border-radius: 0.6rem;
    border: 0.2rem solid $secondary_color;
    &::placeholder {
      color: white;
    }
    &.valid ~ .focus,
    &:focus ~ .focus {
      width: 100%;
    }
  }
  textarea {
    resize: none;
    min-height: 200px;
    max-height: 400px;
  }

  .btn-box {
    margin-top: 0.6rem;
    button {
      @include button-primary;
      cursor: pointer;
      background-color: $secondary_color;
      position: relative;
      color: $text_color;
      &::before {
        @include button-primary-hover;
        background-color: $primary_color;
      }
      &:hover::before {
        width: 100%;
      }
      &:hover {
        color: $secondary_color;
      }
    }
  }
  .focus {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #0e2c43;
    border-radius: 0.6rem;
    z-index: -1;
    transition: 0.5s;
  }
  .textarea-field {
    margin-top: 0.8rem;
    position: relative;
    z-index: 1;
  }
  .wrapper-checkbox {
    #privacy{
      width: auto;
      height: 10px;
      margin: 0 10px 0 5px;
    }
    /* display: flex; */
    color: white;
    align-items: center;
    font-size: 12px;
    a {
      color: $secondary_color;
      text-decoration: underline;
    }
  } 



  .message {
    margin-top: 15px;
    position: fixed;
    top: 10%;
    z-index: 22;
    color: #270;
    background-color: #DFF2BF;
    width: auto;
    border-radius: .8rem;
    padding: 1rem;
    font-weight: 700;
    font-size: 1.5rem;
    left: -100%;
    transition:.55s ease;
    transition-delay: .55s;
    &.active{
      left: 50%;
      transform: translate(-50%);
    }

    &.delayMessage{
          left: 150%;
    }
  }

  .error {
    font-size: 13px;
    color: red;
    text-align: left;
  }
  .home-social {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    @media screen and (max-width: 992px) {

    }

    &::before {
      @include animation-showRight;
      animation-delay: 2.5s;
      z-index: 2;
    }
    ul {
      width: 250px;
      display: flex;
      justify-content: space-between;

      li {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background-color: trasparent;
        border: 2px solid#00abf0;
        border-radius: 50%;
        font-size: 20px;
        color: #00abf0;
        position: relative;
        z-index: 1;
        overflow: hidden;
        transition: 0.5s;

        &::before {
          content: "";
          position: absolute;
          height: 100%;
          width: 0;
          top: 0;
          left: 0;
          background-color: #00abf0;
          z-index: -1;
          transition: 0.5s;
        }
        &:hover::before {
          width: 100%;
        }
        &:hover {
          color: #081b29;
        }
      }
    }
  }

}
</style>
