#!/bin/bash

docker build -t csubjiodocs .
docker run --rm -it -p 8000:8000 -v ${PWD}:/docs csubjiodocs
