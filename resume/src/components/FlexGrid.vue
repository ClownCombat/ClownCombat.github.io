<template>
  <div id="cv">
    <PersonalInfoContainer />
    <WorkExperienceContainer />
    <EducationInfoContainer />
    <ProjectExpInfoContainer />
  </div>
  <div class="footer">
    <div>Find me online</div>

    <a class="footerLink" href="https://de.linkedin.com/in/norman-rehbein-028a3a165" target="_blank">
      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" class="svg-inline--fa fa-linkedin Oiy7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" color="#FFFFFF">
        <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
      </svg>
    </a>

    <a class="footerLink" href="https://github.com/ClownCombat" target="_blank">
      <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" >
        <path d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"></path>
      </svg>
    </a>

    <div class="signature">By Norman Rehbein</div>


  </div>
</template>

<script setup>
import PersonalInfoContainer from "./PersonalInfoContainer.vue";
import WorkExperienceContainer from "./WorkExperienceContainer.vue";
import EducationInfoContainer from "./EducationInfoContainer.vue";
import ProjectExpInfoContainer from "./ProjectExpInfoContainer.vue";

</script>

<style scoped>
#cv {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  padding-top: 10px;
  margin: auto;
  width: 100%;

  @media (min-device-width: 600px) and (max-device-width: 1024px) {
    align-items: flex-start;
    flex-direction: row;
    gap: 1em;
  }

  @media (min-device-width: 1025px) {
    align-items: flex-start;
    flex-direction: row;
    max-width: 1440px;
    gap: 1em;
  }
}

.footer {
  background-color: #3f51b5;
  color: #fff;
  margin-top: 1em;
  text-align: center;
  padding-bottom: 12px;
  width: 100%;
}

.footerLink {
  svg {
    height: 1.5em;
    margin-left: 4px;
    margin-top: 8px;
  }
}

.signature {
  font-weight: bold;
}
</style>
