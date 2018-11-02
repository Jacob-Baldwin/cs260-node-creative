docker build -t localhost:5000/cs260_node_creative .
docker push localhost:5000/cs260_node_creative
docker service update --image localhost:5000/cs260_node_creative cs260_node_creative
