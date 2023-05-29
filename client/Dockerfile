# https://docs.docker.com/build/building/multi-stage/
#
# multi-step docker image build
# it is aliased as "step1"
FROM node:latest as step1
# the following variables will be discarded in the final step
ARG REACT_APP_IP_ADDRESS
ENV REACT_APP_IP_ADDRESS="${REACT_APP_IP_ADDRESS}"
WORKDIR /app
ADD . /app
RUN npm install
RUN npm run build

# here we are copying only what we want from "step1" into "step2"
# note, we could use a completely different image, like "go" or "rust"
# we are copying "/app/build" from step1 into "/app" on step2
FROM node:latest as step2
WORKDIR /app
COPY --from=step1 /app/build /app
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "-p", "3000"]
