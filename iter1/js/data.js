var colorProfiles_c = ["#1f77b4", "#ff7f0e", "#2ca02c", '#16182B', "#9467bd","#d62728"];
var colorProfiles = ["slope-line-america", "slope-line-asia","slope-line-europe", "slope-line-osceania", "slope-line-meast", "slope-line-africa"];
var continentMap = {"America"              : 0,
                    "Asia"                 : 1,
                    "Europe"               : 2,
                    "Oceania"              : 3,
                    "Middle East"          : 4,
                    "Africa"               : 5};

var countrylists = {"Shanghai-China"        : "Asia",
                    "Hong Kong-China"       : "Asia",
                    "Singapore"             : "Asia",
                    "Korea"                 : "Asia",
                    "Japan"                 : "Asia",
                    "Taiwan"                : "Asia",
                    "Liechtenstein"         : "Europe",
                    "Estonia"               : "Europe",
                    "Poland"                : "Europe",
                    "Macao-China"           : "Asia",
                    "Chinese Taipei"        : "Asia",
                    "Czech Republic"        : "Europe",
                    "Vietnam"               : "Asia",
                    "Finland"               : "Europe",
                    "Ireland"               : "Europe",
                    "Belgium"               : "Europe",
                    "Netherlands"           : "Europe",
                    "Germany"               : "Europe",
                    "Canada"                : "America",
                    "New Zealand"           : "Oceania",
                    "Switzerland"           : "Europe",
                    "France"                : "Europe",
                    "Austria"               : "Europe",
                    "Australia"             : "Oceania",
                    "Latvia"                : "Europe",
                    "United Kingdom"        : "Europe",
                    "Spain"                 : "Europe",
                    "United States"         : "America",
                    "Italy"                 : "Europe",
                    "Norway"                : "Europe",
                    "Hungary"               : "Europe",
                    "Luxembourg"            : "Europe",
                    "Portugal"              : "Europe",
                    "Iceland"               : "Europe",
                    "Denmark"               : "Europe",
                    "Lithuania"             : "Europe",
                    "Sweden"                : "Europe",
                    "Russian Federation"    : "Europe",
                    "Croatia"               : "Europe",
                    "Slovenia"              : "Europe",
                    "Singapore"             : "Asia",
                    "Viet Nam"              : "Asia",
                    "Israel"                : "Middle East",
                    "Slovak Republic"       : "Europe",
                    "Greece"                : "Europe",
                    "Turkey"                : "Europe",
                    "Chile"                 : "America",
                    "Thailand"              : "Asia",
                    "Serbia"                : "Europe",
                    "Bulgaria"              : "Europe",
                    "Romania"               : "Europe",
                    "United Arab Emirates"  : "Middle East",
                    "Costa Rica"            : "America",
                    "Mexico"                : "America",
                    "Kazakhstan"            : "Asia",
                    "Malaysia"              : "Asia",
                    "Uruguay"               : "America",
                    "Montenegro"            : "Europe",
                    "Argentina"             : "America",
                    "Colombia"              : "America",
                    "Albania"               : "Europe",
                    "Tunisia"               : "Africa",
                    "Jordan"                : "Middle East",
                    "Brazil"                : "America",
                    "Indonesia"             : "Asia",
                    "Qatar"                 : "Middle East",
                    "Peru"                  : "America"};

