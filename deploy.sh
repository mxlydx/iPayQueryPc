#!/bin/bash
WEB_PATH="/data/ci/iPayQueryPc"
TARGET="/opt/apps/zhifucha.cn/iPayQueryPc/dist"
DIST="/opt/apps/zhifucha.cn/iPayQueryPc/"
echo "Start deployment"
cd ${WEB_PATH}
echo "pulling source code..."
git reset --hard origin/master
git clean -f
git pull
git checkout master
npm run install
npm run build
rm -rf ${TARGET}
cp -r "${WEB_PATH}/dist/" ${DIST}
echo "Finished."
