# Labs 001

* Proyecto construido sobre: version 16.2.1.

## Development server

Run `ng serve | npm start | yarn start` for a dev server. Navigate to `http://localhost:4200/`. 

## Cear un componente 
* Para crear componentes.
  ```shell
      ng generate component component-name
      ng generate directive|pipe|service|class|guard|interface|enum|module
  ```

## Build
* Generar binarios para produccion
  ```shell 
      ng build
  ``` 
## Further help
To get more help on the Angular CLI use `ng help`




# Funcionalidad de Dragon Ball Z

## Comandos de angular.
* crear un nuevo modulo
`ng g m dbz`
* Crear un componente
`ng g c dbz/components/addCharacter --skip-tests`





# Comandos de git.

* Recupeara codio antes en el ultimo commit.
`git checkout -- .`

* Add tags
`git tag`
`git tag -a v1.0 -m "Lab 001 de bases de angular"`
`git show v1.0`
`git push origin v1.0`
`git push origin --tags`
* Eliminar tag
`git tag -d v1.0`



* …or create a new repository on the command line
```shell
    echo "# labs-angular-001" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/wugalde/labs-angular-001.git
    git push -u origin main
```

* …or push an existing repository from the command line
```shell
    git remote add origin https://github.com/wugalde/labs-angular-001.git
    git branch -M main
    git push -u origin main
```
