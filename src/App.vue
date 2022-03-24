<template>
  <v-app class="mmain">
    <v-app-bar app white>
      <v-toolbar-title>ASW D.o.D Dap Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>[maybe weather]</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <div class="ma-5">
        <v-row>
          <v-col>
            <h2>학사공지</h2>
            <v-card class="card-size">
              <div v-for="itme in 10" :key="itme">
                <v-card-title class="font-weight-bold"
                  >학사공지입니다.</v-card-title
                >
                <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>
              </div>
            </v-card>
          </v-col>
          <v-col>
            <h2>취업</h2>
            <v-card class="card-size">
              <div v-for="itme in 10" :key="itme">
                <v-card-title class="font-weight-bold"
                  >취업입니다.</v-card-title
                >
                <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>
              </div>
            </v-card>
          </v-col>
          <v-col>
            <h2>ASW공지</h2>
            <v-card class="card-size">
              <div v-for="itme in 10" :key="itme">
                <v-card-title class="font-weight-bold"
                  >ASW공지입니다.</v-card-title
                >
                <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>
              </div>
            </v-card>
          </v-col>
          <v-col>
            <h2>학과공지</h2>
            <v-card class="card-size">
              <div v-for="itme in 10" :key="itme">
                <v-card-title class="font-weight-bold"
                  >응소공지입니다.</v-card-title
                >
                <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h2>비교과</h2>
            <v-card class="card-size">
              <div v-for="itme in 10" :key="itme">
                <v-card-title class="font-weight-bold"
                  >비교과입니다.</v-card-title
                >
                <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>
              </div>
            </v-card>
          </v-col>
          <v-col>
            <h2>취업공지</h2>
            <v-card class="card-size">
              <div v-for="itme in 10" :key="itme">
                <v-card-title class="font-weight-bold"
                  >취업공지입니다.</v-card-title
                >
                <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>
              </div>
            </v-card>
          </v-col>
          <v-col>
            <h2>몰?루공지</h2>
            <v-card class="card-size">
              <div v-for="itme in 10" :key="itme">
                <v-card-title class="font-weight-bold"
                  >몰?루공지입니다.</v-card-title
                >
                <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>
              </div>
            </v-card>
          </v-col>
          <v-col>
            <h2>식사공지</h2>
            <v-card class="card-size">
              <div v-for="itme in 10" :key="itme">
                <v-card-title class="font-weight-bold"
                  >식사공지입니다.</v-card-title
                >
                <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({}),
};
</script>
