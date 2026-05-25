const express = require('express');
const client = require('prom-client');

const app = express();

const register = new client.Registry();

client.collectDefaultMetrics({
    register
});

const requestCounter = new client.Counter({
    name:'http_requests_total',
    help:'Total Requests'
});
register.registerMetric(requestCounter);

app.use((req,res,next)=>{
    requestCounter.inc();
    next();
});

app.get('/metrics', async(req,res)=>{
    res.set('Content-Type',register.contentType);
    res.end(await register.metrics());
});

app.get('/', (req,res)=>{
    res.send('Backend running');
});

app.listen(5000, ()=>{
    console.log('Server running on 5000');
});