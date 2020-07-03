const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.post("/", function(request, response) {
    const { arg1, arg2, oper } = request.body;
    let answer;
    if (oper === '+') {
        alert(answer = arg1 + arg2);
    }
    else {
        alert(answer = arg1 - arg2)
    }
    response.status(200).json(answer);
});
app.listen(2121);

