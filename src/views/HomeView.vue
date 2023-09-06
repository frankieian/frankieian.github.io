<script setup lang="ts">
import Card from 'primevue/card';
</script>

<template>
    <div class="introduction">
      <div class="imgWrapper">
        <img src="../assets/frankie.png" class="logo"> 
      </div>
      <div class="introWrapper">
        <div class="topIntro">
          <h1>Hi there, im Frankie!</h1>
        </div>
        <div class="bottomIntro">
          <p> I'm a full-stack software engineer based in Sydney</p>
        </div>
      </div>
    </div>
    <div class="summary">
      <Card>
        <template #title> About </template>
        
        <template #content>
          <p>
            I am a full stack software engineer that has been working since 2021, based in Sydney, Australia.
            I have a passion for programming and technology and love to work on different types of software and systems.
            My main programming language is JavaScript/Typescript and have been using it to develop for my jobs and side projects for both frontend and backend.
          </p>
          <p>
            My main focus right now is to improve my skills in frontend and backend to become a better full-stack engineer.
            In my free time I've been working on some side projects that you can view in the projects tab.
            I have been trying to experiment in a wide range of frameworks and applications.
          </p>
          <p>
            During my time away from the computer, I am usually hanging out with friends, hanging out with my cat (momo),
            watching tv shows/anime, or going around on my bike.
          </p>
        </template>
      </Card>
    </div>
    <div class="proficiency">

    </div>
</template>

<style>

@media (max-width: 1023px) {
  .introduction {
    display: grid;
    align-items: center;
    margin: 20px;
    margin-top: 50px;
    }
  .introduction .imgWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .introduction .logo {
    height: 15em;
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;

  }
}
@media (min-width: 1024px) {
  .introduction {
    display: flex;
    margin: 20px;
    margin-top: 50px;
  }
  .introduction .imgWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
  }
  .introduction .logo {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}

.introduction .topIntro {
  display: flex;
  margin-left: 60px;
  height: 30%;
  justify-content: center;
  align-items: center;
}
.introduction .bottomIntro {
  display: flex;
  font-size: xx-large;
  margin-left: 60px;
  height: 30%;
  text-align: center;
}

.introduction h1 {
  font-family: 'Montserrat';
  font-size: 50px;
}

.summary {
  font-family: 'Montserrat';
  margin-top: 50px;

}
</style>

<style lang="scss" scoped>

.home::v-deep .p-card .p-card-title {
  font-family: 'Gluten';
}
.login-container::v-deep .p-card .p-card-content {
  padding: 0 !important;
}
</style>
