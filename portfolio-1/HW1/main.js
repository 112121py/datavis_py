let myGraph = document.getElementById('myGraph');

//trace 1
let trace1 = {}; //trace 指定圖形與資料
trace1.mode = "markers+text"; //diff 模式+直接顯示在畫面的文字
trace1.type = "scatter";
trace1.name = "Team A"; //取名
trace1.marker =  //粗細
{
    size:10
};
trace1.x = [];
trace1.y = [];
trace1.text = []; //資料點名字list
trace1.textposition = "bottom center"; //文字(名字)顯示位置
trace1.textfont = { //set
    family:"Raleway, sans-serif", //font
    size:10 //size
};
for(let i=0;i<set1.length;i++)
{
    trace1.x[i] = set1[i][0];
    trace1.y[i] = set1[i][1];
    trace1.text[i] = set1[i][2]; //資料點的名字呈現出來(data.js)
}

//trace 2
let trace2 = {};
trace2.mode = "lines"; //diff
trace2.type = "scatter";
trace2.name = "Team B"; 
trace2.x = [];
trace2.y = [];
trace2.text = [];
for(let i=0;i<set2.length;i++)
{
    trace2.x[i] = set2[i][0];
    trace2.y[i] = set2[i][1];
    trace2.text[i] = set2[i][2];
}

//trace 3
let trace3 = {}; 
trace3.mode = "lines+markers"; //diff
trace3.type = "scatter";
trace3.name = "Team C"; 
trace3.x = [];
trace3.y = [];
trace3.text = [];
for(let i=0;i<set3.length;i++)
{
    trace3.x[i] = set3[i][0];
    trace3.y[i] = set3[i][1];
    trace3.text[i] = set3[i][2];
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
    xaxis:{
        range:[0, 6] //x軸範圍
    },
    yaxis:{
        range:[0, 25] //y軸範圍
    },
    title: "Scatter & Line" //圖表標題
};
Plotly.newPlot(myGraph, data, layout);
