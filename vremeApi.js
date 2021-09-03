//vremenska prognoza
window.weatherWidgetConfig = window.weatherWidgetConfig || [];
window.weatherWidgetConfig.push({
    selector: ".weatherWidget",
    apiKey: "XTYZ3ABAS2ZHGQ7X3DFY99Y6F",
    location: "Belgrade, SR",
    unitGroup: "metric",
    forecastDays: 5,
    title: "Belgrade,SR",
    showTitle: true,
    showConditions: true,
});

(function vreme() {
    var d = document,
        s = d.createElement('script');
    s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();