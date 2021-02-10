## JMeter Keyword Driven Framework 

* Create a .jmx test plan in JMeter GUI
* Save the test plan into a directory, ex: /testplans
* In the demo folder of the terminal, run jmeter command passing the path of the jmx file and path of the desired results jtl file, ex: jmeter -n -t jmeter/testplans/DemoTestPlan.jmx -l results/demoresults.jtl
* Once the results are generated in .jtl format, in the JMeter GUI, add a listener <aggregate> to convert the jtl results to .csv

## Custom Grafana dashboards features - to view and analyse the results
* **view** application/server-side metrics in real time while test is running
* **analyze** errors cause with detailed traces for failed requests
* **compare** different test runs in scripted dashboard