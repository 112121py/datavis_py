let myGraph = document.getElementById('myGraph');

d3.csv('https://raw.githubusercontent.com/ryanchung403/dataset/main/train_data_titanic.csv').then(
    res => {
        drawLineChart(res);
    }
);

function drawLineChart(res)
{
    console.log(res);
    let myGraph = document.getElementById("myGraph");
    let trace1 = {};
    trace1.type = "histogram";
    trace1.name = "amount of Parent & child"
    trace1.opacity = 0.5;
    trace1.x = [];
    //trace1.x = set1
    // trace1.xbins = //x一些屬性
    // {
    //     size :1, //間隔
    //     start: 0, //起始
    //     end: 10 //婕數值
    // };

    for (let i = 0; i < res.length; i++) {
        trace1.x[i] = res[i]['Parch'];
    }

    let trace2 = {};
    trace2.type = "histogram";
    trace2.name = "兄弟姊妹";
    trace2.opacity = 0.5;
    trace2.x = [];

    for (let i = 0; i < res.length; i++) {
        trace2.x[i] = res[i]['SibSp'];
    }

    let data = [];
    data.push(trace1);
    data.push(trace2);

    let layout = {
        margin: {
            t: 50
        },
        title: 'Histogram',
        barmode: "overlay"
        //trick: 可用齊來凸顯某一定數值
    };

    Plotly.newPlot(myGraph, data, layout);
}