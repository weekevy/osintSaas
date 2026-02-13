# Professional OSINT Investigation Framework v1 
## Take a look
__by this lines I'm totally explain where the notes can be taken__
__we can't explain something or discuss new idea in other files__
- [notes](https://github.com/weekevy/osintSaas/blob/main/notes): This file is for discussing what we are going to do in this project.
- [structure](https://github.com/weekevy/osintSaas/blob/main/structure): This file contains the structure of the entire project.
- [todo](https://github.com/weekevy/osintSaas/blob/main/todo): This file contains the to-do list (tasks).
## Run the web app locally
- by following those command you can make a fork to commit in same repo
```bash
  git clone git@github.com:weekevy/osintSaas.git && cd osintSaas
  # this is the install Dependencies (root, client, server)
  npm run install-all
  # Start the databse (Docker required) 
  docker-compose up -d 
  # Launch the full application

```
## docker
### Database
- MariaDB	    Main database	          3306	
- phpMyAdmin	Visual database manager	  8080	
```bash
  docker ps             # check what container running 
  docker-compose down   # Stop database
  docker-compose up -d  # start database
  docker logs           # view databse logs
```
## Authentication System
* '/api/register'       POST   Greate new account
* '/api/login'          POST   Sign in Existing user
* '/api/check-auth'     GET    Verify current version
* '/api/logout'         POST   Sign out user





