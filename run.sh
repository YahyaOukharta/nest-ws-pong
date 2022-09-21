if [ -d "node_modules" ]; then
  rm -rf node_modules dist
fi

npm install

if [ "$ENVIRONMENT" == "production" ]; then
  echo 'Run Production';
  npm run build
  npm run start:prod
else
  echo 'Run Development';
  npm run start:dev
fi
