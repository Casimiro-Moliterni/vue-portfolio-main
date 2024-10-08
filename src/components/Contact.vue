<script>
import Privacy_Policy from './Privacy_Policy.vue';
// componente email 
import emailjs from 'emailjs-com';

export default {
  name: "Contact",
  components:{
    Privacy_Policy
  },
  data() {
        return {
            name: '',
            email: '',
            message: '',
            mobileNumber: '',
            statusMessage: '',
            statusColor: '',
            errorInputMessage:''
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
                    this.statusColor = 'white';
                    this.name='',
                    this.email='',
                    this.message=''
                }, (error) => {
                    this.statusMessage = 'Errore nell\'invio del messaggio.';
                    this.statusColor = 'red';
                });
        },
    }
};

</script>

<template>
  <section id="Contact">
    <div class="container">
      <h1 class="heading text-center">Contact <span>Me !</span></h1>

      <form @submit.prevent="sendEmail" id="formContact">
        <div class="input-box">
          <div class="input-field">
            <input type="text" placeholder="Full Name" required v-model="name" id="FullName" />
            <span class="focus"></span>
            <div class="error text-white">{{ errorInputMessage }}</div>
          </div>

          <div class="input-field">
            <input type="number" placeholder="Mobile Number" required id="MobileNumber" v-model="mobileNumber" />
            <span class="focus"></span>
            <div class="error text-white">{{ errorInputMessage  }}</div>
          </div>
        </div>

        <div class="input-box">
          <div class="input-field w-100">
            <input type="email" placeholder="Email Address" required v-model="email" class="w-100" id="Email"/>
            <span class="focus"></span>
            <div class="error"></div>
          </div>
        </div>
        <div class="textarea-field">
          <textarea
            name=""
            id="description"
            cols="30"
            rows="10"
            placeholder="Yor Message"
            required
            v-model="message"
          >
          </textarea>
          <span class="focus"></span>
          <div class="error"></div>
        </div>

       <div class="wrapper-checkbox text-start">
        <input type="checkbox" id="privacy">
        <span for="privacy">by submitting the form , you agree to our <span><a href="">privacy policy</a></span> and <span><a href="">terms and conditions</a></span></span>
       </div>   

        <div class="btn-box btns">
          <button type="submit" class="btn" @click="valideInput()">Submit</button>
        </div>

      </form>
    </div>

    <div class="message">
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
  padding-top: 60px;
  padding-bottom: 40px;
  
  h1 {
      text-align: center;
      color: white ;
      font-size: 56px;
      font-weight: 900;
      margin-bottom: 30px;
      span {
        color: $secondary_color;
      }
    }

  form {
    max-width: 70rem;
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

      @media screen and (max-width:768px) {
      width: 100%;
        
      }
    }
  }
  textarea,
  input {
    width: 100%;
    height: 100%;
    padding: 1rem;
    font-size: 1.6rem;
    color: white;
    background-color: transparent;
    border-radius: 0.6rem;
    border: 0.2rem solid $secondary_color;
    &::placeholder{
        color: white;
    }
    &.valid~.focus,
    &:focus~.focus{
        width: 100%;
    }
  }
  textarea{
    resize: none;
    max-height: 200px;;
  }

  .btn-box {
    margin-top: 0.6rem;
    button {
      @include button-primary;
      cursor: pointer;
      background-color:$secondary_color;
      position: relative;
      color:  $text_color;
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
.focus{
     position: absolute;
     top: 0;
     left: 0;
     width: 0;
     height: 100%;
     background-color: #0E2C43;
     border-radius: .6rem;
     z-index: -1;
     transition: .5s;
  }
 .textarea-field{
    margin-top: .8rem;
    position: relative;
    z-index: 1;
 }
 .wrapper-checkbox{
  /* display: flex; */
  color: white;
  align-items: center;
  font-size: 12px;
a{
  color: $secondary_color;
}
  #privacy{
    width: auto;
    margin-right: 10px;
    margin-left: 5px;
  }
 }
 .message{

  color: white;
 }
}
</style>
