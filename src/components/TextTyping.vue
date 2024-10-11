<script>
export default {
  name: "TextTyping",
  data() {
    return {
      typedText: "", // The text being typed
      textArray: ["Jr Front-End Developer", "Jr Back-End Developer"],
      typingDelay: 80,
      erasingDelay: 100,
      newTextDelay: 1500, // Delay between current and next text
      textArrayIndex: 0,
      charIndex: 0,
      isTyping: false, // Boolean to manage cursor animation
    };
  },
  methods: {
    type() {
      if (this.charIndex < this.textArray[this.textArrayIndex].length) {
        if (!this.isTyping) this.isTyping = true;
        this.typedText += this.textArray[this.textArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex++;
        setTimeout(this.type, this.typingDelay);
      } else {
        this.isTyping = false;
        setTimeout(this.erase, this.newTextDelay);
      }
    },
    erase() {
      if (this.charIndex > 0) {
        if (!this.isTyping) this.isTyping = true;
        this.typedText = this.textArray[this.textArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex--;
        setTimeout(this.erase, this.erasingDelay);
      } else {
        this.isTyping = false;
        this.textArrayIndex++;
        if (this.textArrayIndex >= this.textArray.length)
          this.textArrayIndex = 0;
        setTimeout(this.type, this.typingDelay + 1100);
      }
    },
    startTypingEffect() {
      // Initiate typing effect with a slight delay after component is mounted
      if (this.textArray.length) setTimeout(this.type, this.newTextDelay + 250);
    },
  },
  mounted() {
    // Start typing effect once the component is mounted
    this.startTypingEffect();
  },
};
</script>

<template>
  <div class="d-flex align-items-center container-text ">
    <h3 class="typed-text">{{ typedText }}</h3>
    <span class="cursor" :class="{ typing: isTyping }">&nbsp;</span>
  </div>
</template>

<style scoped lang="scss">
 @use '../style/partials/mixins' as *;

.container-text {
  min-height: 50px;
  position: relative;
  @media screen and (max-width:992px) {
  
        justify-content: center;
    }
}
.typed-text {
  
  font-size: 26px;
  font-weight: 700;
  color: #00abf0;

  @media (min-width: 576px) {
    font-size: 32px;
}
}

span.cursor {
  background-color: #00abf0;
  display: inline-block;
  margin-left: 0.1rem;
  width: 3px;
  height: 40px;
  animation: blink 1s infinite;
}
p span.cursor.typing {
  animation: none;
}
@keyframes blink {
  0% {
    background-color: #00abf0;
  }
  49% {
    background-color: #00abf0;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
  100% {
    background-color: #00abf0;
  }
}

/**/

</style>
