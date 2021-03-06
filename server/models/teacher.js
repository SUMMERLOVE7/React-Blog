module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'teacher', // 테이블의 이름을 지정
      {
        //곧 생성될 teacher 테이블의 'Columns' 역할
       name: {
        type: DataTypes.STRING(50),
        allowNull : true
       },
      },
      {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false,
      }
  )};
