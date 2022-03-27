<template>
  <v-app class="mmain">
    <v-app-bar app white>
      <v-toolbar-title>ASW D.o.D Dap Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{ this.weather}}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <div class="ma-5">
        <v-row>
          <v-col>
            <h2>학사공지</h2>
            <v-card class="card-size">
              <div v-for="(Bacn, index) in Bachelor" :key="index">
                <v-card-title
                  v-animate-css="'flipInX'"
                  class="font-weight-bold"
                >
                  {{ Bacn.title }}</v-card-title
                >
                <v-card-subtitle v-animate-css="'flipInX'" class="pb-0">
                  주최: {{ Bacn.department }} 작성일:{{ Bacn.date }}
                </v-card-subtitle>
              </div>
            </v-card>
          </v-col>
          <v-col>
            <h2>취업</h2>
            <v-card class="card-size">
              <div v-for="(inter, interx) in internship" :key="interx">
                <v-card-title
                  v-animate-css="'flipInX'"
                  class="font-weight-bold"
                >
                  {{ inter[0] + inter[1] }}</v-card-title
                >
              </div>
            </v-card>
          </v-col>
          <v-col>
            <h2>ASW공지</h2>
            <v-card class="card-size">
              <div v-for="(Enter, Enterx) in Entrepreneurship" :key="Enterx">
                <v-card-title
                  v-animate-css="'flipInX'"
                  class="font-weight-bold"
                >
                  {{ Enter.title }}</v-card-title
                >
                <v-card-subtitle v-animate-css="'flipInX'" class="pb-0">
                  {{ Enter.date }}
                </v-card-subtitle>
              </div>
            </v-card>
          </v-col>
          <v-col>
            <h2>학과공지</h2>
            <v-card class="card-size">
              <div v-for="(aca, acax) in academic" :key="acax">
                <v-card-title
                  v-animate-css="'flipInX'"
                  class="font-weight-bold"
                >
                  {{ aca.title }}</v-card-title
                >
                <v-card-subtitle v-animate-css="'flipInX'" class="pb-0">
                  {{ aca.date }}
                </v-card-subtitle>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h2>비교과</h2>
            <v-card class="card-size">
              <div v-for="(non, nonx) in non_discipline" :key="nonx">
                <v-card-title
                  v-animate-css="'flipInX'"
                  class="font-weight-bold"
                >
                  {{ non.title }}</v-card-title
                >
                <v-card-subtitle v-animate-css="'flipInX'" class="pb-0">
                  신청기간: {{ non.receptionTime }} 기간: {{ non.playTime }}
                </v-card-subtitle>
              </div>
            </v-card>
          </v-col>
          <v-col>
            <h2>취업공지</h2>
            <v-card class="card-size">
              <div v-for="(job, jobx) in job_announcement" :key="jobx">
                <v-card-title
                  v-animate-css="'flipInX'"
                  class="font-weight-bold"
                >
                  {{ job.title }}</v-card-title
                >
                <v-card-subtitle v-animate-css="'flipInX'" class="pb-0">
                  {{ job.date }}
                </v-card-subtitle>
              </div>
            </v-card>
          </v-col>
          <v-col>
            <h2>학교공지</h2>
            <v-card class="card-size">
              <div v-for="(sch, shcx) in school" :key="shcx">
                <v-card-title
                  v-animate-css="'flipInX'"
                  class="font-weight-bold"
                >
                  {{ sch.title }}</v-card-title
                >
                <v-card-subtitle v-animate-css="'flipInX'" class="pb-0">
                  {{ sch.date }}
                </v-card-subtitle>
              </div>
            </v-card>
          </v-col>
          <v-col>
            <h2>오늘 기숙사 식단공지</h2>
            <v-carousel
              cycle
              height="400"
              :show-arrows="false"
              hide-delimiter-background
              delimiter-icon="mdi-minus"
            >
              <v-carousel-item>
                <!-- <v-sheet height="100%" color="blue lighten-5"> -->
                <h2>행복기숙사</h2>
                <h2>아침</h2>
                <p class="memu-size">
                  {{ this.happy["아침"] }}
                </p>
                <h2>점심</h2>
                <p class="memu-size">
                  [한식]{{ this.happy["점심"] }}<br />[일품]{{
                    this.happy["점심특"]
                  }}
                </p>
                <h2>저녁</h2>
                <p class="memu-size">
                  [한식]{{ this.happy["저녁"] }}<br />[일품]{{
                    this.happy["저녁특"]
                  }}
                </p>
                <!-- </v-sheet> -->
              </v-carousel-item>
              <v-carousel-item>
                <h2>효민기숙사</h2>
                <v-col>
                  <h2>아침</h2>
                  <p class="memu-size">
                    {{ this.hyomin["아침"] }}
                  </p>
                  <h2>점심</h2>
                  <p class="memu-size">
                    {{ this.hyomin["점심"] }}
                  </p>
                  <h2>저녁</h2>
                  <p class="memu-size">
                    {{ this.hyomin["저녁"] }}
                  </p>
                </v-col>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </div>
    </v-main>
    <v-footer app>
      Made by INMD
      <v-spacer></v-spacer>
      Update: {{ this.Uptime }}
    </v-footer>
    n>
  </v-app>
