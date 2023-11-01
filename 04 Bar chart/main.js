let myGraph = document.getElementById('myGraph');

//trace 1
let trace1 = {}; //trace 指定圖形與資料
trace1.type = "bar";
trace1.name = "lion";

trace1.x = [];
trace1.y = [];

trace1.x[0] = "Taipei Zoo";
trace1.y[0] = animals_tpzoo[0]['count'];
trace1.x[1] = "Taoyuan Zoo";
trace1.y[1] = animals_tyzoo[0]['count'];
trace1.text = trace1.y;
trace1.marker = 
{
    color: 'purple',
    opacity: 0.1
}

let trace2 = {}; //trace 指定圖形與資料
trace2.type = "bar";
trace2.name = "tiger";

trace2.x = [];
trace2.y = [];

trace2.x[0] = "Taipei Zoo";
trace2.y[0] = animals_tpzoo[1]['count'];
trace2.x[1] = "Taoyuan Zoo";
trace2.y[1] = animals_tyzoo[1]['count'];
trace2.text = trace2.y;
trace2.textfont = 
{
    color : 'white'
};
trace2.marker = 
{
    opacity: 0.1
}

let trace3 = {}; //trace 指定圖形與資料
trace3.type = "bar";
trace3.name = "monkey";

trace3.x = [];
trace3.y = [];

trace3.x[0] = "Taipei Zoo";
trace3.y[0] = animals_tpzoo[2]['count'];
trace3.x[1] = "Taoyuan Zoo";
trace3.y[1] = animals_tyzoo[2]['count'];
trace3.text = trace3.y;
trace3.marker = 
{
    opacity: 0.1
}

let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);

let layout =  //排版
{
    margin:{
        t:50 //邊距
    },
    opacity: 0.1, 
    title: "ohhhhhhh",
    barmode: 'overlay' //各長條個數單獨顯示
};
Plotly.newPlot(myGraph, data, layout);
