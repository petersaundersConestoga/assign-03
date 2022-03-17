# This is the ReadMe for Assign-03
Built by Peter Saunders

## Running the Application
This app includes a Dockerfile so kindly use it for consistency. If you have trouble with docker please [review the docker site](https://docs.docker.com/). Beyond that the wiki contains a set of build instructions.

## Application Build Instructions
### To Build Using Docker
1. Make sure you have docker installed
2. Run this in your terminal <code>docker build . -t peter/happysad</code>
3. Then run this to start <code>docker run -p 8080:3000 -d peter/happysad</code>
4. Open your browser at <code>localhost:8080</code>

## License Information
This is being licensed with the unlicense as I feel it best fits my needs and the needs of others. Beyond that none of this project is commercially viable even if it is interesting.

As such all images are released to the public domain and all code artefacts as well.