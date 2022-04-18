function addValue(){

    // get the operands value

    var firstInput, secondInput, calc, calcFinal;

    firstInput = Number(document.mycalculator.input_a.value);
    secondInput = Number(document.mycalculator.input_b.value);
    calc = firstInput + secondInput;
    calcFinal = firstInput + " " + "+" + " " + secondInput + " " + "=" + " " + calc;
    document.mycalculator.output.value = calcFinal;

    // parse to integer. You can use: parseInt(input, 10);

    // perform operation

    // creating the text output

    // (if you want to check) print out in console

    // change the text area

    document.mycalculator.output.value = text;
}


function mulValue(){

    firstInput = Number(document.mycalculator.input_a.value);
    secondInput = Number(document.mycalculator.input_b.value);
    calc = firstInput * secondInput;
    calcFinal = firstInput + " " + "x" + " " + secondInput + " " + "=" + " " + calc;
    document.mycalculator.output.value = calcFinal;
    document.mycalculator.output.value = text;
}

function divValue(){

    firstInput = Number(document.mycalculator.input_a.value);
    secondInput = Number(document.mycalculator.input_b.value);
    calc = firstInput / secondInput;
    calcFinal = firstInput + " " + "÷" + " " + secondInput + " " + "=" + " " + calc;
    document.mycalculator.output.value = calcFinal;
    document.mycalculator.output.value = text;
    document.mycalculator.output.value = text;
}
