 ps -W | awk '/python/,NF=1' | xargs kill -f && rm -rf deploy/ && hyde -v gen && hyde -v serve
