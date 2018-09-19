#!/usr/bin/env bash

CMD=$1

if [[ -z $CMD ]]; then
 echo "Please provide a command"
 exit
fi

if [[ $CMD = "run" ]]; then
  dev_appserver.py app.yaml
fi