d3.custom = {};
d3.custom.slopegraph = function(data) {

    var opts = {
        width: 650,
        height: 900,
        margin: {top: 20, right: 50, bottom: 50, left: 250},
        labelLength: 70
    };
    function exports(selection) {

        selection.each(function (dataset) {
            var chartHeight = opts.height - opts.margin.top - opts.margin.bottom;
            var chartWidth = opts.width - opts.margin.right - opts.margin.left;

            var parent = d3.select(this);
            var svg = parent.selectAll("svg.chart-root").data([0]);
            svg.enter().append("svg").attr("class", "chart-root")
                    .append('g').attr('class', 'chart-group');
            svg.attr({width: opts.width, height: opts.height});
            svg.exit().remove();
            var slopechartSvg = svg.select('.chart-group');

            var data = d3.transpose(dataset.data);
            
            var scale = d3.scale.linear().domain(d3.extent(d3.merge(data))).range([0, chartHeight]);

            var lines = slopechartSvg.selectAll('line.slope-line')
                .data(data);
            lines.enter().append("line")
            lines.attr({           
                    class: function(d) {
                        cn = countries_w_escs[d[0]];
                        c = colorProfiles[continentMap[countrylists[cn]]]; 
                        return c + ' slope-line'
                    },
                    x1: opts.margin.left + opts.labelLength,
                    x2: opts.width - opts.margin.right - opts.labelLength,
                    y1: function(d) { return opts.margin.top + scale(d[0]); },
                    y2: function(d) { return opts.margin.top + scale(d[1]); }});
            lines.attr("stroke-width", 2);
            lines.exit().remove();

            var leftHeader = slopechartSvg.append('text');
            leftHeader.attr({
                    class: 'slope-label-headers',
                    x: opts.margin.left + opts.labelLength,
                    y: function(d,i) { return opts.margin.top - 14; },
                    dy: '.5em',
                    'text-anchor': 'end'})
                .text("Observed math rank");
            
            var leftLabels = slopechartSvg.selectAll('text.left_labels')
                .data(data);
            leftLabels.enter().append('text');
            leftLabels.attr({
                    class: 'left_labels slope-label',
                    x: opts.margin.left + opts.labelLength,
                    y: function(d,i) { return opts.margin.top + scale(d[0]); },
                    dy: '.5em',
                    'text-anchor': 'end'})
                .text(function(d,i) { return dataset.label[0][i] });
            leftLabels.exit().remove();

            var rightHeader = slopechartSvg.append('text');
            rightHeader.attr({
                    class: 'slope-label-headers',
                    x: opts.width - opts.margin.right - opts.labelLength,
                    y: function(d,i) { return opts.margin.top - 14; },
                    dy: '.5em'})
                .text("Adjusted math rank");
            var rightLabels = slopechartSvg.selectAll('text.right_labels')
                .data(data);
            rightLabels.enter().append('text');
            rightLabels.attr({
                    class: 'right_labels slope-label',
                    x: opts.width - opts.margin.right - opts.labelLength,
                    y: function(d,i) { return opts.margin.top + scale(d[1]); },
                    dy: '.5em'})
                .text(function(d,i) { return dataset.label[0][i] });
            rightLabels.exit().remove();
        });
    }

    exports.opts = opts;
    createAccessors(exports);

    return exports;
}


createAccessors = function(visExport) {
    for (var n in visExport.opts) {
        if (!visExport.opts.hasOwnProperty(n)) continue;

        visExport[n] = (function(n) {
            return function(v) {
                return arguments.length ? (visExport.opts[n] = v, this) : visExport.opts[n];
            }
        })(n);
    }
};


unadjust_mscrore = [];
adjust_mscore = [];
countries_w_escs = [];

math1q = [];
math2q = [];
math3q = [];
math4q = [];
obssc = [];
meansc = [];

var unadjusted_detail = d3.select("#unadjusted_detail").classed("hidden", true);
var adjusted_detail = d3.select("#adjusted_detail").classed("hidden", true);

