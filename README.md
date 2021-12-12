# CSE-Website
A website for CSE freshers

## For client:

``` cd client/ ```

``` npm i ```

``` npm start``` to start the development server


## For server:

- navigate to the server folder
```cd server```

- for installing virtual env module:
```pip install virtualenv ```

- then run this command:
```python -m venv ./virtual```

- this creates a folder named 'virtual' which stores the necessary scripts, then run this command:
```./virtual/Scripts/activate``` or ```source virtual/Scripts/activate``` (for bash and replace the 'Scripts' with 'bin' for Linux)


### For installing modules:

cd into the server folder and run these commands:<br>
```cd server```

```pip install -r "requirements.txt"```

### For starting the server:

**Short-method (from the root folder)**
```bash
    #for bash
    source bash_run.sh

    #for linux
    source linux_run.sh

    #for pwsh
    ./server_run.bat

    #for cmd
    server_run.bat
```

**Long Method**

- go into the server directory
```cd server```

- activate the virtual env:
```./server/virtual/Scripts/activate```

- then start app.py using nodemon:
```nodemon --exec python app.py```
