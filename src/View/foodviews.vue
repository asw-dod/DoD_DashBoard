<template>
  <div>
    <v-row>
      <v-col>
        <h2>
          📌오늘 학식공지 <span v-on:click="openModal">[N/1 계산하기]</span>
        </h2>
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
              <p class="memu-size">{{ this.input.suduck["cor2"] }}<br /></p>
              <h2>수덕전 코너3</h2>
              <p class="memu-size">{{ this.input.suduck["cor3"] }}<br /></p>
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
          height="38vh"
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
              <div v-if="this.color == 1">
                <p class="memu-size" style="color: #e1b643">
                  {{ this.input.hyomin["breakfast"] }}
                </p>
              </div>
              <div v-else>
                <p class="memu-size">
                  {{ this.input.hyomin["breakfast"] }}
                </p>
              </div>

              <h2>점심</h2>
              <div v-if="this.color1 == 1">
                <p class="memu-size" style="color: #e1b643">
                  {{ this.input.hyomin["lunch"] }}
                </p>
              </div>
              <div v-else>
                <p class="memu-size">
                  {{ this.input.hyomin["lunch"] }}
                </p>
              </div>

              <h2>저녁</h2>
              <div v-if="this.color2 == 1">
                <p class="memu-size" style="color: #e1b643">
                  {{ this.input.hyomin["dinner"] }}
                </p>
              </div>
              <div v-else>
                <p class="memu-size">
                  {{ this.input.hyomin["dinner"] }}
                </p>
              </div>
            </v-col>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <modal name="Calculator" :width="500" :height="440">
      <v-container>
        <h2>1명 당 {{ this.result }}원 입니다.</h2>
        <p>{{ this.pricenum }} / {{ this.personnum }}</p>
        <v-row>
          <v-col
            ><v-text-field
              v-on:click="price"
              v-model="pricenum"
              label="가격?"
            ></v-text-field
          ></v-col>
          <v-col
            ><v-text-field
              v-on:click="person"
              v-model="personnum"
              label="몇명?"
            ></v-text-field
          ></v-col>
        </v-row>
        <v-row style="text-align: center">
          <v-col v-on:click="numberB(1)">1</v-col>
          <v-col v-on:click="numberB(2)">2</v-col>
          <v-col v-on:click="numberB(3)">3</v-col>
        </v-row>
        <v-row style="text-align: center">
          <v-col v-on:click="numberB(4)">4</v-col>
          <v-col v-on:click="numberB(5)">5</v-col>
          <v-col v-on:click="numberB(6)">6</v-col>
        </v-row>
        <v-row style="text-align: center">
          <v-col v-on:click="numberB(7)">7</v-col>
          <v-col v-on:click="numberB(8)">8</v-col>
          <v-col v-on:click="numberB(9)">9</v-col>
        </v-row>
        <v-row style="text-align: center">
          <v-col v-on:click="numberB(0)">0</v-col>
          <v-col v-on:click="zero2">00</v-col>
          <v-col v-on:click="Reset_return">Reset</v-col>
        </v-row>
        <br>
        <p>*소수점으로는 변환이 안됨니다. <br> 
        *창를 닫을려면 창밖 아무곳이나 누루세요</p>
      </v-container>
    </modal>
  </div>
</template>
<script>
import dayjs from "dayjs";
import axios from "axios";
import "dayjs/locale/ko";
export default {
  name: "foodviews",
  components: {},
  data: function () {
    //처음 데이터 세팅
    return {
      input: {
        hyomin: "",
        happy: "",
        inforamtion: [],
        suduck: [],
      },
      //그외 추가하는거
      color: 0,
      color1: 0,
      color2: 0,
      //계산기
      num_signal: 0,
      pricenum: "",
      personnum: "",
      result: 0,
    };
  },
  methods: {
    openModal() {
      this.$modal.show("Calculator");
      this.num_signal = 0;
      this.pricenum = "";
      this.personnum = "";
      this.result = 0;
    },
    price() {
      this.num_signal = 0;
    },
    person() {
      this.num_signal = 1;
      console.log(this.num_signal);
    },
    numberB(value) {
      const string = value.toString()
      if (this.num_signal == 0) {
        this.pricenum += string;
      } else {
        this.personnum += string;
      }
      this.result = parseInt(this.pricenum) / parseInt(this.personnum);
      this.result = parseInt(this.result);
    },
    zero2() {
      if (this.num_signal == 0) {
        this.pricenum += "00";
      } else {
        this.personnum += "00";
      }
      this.result = parseInt(this.pricenum) / parseInt(this.personnum);
      this.result = parseInt(this.result);
    },
    Reset_return() {
      this.pricenum = "";
      this.personnum = "";
    },
  },
  async mounted() {
    //변수를 적는 곳
    let response = "";
    //fun을 적는곳(반복을 위해서 fun을 섰다.)
    //이 fun은 기숙사를 파싱해서 저장하는 함수이다.
    async function getfood(typei, data) {
      const time = dayjs().format("YYYY-MM-DD");
      //행복기숙사용
      if (typei == "happy") {
        try {
          for (let index = 0; index < data["happy"].length; index++) {
            if (data["happy"][index].Date == time) {
              return data["happy"][index];
            }
          }
        } catch (error) {
          return {
            breakfast: "없거나 Api서버 오류 발생",
            lunch: "없거나 Api서버 오류 발생",
            lunch_s: "없거나 Api서버 오류 발생",
            dinner: "없거나 Api서버 오류 발생",
            dinner_s: "없거나 Api서버 오류 발생",
          };
        }
        //효민기숙사용
      } else if (typei == "hyomin") {
        try {
          for (let index = 0; index < data["hyomin"].length; index++) {
            if (data["hyomin"][index].Date == time) {
              return data["hyomin"][index];
            }
          }
        } catch (error) {
          return {
            breakfast: "없거나 Api서버 오류 발생",
            lunch: "없거나 Api서버 오류 발생",
            lunch_s: "없거나 Api서버 오류 발생",
            dinner: "없거나 Api서버 오류 발생",
            dinner_s: "없거나 Api서버 오류 발생",
          };
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
          let temp1 = "없습", temp2 = "없습";
           //set data["suduck"]["수덕전 코너1"][0]["menuName"] 
          if(data["suduck"]["수덕전 코너2"] == undefined){
            temp2 = data["suduck"]["수덕전 코너3"][0]["menuName"]
          }else if(data["suduck"]["수덕전 코너3"] == undefined){
            temp2 = data["suduck"]["수덕전 코너2"][0]["menuName"];
          }
           return {
             cor2: temp1,
             cor3: temp2
           };
        }catch(error){
          console.log(error)
          return {
            cor2: "Error!",
            cor3: "Error!",
          }
        }

      }          
    }
    //처음에 한번만 이벤트가 발생하는곳
    response = await axios(
      "https://raw.githubusercontent.com/asw-dod/Deu_food_api/master/output/api.json"
    );
    this.input.happy = await getfood("happy", response.data);
    this.input.hyomin = await getfood("hyomin", response.data);
    this.input.inforamtion = await getfood("inforamtion", response.data);
    this.input.suduck = await getfood("suduck", response.data);
    if (this.input.hyomin["breakfast"].includes("특식")) {
      this.color = 1;
    }
    if (this.input.hyomin["lunch"].includes("특식")) {
      this.color1 = 1;
    }
    if (this.input.hyomin["dinner"].includes("특식")) {
      this.color2 = 1;
    }
  },
};
</script>
