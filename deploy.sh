 #!/bin/bash
echo "Start deployment"
echo "pulling source code..."
git reset --hard origin/master
git clean -f
git pull
echo "pulling finished..."
git checkout master
npm run install
npm run build
rm -rf /opt/apps/zhifucha.cn/iPayQueryPc/dist
cp -r "$WEB_PATH/dist/" /opt/apps/zhifucha.cn/iPayQueryPc/
echo "Finished."
