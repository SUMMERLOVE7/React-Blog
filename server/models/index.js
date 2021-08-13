'use strict';

const Sequelize = require('sequelize');
const Member = require('./members');
const Board = require('./boards');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db= {};

// MySQL 연결 객체 생성
const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

// memeber 모델 연결, db에 require해서 member 접근
db.Member = Member;
db.Board = Board;

// static.init 메서드 호출
Member.init(sequelize);
Board.init(sequelize);

Member.associate(db);
Board.associate(db);

module.exports = db;
/*
const path = require('path');
const Sequelize = require('sequelize');
*/
/*
두번째의 '..' 는 경로의 이동값인데, 현 디렉토리의 밖에 있다는 의미로 쓰이며
세번째의 'config' 는 현재 디렉토리 안에 있는 'config'라는 디렉토리로 들어간다는 의미이며
마지막의 'db.json' 는 'config' 디렉토리 안에 있는 'db.json' 파일을 가져오겠다는 의미.
 */
/*
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'db.js'))[
    env
  ];
const db = {};

let sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
    {
      define: {
        charset: 'utf8',
        collate: 'utf8_general_ci'
      }
    }
  );
  
    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.log('Unable to connect to the database: ', err);
    });

    db.Admin = require('./admin')(sequelize, Sequelize);
    db.Board = require('./board')(sequelize, Sequelize);

    db.Board = require('./board')(sequelize, Sequelize);
    db.Category = require('./category')(sequelize, Sequelize);
    db.User = require('./user')(sequelize, Sequelize);
    //db.Like = require('./like')(sequelize, Sequelize);
    //db.Reply = require('./reply')(sequelize, Sequelize);
    

    db.Category.hasMany(db.Board, {
      foreignKey: 'cat_id',
      sourceKey : 'id'
    });

    db.Board.belongsTo(db.Category, {
        foreignKey: 'cat_id',
        targetKey : 'id'
    });
*/
    /*
    Sequelize 연동 성공시, "Connection has been established successfully." 문구가 출력이 되고
    연동이 정상적이지 않으면, 'Unable to connect to the database: ' 문구와 함께 에러
    */
    //db.Teacher = require('./teacher')(sequelize, Sequelize);
    //db.Class = require('./class')(sequelize, Sequelize);

    //db.Teacher.hasOne(db.Class);  //1대 1 (teacher : class)
    /*//1대 M(teacher : class)
    db.Teacher.hasMany(db.Class, {
        foreignKey: 'teacher_id',
        sourceKey : 'id'
    });
    db.Class.belongsTo(db.Teacher, {
        foreignKey: 'teacher_id',
        targetKey : 'id'
    });
    */
   /*//N대 M관계
    db.Teacher.belongsToMany(db.Class, {
        through : 'scedule',
        foreignKey : 'teacher_id'
    });
    db.Class.belongsToMany(db.Teacher, {
        through : 'scedule',
        foreignKey: 'class_id',
    }); 
    */
/*
db.secret = '(9*)5$&!3%^0%^@@2$1!#5@2!4';
module.exports = db;
*/