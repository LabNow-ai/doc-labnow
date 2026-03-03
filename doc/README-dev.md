```bash
docker run -it \
	--name='dev-node-pages' \
	--hostname='LabNow-node' \
	-p 3000:3000 \
	-v $(pwd):/root/project-docs \
	-w /root/project-docs \
	quay.io/labnow/node

docker exec -it dev-node-pages bash

cd src

npx pnpm i

npm run start
```
