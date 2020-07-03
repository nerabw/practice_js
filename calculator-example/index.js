const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.post("/", function(request, response) {
    const { arg1, arg2, oper } = request.body;
    let answer;
    if (oper === '+') {
        answer = arg1 + arg2;
    }
    if (oper === '-') {
        answer = arg1 - arg2;
    }
    if (oper === '*') {
        answer = arg1 * arg2;
    }
    else {
        answer = arg1 / arg2;
    }
    response.status(200).json(answer);
});
app.listen(2121);

