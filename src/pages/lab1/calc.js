
        const text1 = document.getElementById("num1");
        const text2 = document.getElementById("num2");
        let result = document.getElementById("res");

        document.getElementsByName("but1")[0].onclick = function(){
            result.value = Number(text1.value) + Number(text2.value)
        };

        document.getElementsByName("but2")[0].onclick = function(){
            result.value = Number(text1.value) - Number(text2.value)
        };

        document.getElementsByName("but3")[0].onclick = function(){
            result.value = Number(text1.value) * Number(text2.value)
        };

        document.getElementsByName("but4")[0].onclick = function(){
            if (text2.value == 0) {result.value ="Деление на 0 невозможно!";}
            else
            {result.value = Number(text1.value) / Number(text2.value)}
        };
        document.getElementsByName("but5")[0].onclick = function(){
            text1.value ="";
            text2.value ="";
            result.value = "";
        };

