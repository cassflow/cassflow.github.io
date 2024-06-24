Repository for https://cassflow.github.io/.

Build with [Hugo](https://gohugo.io/).  
Deployed with [peaceiris/actions-hugo](https://github.com/peaceiris/actions-hugo).  
Theme by [zerostaticthemes](https://github.com/zerostaticthemes/hugo-winston-theme).  
Data visualisation with [d3](https://github.com/d3/d3).  

## Data 
The Data used in the graphs is located in the [data.csv](https://github.com/cassflow/cassflow.github.io/blob/main/static/data.csv). It is read and visualized client side by using the [d3](https://github.com/d3/d3) java script library. 
The functions building the charts are located in the [static/js directory](https://github.com/cassflow/cassflow.github.io/tree/main/static/js). They are available to all pages with ´layout: data´ and an appropriatly named div within the content element. See [content/pages/data](https://github.com/cassflow/cassflow.github.io/blob/main/content/pages/data.md) for reference.

## Adding Content
Contend can be added to the [content directory](https://github.com/cassflow/cassflow.github.io/tree/main/content). Once merged into main it will automatically be build and deployed.