# filmwebsite

## doc references

### hugo mods

[hugomods docker run](https://docker.hugomods.com/docs/development/docker-run/)

## first setup

This command will create a directory called "filmwebsite"

```
docker run -it --rm -v "${PWD}:/src" hugomods/hugo:node-lts hugo new site filmwebsite
```

Then run mod init with hugo

```
docker run -it --rm -v "${PWD}:/src" hugomods/hugo:exts hugo mod init github.com/aaronaddleman/filmwebsite
```

Then install the mods:

```
docker run -it --rm -v "${PWD}:/src" hugomods/hugo:exts hugo mod tidy
```

## start hugo locally

```
docker run -p 1313:1313 \
  -v ${PWD}:/src \
  -v ${HOME}/hugo_cache:/tmp/hugo_cache \
  hugomods/hugo:exts \
  hugo server --bind 0.0.0.0
```

Then visit at http://localhost:1313