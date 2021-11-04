const express = require('express');
const path = require('path');
var exphbs = require('express-handlebars'); // it is like render_template from python
var morgan = require('morgan');
const route = require('./routes');
const app = express();
const methodOverride = require('method-override');
app.use(express.json()) // for parsing application/json
app.use(express.static(path.join(__dirname, 'public'))); //allow to use public folder to access css and images
app.use(express.urlencoded({ extended: true }))
app.use(morgan('combined')); // http logger use f12
app.use(methodOverride('_method'));
var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        calculate: function (json_list) { 
            var sum = 0
            for(var i =0;i<json_list.length;i++){
                sum += json_list[i].price * json_list[i].quantity;
            }
            return sum;
        },
        jsonify:function(object){
            return JSON.stringify(object);

        },
        bill:function(json_list){
            var sum = 0
            for(var i =0;i<json_list.length;i++){
                sum += json_list[i].price
            }
            return sum;
        },
        sum:function(json){
            return json.price * json.quantity;
        }
    }
});
app.engine('handlebars', hbs.engine); // use engine handle bar template
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource/views'));
const db = require('./config/db/database'); // use data base
db.conn;



route(app); // route init

const port = process.env.PORT || 3000;
app.listen(process.env.PORT || 3000, () => {
    console.log(`app listening at http://localhost:${port}`);
});
