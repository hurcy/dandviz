# Summary


[Visualization][visualization]

I visualized relationship of socio-economic status and performance of mathematics from Programme for International Student Assessment(PISA) dataset. The explanatory question is: Which countries beat the socio-ecomonic circumstances?

PISA measures performance only among 15-year-olds who are enrolled in education. PISA 2012, which I used as dataset, covers 65 countries and economies,including all 34 OECD countries and 31 partner countries and economies. In addition, PISA measures index of economic, social and cultural status, so called ESCS. It was created on the basis of the following variables: the highest levels of occupational status of the student's parents, the highest level of education of the student's parents, family wealth, etc.

While many socio-economically disadvantaged achieve at high levels on the PISA assessment, socio-economic status is still a strong predictor of performance in many countries. Performance gap due to socio-economic status varies across countries. Socio-economically disadvantaged students and schools tend to get lower score than their disadvantaged peers by larger margins than between any other two groups of students. PISA result report said:
> Still, socio-economic status is not destiny: many countries and economies that have seen improvements in their mean performance on PISA have also managed to weaken the link between socio-economic status and performance.

So, I would like to response the question: **Which countries beat the socio-ecomonic circumstances?**  

To do this, we need to assume that all students had the same OECD-average socio-economic status(ESCS*), and then compare the math scores between countries. Most education systems perform similarly before and after accounting for socio-economic status. However, some ranks are changed considerably. I selected the cases that more than 10 positions changed. 

These are the only three countries that would climb more than 10 positions in their performance rankings if socio-economic status were taken into account.
- Portugal would perform above the OECD average.
- Turkey’s performance would also improve from below average to average.
- Among the partner economies, Vietnam would markedly improve its rankings.

Also, these are the only two countries that would descend more than 10 positions in their performance rankings if socio-economic status were taken into account. 
- Denmark would worsen below the OECD average.
- Iceland's performance would also worsen from above to below to average.


# Design

## Chart types
First of all, I used **choropleth map** to address overall participating countries and economies in the dataset. With popup of each country, I presented total and sample population of PISA. 

Second, I applied **slopegraph**, because it is a good way to visualize ranking changes when socio-economic status were taken into account. You can find the answer in the slopegraph. Ranking of observed math scores is on the left side, and ranking of adjusted math scores is on the right. 

## Visual encodings
I used colors to visualize participaing countires and economies on the map.
In the slopegraph, colors are used to present continents differences, and ranking up/down. 

## Layouts
I used navigation tabs. Because this is martini-glass style of visualization: starting from exploratory visualization, viewers can clearly see that some countires perform better or worse given their ESCS as the navigation tabs progress.

## Legends
I added legend in the map to show categories of participating countires. In the first slopegraph, legend is to emphasis specific continent. You can hover the legend to see it.

# Feedback and Iteration
I revised my visualization for two times. 
Here are details:
- used popup on the choropleth map
- separated slopegraphs into three part: overall, rank up, rank down.
- updated tooltips
- updated description in each graph

## Feedbacks of first sketch
Please check "iter1" folder.

### feedback1
> The biggest question is how do you account for socioeconomic status? Is what ever metric you are using concrete? Does the fact that Iceland lowers mean anything? Or is it just because they have a high socioeconomic status? If I am to believe in the metric am I to believe that Vietnam, Portugal and Turkey have good education systems buy poor access?﻿

### feedback2
> I agree with Doug's input: what does it mean to beat the socioeconomic circumstances? how did you measure performance of an education system? ...
> But here you have some more input about the visualization itself.
> You say there are only three countries that climb more than 3 positions and it is hard to find those on the graph. Instead of coloring the lines according to continents you could color the lines according to increment in positions (example: green if they climb more than 5 positions, orange if between +5 and -5, red if less than -5, etc.).
> Also, is it important to visualize the continent? Is there any message you want to send such as "continent X countries would (on average) improve the most"? If this is not essential you could just drop it. If it is, you could color the words themselves according to continents, you could give the user the possibility to visualize 1 selected continent at a time (filter by continent), etc.
Ok, hope it helps :) Other than this, very cool visualization!﻿

### feedback3
> It would be great if the ESCS could be found in the visualization. And how does the adjustment change the reliability of the results, especially for countries that are far from the average ESCS? As I understand it, ESCS is mainly influenced by parents' education. But it is much harder to improve an already high level of achievement than a low level. Has this been taken into account?
> Additionally, a visualization based on the ranking of the country obfuscates the actual change of the score, which is higher for Vietnam than for Turkey.
> Last, your choice of geographic regions is poor.﻿

### feedback4
> Very good visualization! My only comments would be:
> 1. It seems that the tooltips are positioned absolutely whereas the chart is positioned relatively. So they don't always line up nicely.
> 2. What "rank" is this? If the rank (e.g. 613 for Shanghai) is a PISA score, maybe just make that explicit (and maybe give some information on what this score is for the ignorant, like me ;)﻿

### feedback5
> Very good first glance. Interesting topic. It made me want to ask 1) What's the min-max range? 2) What's the OECD global mean/median? 3) Are the score points just aligned or scaled accordingly? 4) What does "adjusted rank" mean? Does that mean for top socio-economic status group the score is much higher (higher variance - uneven society)? 5) What are the socio-economic status index of each country? 6) How about reading or other subjects?﻿

### feedback6
> Great viz! Clear annotations, good choice of colors, fonts and sizes. Well explained.
> Two things: The annotation bubbles are somewhat misaligned to the diagram. What would you say about presenting the quantiles of the math score in a box plot, instead of just listing them in the left annotation bubble?
> Best regards and keep on with the good job!﻿

## Feedbacks of second sketch
Please check "iter2" folder.

### feedback1
> I like how you've broken out the slope chart into three charts to show the overall, focus on the ones who do better, and focus on the ones who do worse. I was actually just reading about a similar tactic in this blog post: http://stats.blogoverflow.com/2011/12/andyw-says-small-multiples-are-the-most-underused-data-visualization/
> The map is a little confusing. I'm not sure what OECD means, or really what I'm looking at on the map. I can mouse over countries to get the name, but nothing else pops out. I'm not sure what you're trying to accomplish. Perhaps you could pair the map side-by-side with the slope charts so that when you mouse over a country, it highlights that country's line on the chart and shows the data that goes with it?﻿

### feedback2
> Very good visualisation. A bit unclear what the map is for. I am not sure if it is needed there at all.﻿

# Resources 
- [PISA 2012 reports][pisa]
- [More on slopegraphs][slopegraph]
- [The effect of teacher practices and attitudes][vizex1]
- [Basic Reusable Slopegraph][slopegraphex]
- [Datamap][datamap]

[visualization]: https://hurcy.github.io/dandviz/        "Visualization"
[pisa]: https://www.oecd.org/pisa/keyfindings/pisa-2012-results-volume-ii.htm "PISA 2012 reports"
[slopegraph]:  http://www.storytellingwithdata.com/blog/2014/03/more-on-slopegraphs  "More on slopegraphs"
[vizex1]:    https://knopthakorn.github.io/dataviz/    "The effect of teacher practices and attitudes"
[slopegraphex]: http://bl.ocks.org/biovisualize/4348024	"Basic Reusable Slopegraph"
[datamap]:	http://datamaps.github.io/	"Datamap"
