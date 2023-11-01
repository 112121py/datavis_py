let myGraph2 = document.getElementById('myGraph2');

//trace 1
let trace01 = {}; //trace 指定圖形與資料
trace01.type = "bar";
trace01.name = "lion";

trace01.x = [];
trace01.y = [];

trace01.x[0] = "Taipei Zoo";
trace01.y[0] = animals_tpzoo[0]['count'];
trace01.x[1] = "Taoyuan Zoo";
trace01.y[1] = animals_tyzoo[0]['count'];
trace01.text = trace01.y;
trace01.marker = 
{
    color: 'purple',
    opacity: 0.1
}

let trace02 = {}; //trace 指定圖形與資料
trace02.type = "bar";
trace02.name = "tiger";

trace02.x = [];
trace02.y = [];

trace02.x[0] = "Taipei Zoo";
trace02.y[0] = animals_tpzoo[1]['count'];
trace02.x[1] = "Taoyuan Zoo";
trace02.y[1] = animals_tyzoo[1]['count'];
trace02.text = trace02.y;
trace02.textfont = 
{
    color : 'white'
};
trace02.marker = 
{
    opacity: 0.1
}

let trace03 = {}; //trace 指定圖形與資料
trace03.type = "bar";
trace03.name = "monkey";

trace03.x = [];
trace03.y = [];

trace03.x[0] = "Taipei Zoo";
trace03.y[0] = animals_tpzoo[2]['count'];
trace03.x[1] = "Taoyuan Zoo";
trace03.y[1] = animals_tyzoo[2]['count'];
trace03.text = trace03.y;
trace03.marker = 
{
    opacity: 0.1
}

let data2 = [];
data2.push(trace01);
data2.push(trace02);
data2.push(trace03);

let layout2 =  //排版
{
    margin:{
        t:50 //邊距
    },
    opacity: 0.1, 
    title: "ohhhhhhh",
    barmode: 'overlay' //各長條個數單獨顯示
};
Plotly.newPlot(myGraph2, data2, layout2);
