var input;
var output;

function createUI()
{
    output = createEdit(10, 10, 780, 535);
    output.readonly = true;
    
    input = createEdit(10, 570, 780);
    
    noStroke();
    fill(0);
    text("Type here your command", 10, 565);
}

function clear()
{
    output.text = "";
}

function print(s)
{
    output.text += s;
}

function println(s)
{
    print(s + "\n");
}

function checkCommand(keyCode, fnProcess)
{
    if (keyCode !== ENTER)
        return;
    
    var s = getInput();
    
    if (s.length > 0)
    {
        fnProcess(s);
        clearInput();
    }
}

function getInput()
{
    return input.text;
}

function clearInput()
{
    input.text = "";
}
