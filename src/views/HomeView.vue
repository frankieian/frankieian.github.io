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
          <p> Im a full stack software engineer based in Sydney</p>
        </div>
      </div>
    </div>
    <div class="summary">
      <Card>
        <template #title> About </template>
        
        <template #content>
          <p>
            I am a full stack software engineer that has been working since 2021, based in Sydney, Australia.
            <br/><br/>
            I have a passion for programming and technology and love to work on different types of software and systems.
            <br/><br/>
            My main programming language is JavaScript/Typescript and have been using it to develop for my jobs and side projects for both frontend and backend.
            
          </p>
        </template>
      </Card>
    </div>
    <div class="proficiency">

    </div>
</template>

<style>

.introduction {
  display: flex;
  margin: 20px;
  margin-top: 50px;
}

.introduction .imgWrapper {
  display: flex;
  justify-content: center;
  width: 25%;
  height: 25%;
}

.introduction .logo {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.introduction .topIntro {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  height: 50%;
}
.introduction .bottomIntro {
  display: flex;
  font-size: xx-large;
  margin-left: 50px;
  height: 50%;
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
