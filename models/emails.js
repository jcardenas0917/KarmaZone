module.exports = function (sequelize, DataTypes) {
    var Emails = sequelize.define("Emails", {
        emails: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    });
    return Emails;
}