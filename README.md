# Summary
What would be the average performance of education system if all students had the OECD-average socio-economic status(ESCS*)?

You can find ranking of observed math scores on the left side, and ranking of adjusted math scores on the right. Most education systems perform similarly before and after accounting for socio-economic status. However, these are the only three countries that would climb more than 10 positions in their performance rankings if socio-economic status were taken into account. 

Portugal would perform above the OECD average if socio-economic status were taken into account. Turkey’s performance would also improve from below average to average. Among the partner economies, Viet Nam would markedly improve its rankings if socio-economic status were taken into account.

.ESCS refers to the PISA index of economic, social and cultural status. It was created on the basis of the following variables: the International Socio-Economic Index of Occupational Status (ISEI); the highest level of education of the student's parents, converted into years of schooling.

# Design
I would like to visualize ranking changes when socio-economic status were taken into account. Slopegraph is the best type of graph to show comparisons between two rankings.

# Feedback - include all feedback you received from others on your visualization from the first sketch to the final visualization
## First sketch
### feedback1
The biggest question is how do you account for socioeconomic status? Is what ever metric you are using concrete?
Does the fact that Iceland lowers mean anything? Or is it just because they have a high socioeconomic status? 
If I am to believe in the metric am I to believe that Vietnam, Portugal and Turkey have good education systems buy poor access?﻿

### feedback2
I agree with Doug's input: what does it mean to beat the socioeconomic circumstances? how did you measure performance of an education system? ...
But here you have some more input about the visualization itself.
You say there are only three countries that climb more than 3 positions and it is hard to find those on the graph. Instead of coloring the lines according to continents you could color the lines according to increment in positions (example: green if they climb more than 5 positions, orange if between +5 and -5, red if less than -5, etc.).
Also, is it important to visualize the continent? Is there any message you want to send such as "continent X countries would (on average) improve the most"? If this is not essential you could just drop it. If it is, you could color the words themselves according to continents, you could give the user the possibility to visualize 1 selected continent at a time (filter by continent), etc.
Ok, hope it helps :) Other than this, very cool visualization!﻿

### feedback3
It would be great if the ESCS could be found in the visualization. And how does the adjustment change the reliability of the results, especially for countries that are far from the average ESCS? As I understand it, ESCS is mainly influenced by parents' education. But it is much harder to improve an already high level of achievement than a low level. Has this been taken into account?
Additionally, a visualization based on the ranking of the country obfuscates the actual change of the score, which is higher for Vietnam than for Turkey.
Last, your choice of geographic regions is poor.﻿

### feedback4
Very good visualization! My only comments would be:
1. It seems that the tooltips are positioned absolutely whereas the chart is positioned relatively. So they don't always line up nicely.
2. What "rank" is this? If the rank (e.g. 613 for Shanghai) is a PISA score, maybe just make that explicit (and maybe give some information on what this score is for the ignorant, like me ;)﻿

### feedback5
Very good first glance. Interesting topic. It made me want to ask 1) What's the min-max range? 2) What's the OECD global mean/median? 3) Are the score points just aligned or scaled accordingly? 4) What does "adjusted rank" mean? Does that mean for top socio-economic status group the score is much higher (higher variance - uneven society)? 5) What are the socio-economic status index of each country? 6) How about reading or other subjects?﻿

### feedback6
Great viz! Clear annotations, good choice of colors, fonts and sizes. Well explained.
Two things: The annotation bubbles are somewhat misaligned to the diagram. What would you say about presenting the quantiles of the math score in a box plot, instead of just listing them in the left annotation bubble?
Best regards and keep on with the good job!﻿

# Resources 
data:
- https://www.oecd.org/pisa/keyfindings/pisa-2012-results-volume-ii.htm

visualization:
- More on slopegraphs: http://www.storytellingwithdata.com/blog/2014/03/more-on-slopegraphs
- The effect of teacher practices and attitudes: https://knopthakorn.github.io/dataviz/
- Basic Reusable Slopegraph: http://bl.ocks.org/biovisualize/4348024
