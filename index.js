const Express = require("express");
const Mongoose = require("mongoose");
const router = require('./router')


const app = Express();

const PORT = 8000;
const URL = `mongodb+srv://admin:admin@cluster0.tc0de.mongodb.net/AVTO?retryWrites=true&w=majority`;

app.use(Express.json());
app.use('/api', router)



startApp = async () => {
    try {
        await Mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT,() => console.log('Server started on PORT ' + PORT));
    } catch (e) {
        console.log(e);
    }
}

startApp();