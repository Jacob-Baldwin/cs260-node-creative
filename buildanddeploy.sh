docker build -t localhost:5000/cs260_lab4 .
docker push localhost:5000/cs260_lab4
docker service update --image localhost:5000/cs260_lab4 cs260_lab4
