var SampleJSONData1
var SampleJSONData2

fetch('http://127.0.0.1:5500/combo-tree-master/jsondata1.json')
    .then(response => response.json())
    .then(data1 => {
        SampleJSONData1 = data1;
        fetch('http://127.0.0.1:5500/combo-tree-master/jsondata2.json')
            .then(response => response.json())
            .then(data2 => {
                SampleJSONData2 = data2;
                func();
            });
    });


function func() {
    jQuery(document).ready(function ($) {
        var comboTree1, comboTree2;
        comboTree1 = $('#justAnInputBox').comboTree({
            source: SampleJSONData1,
            isMultiple: true,
            cascadeSelect: false,
            collapse: true,
            selectableLastNode: true

        });

        comboTree3 = $('#justAnInputBox1').comboTree({
            source: SampleJSONData1,
            isMultiple: true,
            cascadeSelect: true,
            collapse: false
        });

        comboTree3.setSource(SampleJSONData2);


        comboTree2 = $('#justAnotherInputBox').comboTree({
            source: SampleJSONData1,
            isMultiple: false
        });
    });
}