</template>

<script>
import dayjs from "dayjs";
import axios from "axios";

export default {
  name: "App",
  components: {},
  data: function () {
    //처음 데이터 세팅
    return {
      Uptime: "",
      hyomin: "",
      happy: "",
      weather: "불러오는 중...",
      job_announcement: [],
      Bachelor: [],
      non_discipline: [],
      internship: [],
      Entrepreneurship: [],
      academic: [],
      school: [],
    };
  },
  method: {},
  async mounted() {
    //변수를 적는 곳
    const happy_url =
      "https://dorm.deu.ac.kr/deu/food/getWeeklyMenu.kmc?locgbn=DE&sch_date=";
    const hyomin_url =
      "https://dorm.deu.ac.kr/hyomin/food/getWeeklyMenu.kmc?locgbn=DE&sch_date=";

    //fun을 적는곳(반복을 위해서 fun을 섰다.)
    //이 fun은 기숙사를 파싱해서 저장하는 함수이다.
    async function getfood(url) {
      const nowdate = dayjs().format("YYYY-MM-DD");
      const responce = await axios(url + nowdate);
      if (url.indexOf("hyomin") != -1) {
        const data = responce.data["root"][0].WEEKLYMENU[0];
        for (let index = 0; index < 8; index++) {
          if (data["fo_date" + index] == nowdate) {
            return {
              아침: data["fo_menu_mor" + index],
              점심: data["fo_menu_lun" + index],
              저녁: data["fo_menu_eve" + index],
            };
          }
        }
      } else {
        for (let main_index = 0; main_index < 2; main_index++) {
          const data = responce.data["root"][0].WEEKLYMENU[main_index];
          for (
            let index = 4 * main_index;
            index < 4 + 4 * main_index;
            index++
          ) {
            if (data["fo_date" + index] == nowdate) {
              return {
                아침: data["fo_menu_mor" + index],
                점심: data["fo_menu_lun" + index],
                점심특: data["fo_sub_lun" + index],
                저녁: data["fo_menu_eve" + index],
                저녁특: data["fo_sub_eve" + index],
              };
            }
          }
        }
      }
    }

    //처음에 한번만 이벤트가 발생하는곳
    this.Uptime = dayjs();
    this.happy = await getfood(happy_url);
    this.hyomin = await getfood(hyomin_url);

    const response = await axios.get(
      "https://api.github.com/repos/asw-dod/dap-macro/issues"
    );
    if (response.data[0].title.indexOf("DAP") != -1) {
      const json = JSON.parse(response.data[0].body);
      this.Bachelor = json["학사공지"].notice;
      this.job_announcement = json["취업공지"].notice;
      this.non_discipline = json["비교과"].notice;
      this.internship = json["인턴십"].notice;
      const json1 = JSON.parse(response.data[1].body);
      this.Entrepreneurship = json1["창업교육센터"];
      this.academic = json1["학과공지"];
      this.school = json1["학교공지"];
    } else {
      const json = JSON.parse(response.data[1].body);
      this.Bachelor = json["학사공지"].notice;
      this.job_announcement = json["취업공지"].notice;
      this.non_discipline = json["비교과"].notice;
      this.internship = json["인턴십"].notice;
      const json1 = JSON.parse(response.data[0].body);
      this.Entrepreneurship = json1["창업교육센터"];
      this.academic = json1["학과공지"];
      this.school = json1["학교공지"];
    }

    //몇시간 마다 반복하는 이벤트가 발생하는 곳
    //5시간마다 새로고침을 한다.
    setInterval(async () => {
      this.Uptime = dayjs();
      this.happy = await getfood(happy_url);
      this.hyomin = await getfood(hyomin_url);

      const response = await axios.get(
        "https://api.github.com/repos/asw-dod/dap-macro/issues"
      );

      if (response.data[0].title.indexOf("DAP") != -1) {
        const json = JSON.parse(response.data[0].body);
        this.Bachelor = json["학사공지"].notice;
        this.job_announcement = json["취업공지"].notice;
        this.non_discipline = json["비교과"].notice;
        this.internship = json["인턴십"].notice;
        const json1 = JSON.parse(response.data[1].body);
        this.Entrepreneurship = json1["창업교육센터"];
        this.academic = json1["학과공지"];
        this.school = json1["학교공지"];
      } else {
        const json = JSON.parse(response.data[1].body);
        this.Bachelor = json["학사공지"].notice;
        this.job_announcement = json["취업공지"].notice;
        this.non_discipline = json["비교과"].notice;
        this.internship = json["인턴십"].notice;
        const json1 = JSON.parse(response.data[0].body);
        this.Entrepreneurship = json1["창업교육센터"];
        this.academic = json1["학과공지"];
        this.school = json1["학교공지"];
      }
    }, 18000000);
  },
};
</script>
