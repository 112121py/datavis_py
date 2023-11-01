let myGraph = document.getElementById('myGraph');

//trace 1
let trace1 = {}; //trace 指定圖形與資料
trace1.type = "pie";

trace1.labels = [];
trace1.title = "機器學習概論"
trace1.values = [];
trace1.hole = 0.5 //dig hole
trace1.domain = { //要放在哪裡
    row:0,
    column:0
};
trace1.marker = {
    colors:['rgb(33, 75, 99)', 'rgb(79, 129, 102)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)']
};

trace1.textfont = 
{
    color : 'white'
};

for(let x=0;x<evaluation_ratio1.length;x++)
{
    trace1.labels[x] = evaluation_ratio1[x]['name'];
    trace1.values[x] = evaluation_ratio1[x]['count'];
}

let trace2 = {}; //trace 指定圖形與資料
trace2.type = "pie";
trace2.labels = [];
trace2.title = "資料視覺化"
trace2.values = [];
trace2.domain = {
    row:0,
    column:1
};

trace2.textfont = 
{
    color : 'white'
};

for(let x=0;x<evaluation_ratio2.length;x++)
{
    trace2.labels[x] = evaluation_ratio2[x]['name'];
    trace2.values[x] = evaluation_ratio2[x]['count'];
}

let trace3 = {}; //trace 指定圖形與資料
trace3.type = "pie";
trace3.labels = [];
trace3.title = "人工智慧與永續發展"
trace3.values = [];
trace3.domain = {
    row:1,
    column:0
};

trace3.textfont = 
{
    color : 'white'
};

for(let x=0;x<evaluation_ratio3.length;x++)
{
    trace3.labels[x] = evaluation_ratio3[x]['name'];
    trace3.values[x] = evaluation_ratio3[x]['count'];
}

let trace4 = {}; //trace 指定圖形與資料
trace4.type = "pie";
trace4.labels = [];
trace4.hole = 0.5
trace4.title = "Python程式設計"
trace4.values = [];
trace4.domain = {
    row:1,
    column:1
};

trace4.textfont = 
{
    color : 'white'
};

for(let x=0;x<evaluation_ratio4.length;x++)
{
    trace4.labels[x] = evaluation_ratio4[x]['name'];
    trace4.values[x] = evaluation_ratio4[x]['count'];
}

let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);
data.push(trace4);

let layout =  //排版
{
    margin:{
        t:10, //邊距
        l:0,
    },
    grid:{  //先做就可以邊做邊看4個圖形成 總共幾欄幾列
        rows:2,
        columns:2
    }
};
Plotly.newPlot(myGraph, data, layout);
