// quick example of request parameters;
const bills = require('../../models/bill')
class NewsController {
    //[get] /news
    index(req, res,next) {
        res.render('news');
       // next();
    }
    // add parameters sau / news

    // [get] /news/:id
    show(req, res,next) {
        bills.find({_id:req.params.id}).lean()
            .then(data=>{
                const result = data[0]
                // console.log(result.detail);
                const size = result.detail.length
                var arr = []
               for(var i =0;i<size;i++)
               {
                   arr[i] = JSON.parse(result.detail[i]);
                // console.log(result.detail[i])
               }
            //    console.log(arr);
                res.render('news', {result,arr});
            })
            .catch(next);
    }
}

module.exports = new NewsController();