d3.csv("data/pisa.csv", function(error, pisa)
{
    pisa.forEach(function(d)
    {   

        if (d['country_w_escs'] != 'OECD average') {
            countries_w_escs.push(d['country_w_escs']);
            unadjust_mscrore.push(Number(d['unadjust_mscrore'])-1);
            adjust_mscore.push(Number(d['adjust_mscore'])-1);
            math1q.push(Number(d['math_1q']));
            math2q.push(Number(d['math_2q']));
            math3q.push(Number(d['math_3q']));
            math4q.push(Number(d['math_4q']));
            obssc.push(Number(d['obs_mscore']));    
            meansc.push(Number(d['mean_mscore'])); 
        }

    });

    var data = {
      "data":[unadjust_mscrore, adjust_mscore],
      "label":[countries_w_escs]
    };

    drawLegend ();
    var slopeGraph = d3.custom.slopegraph();
    d3.select('#graph1')
      .datum(data)
      .call(slopeGraph);
 
    var country_labels = d3.selectAll(".slope-label")
                .on("mouseover", mouseover)
                .on("mouseout", mouseout);
    var projection = d3.selectAll(".slope-line")
                .on("mouseover", mouseover)
                .on("mouseout", mouseout);

    function drawLegend () {
        var svg = d3.select("#legend")
                    .append("svg")
                    .attr("width", 600)
                    .attr("height", 100);
        var continentLegend = d3.scale.ordinal()
                      .domain(["America", "Asia", "Europe", "Oceania", "Middle East", "Africa"])
                      .range(colorProfiles_c);
                      
        svg.append("g")
           .attr("class", "legendOrdinal")
           .attr("transform", "translate(" + 270 + "," + 50 + ")");
        

        var legendOrdinal = d3.legend.color()
          .shape("path", d3.svg.symbol().type("circle").size(300)())
          .orient('horizontal')
          .shapePadding(40)
          .scale(continentLegend);
          

        svg.select(".legendOrdinal")
           .call(legendOrdinal);

        svg.selectAll(".cell")
           .on("mouseover", function(d, i) {
                colorProfiles.forEach(function(d)
                {
                    if (d != colorProfiles[i])
                        d3.selectAll("."+d).style("opacity", 0.2);
                })
            })
            .on("mouseout", function(d, i) {
                colorProfiles.forEach(function(d)
                {
                    if (d != colorProfiles[i])
                        d3.selectAll("."+d).style("opacity", 1);
                })
            });

        // legent description
        svg.append("g")
           .append('text')
           .attr("font-family", "sans-serif")
           .attr("font-size", "14px")
           .attr("font-weight", "bold")
           .attr({'text-anchor': 'begin'})
           .attr("transform", "translate(" + (250) + "," + 25 + ")")
           .text('Continent');
    }

    function mouseover(d)
        {
            d3.select('.chart-group').classed("active", true);
            {
                projection.classed("inactive", function(p) { 
                    return p !== d; });
                country_labels.classed("inactive", function(p) { 
                    return p !== d; });
                country_labels.classed("active", function(p) { 
                    return p === d; });
            }

            //Get the mouse x/y, then augment for the both panel
            details = d3.select('.left_labels.active');
            // d3.mouse(container) does not work.
            var unadjusted_detail_x   = Number(details.attr('x')) - 110;
            var unadjusted_detail_y   = Number(details.attr('y')) + 300;
            details = d3.select('.right_labels.active');
            var adjusted_detail_x   = Number(details.attr('x')) + 340;
            var adjusted_detail_y   = Number(details.attr('y')) + 340;
            var idx = d[0];

            // Set boundary to display tool tip
            d3.select("#unadjusted_detail")
                .style("left", unadjusted_detail_x + "px")
                .style("top", unadjusted_detail_y + "px")
                .select("#country")
                .text(countries_w_escs[idx]);
            d3.select("#unadjusted_detail #ms")
                .text("Math Observed mean     : " + obssc[idx]);    
            d3.select("#unadjusted_detail #m1")
                .text("Math Top Quarter       : " + math1q[idx]);
            d3.select("#unadjusted_detail #m2")
                .text("Math 2nd Quarter       : " + math2q[idx]);
            d3.select("#unadjusted_detail #m3")
                .text("Math 3rd Quarter       : " + math3q[idx]);
            d3.select("#unadjusted_detail #m4")
                .text("Math 4th Quarter       : " + math4q[idx]);
            d3.select("#unadjusted_detail").classed("hidden", false);

            d3.select("#adjusted_detail")
                .style("left", adjusted_detail_x  + "px")
                .style("top", adjusted_detail_y + "px")
                .select("#country")
                .text(countries_w_escs[idx]);

            d3.select("#adjusted_detail #msa")
                .text("Adjusted Math score       : " + meansc[idx]);
            d3.select("#adjusted_detail").classed("hidden", false);
        }

        function mouseout(d)
        {
            // hide detail panel when move out
            d3.select("#unadjusted_detail").classed("hidden", true);
            d3.select("#adjusted_detail").classed("hidden", true);
            d3.select('.chart-group').classed("active", false);
            projection.classed("inactive", false);
            country_labels.classed("inactive", false);
            country_labels.classed("active", false);
        }

});
