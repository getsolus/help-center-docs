# Containers

Containers are a popular method to run and configure applications in a confined environment without directly installing the application and all its dependencies. Solus provides the following container technologies:

## Docker

Docker is a container engine developed by Docker Inc. Solus provides the command line utility `docker` to run and manage docker containers.

A wide variety of applications are available through the official container registry [Docker Hub](https://hub.docker.com/search?q=)

- Install the docker engine by running `sudo eopkg it docker` (you may also want to install `docker-compose`)
- Test your installation with `sudo docker run hello-world`
- Optional: For sudo-less docker, run `sudo usermod -aG docker $USER`. You must restart for this change to take effect
- Optional: Allow the docker daemon to start automatically at system startup `sudo systemctl enable docker`
- Refer to the official [Docker Docs](https://docs.docker.com/) for further topics

## Podman

Podman is a container manager by Red Hat. Podman's main advantage is the capability of running containers without root permissions, thus limiting the attack surface of the host system. Assuming an attacker will be able to escape a compromised container, they won't have full control of the machine.

Podman's command line interface is 100% compatible with Docker, to the point it's possible to replace the `docker` command with `podman` without any subsequent errors.

- Install Podman by running `sudo eopkg it podman`
- Optionally, add `alias docker=podman` to your initial shell script, should you want to replace Docker with Podman while retaining your typing habits
- Refer to the official [Podman website](https://podman.io/) for more documentation
