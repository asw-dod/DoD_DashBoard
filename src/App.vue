<template>
  <v-app class="mmain t" v-if="this.black == 0">
    <v-app-bar app :style="{ 'background-color': '#A1CAE2' }">
      <v-toolbar-title @click="gamestart" :style="{ 'font-weight': 'Bold' }">
        ASW D.o.D Dap Dashboard</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-toolbar-title :style="{ 'font-weight': 'Bold', 'font-size': '40px' }">
        {{ this.time }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title
        v-if="this.input.weather != undefined"
        :style="{ 'font-weight': 'Bold' }"
      >
        부산: {{ this.input.weather["temp"] }}℃ 날씨:
        {{ this.input.weather["info"] }}
        <span :style="{ 'font-size': '30px' }">{{
          this.input.weather["icon"]
        }}</span></v-toolbar-title
      >
      <v-toolbar-title v-else :style="{ 'font-weight': 'Bold' }"
        >[날씨 Api를 넣어주세요]</v-toolbar-title
      >
    </v-app-bar>
    <v-main v-if="this.game == 0" :style="{ 'background-color': '#B1D0E0' }">
      <div class="ma-5" :key="componentKey">
        <v-row>
          <v-col>
            <h2
              class="list_card_top"
              :style="{ 'background-color': '#BAABDA' }"
            >
              🕹️비교과
            </h2>
            <v-card class="t-card-size">
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
            <v-row>
              <v-col>
                <h2
                  class="list_card_top"
                  :style="{ 'background-color': '#548CFF' }"
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
            </v-row>
            <v-row>
              <v-col>
                <h2
                  class="list_card_top"
                  :style="{ 'background-color': '#FDAF75' }"
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
            </v-row>
          </v-col>
          <v-col>
            <v-row>
              <v-col>
                <h2
                  class="list_card_top"
                  :style="{ 'background-color': '#3D84B8' }"
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
            </v-row>
            <v-row>
              <v-col>
                <h2
                  class="list_card_top"
                  :style="{ 'background-color': '#EDD2F3' }"
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
          </v-col>
          <v-col>
            <foodviews/>
            <v-row>
              <v-col>
                <h2>🎶노래재생중<br />ヾ(≧▽≦*)o</h2>
                <v-select
                  v-model="select_data"
                  v-on:change="url_change"
                  :items="items"
                  :label="this.now_playing"
                  item-text="title"
                  item-value="value"
                  return-object
                ></v-select>
              </v-col>
              <v-col>
                <iframe
                  width="215px"
                  height="120px"
                  :src="this.now_playing_url"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-main>
    <v-main v-else-if="this.game == 1">
      <iframe
        class="Diframe"
        src="https://www.trex-game.skipser.com/"
        frameborder="0"
        v-if="this.gmaemenu == 0"
      ></iframe>
    </v-main>
    <v-footer app :style="{ 'background-color': '#B6C9F0' }">
      Made by INMD1 (maybe)전역일:2023-11-06
      <v-spacer></v-spacer>
      Update: {{ this.input.Uptime }}
    </v-footer>
    n>
  </v-app>
  <v-app
    :style="{ 'background-color': 'black', cursor: 'none' }"
    v-else
  ></v-app>
</template>

<script>
import dayjs from "dayjs";
import axios from "axios";
import "dayjs/locale/ko";
import foodviews from "./View/foodviews.vue"
export default {
  name: "App",
  components: {
    foodviews
  },
  data: function () {
    //처음 데이터 세팅
    return {
      input: {
        Uptime: "",
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
      black: 0,
      //유투브 음악틀때 필로한 초기 데이터들이다.
      select_data: "",
      now_playing: localStorage.getItem("n_title"),
      now_playing_url: localStorage.getItem("n_url"),
      //이스터에그
      game: 0,
      gmaemenu: 0,
      items: [
        {
          title: "잔잔한 lofi hip hop",
          value:
            "https://www.youtube.com/embed/5qap5aO4i9A?controls=0&autoplay=1",
        },
        {
          title: "약간의 EDM",
          value:
            "https://www.youtube.com/embed/N65Jb683pXQ?controls=0&autoplay=1",
        },
        {
          title: "k-pop/krnb radio",
          value:
            "https://www.youtube.com/embed/RFHj_vjVxqM?controls=0&autoplay=1",
        },
        {
          title: "옛날 카페느낌",
          value:
            "https://www.youtube.com/embed/Dx5qFachd3A?controls=0&autoplay=1",
        },
      ],
      time: "",
    };
  },
  methods: {
    //유투브 ^^
    url_change() {
      localStorage.setItem("n_title", this.select_data.title);
      localStorage.setItem("n_url", this.select_data.value);
      this.now_playing = localStorage.getItem("n_title");
      this.now_playing_url = localStorage.getItem("n_url");
      console.log(this.select_data);
    },

    gamestart() {
      if (this.game == 0) {
        this.game = 1;
      } else if (this.game == 1) {
        this.game = 0;
      }
      console.log(this.game);
    },
  },
  async mounted() {
    //변수를 적는 곳
    let response = "";



    async function weather() {
      if (
        localStorage.getItem("weatherapi") != undefined ||
        localStorage.getItem("weatherapi") != null
      ) {
        const opemwather = await axios(
          "https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=" +
            localStorage.getItem("weatherapi")
        );

        const data = opemwather.data;
        const image = data.weather[0].icon;
        let icon = "";

        if (image == "01d" || image == "01n") {
          icon = "🌕";
        } else if (image == "02d" || image == "02n") {
          icon = "⛅";
        } else if (image == "03d" || image == "03n") {
          icon = "🌫️";
        } else if (image == "04d" || image == "04n") {
          icon = "☁";
        } else if (image == "09d" || image == "09n") {
          icon = "🌧";
        } else if (image == "10d" || image == "10n") {
          icon = "🌦";
        } else if (image == "11d" || image == "11n") {
          icon = "🌩";
        } else if (image == "13d" || image == "13n") {
          icon = "❄";
        } else if (image == "50d" || image == "50n") {
          icon = "🌫️";
        }

        return {
          temp: (data.main.temp - 273.15).toFixed(2),
          info: data.weather[0].main,
          icon: icon,
        };
      } else {
        return undefined;
      }
    }


    this.input.Uptime = dayjs().format("YYYY년 MM월 DD일 HH시mm분 ss초");
    this.input.weather = await weather();

    //추가 사항(차차형이 부탁한 노래^^)
    if (localStorage.getItem("n_title") != undefined) {
      this.now_playing = localStorage.getItem("n_title");
      this.now_playing_url = localStorage.getItem("n_url");
    } else {
      this.now_playing = "잔잔한 lofi hip hop";
      this.now_playing_url =
        "https://www.youtube.com/embed/5qap5aO4i9A?controls=0&autoplay=1";
    }

    //학교 공지를 파싱해온다.
    response = await axios.get(
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

    if (this.input.hyomin["breakfast"].includes("특식")) {
      this.color = 1;
    }
    if (this.input.hyomin["lunch"].includes("특식")) {
      this.color1 = 1;
    }
    if (this.input.hyomin["dinner"].includes("특식")) {
      this.color2 = 1;
    }
    console.log(this.color);

    if (dayjs().format("HH") < 9) {
      this.black = 0;
    } else {
      this.black = 0;
    }

    //몇시간 마다 반복하는 이벤트가 발생하는 곳
    setInterval(async () => {
      //서버단에서 변경사항이 없는지 업데이트를한다.
      //만약에 변경사항이 없으면 그냥뭐 api에서
      location.reload();
    }, 14400000);

    //1시간마다 날씨정보를 새로고침한다.
    setInterval(async () => {
      this.input.weather = await weather();
    }, 3600000);

    setInterval(async () => {
      if (dayjs().format("HH") < 9) {
        this.black = 1;
      } else {
        this.black = 0;
      }
    }, 1800000);

    //10분마다 새로고침을 한다. (Fake)
    setInterval(async () => {
      dayjs.locale("ko");
      this.time = dayjs().format("dddd YYYY.MM.DD / A HH:mm:ss");
    }, 1000);
  },
};
</script>
