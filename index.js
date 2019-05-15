const express = require('express');
const cron = require('node-cron');
const fs = require('fs');

const port = process.env.PORT || 8080;

const app = express();

cron.schedule('* * * * *', () => console.log('Running a task every minute'));

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
