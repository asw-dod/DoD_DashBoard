<template>
  <v-app class="mmain t">
    <v-app-bar app :style="{ 'background-color': '#A1CAE2' }">
      <v-toolbar-title :style="{'font-weight':'Bold'}">ASW D.o.D Dap Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title :style="{'font-weight':'Bold'}">
        부산: {{ this.input.weather["temp"] }}℃ 날씨:
        {{ this.input.weather["info"] }}
        <span :style="{ 'font-size': '30px' }">{{
          this.input.weather["icon"]
        }}</span></v-toolbar-title
      >
    </v-app-bar>
    <v-main :style="{ 'background-color': '#B1D0E0' }" :key="componentKey">
      <div class="ma-5">
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
            <v-row>
              <v-col>
                <h2>📌오늘 학식공지</h2>
                <v-carousel
                  cycle
                  height="300"
                  :show-arrows="false"
                  hide-delimiter-background
                  delimiter-icon="mdi-minus"
                  class="h_card"
                  :style="{ 'background-color': '#F6F2D4' }"
                >
                  <v-carousel-item>
                    <v-col>
                      <h2>수덕전(공통: 김밥 라면)</h2>
                      <h2>수덕전 코너1</h2>
                      <p class="memu-size">정식</p>
                      <h2>수덕전 코너2</h2>
                      <p class="memu-size">
                        {{ this.input.suduck["cor2"] }}<br />
                      </p>
                      <h2>수덕전 코너3</h2>
                      <p class="memu-size">
                        {{ this.input.suduck["cor3"] }}<br />
                      </p>
                    </v-col>
                  </v-carousel-item>
                  <v-carousel-item>
                    <v-col>
                      <h2>정보공학관(공통: 라면)</h2>
                      <h2>정보공학관 코너1</h2>
                      <p class="memu-size">
                        {{ this.input.inforamtion["cor1"] }}<br />
                      </p>
                      <h2>정보공학관 코너3</h2>
                      <p class="memu-size">
                        {{ this.input.inforamtion["cor3"] }}<br />
                      </p>
                    </v-col>
                  </v-carousel-item>
                </v-carousel>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="s_card">
                <h2>📌오늘 기숙사 식단 공지</h2>
                <v-carousel
                  cycle
                  height="400"
                  :show-arrows="false"
                  hide-delimiter-background
                  delimiter-icon="mdi-minus"
                  class="h_card"
                  :style="{ 'background-color': '#F6F2D4' }"
                >
                  <v-carousel-item>
                    <v-col>
                      <h2>행복기숙사</h2>
                      <h2>점심</h2>
                      <p class="memu-size">
                        [한식] {{ this.input.happy["lunch"] }}<br />[일품]{{
                          this.input.happy["lunch_s"]
                        }}
                      </p>
                      <h2>저녁</h2>
                      <p class="memu-size">
                        [한식] {{ this.input.happy["dinner"] }}<br />[일품]{{
                          this.input.happy["dinner_s"]
                        }}
                      </p>
                    </v-col>
                  </v-carousel-item>
                  <v-carousel-item>
                    <v-col>
                      <h2>효민기숙사</h2>
                      <h2>아침</h2>
                      <p class="memu-size">
                        {{ this.input.hyomin["breakfast"] }}
                      </p>
                      <h2>점심</h2>
                      <p class="memu-size">
                        {{ this.input.hyomin["lunch"] }}
                      </p>
                      <h2>저녁</h2>
                      <p class="memu-size">
                        {{ this.input.hyomin["dinner"] }}
                      </p>
                    </v-col>
                  </v-carousel-item>
                </v-carousel>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <h2>
                  🎶노래재생중<br />ヾ(≧▽≦*)o <v-btn elevation="3">🔊</v-btn>
                </h2>
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
    <v-footer app :style="{ 'background-color': '#B6C9F0' }">
      Made by INMD1
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
        inforamtion: [],
        suduck: [],
      },
      //이 값은 Fake이기 때문에 따로
      //신경쓸 필요가 없다.
      //키값 0~3까지 쓴다.
      componentKey: 0,

      //유투브 음악틀때 필로한 초기 데이터들이다.
      select_data: "",
      now_playing: localStorage.getItem("n_title"),
      now_playing_url: localStorage.getItem("n_url"),
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
  },
  async mounted() {
    //변수를 적는 곳
    let response = "";

    //fun을 적는곳(반복을 위해서 fun을 섰다.)
    //이 fun은 기숙사를 파싱해서 저장하는 함수이다.
    async function getfood(typei, data) {
      const time = dayjs().format("YYYY-MM-DD");
      if (typei == "happy") {
        for (let index = 0; index < 7; index++) {
          if (data["happy"][index].Date == time) {
            return data["happy"][index];
          }
        }
      } else if (typei == "hyomin") {
        for (let index = 0; index < 7; index++) {
          if (data["hyomin"][index].Date == time) {
            return data["hyomin"][index];
          }
        }
      } else if (typei == "inforamtion") {
        try {
          return {
            cor1: data["inforamtion"]["정보공학관 코너1"][0]["menuName"],
            cor3: data["inforamtion"]["정보공학관 코너3"][0]["menuName"],
          };
        } catch (error) {
          return {
            cor1: "없습",
            cor3: "없습",
          };
        }
      } else if (typei == "suduck") {
        try {
          return {
            cor2: data["suduck"]["수덕전 코너2"][0]["menuName"],
            cor3: data["suduck"]["수덕전 코너3"][0]["menuName"],
          };
        } catch (error) {
          return {
            cor2: "없습",
            cor3: "없습",
          };
        }
      }
    }

    async function weather() {
      const opemwather = await axios(
        "https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=" +
          process.env.VUE_APP_token
      );
      const data = opemwather.data;
      const image = data.weather[0].icon;
      console.log(data.weather[0].icon);
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
    }

    //처음에 한번만 이벤트가 발생하는곳
    response = await axios(
      "https://raw.githubusercontent.com/asw-dod/Deu_food_api/master/output/api.json"
    );

    this.input.Uptime = dayjs().format("YYYY년 MM월 DD일 HH시mm분 ss초");
    this.input.weather = await weather();
    this.input.happy = await getfood("happy", response.data);
    this.input.hyomin = await getfood("hyomin", response.data);
    this.input.inforamtion = await getfood("inforamtion", response.data);
    this.input.suduck = await getfood("suduck", response.data);
    console.log(this.input.inforamtion);
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

    //몇시간 마다 반복하는 이벤트가 발생하는 곳
    //8시간마다 새로고침을 한다.
    setInterval(async () => {
      //서버단에서 변경사항이 없는지 업데이트를한다.
      //만약에 변경사항이 없으면 그냥뭐 api에서
      location.reload();
    }, 28800000);

    //1시간마다 날씨정보를 새로고침한다.
    setInterval(async () => {
      this.input.weather = await weather();
    }, 3600000);

    //10분마다 새로고침을 한다. (Fake)
    setInterval(async () => {
      //componentKey키는 0에서 1로 왔다갔다
      //키값만 바꾸어서 재렌딩을 시킨다.
      if (this.componentKey == 0) {
        this.componentKey = 0;
      } else {
        this.componentKey = 1;
      }
    }, 6000);
  },
};
</script>
