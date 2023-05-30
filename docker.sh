echo "==================================start migrations======================="
cd /usr/src/app
npx sequelize-cli db:migrate --config .database.config.js