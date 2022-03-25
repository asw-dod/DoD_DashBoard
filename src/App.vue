<template>
  <v-app class="mmain">
    <v-app-bar app white>
      <v-toolbar-title>ASW D.o.D Dap Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>Test 중입니다.</v-toolbar-title>
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
                <v-card-title v-animate-css="'flipInX'" class="font-weight-bold">
                  학사공지입니다.</v-card-title>
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
            <v-carousel
              cycle
              height="400"
              :show-arrows="false"
              hide-delimiter-background
              delimiter-icon="mdi-minus"
            >
              <v-carousel-item>
                <h1>행복기숙사</h1>
                <h2>아침</h2>
                <p class="memu-size">
                  된장찌개 방어무조림 감자채피망볶음 가지나물 김치
                </p>
                <h2>점심</h2>
                <p class="memu-size">
                  [한식]오징어국 돈두루치기 부추전 숙주나물 김치 <br> 
                  [일품]오징어국 돈두루치기 부추전 숙주나물 김치
                </p>
                <h2>저녁</h2>
                <p class="memu-size">
                  부대찌개 새우까스&크리미소스 매콤떡볶이 호박나물 깍두기
                </p>
              </v-carousel-item>
              <v-carousel-item>
                <h1>효민기숙사</h1>
                <v-col>
                  <h2>아침</h2>
                  <p class="memu-size">
                    된장찌개 방어무조림 감자채피망볶음 가지나물 김치
                  </p>
                  <h2>점심</h2>
                  <p class="memu-size">
                    오징어국 돈두루치기 부추전 숙주나물 김치
                  </p>
                  <h2>저녁</h2>
                  <p class="memu-size">
                    부대찌개 새우까스&크리미소스 매콤떡볶이 호박나물 깍두기
                  </p>
                </v-col>
              </v-carousel-item>
              <v-carousel-item>
                <h1>정보관</h1>
              </v-carousel-item>
              <v-carousel-item>
                <h1>수덕전</h1>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </div>
    </v-main>
    <v-footer app>
      Made by INMD
      <v-spacer></v-spacer>
      Update 2022-03.25
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({}),
};
</script>
