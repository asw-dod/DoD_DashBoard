<template>
  <v-app class="mmain">
    <v-app-bar app :style="{ 'background-color': '#79A3B1' }">
      <v-toolbar-title>ASW D.o.D Dap Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        부산: {{ this.input.weather["temp"] }}℃ 날씨:
        {{ this.input.weather["info"] }}</v-toolbar-title
      >
    </v-app-bar>
    <v-main :style="{ 'background-color': '#DFDFDE' }" :key="componentKey">
      <div class="ma-5">
        <v-row>
          <v-col>
            <h2
              class="list_card_top"
              :style="{ 'background-color': '#79A3B1' }"
            >
              📟학사공지
            </h2>
            <v-card class="card-size">
              <div v-for="(Bacn, index) in input.Bachelor" :key="index">
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
            <h2
              class="list_card_top"
              :style="{ 'background-color': '#79A3B1' }"
            >
              💻취업
            </h2>
            <v-card class="card-size">
              <div v-for="(inter, interx) in input.internship" :key="interx">
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
            <h2
              class="list_card_top"
              :style="{ 'background-color': '#79A3B1' }"
            >
              📃창업교육센터
            </h2>
            <v-card class="card-size">
              <div
                v-for="(Enter, Enterx) in input.Entrepreneurship"
                :key="Enterx"
              >
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
            <h2
              class="list_card_top"
              :style="{ 'background-color': '#79A3B1' }"
            >
              📰학과공지
            </h2>
            <v-card class="card-size">
              <div v-for="(aca, acax) in input.academic" :key="acax">
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
        <v-row >
          <v-col>
            <h2
              class="list_card_top"
              :style="{ 'background-color': '#79A3B1' }"
            >
              🕹️비교과
            </h2>
            <v-card class="card-size">
              <div v-for="(non, nonx) in input.non_discipline" :key="nonx">
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
            <h2
              class="list_card_top"
              :style="{ 'background-color': '#79A3B1' }"
            >
              💻취업공지
            </h2>
            <v-card class="card-size">
              <div v-for="(job, jobx) in input.job_announcement" :key="jobx">
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
            <h2
              class="list_card_top"
              :style="{ 'background-color': '#79A3B1' }"
            >
              📭학교공지
            </h2>
            <v-card class="card-size">
              <div v-for="(sch, shcx) in input.school" :key="shcx">
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
          <v-col class="s_card" :style="{ 'background-color': '#79A3B1' }">
            <h2>📌오늘 기숙사 식단공지</h2>
            <v-carousel
              cycle
              height="400"
              :show-arrows="false"
              hide-delimiter-background
              delimiter-icon="mdi-minus"
              class="h_card"
              :style="{ 'background-color': '#DFDFDE' }"
            >
              <v-carousel-item>
                <v-col>
                  <h2>행복기숙사</h2>
                  <h2>점심</h2>
                  <p class="memu-size">
                    [한식] {{ this.input.happy["점심"] }}<br />[일품]{{
                      this.input.happy["점심특"]
                    }}
                  </p>
                  <h2>저녁</h2>
                  <p class="memu-size">
                    [한식] {{ this.input.happy["저녁"] }}<br />[일품]{{
                      this.input.happy["저녁특"]
                    }}
                  </p>
                </v-col>
              </v-carousel-item>
              <v-carousel-item>
                <v-col>
                  <h2>효민기숙사</h2>
                  <h2>아침</h2>
                  <p class="memu-size">
                    {{ this.input.hyomin["아침"] }}
                  </p>
                  <h2>점심</h2>
                  <p class="memu-size">
                    {{ this.input.hyomin["점심"] }}
                  </p>
                  <h2>저녁</h2>
                  <p class="memu-size">
                    {{ this.input.hyomin["저녁"] }}
                  </p>
                </v-col>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </div>
    </v-main>
    <v-footer app :style="{ 'background-color': '#D1D1D1' }">
      Made by INMD
      <v-spacer></v-spacer>
      Update: {{ this.input.Uptime }}
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
      input: {
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
      },
      //이 값은 Fake이기 때문에 따로 
      //신경쓸 필요가 없다.
      //키값 0~3까지 쓴다.
      componentKey: 0,
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

    async function weather() {
      const opemwather = await axios(
        "https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=" +
          process.env.VUE_APP_token
      );
      const data = opemwather.data;
      console.log((data.main.temp - 273.15).toFixed(2));
      return {
        temp: (data.main.temp - 273.15).toFixed(2),
        info: data.weather[0].main,
      };
    }

    //처음에 한번만 이벤트가 발생하는곳
    this.input.Uptime = dayjs().format("YYYY년 MM월 DD일 HH시mm분 ss초");
    this.input.weather = await weather();
    this.input.happy = await getfood(happy_url);
    this.input.hyomin = await getfood(hyomin_url);

    const response = await axios.get("https://api.github.com/repos/asw-dod/dap-macro/issues");

    if (response.data[0].title.indexOf("DAP") != -1){
      const json = JSON.parse(response.data[0].body);
      this.input.Bachelor = json["학사공지"].notice;
      this.input.job_announcement = json["취업공지"].notice;
      this.input.non_discipline = json["비교과"].notice;
      this.input.internship = json["인턴십"].notice;
      const json1 = JSON.parse(response.data[1].body);
      this.input.Entrepreneurship = json1["창업교육센터"];
      this.input.academic = json1["학과공지"];
      this.input.school = json1["학교공지"];
    } else {
      const json = JSON.parse(response.data[1].body);
      this.input.Bachelor = json["학사공지"].notice;
      this.input.job_announcement = json["취업공지"].notice;
      this.input.non_discipline = json["비교과"].notice;
      this.input.internship = json["인턴십"].notice;
      const json1 = JSON.parse(response.data[0].body);
      this.input.Entrepreneurship = json1["창업교육센터"];
      this.input.academic = json1["학과공지"];
      this.input.school = json1["학교공지"];
    }

    //몇시간 마다 반복하는 이벤트가 발생하는 곳
    //8시간마다 새로고침을 한다.
    setInterval(async () => {
      this.input.Uptime = dayjs();
      this.input.weather = await weather();
      this.input.happy = await getfood(happy_url);
      this.input.hyomin = await getfood(hyomin_url);

      const response = await axios.get(
        "https://api.github.com/repos/asw-dod/dap-macro/issues"
      );

      if (response.data[0].title.indexOf("DAP") != -1) {
        const json = JSON.parse(response.data[0].body);
        this.input.Bachelor = json["학사공지"].notice;
        this.input.job_announcement = json["취업공지"].notice;
        this.input.non_discipline = json["비교과"].notice;
        this.input.internship = json["인턴십"].notice;
        const json1 = JSON.parse(response.data[1].body);
        this.input.Entrepreneurship = json1["창업교육센터"];
        this.input.academic = json1["학과공지"];
        this.input.school = json1["학교공지"];
      } else {
        const json = JSON.parse(response.data[1].body);
        this.input.Bachelor = json["학사공지"].notice;
        this.input.job_announcement = json["취업공지"].notice;
        this.input.non_discipline = json["비교과"].notice;
        this.input.internship = json["인턴십"].notice;
        const json1 = JSON.parse(response.data[0].body);
        this.input.Entrepreneurship = json1["창업교육센터"];
        this.input.academic = json1["학과공지"];
        this.input.school = json1["학교공지"];
      }
      this.componentKey = 2;
    }, 28800000);

    //10분마다 새로고침을 한다. (Fake)
    setInterval(async () => {
      //componentKey키는 0에서 1로 왔다갔다
      //키값만 바꾸어서 재렌딩을 시킨다.
      if (this.componentKey == 0) {
        this.componentKey = 0;
      } else {
        this.componentKey = 1;
      }
    }, 20000);
  },
};
</script>
