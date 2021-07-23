const psth = require('path');
const model = require('./model');


const salt  = require(path.join(__dirname, 'config', 'db.json'))
 .salt


const hashing = require(path.join(__dirname, 'config', 'hashing.js'))


module.exports = {
    needs: () => upload,

    api: {
        sendPw : (req, res) =>{
            const body = req.body;
            const hash = hashing.enc(body.id, body.password, salt)

            model.api.searchInfo(body, hash, result => {
                console.log(result)
            })
        

            console.log('1. salt 값 : ' , salt)
            console.log('3. hash 결과 : ', hash)
        },
    },
    add : {
        board : (req, res) => {
            const body = req.body;

            model.add.board(body, result => {
                if(result) {
                    res.send(true);
                }
            })



        }
      }
   
}