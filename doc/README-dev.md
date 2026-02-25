```bash
docker run -it \
	--name='dev-node-pages' \
	--hostname='LabNow-node' \
	-p 3000:3000 \
	-v $(pwd):/root/project-docs \
	-w /root/project-docs \
	labnow/node

docker exec -it dev-node-pages bash

cd src

pnpm run install

pmpm run start
```
