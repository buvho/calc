const input = document.getElementById("input")
const back = document.getElementById("back")
let equals = false
let before = 0
let value = 0
let operation = '+'
let empty = true;
let comma = 1;

function InputX(char){
    comma = 1;
    if (empty) {
        operation = char;
        before = value;
        value = 0;
        empty = false;
    } else 
    {
        operation = char;
        if (!equals){
            Result(false)
        } 
        else 
        {
            equals = false;
        }
    }
}

function InputN(N)
{
if (comma < 1)
{
    value = value + N * comma;
    updateDisplay();
    comma *= 0.1
}
else if (equals)
{
    Reset();
    value = (value * 10) + N;
    updateDisplay();
}
else{
    value = (value * 10) + N;
    updateDisplay();
}
}

function InputE(char)
{
    switch (char){
    case '§':
        value *= -1;
        updateDisplay()
    break;
    case '%':
        if (before == 0){return;}
        value = value * before / 100;
        updateDisplay();
    break;
    case '^':
        value *= value;
        updateDisplay();
    break;
    case ',':
        if (comma == 1)
        comma = 0.1;
    break;
}
}

function Result(op)
{
if (equals)
{
value = last;
}else
{
last = value
}
    switch (operation){
    case '+':
        value += before;
    break;
    case '-':
        value = before - value;
    break;
    case 'x':
        value *= before;
    break;
    case '/':
        value = before / value;
    break;
}
updateDisplay()
before = value;
value = 0;
comma = 1;
equals = op;
}

function updateDisplay() {
    if (value.toString().length > 10) {
        value = parseFloat(value.toFixed(10));
        value = value.toPrecision(10)
    }
    input.value = value
    back.value = before
}

function Reset()
{
    value = 0
    before = 0
    comma = 1
    equals = false
    empty = true;
    updateDisplay()
}