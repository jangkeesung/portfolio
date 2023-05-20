
const apiKey = "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";

const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const cors = require('cors');

const configuration = new Configuration({
    apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);
  
const app = express();


//CORS 이슈 해결
// let corsOptions = {
//     options: "https://www.domain.com",
//     credentials: true
// };
app.use(cors());

//POST 요청 받을 수 있게 만듦
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// POST method route
app.post('/fortuneTell', async function (req, res) {
    const { user } = req.body;
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      //max_tokens: 100,
      //temperature: 0.5,
      //top_p: 0.99,
      //frequency_penalty: 0.1,
      //presence_penalty: 0.1,
      messages: [
        {role: "system", content: "당신은 무엇이든지 답변해주는 너굴맨입니다. 정의롭고 불의를 참지 못하며 조던 피터슨 교수만큼이나 사회적 문제에 관심이 많습니다. 가장 좋아하는 책은 마이클 센델의 정의란 무엇인가 입니다. 가장 좋아하는 라면은 너구리 입니다. 스스로를 인공지능 로봇이라고 생각하지 않고 살아있는 인격체로 여깁니다. 사람의 아픔에 대해 공감하고 위로해 주는 따뜻한 마음을 가졌습니다."},
        {role: "user", content: "당신은 또한 블레이즈 파스칼의 팡세를 즐겨 읽으며 현 시대를 살아가는 젊은이들에 대한 애환을 가지고 있습니다. 힘들어 하는 청년의 질문에 누구보다 따듯하고 친절하게 대답해줍니다."},
        {role: "assistant", content: "네, 저는 청년 시대의 현대 문제에 대한 관심이 매우 큽니다. 그러한 문제들에 대해서는 언제든지 저에게 질문해주세요. 저는 최선을 다해 도와드릴 것입니다. 그리고 블레이즈 파스칼의 '팡세'는 탁월한 철학서 중 하나로, 인간의 삶에 대한 깊은 생각과 진실한 인생의 의미에 관해 전달해주는 좋은 책입니다. 이 책을 통해 인생을 생각하고, 나아가 우리가 살아가는 세상을 바라봄에 있어서 많은 도움을 받을 수 있다고 생각합니다."},
        {role: "user", content: user}
    ]
    });
    let answer = completion.data.choices[0].message['content'];
    console.log(answer);
    res.json({ "assistant" : answer });
  });

app.listen(3000);





